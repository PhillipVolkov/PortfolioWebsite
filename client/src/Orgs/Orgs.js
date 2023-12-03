import React, {useState} from 'react'

import confusion from './confusion_matrix.png'
import demo from './demo.png'
import cones from './cones.PNG'

import robot from './1294.jpeg'
import robot_2 from './1294_2.jpeg'

import './Orgs.css';

function Orgs() {
    const [slideShowState, setSlideShowState] = useState(0);
    const maxElems = 1;

    const formulaDiv = (
        <div className='card org' id="Formula" >
            <h1 style={{textAlign:"center"}}>UW Formula Motorsports</h1>
            
            <h2>Perception Subteam</h2>
            <p><i>06/2023 - Current</i></p>
            <ul>
                <li>Trained a custom YOLOv8 model to detect bounding boxes of cones on the race track</li>
                <li>Optimized the model to run at 60+fps on an NVIDIA jetson, using tensorRT and threading</li>
                <li>Implemented the distortion pinhole model to project camera rays, translating the 2D bounding box into a 
                    3D prism in world coordinates.</li>
            </ul>

            <p><b>Confusion Matrix of the trained Model</b></p>
            <img src={confusion} className='org-photo-small' alt='Confusion Matrix of the trained Model'></img>
            <p><b>Model running on test drive footage</b></p>
            <img src={cones} className='org-photo-small'  alt='Model running on test drive footage'></img>
            <p><b>Demonstration of camera ray projection</b></p>
            <img src={demo} className='org-photo-small' alt='Demonstration of camera ray projection'></img>

            <h2>Simulation Subteam</h2>
            <p><i>01/2023 - 06/2023</i></p>
            <ul>
                <li>Created a simulation environment for virtual simultaneous testing of the software stack</li>
                <li>Planned a systems architecture for a driverless race car system and developed the corresponding ROS nodesk</li>
                <li>Worked with electrical engineers to create and integrate a CANBUS network for intra-system communication</li>
            </ul>
        </div>
    );

    const roboticsDiv = (
        <div className='card org' id="1294">
            <h1 style={{textAlign:"center"}}>FRC Team 1294</h1>
            
            <h2>Director of Software</h2>
            <p><i>09/2019 - 07/2022</i></p>
            <ul>
                <li>Designed object-oriented code frameworks and finite state machines for robust functionality under user control, and to aid efficiency of development.</li>
                <li>Created PID control systems and custom driver assistance code based on robot IMU measurements to ensure precise movement.</li>
                <li>Utilized the LimeLight camera to detect the vision targets on the goal, working in conjuction with the created autonomous PID-based systems to orient the robot to line up and score.</li>
                <li>Led and managed a group of 15 members through the Software Development Cycle to create autonomous and user-controlled code within 6 weeks</li>
                <li>Constructed and facilitated the use of a training program comprising of lectures and exercises for new members to learn Java and FRC programming fundamentals.</li>
            </ul>
            
            <p><b>1294 Robot being tested</b></p>
            <img src={robot} className='org-photo-small' alt='1294 Robot being tested'></img>
            <p><b>District Championships</b></p>
            <img src={robot_2} className='org-photo-small' alt='District Championships'></img>
        </div>
    );

    const incrementSlideShowState = (event, increment) => {
        console.log(slideShowState+increment)
        if (slideShowState + increment >= 0 && slideShowState + increment <= maxElems) {
            if (slideShowState + increment === 0) {
                document.getElementById("left-btn").style.background = "#aaa";
            }
            else {
                document.getElementById("left-btn").style.background = "";
            }
            if (slideShowState + increment === maxElems) {
                document.getElementById("right-btn").style.background = "#aaa";
            }
            else {
                document.getElementById("right-btn").style.background = "";
            }

            setSlideShowState(slideShowState+increment);
        }
    }

    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Organizations</h1>

            <div className='org-container'>
                <div className='org-card-container'>
                    <button id="left-btn" onClick={(e) => {incrementSlideShowState(e, -1)}} style={{background:"#aaa"}}>&lt;</button>
                    {slideShowState === 0 && formulaDiv}
                    
                    {slideShowState === 1 && roboticsDiv}
                    <button id="right-btn" onClick={(e) => {incrementSlideShowState(e, 1)}} style={{left:"100%", transform:"translate(0%, -50%)"}}>&gt;</button>
                </div>
            </div>
        </div>
        );
}

export default Orgs;