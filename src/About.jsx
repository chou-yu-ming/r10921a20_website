// About.js
import photograph from './me.jpg'
import './About.css';
import React from 'react';

const About = () => {
    return (
        <div>
            <h1>About Me</h1>
            <img src={photograph} alt="A photo of myself" style={{width: "200px"}} />
            <p>我是周宥名，目前就讀於台大電機所資安組</p>
        </div>
    );
};

export default About;
