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

export default function App() {
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
  useEffect(() => {
    if (window.location.pathname === '/callback') {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      
      if (code) {
        // Enregistrement du code dans un cookie pour toute l'application
        document.cookie = `google_auth_code=${code}; path=/;`;
      }
      // Optionnel : rediriger vers la page d'accueil après l'enregistrement
      window.location.href = '/';
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
