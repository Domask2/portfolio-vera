import React, {Children, ReactNode, useEffect, useMemo, useRef, useState} from 'react';
import './Carousel.scss';
import arrow from '../../img/arrow.png';
import Page from "./Page";
import CarouselContext from "./Carousel-Contex";

export const PAGE_WIDTH = 450;

const Carousel = ({children}: { children: ReactNode }) => {
    const [pages, setPages] = useState<ReactNode[]>([]);
    const [offset, setOffset] = useState<number>(0);
    const [mouseDown, setMouseDown] = useState<boolean>(false);
    const [startX, setStartX] = useState<any>();
    const [scrollLeft, setScrollLeft] = useState<any>();

    useEffect(() => {
        // eslint-disable-next-line consistent-return
        const arr = Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child)
            }
        })

        if (arr?.length) {
            setPages(arr)
        }
    }, []);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => Math.min(currentOffset + PAGE_WIDTH, 0));
    }


    const handleRightArrowClick = () => {
        const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

        setOffset((currentOffset) => Math.max(currentOffset - PAGE_WIDTH, maxOffset));
    }

    const car = useRef<any>();


    const valueContext = useMemo(() => ({
        width: PAGE_WIDTH
    }), []);

    return (
        <CarouselContext.Provider value={valueContext}>
            <div className='carousel'>
                <div className="arrow">
                    <button
                        type='button'
                        onClick={handleLeftArrowClick}
                        className='arrow_left'
                    >
                        <img
                            src={arrow}
                            alt="arrow_left"
                        />
                    </button>

                    <button
                        className='arrow_right'
                        type='button'
                        onClick={handleRightArrowClick}
                    >
                        <img
                            src={arrow}
                            alt="arrow_right"
                        />
                    </button>
                </div>
                <div className="carousel_wrapper">
                    {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                    <div
                        ref={car}
                        className="carousel_wrapper_items"
                        style={{transform: `translateX(${offset}px)`}}
                        onMouseDown={(e) => {
                            setMouseDown(true);
                            setStartX(e.pageX - car.current.offsetLeft);
                            setScrollLeft(car.current.scrollLeft)
                        }}
                        onMouseLeave={(e) => {
                            setMouseDown(false);
                        }}
                        onMouseUp={(e) => {
                            setMouseDown(false);
                        }}
                        onMouseMove={(e) => {
                            if (!mouseDown) return
                            e.preventDefault();
                            const x = e.pageX - car.current.offsetLeft;
                            const walk = (x - startX)*3;

                            if (walk < 0) {
                                const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
                                setOffset((currentOffset) => Math.max(currentOffset + walk, maxOffset));
                            } else {
                                setOffset((currentOffset) => Math.min(currentOffset + walk, 0));
                            }
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </CarouselContext.Provider>
    )
}

Carousel.Page = Page;
export default Carousel;