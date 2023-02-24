import React, {FC} from 'react';
import {Fade} from "react-awesome-reveal";
import './SpecialtyCard.scss';

type FadeDirection = "bottom-left" | "bottom-right" | "down" | "left" | "right" | "top-left" | "top-right" | "up";

interface SCType {
    item: { id: number, title: string, txt: string }[],
    animationPosition: FadeDirection[]
}

const SpecialtyCard: FC<SCType> = ({item, animationPosition}) => (
    <div className="specialty_card">
        {
            item.length > 0 && item.map((item, index) => {

                    const pos: string = animationPosition[index]
                    return (
                        <Fade key={item.id} fraction={0} triggerOnce direction={pos as FadeDirection} cascade>
                            <div key={item.id} className="specialty_card_txt">
                                <div className="title">{item.title}</div>
                                <div className="txt">{item.txt}</div>
                            </div>
                        </Fade>
                    )
                }
            )
        }
    </div>
)

export default SpecialtyCard;