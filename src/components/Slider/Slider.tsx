import React, {useEffect, useState, createContext, FC, useMemo} from "react";
// eslint-disable-next-line import/no-cycle
import Arrows from "./Arrows";
// eslint-disable-next-line import/no-cycle
import Dots from "./Dots";
// eslint-disable-next-line import/no-cycle
import SlidesList from "./SlidesList";
import getImages from "./imagesApi";

interface SliderProps {
    autoPlay: boolean,
    autoPlayTime: number,
    width: string,
    height: string
}

export const SliderContext = createContext<{goToSlide?: (number: number) => void,changeSlide?: (direction?: number) => void,slidesCount: number, slideNumber: number, items: {url:string, title: string, id: string}[]}>({
    slidesCount: 0,
    slideNumber: 0,
    items: [{url:'', title: '', id: ''}],
});

const Slider: FC<SliderProps> = ({ width, height, autoPlay, autoPlayTime }) => {
    const [items, setItems] = useState([{url:'', title: '', id: ''}]);
    const [slide, setSlide] = useState(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null)

    useEffect(() => {
        const loadData = async () => {
            const images = await getImages();
            setItems(images);
        };
        loadData();
    }, []);

    const changeSlide = (direction = 1) => {
        let slideNumber = 0;

        if (slide + direction < 0) {
            slideNumber = items.length - 1;
        } else {
            slideNumber = (slide + direction) % items.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number:number) => {
        setSlide(number % items.length);
    };

    const handleTouchStart = (e: any) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e: any) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        // eslint-disable-next-line consistent-return
        return () => {
            clearInterval(interval);
        };
    }, [items.length, slide]);


    const ProviderValue= useMemo(() => ({
        goToSlide,
        changeSlide,
        slidesCount: items.length,
        slideNumber: slide,
        items,
    }), [items, slide, goToSlide, changeSlide ]);

    return (
        <div
            style={{ width, height }}
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <SliderContext.Provider
                value={ProviderValue}
            >
                <Arrows />
                <SlidesList />
                <Dots />
            </SliderContext.Provider>
        </div>
    );
};


export default Slider;