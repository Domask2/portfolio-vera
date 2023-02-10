import React from "react";
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import './intro1.scss';
import FloatinDiv from "../floatingDiv/FloatingDiv";

const Intro1 = () => (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Современный дизайн</span>
                    <span/>
                    <p>Раскрутите свой бизнес, создав эффектные видео, анимации, брендинг, мокапы, презентации, графический дизайн и профессиональные сайты...</p>
                </div>

                {/* <button type='button' className="button i-button">Подробнее</button> */}

                <div className="i-icons">
                    <img src={GitHub} alt="GitHub"/>
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <img src={Instagram} alt="Instagram"/>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Vector1"/>
                <img src={Vector2} alt="Vector2"/>
                <img src={boy} alt="boy"/>
                <img src={glassesimoji} alt="glassesimoji"/>
                <div>
                    <FloatinDiv img={crown} text1="" text2="" />
                </div>
                <div>
                    <FloatinDiv img={thumbup} text1="" text2="" />
                </div>

                <div className="blur blur-one" />
                <div className="blur blur-two" />
            </div>
        </div>
    )

export default Intro1;