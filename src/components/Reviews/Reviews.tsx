import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import './Reviews.scss';
import 'swiper/css';
import 'swiper/scss/navigation';

// import Slider from "../Slider/Slider";
// import Carousel from "../Carousel/Carousel";

const SwiperButtonNext = ({children}: any) => {
    const swiper = useSwiper();
    return <button type='button' onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({children}: any) => {
    const swiper = useSwiper();
    return <button type='button' onClick={() => swiper.slidePrev()}>{children}</button>;
};

const Reviews = () => {
    const swiper = useSwiper();

    return (
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

                    {/*<Carousel>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-1" >Item 1</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-2">Item 2</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-3">Item 3</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*</Carousel>*/}

                    <Swiper
                        loop
                        speed={500}
                        spaceBetween={100}
                        slidesPerView={1}
                    >
                        <SwiperSlide>
                            <div className="item item-1">Item 1</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item item-2">Item 2</div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item item-3">Item 3</div>
                        </SwiperSlide>

                        <div className="arrows">
                            <SwiperButtonPrev>
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <div className="arrow left" onClick={() => swiper.slidePrev()} >prev</div>
                            </SwiperButtonPrev>

                            <SwiperButtonNext>
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                                <div className="arrow right" onClick={() => swiper.slideNext()} >next</div>
                            </SwiperButtonNext>
                        </div>
                    </Swiper>


                </div>
            </div>
        </div>
    )
}


export default Reviews;
