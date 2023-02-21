import React from 'react';
import FooterCard from "./FooterCard";
import './Footer.scss';

const footerCard = [
    {
        id: 1,
        title: 'Услуги и цены',
        menu: [
            'Дизайн многостраничных сайтов',
            'Дизайн лендингов',
            'Редизайн сайтов',
            'Разработка сайтов',
            'Реставрация фотографий',
            'Обработка и ретушь фото',
            'Сотрудничество с веб-студиями'
        ]
    },
    {
        id: 2,
        title: 'Рубрики блога',
        menu: [
            'Веб-дизайн',
            'Все про создание сайтов',
            'Фриланс и удаленная работа',
            'Фотография',
            'Фотостоки и микростоки',
            'Путешествия',
            'Социальные сети',
            'Саморазвитие'
        ]
    },
    {
        id: 3,
        title: 'Уроки',
        menu: [
            'Уроки Figma',
            'Уроки Photoshop',
            'Уроки фотографии',
        ]
    },
    {
        id: 4,
        title: 'Информация',
        menu: [
            'Часто задаваемые вопросы',
            'Обо мне',
            'Отзывы',
            'Сертификаты',
            'Контакты',
        ]
    },
];

const Footer = () => (
    <footer className='footer'>
        <div className="wrapper">
            <div className="footer_wrapper">
                {
                    footerCard.map((footer) => (
                        <FooterCard key={footer.id} menu={footer.menu} title={footer.title}/>
                    ))
                }
            </div>
        </div>
    </footer>
)

export default Footer;