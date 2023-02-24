import React from 'react';
import {Fade} from "react-awesome-reveal";
import './About.scss';

const About = () => (
    <div className="about">
        <div className="wrapper">
            <div className="about_wrapper">
                <div className="about_wrapper_card">
                    <Fade fraction={0} triggerOnce direction="up">
                        <div className="woman">
                            <div className="img"/>
                        </div>
                    </Fade>

                    <div className='info'>
                        <Fade fraction={0} triggerOnce direction="up" cascade>
                            <div className="title">ДАВАЙТЕ ЗНАКОМИТЬСЯ</div>
                            <div className="subtitle">Меня зовут Вера Михайлова</div>
                            <div className="txt">
                                Я UI/UX веб-дизайнер с опытом более 8 лет. Разрабатываю дизайн сайтов для малого,
                                среднего и
                                крупного
                                бизнеса.
                                Работала в Яндекс.Практикум на факультете «Дизайнер интерфейсов». Веду блог, пишу статьи
                                о
                                дизайне,
                                интернет маркетинге, SEO и юзабилити.
                                Считаю, что сайт должен выполнять поставленные задачи, быть удобен и эстетичен. Поэтому
                                при
                                проектировании дизайна, особое внимание уделяю структуре и логике взаимодействия. Люблю
                                понятные
                                интерфейсы, предпочитаю минимализм.
                            </div>
                        </Fade>

                        <div className='more'>
                            <button type='button'>подробнее обо мне</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;

