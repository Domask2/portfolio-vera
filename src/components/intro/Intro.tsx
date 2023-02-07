import React from "react";
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import './intro.scss';

const Intro = () => (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>Vera Gordeeva</span>
                    <span>Small Design with great desire, good taste, excellent prospects...</span>
                </div>

                <button type='button' className="button i-button">Hire Me</button>

                <div className="i-icons">
                    <img src={GitHub} alt="GitHub"/>
                    <img src={LinkedIn} alt="LinkedIn"/>
                    <img src={Instagram} alt="Instagram"/>
                </div>
            </div>
            <div className="i-right">
                I am right side
            </div>
        </div>
    )

export default Intro;