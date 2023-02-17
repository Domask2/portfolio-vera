import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { SliderContext } from "./Slider";

import "./Slider.scss";

const Dot = ({ number }: {number:number}) => {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return (
        // eslint-disable-next-line
        <div
            className={`dot ${slideNumber === number ? "selected" : ""}`}
            onClick={() =>goToSlide && goToSlide(number)}
        />
    );
}

export default Dot;