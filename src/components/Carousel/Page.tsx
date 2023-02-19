import React, {useContext, ReactNode} from 'react';
import CarouselContext from "./Carousel-Contex";
import './Page.scss';

const Page = ({children}: { children: ReactNode }) => {
    const {width} = useContext(CarouselContext);
    return (
        <div className='page__container'
             style={{
                 minWidth: `${width}px`,
                 maxWidth: `${width}px`,
             }}
        >
            {children}
        </div>
    )
}

export default Page;