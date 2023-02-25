import React from 'react';
import {Link} from "react-router-dom";
import './FooterMenu.scss';
import {footerMenu} from "../../data";

const FooterMenu = () => (
    <div className='footer-menu'>
        <div className="wrapper">
            <div className="footer-menu_wrapper">
                <ul className="menu">
                    {
                        footerMenu.length > 0 && footerMenu.map((menu) => (
                            <li key={menu.id} className='menu_item'>
                                <Link className='link' to={menu.url}>{menu.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default FooterMenu;
