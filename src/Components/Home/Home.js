import React from 'react';
import'./Home.css'
import banner from '../../assets/banner.jpeg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className = 'home' style={{backgroundImage: `url(${banner})`}}>
            <div className="headerContainer">
                <h1>Food Corner</h1>
                <p>INDIA FOOD AT A CLICK.</p>
                <Link to="/menu"><button>OrderNow</button></Link>    
            </div>
        </div>
    );
};

export default Home;