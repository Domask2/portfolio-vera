import React from 'react';
import LogoImg from '../../../img/logo.png';
import  './Logo.scss';

const Logo = () => (
    <div className="logo">
        <img src={LogoImg}
             alt="Сайт графического-дизайнера Веры Михайловой"/>
    </div>
)

export default Logo;