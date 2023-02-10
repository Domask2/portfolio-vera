import React from 'react';
import './About.scss';

const About = () => (
    <div className="about">
        <div className="about_wrapper wrapper">
            <div className="about_wrapper_back">
                <div className="line_block lb1"/>
                <div className="line_block lb2"/>
                <div className="line_block lb3"/>
            </div>

            <div className="about_wrapper_card">
                <div className="woman"/>

                <div className='info'>
                    <div className="title">ДАВАЙТЕ ЗНАКОМИТЬСЯ</div>
                    <div className="subtitle">Меня зовут Вера Гордеева</div>
                    <div className="txt">
                        Я UI/UX веб-дизайнер с опытом более 8 лет. Разрабатываю дизайн сайтов для малого, среднего и
                        крупного
                        бизнеса.
                        Работала в Яндекс.Практикум на факультете «Дизайнер интерфейсов». Веду блог, пишу статьи о
                        дизайне,
                        интернет маркетинге, SEO и юзабилити.
                        Считаю, что сайт должен выполнять поставленные задачи, быть удобен и эстетичен. Поэтому при
                        проектировании дизайна, особое внимание уделяю структуре и логике взаимодействия. Люблю понятные
                        интерфейсы, предпочитаю минимализм.
                    </div>

                    <div className='more'>
                        <button type='button'>подробнее обо мне</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default About;

