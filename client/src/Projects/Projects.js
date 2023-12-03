import React, { useState, useRef, useEffect } from 'react'

import './Projects.css';

import portfolio from './portfolio_website.png'
import tennis from './tennis_tracking.png'
import wiki from './wiki_links.png'
import budget from './budget_app.png'
import arduino from './arduino_emulator.png'
import chat from './private_chat.png'

import react from './react.png'
import node from './node.png'

import tennisDemo1 from './tennis_tracking_DEMO1.png'
import tennisDemo2 from './tennis_tracking_DEMO2.png'

import { Worker, Viewer } from '@react-pdf-viewer/core';
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';
import wikiPDF from './wikiLinks.pdf'

import arduinoDemo1 from './arduino_emulator_DEMO1.png'
import arduinoDemo2 from './arduino_emulator_DEMO2.png'
import arduinoDemo3 from './arduino_emulator_DEMO3.png'
import arduinoDemo4 from './arduino_emulator_DEMO4.png'

import budgetDemo1 from './budget_app_DEMO1.png'
import budgetDemo2 from './budget_app_DEMO2.png'
import budgetDemo3 from './budget_app_DEMO3.png'
import budgetDemo4 from './budget_app_DEMO4.png'

import chatDemo1 from './private_chat_DEMO1.png'

