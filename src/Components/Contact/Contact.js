import React from 'react';
import'./Contact.css';
import ContactImage from '../../assets/south.jpg'
const Contact = () => {
    return (
        <div className="contact">
            <div className="leftSide"
            style={{backgroundImage: `url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contact-form" method="post">
                    <lable htmlFor='name'>Full Name</lable>
                    <input type="text" name="name" placeholder="Enter Your Name"/>
                    <lable htmlFor='name'>Email</lable>
                    <input type="text" name="name" placeholder="Enter Your Email"/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;