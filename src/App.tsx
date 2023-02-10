import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Header from "./components/Header/Header";
import About from "./components/About/About";

const App = () => (
    <div className='app'>
        <Header/>
        <About/>
        {/* <Navbar/> */}
        {/* <Intro/> */}
        {/* <Services/> */}
    </div>
);

export default App;
