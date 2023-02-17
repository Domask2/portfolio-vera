import React, { useContext } from "react";
// eslint-disable-next-line import/no-cycle
import { SliderContext } from "./Slider";
import Dot from "./Dot";

import "./Slider.scss";

const Dots = () => {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = [];
        for (let i = 0; i < slidesCount; i+=1) {
            dots.push(<Dot key={`dot-${i}`} number={i} />);
        }

        return dots;
    };

    return <div className="dots">{renderDots()}</div>;
}

export default Dots;