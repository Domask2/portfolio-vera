import React from 'react';
import {Fade} from "react-awesome-reveal";
import './PortfolioCard.scss';

const PortfolioCard = ({item}: { item: { id: number, src: string, colorTitle: string, colorTxt: string, title: string, txt: string, colorLine: string } }) => (
    <Fade className="card_portfolio" fraction={0} triggerOnce direction="up" cascade>
        <div>
            <img
                src={item.src}
                alt="img"/>
            <div className='card_portfolio_txt'>
                <div className="desc">
                    <div style={{color: `${item.colorTitle}`}} className="title">{item.title}</div>
                    <div style={{color: `${item.colorTxt}`}} className="txt">{item.txt}</div>
                </div>

                <div className="line">
                    <svg width="51" height="8" viewBox="0 0 51 8" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.8417 50.3536 3.64644L47.1716 0.464462C46.9763 0.2692 46.6597 0.2692 46.4645 0.464462C46.2692 0.659724 46.2692 0.976307 46.4645 1.17157L49.2929 4L46.4645 6.82842C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.73079 46.9763 7.73079 47.1716 7.53553L50.3536 4.35355ZM4.37114e-08 4.5L50 4.5L50 3.5L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                            fill={item.colorLine}/>
                    </svg>
                </div>
            </div>
        </div>
    </Fade>
)

export default PortfolioCard;
