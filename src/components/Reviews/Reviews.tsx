import React from 'react';
import './Reviews.scss';
import Slider from "../Slider/Slider";
import Carousel from "../Carousel/Carousel";

const Reviews = () => (
    <div className='reviews'>
        <div className="wrapper">
            <h3 className='reviews_title'>Отзывы</h3>

            <div className="reviews_wrapper">
                {/* <Slider */}
                {/*    autoPlay={false} */}
                {/*    autoPlayTime={5000} */}
                {/*    width="50%" */}
                {/*    height="50%" */}
                {/* /> */}

                <Carousel>
                    <Carousel.Page>
                        <div className="item item-1" >Item 1</div>
                    </Carousel.Page>
                    <Carousel.Page>
                        <div className="item item-2">Item 2</div>
                    </Carousel.Page>
                    <Carousel.Page>
                        <div className="item item-3">Item 3</div>
                    </Carousel.Page>

                </Carousel>
            </div>
        </div>
    </div>
)

export default Reviews;
