import React, {ReactNode} from "react";
import {useSwiper} from "swiper/react";

export const SwiperButtonNext = ({children, classname }: {children: ReactNode, classname?:string}) => {
    const swiper = useSwiper();
    return <button className={classname} type='button' onClick={() => swiper.slideNext()}>{children}</button>;
};

export const SwiperButtonPrev = ({children, classname}: {children: ReactNode, classname?:string}) => {
    const swiper = useSwiper();
    return <button className={classname} type='button' onClick={() => swiper.slidePrev()}>{children}</button>;
};