import React, { useContext } from "react";
import Slide from "./Slide";
// eslint-disable-next-line import/no-cycle
import { SliderContext } from "./Slider";

import "./Slider.scss";

const SlidesList = () => {
    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className="slide-list"
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map((slide, index) => (
                <Slide key={slide.id} data={slide} />
            ))}
        </div>
    );
}

export default SlidesList;