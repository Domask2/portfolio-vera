import React from 'react';
import Button from "../Button/Button";
import PortfolioCard from "./PortfolioCard";
import {arrPortfolio} from "../../data";
import './Portfolio.scss';

const Portfolio = () => (
    <div className='portfolio'>
        <div className="wrapper">
            <div className='portfolio_title'>портфолио</div>
        </div>
        <div className="portfolio_wrapper">
            <div className="content">
                {
                    arrPortfolio?.length > 0 && arrPortfolio.map((item) => (
                        <PortfolioCard key={item.id} item={item}/>
                    ))
                }
            </div>
            <Button>перейти в портфолио</Button>
        </div>
    </div>
)

export default Portfolio;
