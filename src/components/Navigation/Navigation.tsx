import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

const menu = [
    {
        title: 'Портфолио',
        link: ''
    },
    {
        title: 'Услуги и цены',
        link: '',
        children: [
            {
                title: 'Дизайн многостраничных сайтов',
                link: ''

            },
            {
                title: 'Дизайн лендингов',
                link: ''

            },
            {
                title: 'Разработка сайтов',
                link: ''

            },
            {
                title: 'Обработка и ретушь фото',
                link: ''

            },
        ]
    },
    {
        title: 'Информация',
        link: '',
        children: [
            {
                title: 'Часто задаваемые вопросы',
                link: ''

            },
            {
                title: 'Обо мне',
                link: ''

            },
            {
                title: 'Отзывы',
                link: ''

            }
        ]
    },
    {
        title: 'Блог',
        link: ''

    },
    {
        title: 'Лента',
        link: ''

    },
    {
        title: 'Магазин',
        link: ''

    }
];

const Navigation = () => (
    <nav className="nav">
        <ul className="nav_menu">
            {
                menu.map((item) => (
                    <li className='nav_menu_item' key={item.title}>
                        <Link className={item.children ? 'label' : ''} to='#/'>{item.title}</Link>
                        {
                            item.children && (
                                <div className='nav_menu_item_submenu'>
                                    <ul className='submenu_item'>
                                        {
                                            item.children.map((item) => (
                                                <li key={item.title}>
                                                    <Link to='#/'>{item.title}</Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    </li>
                ))
            }
        </ul>
    </nav>
)

export default Navigation;