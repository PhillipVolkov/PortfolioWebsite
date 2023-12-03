import React from 'react'

import UW_Logo from './UW_Logo.png'
import './Education.css';

function Education() {
    return (
        <div className='container'>
          <div className='big-grid'>
            <div style={{textAlign:"center"}}>
              <h1>Education</h1>
              <div className='card card-inverse'>

                <img src={UW_Logo} className='uw-photo' alt='UW-logo'></img>

                <p>University of Washington - Seattle</p>
                <p>Computer Science - Direct Admit</p>
                <p>Graduating in June 2025</p>
                <p>3.88 Cummulative GPA</p>
              </div>
            </div>

            <div style={{textAlign:"center"}}>
              <h1>Coursework</h1>
              <div className='card-container'>
                <div className='card card-inverse'>
                  <h2>CSE 332: Data Structures And Parallelism</h2>
                  <p><i>Winter 2024</i></p>
                  <p>Covers abstract data types and structures including dictionaries, balanced trees, hash tables, priority queues, and graphs; 
                    sorting; asymptotic analysis; fundamental graph algorithms including graph search, shortest path, and minimum spanning trees;
                    multithreading and parallel algorithms; P and NP complexity classes.</p>
                </div>

                <div className='card card-inverse'>
                  <h2>CSE 312: Foundations of Computing II</h2>
                  <p><i>Winter 2024</i></p>
                  <p>Examines fundamentals of enumeration and discrete probability; applications of randomness to computing; 
                    polynomial-time versus NP; and NP-completeness.</p>
                </div>
                
                <div className='card card-inverse'>
                  <h2>CSE 311: Foundations of Computing I</h2>
                  <p><i>Autumn 2023</i></p>
                  <p>Examines fundamentals of logic, set theory, induction, and algebraic structures with applications to computing; 
                    finite state machines; and limits of computability.</p>
                </div>

                <div className='card card-inverse'>
                  <h2>CSE 474: Introduction to Embedded Systems</h2>
                  <p><i>Autumn 2023</i></p>
                  <p>Introduces the specification, design, development, and test of real time embedded system software. Use of a modern 
                    embedded microcomputer or microcontroller as a target environment for a series of laboratory projects and a comprehensive 
                    final project.</p>
                </div>

                <div className='card card-inverse'>
                  <h2>CSE 331: Software Design and Implementation</h2>
                  <p><i>Spring 2023</i></p>
                  <p>Explores concepts and techniques for design and construction of reliable and maintainable software systems 
                    in modern high-level languages: specifications; program structure and design; program-correctness approaches, 
                    including testing; and event-driven programming (e.g., graphical user interface).</p>
                </div>

                <div className='card card-inverse'>
                  <h2>CSE 351: Hardware / Software Interface</h2>
                  <p><i>Spring 2023</i></p>
                  <p>Examines key computational abstraction levels below modern high-level languages; number representation, 
                    assembly language, introduction to C, memory management, the operating-system process model, high-level machine 
                    architecture including the memory hierarchy, and how high-level languages are implemented.</p>
                </div>

                <div className='card card-inverse'>
                  <h2>CSE 123: Introduction to Computer Programming III</h2>
                  <p><i>Winter 2023</i></p>
                  <p> Computer programming for students with significant previous programming experience. 
                      Emphasizes implementation and run-time analysis of data structures and algorithms using techniques
                      including linked references, recursion, and object-oriented inheritance to solve computational problems
                      motivated by modern societal and scientific needs.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }

export default Education;