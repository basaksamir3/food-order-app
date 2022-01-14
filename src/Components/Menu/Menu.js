import React from 'react';
import {Data} from '../Data/Data'
import'./Menu.css'
import MenuItem from '../MenuItem/MenuItem';
const Menu = () => {
    return (
        <div className = 'menu'>
            <h1>Our Menu Item</h1>
            <div className="menuTitle">
                <div className="menuList">
                    {
                        Data.map((menuItem, key) =>{
                            return(<MenuItem 
                                key={key}
                                    name={menuItem.name}
                                    image={menuItem.image}
                                    price={menuItem.price}
                                />
                            );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Menu;