import React from 'react';
import './FooterMenu.scss';

const footerMenu = [
    'Главная',
    'Содержание',
    'Портфолио',
    'Блог',
    'Лента',
    'Сотрудничество',
    'Контакты',
]

const FooterMenu = () => (
  <div className='footer-menu'>
      <div className="wrapper">
          <div className="footer-menu_wrapper">
              <ul className="menu">
                  {
                      footerMenu.map((menu) => <li key={menu} className='menu_item'>{menu}</li>)
                  }
              </ul>
          </div>
      </div>
  </div>
 )

export default FooterMenu;
