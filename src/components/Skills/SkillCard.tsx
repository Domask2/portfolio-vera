import React from 'react';
import {Fade} from "react-awesome-reveal";
import './SkillsCard.scss';

const SkillCard = ({item}: { item: { id: number, title: string, percent: string } }) => (
    <div className="skill_card">
        <div className="skill_card_title">
            {item.title}
        </div>

        <Fade direction='left' fraction={0} triggerOnce>
            <div className="skill_card_grape">
                <div style={{width: `${item.percent}`}} className="grape_percent"/>
            </div>
        </Fade>
    </div>
)

export default SkillCard;