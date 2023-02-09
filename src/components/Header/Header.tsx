import React from 'react';

const Header = () => (
        <header className='header'>
            <div className="header_main">
                <div className="header_wrapper">
                    <div className="logo">
                        <img src="https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/logo.svg"
                             alt="Сайт графического-дизайнера Веры Гордеевой"/>
                    </div>
                    <div style={{display: 'none'}} className="branding">1</div>
                    <div className="header_menu">
                        <nav className="main_menu">
                            <ul className="primary_menu">
                                <li>Портфолио</li>
                                <li>Услуги</li>
                                <li>Информация</li>
                                <li>Блог</li>
                                <li>Лента</li>
                                <li>Магазин</li>
                            </ul>

                            <button className='btn' type='button'>
                                Контакты
                            </button>
                        </nav>

                    </div>
                    <div style={{display: 'none'}} className="menu_mobile">---aaa</div>
                </div>
            </div>
        </header>
    )
export default Header;