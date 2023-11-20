import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import './ProjectsDirectory.css';
import resumePDF from './Resume-Phillip-Volkov.pdf'

function ProjectsDirectory() {
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
        <div className='container' style={{paddingRight:"0px"}}>
            <div className='flexbox-container'>
                <div className='twoColumns'>
                    <h1>About</h1>
                    <p>Hi! ABOUT ME. Resume on the right</p>
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

export default ProjectsDirectory;