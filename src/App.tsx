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
    </div>
);

export default App;
