import React from 'react';
import './Intro.scss';
import Button from "../Button/Button";

const Intro = () => (
    <div className="intro">
        <div className="intro_wrapper wrapper">
            <div className="intro_description">
                <p className='intro_description__title'>Современный дизайн</p>
                <p className='intro_description__text'>Веб-дизайн Графика Логотипы</p>
                <h1 className='intro_description__great'>
                    Разработка дизайна как результат художественно-технического
                    проектирования
                </h1>
                <Button styleText={{color: 'black'}}>Консультация</Button>
            </div>
            <div className="intro_banner">
                <svg className='svg_big' width="800" height="800" viewBox="0 0 800 800">
                    <path>
                        <animate attributeName="d" dur="8s" repeatCount="indefinite"
                                 values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;

                  M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;

                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;"/>
                    </path>
                </svg>
                <svg className='svg svg1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 510" version="1.1">
                    <title>Squares</title>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect id="cyan-box" width="150" height="150" fill="#66EEDD"/>
                        <path id="cyan-path" d="M405,300 L405, -100" fill="none"/>

                        <animateMotion
                            xlinkHref="#cyan-box"
                            dur="20s"
                            begin="0s"
                            fill="freeze"
                            repeatCount="1">
                            <mpath xlinkHref="#cyan-path" />
                        </animateMotion>

                        <animateTransform
                            xlinkHref="#cyan-box"
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 30 30"
                            to="360 30 30"
                            dur="15s"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    </g>
                </svg>
                <svg className='svg svg2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 510" version="1.1">
                    <title>Squares</title>
                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <rect id="blue-box" width="120" height="120" fill="#00BDD7"/>
                        <path id="blue-path" d="M185,100 L285, -100" fill="none"/>

                        <animateMotion
                            xlinkHref="#tomato-box"
                            dur="30s"
                            begin="0s"
                            fill="freeze"
                            repeatCount="1">
                            <mpath xlinkHref="#tomato-path" />
                        </animateMotion>

                        <animateTransform
                            xlinkHref="#tomato-box"
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            from="0 17.5 17.5"
                            to="360 17.5 17.5"
                            dur="8s"
                            repeatCount="indefinite"
                            fill="freeze"
                        />
                    </g>
                </svg>
            </div>
        </div>
    </div>
)

export default Intro;

