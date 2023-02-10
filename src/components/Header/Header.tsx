import React from 'react';
import Navigation from "../Navigation/Navigation";
import Logo from "./Logo/Logo";
import Branding from "./Branding/Branding";
import Button from "../Button/Button";
import NavMobile from "./Navigation_Mobile/NavMobile";

const Header = () => (
    <header className='header'>
        <div className="header_main">
            <div className="header_wrapper wrapper">
                <Logo/>
                <Branding/>

                <div className="header_menu">
                    <Navigation/>
                    <Button>Контакты</Button>
                    <NavMobile/>
                </div>

            </div>
        </div>
    </header>
)
export default Header;