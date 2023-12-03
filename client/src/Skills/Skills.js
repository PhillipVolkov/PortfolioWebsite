import React from 'react'

import './Skills.css';

import java from './java.png';
import python from './python.png';
import html from './html.png';
import react from './react.png';
import node from './node.png';
import sql from './sql.png';
import yolo from './yolo.png';
import ml from './ml.png';

function Skills() {
    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Skills</h1>

            <div className='skill-grid'>
                <div className='card skill'>
                    <img src={java}></img>
                </div>
                <div>
                    <h3>Java / OOP</h3>
                    <p><b>5 years</b> of experience using Java and Object-Oriented Programming to create applications and frameworks, such as in <a href="#projects">Wiki Links, Arduio Emulator, Budget Application, Private Chat App, </a> 
                    and during development of the <a href='#organizations'>1294 systems</a></p>
                </div>

                <div className='card skill'>
                    <img src={python}></img>
                </div>
                <div>
                    <h3>Python</h3>
                    <p><b>4 years</b> of using Python to create scripts, games, databases, and utilizing it for machine learning applications. Used most recently in: <a href="#projects">Tennis Ball Trajectory Tracking </a> 
                    and during my time at <a href='#organizations'>UW Formula Motorsports</a></p>
                </div>

                <div className='card skill'>
                    <img src={html}></img>
                </div>
                <div>
                    <h3>HTML / CSS / JavaScript</h3>
                    <p><b>3 years</b> of making webpages and webapps using the HTML / CSS / JS stack, with <a href="#projects">Private Chat App, Budget Application, ArduinoEmulator, and this website </a> being examples!</p>
                </div>

                <div className='card skill'>
                    <img src={react}></img>
                </div>
                <div>
                    <h3>React</h3>
                    <p><b>1 year</b> of learning and implementing React in web-related projects, including <a href="#projects">this website</a>!</p>
                </div>
                
                <div className='card skill'>
                    <img src={node}></img>
                </div>
                <div>
                    <h3>Node.js</h3>
                    <p><b>1 year</b> of using Node.js and typescript as a backend for class projects and web development, such as <a href="#projects">this website</a>!</p>
                </div>
                
                <div className='card skill'>
                    <img src={sql}></img>
                </div>
                <div>
                    <h3>SQL</h3>
                    <p><b>3 years</b> of using mySQL and PostgreSQL in projects requiring relational databases, examples being: <a href="#projects">Private Chat App, Budget Application, and Arduino Emulator</a>.</p>
                </div>

                <div className='card skill'>
                    <img src={yolo}></img>
                </div>
                <div>
                    <h3>Computer Vision</h3>
                    <p><b>2 years</b> of using OpenCV and <b>1 year</b> of YOLOv5/8 for creating and training custom CV solutions, such as for: <a href="#projects">Tennis Ball Trajectory Tracking</a>
                    and during my time at <a href='#organizations'>UW Formula Motorsports</a></p>
                </div>

                <div className='card skill'>
                    <img src={ml}></img>
                </div>
                <div>
                    <h3>Machine Learning</h3>
                    <p><b>2 years</b> of researching and utilizing machine learning techniques such as SVM classifcation, Word2Vec framework, and KNN clusterin, the first two of which were implemented in my 
                    <a href="#projects">Wiki Links</a> project.</p>
                </div>
            </div>
        </div>
        );
}

export default Skills;