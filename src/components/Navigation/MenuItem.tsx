import React, {FC} from 'react';
import {Link} from "react-router-dom";
import SubMenu from "./SubMenu";
import {NavItemProps} from "./type";
import './MenuItem.scss';

const MenuItem: FC<NavItemProps> = ({item}) => (
    <li className='nav_menu_item' key={item.title}>
        <Link className={item.children ? 'label' : ''} to='#/'>{item.title}</Link>
        {
            item.children && <SubMenu item={item}/>
        }
    </li>
)

export default MenuItem;