import React from 'react';
import {Link} from "react-router-dom";
import './FooterCard.scss';

const FooterCard = ({footer}: { footer: { title: string, menu: {title:string, url:string}[] } }) => {
    const {title, menu} = footer;
    return (
        <div className='footerCard'>
            <div className="widget">
                <div className="widget_title">
                    {title}
                </div>
                <div className="widget_container">
                    <ul className='widget_container__menu'>
                        {
                            menu.length > 0 && menu.map((item) => (
                                <li className='widget_container__menu__item' key={item.title}>
                                    <Link className='link' to={item.url}>{item.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterCard;