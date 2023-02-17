import React from "react";

import "./Slider.scss";

const SlideImage = ({ src, alt }: {src:string, alt:string}) => <img src={src} alt={alt} className="slide-image" />

export default SlideImage;