import React from 'react';
import './Work.scss';
import flower_one from '../../img/flower_one.png';

const About = () => (
    <div className="work">
        <div className="work_wrapper wrapper">
            <div className="drawing">

                <svg viewBox="0 0 65 62.2">
                    <path fill="#2CBBDF" d="M32.5,8.5c0-22.6,14.2,6.1,6.8,13.8c7.4-7.7,39.1-3.1,15.3,2.2c23.8-5.3,0.9,17-11.1,10.8c11.9,6.3,17.3,37.9,2.6,15.2
                        c14.7,22.6-13.7,7.7-13.7-7.2c0,14.9-28.4,29.8-13.7,7.2c-14.7,22.6-9.3-9,2.6-15.2C9.5,41.6-13.4,19.2,10.4,24.6
                        c-23.8-5.3,7.9-10,15.3-2.2C18.3,14.6,32.5-14.1,32.5,8.5z">
                        <animate attributeName="d"
                                 begin="mouseover"
                                 end="mouseout"
                                 fill="freeze"
                                 dur="2s"
                                 to="M26.2,25C40.1-8.9,62.6-3.1,48.8,11.7C63.5,0.4,75.6,14,51.2,22.4c21.5-3.7,10.3,11.6-2.8,10.4c14.1,4.6,2.7,10.2-7.8,7.3 c11.8,4,0.6,9.1-10.5,6.6c1,4.8,2.6,18-12.4,4.9C8.3,51.3,4.7,35,9.3,27c-5.4-0.7-12.5-0.6-1.1-3.4c-15.4-4.9-5.9-4.8,2.1-3.2 C13.3,11.9,26.1,11.1,26.2,25z"/>
                        <animate attributeName="fill"
                                 dur="2s"
                                 begin="mouseover"
                                 end="mouseout"
                                 fill="freeze"
                                 values="#2CBBDF;#A573E0"/>
                    </path>
                </svg>
            </div>

            <div className="text">
                <div className="title">
                    Работаю удаленно по всему миру
                </div>
                <div className="desc">
                    Создавала дизайн для заказчиков из США, Великобритании, Франции, Нидерландов, Чехии и др.
                </div>
                <div className="desc2">
                    Сайты-визитки, корпоративные сайты, сервисы, интернет магазины, лендинги, промо сайты, графический
                    дизайн и ретушь.
                </div>
            </div>
        </div>
    </div>
)

export default About;

