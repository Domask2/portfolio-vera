import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { SliderContext } from "./Slider";

import "./Slider.scss";

const Arrows = () => {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className="arrows">
            {/* eslint-disable-next-line */}
            <div className="arrow left" onClick={() => changeSlide && changeSlide(-1)} >111</div>
            {/* eslint-disable-next-line */}
            <div className="arrow right" onClick={() => changeSlide && changeSlide(1)} >222</div>
        </div>
    );
}

export default Arrows;