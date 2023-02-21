import React from 'react';
import './FooterCard.scss';

const FooterCard = ({title, menu}: { title: string, menu: string[] }) => (
    <div className='footerCard'>
        <div className="widget">
            <div className="widget_title">
                {title}
            </div>
            <div className="widget_container">
                <ul className='widget_container__menu'>
                    {
                        menu.map((men) => <li className='widget_container__menu__item' key={men}>{men}</li>)
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default FooterCard;