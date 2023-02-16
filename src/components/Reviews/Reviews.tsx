import React from 'react';
import './Reviews.scss';
import Slider from "../Slider/Slider";


const Reviews = () => (
    <div className='reviews'>
        <div className="wrapper">
            <h3 className='reviews_title'>Отзывы</h3>

            <div className="reviews_wrapper">
                <Slider
                    autoPlay={false}
                    autoPlayTime={5000}
                    width="100%"
                    height="100%"
                />
            </div>
        </div>
    </div>
)

export default Reviews;
