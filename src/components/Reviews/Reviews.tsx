import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import './Reviews.scss';
import 'swiper/css';
import 'swiper/scss/navigation';
import 'swiper/css/pagination';
import {Pagination} from "swiper";
import Button from "../Button/Button";

const SwiperButtonNext = ({children}: any) => {
    const swiper = useSwiper();
    return <button type='button' onClick={() => swiper.slideNext()}>{children}</button>;
};

const SwiperButtonPrev = ({children}: any) => {
    const swiper = useSwiper();
    return <button type='button' onClick={() => swiper.slidePrev()}>{children}</button>;
};

const Reviews = () => {
    const swiper = useSwiper();

    return (
        <div className='reviews'>
            <div className="wrapper">
                <h3 className='reviews_title'>Отзывы</h3>

                {/*<div className="reviews_wrapper_back">*/}
                {/*    <div className="line_block lb1"/>*/}
                {/*    <div className="line_block lb2"/>*/}
                {/*    <div className="line_block lb3"/>*/}
                {/*</div>*/}

                <div className="reviews_wrapper">
                    {/* <Slider */}
                    {/*    autoPlay={false} */}
                    {/*    autoPlayTime={5000} */}
                    {/*    width="50%" */}
                    {/*    height="50%" */}
                    {/* /> */}

                    {/*<Carousel>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-1" >Item 1</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-2">Item 2</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*    <Carousel.Page>*/}
                    {/*        <div className="item item-3">Item 3</div>*/}
                    {/*    </Carousel.Page>*/}
                    {/*</Carousel>*/}

                    <Swiper
                        loop
                        speed={500}
                        spaceBetween={100}
                        slidesPerView={1}
                        modules={[Pagination]}
                        pagination={{
                            type: "fraction",
                        }}
                    >
                        <SwiperSlide>
                            <div className="item item-1">
                                <p>
                                    Наша Фирма занимается ремонтом и отделкой жилых и коммерческих помещений. К Яне мы
                                    обратились по совету знакомых коллег. И не пожалели! Лендинг выполнен качественно,
                                    дизайн
                                    стильный и современный. Но самое главное, после настройки Яндекс Директ, количество
                                    заказов на
                                    услуги увеличилось в 2, 5 раза!
                                </p>

                                <p>
                                    Мы очень довольны и будем продолжать с тобой работать! Спасибо!
                                </p>

                                <p className='author'>Алексей</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item item-2">
                                <p>
                                    Когда понадобился продающий сайт, то долго не думал к кому обратиться. С одним
                                    удаленным сотрудником работать проще, чем с крупной компанией.
                                </p>
                                <p>
                                    Основные материалы я предоставил, а вот идей по дизайну у меня не было никаких,
                                    поэтому я отдал все на усмотрение мастера. Работа превзошла все мои ожидания! Яна,
                                    спасибо!
                                </p>

                                <p className="author">
                                    Максим
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="item item-3">
                                <p>
                                    Яна, я благодарна тебе за неоценимый вклад в исполнение моей многолетней мечты —
                                    собственного блога: стильного, индивидуального, отвечающего всем поставленным
                                    задачам и капризам.
                                </p>

                                <p>
                                    Мы знакомы много лет и общаться с таким глубоким профессионалом, честным, искренним,
                                    ответственным и, в добавок, попутно дисциплинирующим меня, специалистом одно
                                    удовольствие! При любой идее, связанной с интеренет-пространством, я никому другому
                                    больше ничего и никогда не доверю! Благодарю тебя от всей души!!!
                                </p>

                                <p className="author">Марина</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="item item-3">
                                <p>
                                    Когда понадобился продающий сайт, то долго не думал к кому обратиться. С одним
                                    удаленным сотрудником работать проще, чем с крупной компанией.
                                </p>

                                <p>
                                    Основные материалы я предоставил, а вот идей по дизайну у меня не было никаких,
                                    поэтому я отдал все на усмотрение мастера. Работа превзошла все мои ожидания! Яна,
                                    спасибо!
                                </p>

                                <p className="author">Женя</p>
                            </div>
                        </SwiperSlide>



                        <div className="arrows">
                            <SwiperButtonPrev>
                                <button type='button' className="arrow next" onClick={() => swiper.slideNext()}>
                                    <svg width="61" height="8" viewBox="0 0 61 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M60.3535 4.35355C60.5488 4.15829 60.5488 3.8417 60.3535 3.64644L57.1716 0.464461C56.9763 0.269199 56.6597 0.269199 56.4645 0.464461C56.2692 0.659723 56.2692 0.976306 56.4645 1.17157L59.2929 3.99999L56.4645 6.82842C56.2692 7.02368 56.2692 7.34027 56.4645 7.53553C56.6597 7.73079 56.9763 7.73079 57.1716 7.53553L60.3535 4.35355ZM4.37114e-08 4.5L60 4.49999L60 3.49999L-4.37114e-08 3.5L4.37114e-08 4.5Z"
                                            fill="#222222"/>
                                    </svg>
                                </button>
                            </SwiperButtonPrev>
                                <div className="swiper-pagination-current" />
                            <SwiperButtonNext>
                                <button type='button' className="arrow prev" onClick={() => swiper.slidePrev()}>
                                    <svg width="61" height="8" viewBox="0 0 61 8" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.64645 3.64645C0.451187 3.84171 0.451187 4.15829 0.64645 4.35355L3.82843 7.53553C4.02369 7.7308 4.34027 7.7308 4.53554 7.53553C4.7308 7.34027 4.7308 7.02369 4.53554 6.82843L1.70711 4L4.53554 1.17157C4.7308 0.976311 4.7308 0.659728 4.53554 0.464466C4.34027 0.269204 4.02369 0.269204 3.82843 0.464466L0.64645 3.64645ZM61 3.5L1 3.5V4.5L61 4.5V3.5Z"
                                            fill="#222222"/>
                                    </svg>
                                </button>
                            </SwiperButtonNext>
                        </div>
                    </Swiper>

                    <div className="arrow-back"/>


                </div>

                <div className="button">
                    <Button styleText={{color: 'black'}}>Читать все отзывы</Button>
                </div>

                <div className="img">
                    <img src="https://yanakhodkina.com/wp-content/themes/yanakhodkina_2/images/iMacMockup.png"
                         alt="img"/>
                </div>
            </div>
        </div>
    )
}


export default Reviews;
