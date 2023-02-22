import React, {FC} from 'react';
import {Link} from "react-router-dom";
import {MenuItemType, SubMenuProps} from "./type";
import './SubMenu.scss';

const SubMenu: FC<SubMenuProps> = ({item}) => {
    if (!item.children) return null;

    return (
        <div className='nav_menu_item_submenu'>
            <ul className='submenu_items'>
                {
                    item.children.map((item: MenuItemType) => (
                        <li className='submenu_item' key={item.title}>
                            <Link className='submenu_item_link' to='#/'>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SubMenu;