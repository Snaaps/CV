import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyles'; // Importez les styles globaux
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Experience from './components/Experience';
import PowensScreen from './src/powens'; // Correction du nom (au lieu de 'Fifre')
import Perso from './components/Perso/Perso';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import Distinctions from './components/Distinctions';
import Languages from './components/Languages';
import './i18n'; // Importer la configuration i18next
import { HashRouter } from 'react-router-dom';

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
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #bdc3c7;
`;

const Section1 = styled(Section)`
  max-width: 100%;
  overflow: hidden;
`;

function AppContent() {
  const [activePage, setActivePage] = useState('cv');
  const [showSidebar, setShowSidebar] = useState(true);

  // Références pour le scroll
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const distinctionsRef = useRef(null);
  const languagesRef = useRef(null);

  // Gestion du callback pour récupérer le code et le stocker dans un cookie
  // Avec HashRouter, l'URL ressemble à "#/callback?code=..."
  useEffect(() => {
    if (window.location.hash.includes('/callback')) {
      const hash = window.location.hash;
      const index = hash.indexOf('?');
      const queryString = index !== -1 ? hash.substring(index) : "";
      const urlParams = new URLSearchParams(queryString);
  
      // 1) Récupérer le paramètre `code` s’il existe
      const code = urlParams.get('code');
      if (code) {
        document.cookie = `google_auth_code=${code}; path=/;`;
      }
  
      // 2) Récupérer le paramètre `userId` s’il existe
      const userId = urlParams.get('userId');
      if (userId) {
        document.cookie = `userId=${userId}; path=/;`;
      }
  
      // 3) Rediriger (retrait du /callback dans l'URL)
      window.location.hash = "/";
    }
  }, []);
  

  // Gestion de l'affichage du sidebar en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Vérifie dès le chargement

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer>
      <GlobalStyle />

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
        {activePage === 'Powens' && <PowensScreen />}
        {activePage === 'Perso' && <Perso />}
      </MainContent>

      <Footer />
    </AppContainer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
