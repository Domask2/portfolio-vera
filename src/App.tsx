import React from 'react';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Employment from "./components/Employment/Employment";
import Portfolio from "./components/Portfolio/Portfolio";
import Specialty from "./components/Specialty/Specialty";
import Skills from "./components/Skills/Skills";
import Reviews from "./components/Reviews/Reviews";
import Article from "./components/Article/Article";
import Footer from "./components/Footer/Footer";
import FooterMenu from "./components/FooterMenu/FooterMenu";
import FooterContact from "./components/FooterContact/FooterContact";

const App = () => (
    <div className='app'>
        <Header/>
        <Intro/>
        <About/>
        <Work/>
        <Employment/>
        <Portfolio/>
        <Specialty/>
        <Skills/>
        <Reviews/>
        <Article/>
        <Footer/>
        <FooterMenu/>
        <FooterContact/>
    </div>
);

export default App;
