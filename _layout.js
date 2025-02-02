// app/_layout.js
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Slot } from 'expo-router';  // expo-router
import GlobalStyle from '../GlobalStyles';

// Import de vos composants
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import éventuellement d'autres choses
// import './i18n'; // si nécessaire depuis ici, ou dans la racine

// Styles
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

// Layout
export default function Layout() {
  const [activePage, setActivePage] = useState('cv');
  const [showSidebar, setShowSidebar] = useState(true);

  // Références pour le scroll vers les sections
  const profileRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const distinctionsRef = useRef(null);
  const languagesRef = useRef(null);

  // Gère l’affichage de la sidebar en fonction de la taille d’écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowSidebar(false);
      } else {
        setShowSidebar(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Gère le scroll vers une section spécifique
  const scrollToSection = (sectionRef) => {
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // On passe les props nécessaires au Sidebar/Navbar :
  const navProps = {
    activePage,
    setActivePage,
    scrollToSection,
    profileRef,
    experienceRef,
    skillsRef,
    educationRef,
    distinctionsRef,
    languagesRef,
  };

  return (
    <AppContainer>
      <GlobalStyle />

      {showSidebar ? (
        <Sidebar {...navProps} />
      ) : (
        <Navbar {...navProps} />
      )}

      <MainContent showSidebar={showSidebar}>
        {/* 
          <Slot /> rendra l’une des pages enfants :
            - app/index.js (pour "/")
            - app/callback.js (pour "/callback")
            - etc.
        */}
        <Slot />

        <Footer />
      </MainContent>
    </AppContainer>
  );
}
