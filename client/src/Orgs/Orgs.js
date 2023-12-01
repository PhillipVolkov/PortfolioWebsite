import React from 'react'

import t34 from './t34.jpg'
import cones from './cones.PNG'

import './Orgs.css';

function Orgs() {
    return (
        <div className='container'>
            <h1 style={{textAlign:"center"}}>Organizations</h1>

            <div className='card org'>
                <h2 style={{textAlign:"center"}}>UWashington Formula Motorsports</h2>
                <img src={t34} className='org-photo'></img>

                <h3>Simulation Subteam</h3>
                <p><i>01/2023 - 06/2023</i></p>
                <ul>
                    <li>Created a simulation environment for virtual simultaneous testing of the software stack</li>
                    <li>Planned a systems architecture for a driverless race car system and developed the corresponding ROS nodesk</li>
                    <li>Worked with electrical engineers to create and integrate a CANBUS network for intra-system communication</li>
                </ul>
                
                <div className='org-grid'>
                    <div className='twoColumns'>
                        <h3>Perception Subteam</h3>
                        <p><i>06/2023 - Current</i></p>
                        <ul>
                            <li>Trained a custom YOLOv8 model to detect bounding boxes of cones on the race track</li>
                            <li>Optimized the model to run at 60+fps on an NVIDIA jetson, using tensorRT and threading</li>
                            <li>Implemented the distortion pinhole model to project camera rays, translating the 2D bounding box into a 
                                3D prism in world coordinates.</li>
                        </ul>
                    </div>

                    <div className='twoColumns'>
                        <img src={cones} className='org-photo-small'></img>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Orgs;