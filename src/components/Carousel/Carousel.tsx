import React, {Children, ReactNode, useEffect, useState} from 'react';
import './Carousel.scss';
import arrow from '../../img/arrow.png';

const PAGE_WIDTH = 450;

const Carousel = ({children}: { children: ReactNode }) => {
    const [pages, setPages] = useState<ReactNode[]>([]);
    const [offset, setOffset] = useState<number>(0);

    useEffect(() => {
        // eslint-disable-next-line consistent-return
        const arr = Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
                const newProps = {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`,
                    }
                }
                return React.cloneElement(child, newProps)
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


    return (
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
                    {pages}
                </div>
            </div>


        </div>
    )
}

export default Carousel;