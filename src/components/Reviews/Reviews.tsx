import React from 'react';
import Button from "../Button/Button";
import Slider from "./Slider";
import './Reviews.scss';

const Reviews = () => (
    <div className='reviews'>
        <div className="wrapper">
            <h3 className='reviews_title'>отзывы</h3>
            <div className="reviews_wrapper">
                <Slider/>

                <div className="reviews_button">
                    <Button styleText={{color: 'black'}}>Читать все отзывы</Button>
                </div>

            </div>
        </div>
    </div>
)


export default Reviews;
