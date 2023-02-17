import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "./Slider.scss";

const Slide = ({ data: { url, title, id } }: {data: {url:string, title: string, id:string}}) => (
        <div className="slide">
            <SlideImage src={url} alt={title} />
            <SlideTitle title={title} />
        </div>
    )

export default Slide;