import React from 'react';
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";

const App = () => (
    <div className='app'>
        <Header/>
        <Intro/>
        <About/>
    </div>
);

export default App;
