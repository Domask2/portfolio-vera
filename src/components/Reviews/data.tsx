import React from "react";

export interface ReviewsType {
    id: number,
    text_one: string,
    text_two: string,
    author: string,
}

export const reviews: ReviewsType[] = [
    {
        id: 1,
        text_one: 'Наша Фирма занимается ремонтом и отделкой жилых и коммерческих помещений. К Яне мы обратились по совету знакомых коллег. И не пожалели! Лендинг выполнен качественно, дизайн стильный и современный. Но самое главное, после настройки Яндекс Директ, количество заказов на услуги увеличилось в 2, 5 раза!',
        text_two: 'Мы очень довольны и будем продолжать с тобой работать! Спасибо!',
        author: 'Алексей'
    },
    {
        id: 2,
        text_one: 'Когда понадобился продающий сайт, то долго не думал к кому обратиться. С одним удаленным сотрудником работать проще, чем с крупной компанией.',
        text_two: 'Основные материалы я предоставил, а вот идей по дизайну у меня не было никаких, поэтому я отдал все на усмотрение мастера. Работа превзошла все мои ожидания! Яна, спасибо!',
        author: 'Алексей'
    },
    {
        id: 3,
        text_one: 'Яна, я благодарна тебе за неоценимый вклад в исполнение моей многолетней мечты - собственного блога: стильного, индивидуального, отвечающего всем поставленным задачам и капризам.',
        text_two: 'Мы знакомы много лет и общаться с таким глубоким профессионалом, честным, искренним, ответственным и, в добавок, попутно дисциплинирующим меня, специалистом одно удовольствие! При любой идее, связанной с интеренет-пространством, я никому другому больше ничего и никогда не доверю! Благодарю тебя от всей души!!!',
        author: 'Марина'
    },
    {
        id: 4,
        text_one: 'Когда понадобился продающий сайт, то долго не думал к кому обратиться. С одним удаленным сотрудником работать проще, чем с крупной компанией.',
        text_two: 'Основные материалы я предоставил, а вот идей по дизайну у меня не было никаких, поэтому я отдал все на усмотрение мастера. Работа превзошла все мои ожидания! Яна, спасибо!',
        author: 'Евгений'
    },

];

export const svgPrev = <svg width="61" height="8" viewBox="0 0 61 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
    <path
        d="M0.64645 3.64645C0.451187 3.84171 0.451187 4.15829 0.64645 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53554 7.53553C4.7308 7.34027 4.7308 7.02369 4.53554 6.82843L1.70711 4L4.53554 1.17157C4.7308 0.976311 4.7308 0.659728 4.53554 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.64645 3.64645ZM61 3.5L1 3.5V4.5L61 4.5V3.5Z"
        fill="#222222"/>
</svg>;

export const svgNext = <svg width="61" height="8" viewBox="0 0 61 8" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
    <path
        d="M60.3535 4.35355C60.5488 4.15829 60.5488 3.8417 60.3535 3.64644L57.1716 0.464461C56.9763 0.269199 56.6597 0.269199 56.4645 0.464461C56.2692 0.659723 56.2692 0.976306 56.4645 1.17157L59.2929 3.99999L56.4645 6.82842C56.2692 7.02368 56.2692 7.34027 56.4645 7.53553C56.6597 7.73079 56.9763 7.73079 57.1716 7.53553L60.3535 4.35355ZM4.37114e-08 4.5L60 4.49999L60 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z"
        fill="#222222"/>
</svg>