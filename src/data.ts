import {MenuItemType} from "./components/Navigation/type";

export const menu: MenuItemType[] = [
    {
        id: 1,
        title: 'Портфолио',
        link: ''
    },
    {
        id: 2,
        title: 'Услуги и цены',
        link: '',
        children: [
            {
                id: 21,
                title: 'Дизайн многостраничных сайтов',
                link: ''

            },
            {
                id: 22,
                title: 'Дизайн лендингов',
                link: ''

            },
            {
                id: 23,
                title: 'Разработка сайтов',
                link: ''

            },
            {
                id: 24,
                title: 'Обработка и ретушь фото',
                link: ''

            },
        ]
    },
    {
        id: 3,
        title: 'Информация',
        link: '',
        children: [
            {
                id: 31,
                title: 'Часто задаваемые вопросы',
                link: '',
            },
            {
                id: 32,
                title: 'Обо мне',
                link: ''

            },
            {
                id: 33,
                title: 'Отзывы',
                link: ''
            }
        ]
    },
    {
        id: 4,
        title: 'Блог',
        link: ''

    },
    {
        id: 5,
        title: 'Лента',
        link: '',
    },
    {
        id: 6,
        title: 'Магазин',
        link: '',

    }
];
export const m = 1;