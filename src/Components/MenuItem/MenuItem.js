import React from 'react';

const MenuItem = ({image,name,price}) => {
    
    return (
        <div className = 'menuItem'>
            <div style={{backgroundImage:`url(${image})`}}></div>
                <h1>Name:{name}</h1>
                <p>Price:{price}</p>
            
        </div>
    );
};

export default MenuItem;