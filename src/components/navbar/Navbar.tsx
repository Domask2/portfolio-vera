import React from "react";
import './navbar.scss';

const Navbar = () => (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Vera Gordeeva</div>
                <span style={{color: '#fff'}}>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Главная</li>
                        <li>Сервис</li>
                        <li>Портфолио</li>
                        <li>Отзывы</li>
                    </ul>
                </div>
                <button type='button' className="button n-button">
                    Контакты
                </button>
            </div>
        </div>
    )

export default Navbar;