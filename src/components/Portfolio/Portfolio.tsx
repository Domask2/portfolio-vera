import React from 'react';
import './Portfolio.scss';
import Button from "../Button/Button";

const arrPortfolio = [
    {
        id: 0,
        src: "https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        title: 'Plasma',
        txt: 'Архитектурное бюро',
        colorTitle: '#000',
        colorTxt: '#000',
        colorLine: '#444'
    },

    {
        id: 1,
        src: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        title: 'MakeUp',
        txt: 'Салон красоты',
        colorTitle: '#000',
        colorTxt: '#000',
        colorLine: '#fff'

    },

    {
        id: 2,
        src: "https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        title: 'Art Flowers',
        txt: 'Доставка цветов в СПБ',
        colorTitle: '#fff',
        colorTxt: '#fff',
        colorLine: '#fff'

    },

    {
        id: 3,
        src: "https://images.unsplash.com/photo-1674550119132-94fc97a361e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfE04alZiTGJUUndzfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        title: 'Blockchain',
        txt: 'Блокчейн компания',
        colorTitle: '#000',
        colorTxt: '#000',
        colorLine: '#444'

    },

    {
        id: 4,
        src: "https://images.unsplash.com/photo-1674763766874-a779ba110133?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        title: 'Artusmed',
        txt: 'Ортопедическая клиника в Чехии',
        colorTitle: '#fff',
        colorTxt: '#fff',
        colorLine: '#fff'

    },

    {
        id: 5,
        src: "https://images.unsplash.com/photo-1674904742505-58abb123ad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=60",
        title: 'Bureau V',
        txt: 'Архитектурное бюро',
        colorTitle: '#fff',
        colorTxt: '#fff',
        colorLine: '#fff'

    },

]

const Portfolio = () => (
    <div className='portfolio'>
        <div className="wrapper">
            <div className='portfolio_title'>Проекты</div>
        </div>
        <div className="portfolio_wrapper">
            <div className="content">
                {
                    arrPortfolio.map((item, index) => (
                        <div key={item.id} className="card">
                            <img
                                src={item.src}
                                alt={`img${index + 1}`}/>

                            <div className='card_txt'>
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
                    ))
                }
            </div>

            <Button>перейти в портфолио</Button>
        </div>
    </div>
)

export default Portfolio;
