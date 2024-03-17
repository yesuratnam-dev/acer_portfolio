// src/components/Projects.tsx
import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {

    
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li className='Project_Names'>
          <strong>BMW BIG DATA AG/AI</strong> - Developed a data analytics and artificial intelligence solution for BMW to optimize their business processes.
        </li>
        <li className='Project_Names'>
          <strong>SELLERFLEX Amazon</strong> - Implemented a seller management system for Amazon sellers, allowing them to streamline their operations.
        </li>
        <li className='Project_Names'>
          <strong>Roaster Amazon</strong> - Created a roaster application for Amazon, helping automate and improve their internal processes.
        </li>
      </ul>
    </section>
  );
};

export default Projects;
