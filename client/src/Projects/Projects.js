import React from 'react'

import './Projects.css';

function Projects() {
    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Projects</h1>

            <div className='button-grid'>
                <button>Portfolio Website</button>
                <button>Tennis Ball Trajectory Tracking</button>
                <button>Wiki Links</button>
                <button>Budget Application</button>
                <button>... More?</button>
            </div>
        </div>
        );
}

export default Projects;