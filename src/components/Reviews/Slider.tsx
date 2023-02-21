import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Pagination} from "swiper";
import Arrows from "./Arrows";
import {reviews, ReviewsType} from './data';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import './Slider.scss';

const Slider = () => (
    <div className="reviews_slider">
        <Swiper loop
                speed={500}
                spaceBetween={100}
                slidesPerView={1}
                modules={[Pagination]}
                pagination={{type: "fraction",}}>

            {
                reviews.map((review: ReviewsType) => (
                    <SwiperSlide key={review.id}>
                        <div className="item">
                            <p>{review.text_one}</p>
                            <p>{review.text_two}</p>
                            <p className='author'>{review.author}</p>
                        </div>
                    </SwiperSlide>
                ))
            }

            <Arrows current/>
        </Swiper>
    </div>
)


export default Slider;
