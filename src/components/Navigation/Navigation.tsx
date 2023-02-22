import React from 'react';
import MenuItem from "./MenuItem";
import {menu} from "../../data";
import './Navigation.scss';

const Navigation = () => (
    <nav className="nav">
        <ul className="nav_menu">
            {
                menu.map((item) => (
                    <MenuItem key={item.id} item={item}/>
                ))
            }
        </ul>
    </nav>
)

export default Navigation;