function Projects() {
    const [isShown, setIsShown] = useState(false);
    const [shownName, setShownName] = useState("");

    const projectShow = (event, name) => {
        setIsShown(true);
        setShownName(name);

        document.getElementById('projectModal').focus();
    }

    const projectClose = (event) => {
        setIsShown(false);
        setShownName("");
    }

    function useOutsideClickCloser(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            console.log(ref.current)
            if (ref.current && !ref.current.contains(event.target)) {
                projectClose();
            }
          }

          document.addEventListener("mousedown", handleClickOutside);
          return () => {document.removeEventListener("mousedown", handleClickOutside);};
        }, [ref]);
      }

    function setStyle(shown) {
        if (shown) {
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            document.body.style.overflow = 'hidden';

            return {"filter":"blur(10px)", "pointerEvents": "none", "userSelect": "none"};
        }
        else {
            document.body.style.overflow = '';
        }
    }

    const portfolioElem = (
        <div>
            <h2>Portfolio Website</h2>
            <p className='center-text'><i>A React and Node.JS website providing additional accesbility for gaining insight into my previous experiences/projects/skillset.</i></p>
            <p className='center-text'><i>11/2023 - 12/2023</i></p>
            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/PortfolioWebsite">https://github.com/PhillipVolkov/PortfolioWebsite</a>

            <ul>
                <li>Designed and created a front-end using React, with extensive use of HTML and CSS for styling.</li>
                <li>Used a Node.JS server to host the React app client.</li>
                <li>Produced a custom splash screen animation utilizing sine waves to generate random particle motion.</li>
                <li>Created a custom carousel and pop-up modal using React hooks and state.</li>
                <li>Deployed and maintained website on a custom domain.</li>
            </ul>

            <div className='centered-img'>
                <img src={react} className='small-img' alt='React logo'></img>
                <img src={node} className='small-img' alt='Node.JS logo'></img>
            </div>

            <h3>Explore the webpage to see more!</h3>
        </div>
    )

    const tennisElem = (
        <div>
            <h2>Tennis Ball Tracking Tracking</h2>
            <p className='center-text'><i>Project focusing on creating a Computer Vision based system for tracking tennis balls in play.</i></p>
            <p className='center-text'><i>06/2023 - 08/2023</i></p>
            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/BallTracking">https://github.com/PhillipVolkov/BallTracking</a>

            <ul>
                <li>Utilized an image preprocessing framework (OpenCV) and an image classifier (Yolov8) to create a real-time
                    video-processing model to classify live tennis balls in play. The model was able to be run at over 100FPS and had an 85%
                    classification accuracy under ideal conditions.</li>
                <li>Extracted ball position data from the classifier's bounding boxes to store the ball's trajectory and detect when a bounce
                    occurs based on data-derived features. The classifier was accurate for 95% of bounces for heights of over 25cm.</li>
                <li>Constructed the program using OOP-based techniques, leading to organized, modular, and reliable code allowing for
                    faster integration of the essential systems.</li>
            </ul>

            <p><b>Camera View</b></p>
            <img src={tennisDemo1} alt='camera View'></img>
            <p><b>Training Results</b></p>
            <img src={tennisDemo2} alt='training results'></img>
        </div>
    )
    
    // load and customize pdf toolbar
    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const transform = (slot) => ({
        ...slot,
        // These slots will be empty
        Open: () => <></>,
        SwitchTheme: () => <></>,
    });
    const wikiElem = (
        <div>
            <h2>Wiki Links</h2>
            <p className='center-text'><i>Classifying and identifying incorrectly hyperlinked phrases in a wiki using NLP techniques.</i></p>
            <p className='center-text'><i>07/2021 - 01/2022</i></p>

            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/WikiLinks">https://github.com/PhillipVolkov/WikiLinks</a>

            <ul>
                <li>International Baccalaureate (IB) research project to compare the performance of a naive algorithm and one utilizing a
                    combination of machine learning algorithms to classify whether hyperlinked text matched its linked web-page</li>
                <li>Utilized text preprocessing combined with natural language processing (NLP) techniques such as lemmatization and
                    stemming to prep the corpus for analysis.</li>
                <li>Learned and applied the Word2Vec technique, creating a custom-trained model with common computer-science jargon to
                    determine the similarity of phrases.</li>
                <li>Combined the previous techniques as features within the linear kernel SVM classification, with a specialized test-set to
                    ensure excellent outlier performance.</li>
            </ul>

            <p><b>Read the Paper:</b></p>
            <div style={{height:"800px"}}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                    <Viewer fileUrl={wikiPDF} plugins={[toolbarPluginInstance]}/>
                </Worker>
            </div>
        </div>
    )

    const arduinoElem = (
        <div>
            <h2>Arduino Emulator</h2>
            <p className='center-text'><i>Creating a framework for proof-of-concept webapp for emulating and testing code on a virtual Arduino.</i></p>
            <p className='center-text'><i>02/2022 - 04/2022</i></p>

            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/ArduinoEmulator">https://github.com/PhillipVolkov/ArduinoEmulator</a>

            <ul>
                <li>Used HTML / CSS / JavaScript to create the webapp frontend, allowing users to wire elements and interface with a virtual Arduino, along with 
                    providing the functionality to write code to it.</li>
                <li>Designed and created a framework using Objected-Oriented Design for storing and parsing user-inputted Arduino wiring and code.</li>
                <li>Created a relational database using PostgreSQL to store the state of and process user-inputted Arduino wiring and code, along with user details.</li>
                <li>Utilized Spring Boot for development, implementing the designed framework and linking UI functionality with the relational database.</li>
            </ul>

            <p><b>Web Page View</b></p>
            <img src={arduinoDemo1} alt='web page view'></img>
            <p><b>User Flow Diagram</b></p>
            <img src={arduinoDemo4} alt='user flow diagram'></img>
            <p><b>UML Diagram</b></p>
            <img src={arduinoDemo2} alt='UML diagram'></img>
            <p><b>Database ERD Diagram</b></p>
            <img src={arduinoDemo3} alt='database ERD diagram'></img>
        </div>
    )

    const budgetElem = (
        <div>
            <h2>Budget Application</h2>
            <p className='center-text'><i>Full-Stack project tracking, sorting, and displaying statistics of user's transactions.</i></p>
            <p className='center-text'><i>02/2021 - 03/2021</i></p>

            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/BudgetApp">https://github.com/PhillipVolkov/BudgetApp</a>

            <ul>
                <li>Designed and created the web frontend using HTML / CSS / JavaScript, providing users the ability to upload, sort, and view the summary of their 
                    transactions in visually appealing charts and tables.</li>
                <li>Developed using Spring Boot, linking the front-end with the database, along with sending Google Places API calls during sorting to obtain merchant details for each transaction, 
                    allowing categorization.</li>
                <li>Utilized PostgreSQL to store the user's transactions, implementing relational database techniques to optimize storage of data and reducing the amount of necessary API calls for known merchants.</li>
            </ul>

            <p><b>Web Page View</b></p>
            <img src={budgetDemo1} alt='web page view'></img>
            <p><b>User Flow Diagram</b></p>
            <img src={budgetDemo3} alt='user flow diagram'></img>
            <p><b>UML Diagram</b></p>
            <img src={budgetDemo2} alt='UML diagram'></img>
            <p><b>Database ERD Diagram</b></p>
            <img src={budgetDemo4} alt='database ERD diagram'></img>

        </div>
    )

    const chatElem = (
        <div>
            <h2>Private Chat App</h2>
            <p className='center-text'><i>A direct-message webapp and service.</i></p>
            <p className='center-text'><i>05/2021 - 06/2021</i></p>

            <p><b>View on GitHub:</b></p>
            <a href="https://github.com/PhillipVolkov/PrivateChatAppProject">https://github.com/PhillipVolkov/PrivateChatAppProject</a>

            <ul>
                <li>Constructed a web frontend using HTML / CSS / JavaScript, consisting of a simple log-in page and an interface for sending messages between friended users.</li>
                <li>Implemented animations and real-time update calls using Javascript.</li>
                <li>Developed using Spring Boot, filtering out non-user messages via database calls and providing those to the front-end.</li>
                <li>Used PostgreSQL to create a simple database for storing user details and associated messages.</li>
            </ul>

            <p><b>Web Page View</b></p>
            <img src={chatDemo1} alt='web page view'></img>
        </div>
    )
    
    const modalRef = useRef(null);
    useOutsideClickCloser(modalRef);

    const projectModal = (
        <div id='projectModal' className='modal' ref={modalRef} style={isShown ? {opacity: 1, zIndex: 99} : {opacity: 0, zIndex: -1}}>
            <button onClick={projectClose} className='close-button'>X</button>
            {shownName === 'portfolio' && portfolioElem}
            {shownName === 'tennis' && tennisElem}
            {shownName === 'wiki' && wikiElem}
            {shownName === 'arduino' && arduinoElem}
            {shownName === 'budget' && budgetElem}
            {shownName === 'chat' && chatElem}
        </div>
    );

    return (
        <div>
            {projectModal}
            
            <div className='container' style={setStyle(isShown)}>
                <h1 style={{textAlign:"center"}}>Projects</h1>

                <div className='button-grid'>
                    <button className='project' onClick={(e) => {projectShow(e, "portfolio")}}>
                        <img src={portfolio} alt='portfolio project logo'></img>
                        <div className='centered'>
                            <h5>Portfolio Website</h5>
                        </div>
                    </button>

                    <button className='project' onClick={(e) => {projectShow(e, "tennis")}}>
                        <img src={tennis} alt='tennis project logo'></img>
                        <div className='centered'>
                            <h5>Tennis Ball Trajectory Tracking</h5>
                        </div>
                    </button>

                    <button className='project' onClick={(e) => {projectShow(e, "wiki")}}>
                        <img src={wiki} alt='wiki project logo'></img>
                        <div className='centered'>
                            <h5>Wiki Links</h5>
                        </div>
                    </button>

                    <button className='project' onClick={(e) => {projectShow(e, "arduino")}}>
                        <img src={arduino} alt='arduino project logo'></img>
                        <div className='centered'>
                            <h5>Arduino Emulator</h5>
                        </div>
                    </button>

                    <button className='project' onClick={(e) => {projectShow(e, "budget")}}>
                        <img src={budget} alt='budget project logo'></img>
                        <div className='centered'>
                            <h5>Budget Application</h5>
                        </div>
                    </button>

                    <button className='project' onClick={(e) => {projectShow(e, "chat")}}>
                        <img src={chat} alt='chat project logo'></img>
                        <div className='centered'>
                            <h5>Private Chat App</h5>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        );
}

export default Projects;