import React from 'react';
import {SwiperButtonNext, SwiperButtonPrev} from "./SwiperButton";
import {svgNext, svgPrev} from "./data";
import './Arrows.scss';

const Arrows = ({current}: {current?:boolean}) => (
     <div className="arrows">
         <SwiperButtonPrev classname='arrow prev'>{svgPrev}</SwiperButtonPrev>

         {current && <div className="swiper-pagination-current"/>}

         <SwiperButtonNext classname='arrow next'>{svgNext}</SwiperButtonNext>
     </div>
 )

export default Arrows;