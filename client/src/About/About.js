import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import './About.css';
import resumePDF from './Resume-Phillip-Volkov.pdf'

function About() {
    // load and customize pdf toolbar
    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const transform = (slot) => ({
        ...slot,
        // These slots will be empty
        Open: () => <></>,
        SwitchTheme: () => <></>,
    });

    return (
        <div className='container main'>
            <div className='flexbox-container'>
                <div className='twoColumns centerText'>
                    <div className='container aboutText'>
                        <h1>About</h1>

                        <p>Hi, I'm Phillip Volkov! I'm currently a 3rd year Computer Science major studing at the 
                            <i> University of Washington - Seattle</i>, with experience and interest in software development,
                            machine learning, and robotics.</p>

                        <div className='buttonContainer'>
                            <a className='action-button' href="#education">Education</a>
                            <a className='action-button' href="#organizations">Organizations</a>
                            <a className='action-button' href="#projects">Projects</a>
                            <a className='action-button' href="#skills">Skills</a>
                        </div>
                    </div>
                </div>
                <div className='twoColumns resume'>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                        <Viewer fileUrl={resumePDF} plugins={[toolbarPluginInstance]}/>
                    </Worker>
                </div>
            </div>
        </div>
    );
  }

export default About;