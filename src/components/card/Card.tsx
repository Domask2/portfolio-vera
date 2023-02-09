import React, {FC} from "react";
import "./card.scss";

interface CardProps {
    emoji:string,
    heading:string,
    detail:string,
    color?:string,
}

const Card: FC<CardProps> = ({emoji, heading, detail, color}) => (
        <div className="card" style={{borderColor: color || '' }}>
            <img src={emoji} alt="img" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button type='button' className="c-button">подробнее</button>
        </div>
    );

export default Card;