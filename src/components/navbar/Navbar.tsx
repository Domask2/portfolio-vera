import React from "react";
import './navbar.scss';

const Navbar = () => (
        <div className='n-wrapper'>
            <div className="n-left">
                <div className="n-name">Vera</div>
                <span>toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Portfolio</li>
                        <li>Testimonials</li>
                    </ul>
                </div>
                <button type='button' className="button n-button">
                    Contact
                </button>
            </div>
        </div>
    )

export default Navbar;