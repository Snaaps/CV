import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles'; // Importez les styles globaux
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar'; // Le composant Header pour les petits écrans
import Header from './components/Header';
import Profile from './components/Profile';
import Experience from './components/Experience';
import Fifre from './components/Fifre';
import Perso from './components/Perso/Perso';
import PartitionsFifre from './components/PartitionsFifre';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Distinctions from './components/Distinctions';
import Languages from './components/Languages';
import Project from './components/Project';

import './i18n'; // Importer la configuration i18next

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const MainContent = styled.div`
  margin-left: ${(props) => (props.showSidebar ? '250px' : '0')};
  padding: 20px;
  width: auto;
  overflow-y: auto;
  background: #efefef;
  transition: margin-left 0.3s, width 0.3s;
`;

const Section = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`;

const Section1 = styled.div`
  margin-bottom: 20px;
  background: #ffffff;
  max-width: 100%;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
  overflow: hidden;
`;

const App = () => {
  const [activePage, setActivePage] = useState('cv');
  const [showSidebar, setShowSidebar] = useState(true);
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const distinctionsRef = useRef(null);
  const languagesRef = useRef(null);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setShowSidebar(false);
    } else {
      setShowSidebar(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionRef) => {
    console.log('scrollToSection called with:', sectionRef);
    if (sectionRef && sectionRef.current) {
      console.log('Scrolling to:', sectionRef.current);
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log('Invalid sectionRef:', sectionRef);
    }
  };

  return (
    <AppContainer>
      <GlobalStyle /> {/* Ajoutez les styles globaux */}
      {showSidebar ? (
        <Sidebar 
          activePage={activePage} 
          setActivePage={setActivePage} 
          scrollToSection={scrollToSection}
          profileRef={profileRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          distinctionsRef={distinctionsRef}
          languagesRef={languagesRef}
        />
      ) : (
        <Navbar 
          activePage={activePage} 
          setActivePage={setActivePage}
          scrollToSection={scrollToSection}
          profileRef={profileRef}
          experienceRef={experienceRef}
          skillsRef={skillsRef}
          educationRef={educationRef}
          distinctionsRef={distinctionsRef}
          languagesRef={languagesRef}
        />
      )}
      <MainContent showSidebar={showSidebar}>
        {activePage === 'cv' && (
          <>
            <Section1 ref={profileRef} id="profile-section">
              <Profile />
            </Section1>
            <Section ref={experienceRef} id="experience-section">
              <Experience />
            </Section>
            <Section ref={skillsRef} id="skills-section">
              <Skills />
            </Section>
            <Section ref={educationRef} id="education-section">
              <Education />
            </Section>
            <Section ref={distinctionsRef} id="distinctions-section">
              <Distinctions />
            </Section>
            <Section ref={languagesRef} id="languages-section">
              <Languages />
            </Section>
          </>
        )}
        {activePage === 'project' && <Project />}
        {activePage === 'partitionsFifre' && <Fifre />}
        {activePage === 'Perso' && <Perso />}

        <Footer />
      </MainContent>
    </AppContainer>
  );
};

export default App;
