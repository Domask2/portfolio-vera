import React from 'react';
import Button from "../Button/Button";
import {MainElementSvg, SquareOneSvg, SquareTwoSvg} from "../../svg/IntroSvg";
import './Intro.scss';

const Intro = () => (
    <div className="intro">
        <div className="wrapper">
            <div className="intro_wrapper">
                <div className="intro_description">
                    <p className='intro_description__title'>Современный дизайн</p>
                    <p className='intro_description__text'>Веб-дизайн Графика Логотипы</p>
                    <h1 className='intro_description__great'>
                        Разработка дизайна как результат художественно-технического
                        проектирования
                    </h1>
                    <Button styleText={{color: 'black'}}>Связаться со мной</Button>
                </div>
                <div className="intro_banner">
                    <MainElementSvg className='svg_big'/>
                    <SquareOneSvg className='svg svg1'/>
                    <SquareTwoSvg className='svg svg2'/>
                </div>
            </div>
        </div>
    </div>
)

export default Intro;

