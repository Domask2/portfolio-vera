import React from 'react';
import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";

const App = () => (
    <div className='app'>
        <Navbar/>
        <Intro/>
        <Services/>
    </div>
);

export default App;
