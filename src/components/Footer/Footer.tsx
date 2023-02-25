import React from 'react';
import FooterCard from "./FooterCard";
import {footerCard} from "../../data";
import './Footer.scss';

const Footer = () => (
    <footer className='footer'>
        <div className="wrapper">
            <div className="footer_wrapper">
                {
                    footerCard.map((footer) => (
                        <FooterCard key={footer.id} footer={footer}/>
                    ))
                }
            </div>
        </div>
    </footer>
)

export default Footer;