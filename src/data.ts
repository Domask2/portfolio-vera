import {MenuItemType} from "./components/Navigation/type";

const menu: MenuItemType[] = [
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
const employments = [
    {
        id: 1,
        number: '01',
        title: 'Дизайн сайтов',
        txt: 'Индивидуальное решение под ваши бизнес задачи. Дизайн на основе готового прототипа или вашего тех. задания. Адаптивный дизайн сайтов для мобильных устройств.',
        link: '#/'
    },
    {
        id: 2,
        number: "02",
        title: "РЕДИЗАЙН САЙТОВ",
        txt: "Разработка нового дизайна для морально устаревших сайтов. Для сайтов, требующих расширения функционала. Для сайтов, изначально спроектированых неверно.",
        link: "#/"
    },
    {
        id: 3,
        number: "03",
        title: "РАЗРАБОТКА САЙТОВ",
        txt: "Со мной в команде работает верстальщик, поэтому принимаю заказы на разработку корпоративных сайтов и лендингов. В этом случае, я веду проект полностью, от дизайна до публикации.",
        link: "#/",
    }
];
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

];
const arrSpecialty = [
    {
        id: 0,
        title: 'Постраничное согласование',
        txt: 'Разработка шаг за шагом. Вы всегда знаете, на каком этапе работы мы сейчас находимся.'
    },
    {
        id: 1,
        title: 'Контроль верстки',
        txt: 'После создания дизайна, не пропадаю и готова поддерживать контакт с вашим разработчиком до завершения верстки проекта.'
    },

    {
        id: 2,
        title: 'Не веду больше 2-х проектов одновременно',
        txt: 'Это позволяет мне избегать дедлайнов и дает возможность уделять больше времени для изучения вашего бизнеса.'
    },

    {
        id: 3,
        title: 'Бесплатные консультации',
        txt: 'Во время работы над вашим проектом, делюсь ценными рекомендациями касательно SEO и юзабилити.'
    },

    {
        id: 4,
        title: 'Никогда не пропадаю',
        txt: 'Если я взяла ваш проект, то значит я буду доступна для вас почти 24/7'
    },

    {
        id: 5,
        title: 'Всегда соблюдаю сроки',
        txt: 'Если я называю сроки, то будьте уверены, что мы в них уложимся.И часто даже закончим раньше, если конечно сроки не будете затягивать вы ;)'
    },
];
const programs = [
    {
        id: 0,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/Ps.svg',
        title: 'Photoshop'
    },
    {
        id: 1,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/figma.svg',
        title: 'Figma'
    },
    {
        id: 2,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/Ai.svg',
        title: 'Illustrator'
    },
    {
        id: 3,
        src: 'https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/infinity.svg',
        title: 'Другие'
    },
];
const skills = [
    {
        id: 0,
        title: 'UI/UX',
        percent: '50%',
    },
    {
        id: 1,
        title: 'Юзабилити',
        percent: '90%',
    },
    {
        id: 3,
        title: 'SEO',
        percent: '70%',
    },
    {
        id: 4,
        title: 'HTML/CSS',
        percent: '30%',
    },
    {
        id: 5,
        title: 'Интернет маркетинг',
        percent: '78%',
    },
];
const articles = [
    {
        id: 1,
        img: "https://yanakhodkina.com/wp-content/uploads/uprock_school_3.jpg",
        url: "https://yanakhodkina.com/dnevnik-obucheniya-v-uprock-3/",
        title: "Дневник обучения в школе UPROCK (часть 3)",
        category: 'Саморазвитие',
        categoryUrl: 'https://yanakhodkina.com/samorazvitie/',
    },
    {
        id: 2,
        img: "https://yanakhodkina.com/wp-content/uploads/uprock_school_3.jpg",
        url: "https://yanakhodkina.com/dnevnik-obucheniya-v-uprock-2/",
        title: "Дневник обучения в школе UPROCK (часть 2)",
        category: 'Саморазвитие',
        categoryUrl: 'https://yanakhodkina.com/samorazvitie/',
    },
    {
        id: 3,
        img: "https://yanakhodkina.com/wp-content/uploads/seo-dizajn-sajta-1.jpg",
        url: "https://yanakhodkina.com/seo-dizajn-sajta/",
        title: "Дневник обучения в школе UPROCK (часть 3)",
        category: 'Веб-дизайн',
        categoryUrl: 'https://yanakhodkina.com/dizajn/',
    }
];
const footerCard = [
    {
        id: 1,
        title: 'Услуги и цены',
        menu: [
            { title: 'Дизайн многостраничных сайтов', url: '#/'},
            { title: 'Дизайн лендингов', url: '#/'},
            { title: 'Редизайн сайтов', url: '#/'},
            { title: 'Разработка сайтов', url: '#/'},
            { title: 'Реставрация фотографий', url: '#/'},
            { title: 'Обработка и ретушь фото', url: '#/'},
            { title: 'Сотрудничество с веб-студиями', url: '#/'},
        ]
    },
    {
        id: 2,
        title: 'Рубрики блога',
        menu: [
            { title: 'Веб-дизайн', url: '#/'},
            { title: 'Все про создание сайтов', url: '#/'},
            { title: 'Фриланс и удаленная работа', url: '#/'},
            { title: 'Фотография', url: '#/'},
            { title: 'Фотостоки и микростоки', url: '#/'},
            { title: 'Социальные сети', url: '#/'},
            { title: 'Саморазвитие', url: '#/'},
        ]
    },
    {
        id: 3,
        title: 'Уроки',
        menu: [
            { title: 'Уроки Figma', url: '#/'},
            { title: 'Уроки Photoshop', url: '#/'},
            { title: 'Уроки фотографии', url: '#/'},
        ]
    },
    {
        id: 4,
        title: 'Информация',
        menu: [
            { title: 'Часто задаваемые вопросы', url: '#/'},
            { title: 'Обо мне', url: '#/'},
            { title: 'Отзывы', url: '#/'},
            { title: 'Сертификаты', url: '#/'},
            { title: 'Контакты', url: '#/'},
        ]
    },
];
const footerMenu = [
    { id:1, title: 'Главная', url: '#/'},
    { id:2, title: 'Содержание', url: '#/'},
    { id:3, title: 'Портфолио', url: '#/'},
    { id:4, title: 'Блог', url: '#/'},
    { id:5, title: 'Лента', url: '#/'},
    { id:6, title: 'Сотрудничество', url: '#/'},
    { id:7, title: 'Контакты', url: '#/'},
];

export {menu, employments, arrPortfolio, arrSpecialty, programs, skills, articles, footerCard, footerMenu};