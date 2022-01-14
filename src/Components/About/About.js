import React from 'react';
import'./About.css'
import AboutImage from '../../assets/photo.jpeg'
const About = () => {
    return (
        <div className = 'about'>
            <div className="aboutTop"
                style={{backgroundImage: `url(${AboutImage})`}}>
            </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate sequi modi odit, rem tempora repellat explicabo nemo porro facilis eveniet aliquam similique exercitationem id ut numquam? Sequi nobis optio facilis neque deserunt asperiores, voluptatem, velit, dolorem iste placeat sit atque!</p>
            </div>
        </div>
    );
};

export default About;