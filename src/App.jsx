import React from 'react';

import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectsAccordion from './components/ProjectsAccordion';

function App() {
    return (
        <main>
            <NavBar />
            <Hero />
            <div style={{ backgroundImage: 'linear-gradient(to top right, black, var(--purple-dark))' }}>
                <AboutMe/>
                <Skills/>
            </div>
            <ProjectsAccordion />
            {/* <Projects /> */}
            <JobExperience />
            <span style={{ height: '200vh', display: 'inline-block' }}/>
        </main>
    )
}

export default App
