import React from 'react';
import {Fade} from "react-awesome-reveal";
import './Work.scss';

const Work = () => (
    <div className="work">
        <div className="wrapper">
            <div className="work_wrapper">
                <div className="drawing">
                    <div className="banner">
                        <video autoPlay muted loop>
                            <source src="video.mp4" type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <div className="text">
                    <Fade fraction={0} triggerOnce direction="up">
                        <div className="title">
                            Работаю удаленно по всему миру
                        </div>
                        <div className="desc">
                            Создавала дизайн для заказчиков из США, Великобритании, Франции, Нидерландов, Чехии и др.
                        </div>
                        <div className="desc2">
                            Сайты-визитки, корпоративные сайты, сервисы, интернет магазины, лендинги, промо сайты,
                            графический
                            дизайн и ретушь.
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
)

export default Work;

