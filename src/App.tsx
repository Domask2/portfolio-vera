import React from 'react';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Work from "./components/Work/Work";

const App = () => (
    <div className='app'>
        <Header/>
        <Intro/>
        <About/>
        <Work/>
    </div>
);

export default App;
