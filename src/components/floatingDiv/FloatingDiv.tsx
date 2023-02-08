import React, {FC} from "react";
import './floatingDiv.scss';

interface FloatingDivProps {
    img: string,
    text1: string
    text2: string
}

const FloatinDiv: FC<FloatingDivProps> = ({img, text1, text2}) => (
    <div className="floatingDiv">
        <img src={img} alt=""/>
        <span>
        {text1}
            <br/>
            {text2}
      </span>
    </div>
);

export default FloatinDiv;