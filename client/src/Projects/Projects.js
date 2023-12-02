import React from 'react'

import './Projects.css';

import portfolio from './portfolio_website.png'
import tennis from './tennis_tracking.png'
import wiki from './wiki_links.png'
import budget from './budget_app.png'
import arduino from './arduino_emulator.png'
import chat from './private_chat.png'

function Projects() {
    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Projects</h1>

            <div className='button-grid'>
                <button className='project'>
                    <img src={portfolio}></img>
                    <div className='centered'>
                        <h5>Portfolio Website</h5>
                    </div>
                </button>

                <button className='project'>
                    <img src={tennis}></img>
                    <div className='centered'>
                        <h5>Tennis Ball Trajectory Tracking</h5>
                    </div>
                </button>

                <button className='project'>
                    <img src={wiki}></img>
                    <div className='centered'>
                        <h5>Wiki Links</h5>
                    </div>
                </button>

                <button className='project'>
                    <img src={arduino}></img>
                    <div className='centered'>
                        <h5>Arduino Emulator</h5>
                    </div>
                </button>

                <button className='project'>
                    <img src={budget}></img>
                    <div className='centered'>
                        <h5>Budget Application</h5>
                    </div>
                </button>

                <button className='project'>
                    <img src={chat}></img>
                    <div className='centered'>
                        <h5>Private Chat App</h5>
                    </div>
                </button>

                <button className='project'>... More?</button>
            </div>
        </div>
        );
}

export default Projects;