import React from 'react';
import Navigation from "../Navigation/Navigation";
import Logo from "./Logo/Logo";
import Branding from "./Branding/Branding";
import Button from "../Button/Button";
import NavMobile from "./Navigation_Mobile/NavMobile";
import './Header.scss';

const Header = () => (
    <header className='header'>
            <div className="header_wrapper wrapper">
                <Logo/>
                <Branding/>

                <div className="header_menu">
                    <Navigation/>
                    <Button>Контакты</Button>
                    <NavMobile/>
                </div>
            </div>
    </header>
)
export default Header;