import React, {Children, ReactNode, useEffect, useMemo, useState} from 'react';
import './Carousel.scss';
import arrow from '../../img/arrow.png';
import Page from "./Page";
import CarouselContext from "./Carousel-Contex";

export  const PAGE_WIDTH = 450;

const Carousel = ({children}: { children: ReactNode }) => {
    const [pages, setPages] = useState<ReactNode[]>([]);
    const [offset, setOffset] = useState<number>(0);

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
                    <div
                        className="carousel_wrapper_items"
                        style={{transform: `translateX(${offset}px)`}}
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