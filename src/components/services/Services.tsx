import React from "react";
import "./services.scss";
import Card from "../card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";


const Services = () => {
    const transition = {
        duration: 1,
        type: "spring",
    };

    return (
        <div className="services" id="services">
            <div className="awesome">
                <span>Работаю удаленно по всему миру</span>
                <span/>
                <span>
                    {/* Сайты-визитки, корпоративные сайты, сервисы, интернет магазины, */}
                    {/* лендинги, промо сайты, графический дизайн и ретушь. */}
                </span>
                {/* <button type='button' className="button s-button">Download CV</button> */}
                <div className="s-blur1"/>
            </div>

            <div className="cards">
                <Card
                    emoji={HeartEmoji}
                    heading="Дизайн сайтов"
                    detail="Сайты-визитки, интернет магазины, лендинги"
                />
                <Card
                    emoji={Humble}
                    heading="Графический дизайн"
                    detail="Реклама, упоковка, шрифты, печать"
                    color="rgba(252, 166, 31, 0.45)"
                />

                <Card
                    emoji={Glasses}
                    heading="Логотипы"
                    detail="Знак компании, брендирование"
                    color="rgba(252, 166, 31, 0.45)"
                />
            </div>

            <div className="s-blur2"/>
        </div>
    );
};

export default Services;