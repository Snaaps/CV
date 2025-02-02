import React from 'react';
import styled from 'styled-components';
import { FaUser, FaMusic, FaBriefcase, FaGraduationCap, FaTools, FaFileAlt, FaComments, FaMedal, FaLanguage } from 'react-icons/fa';
import { useTrail, animated } from '@react-spring/web';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import { ScrollView, TouchableOpacity } from 'react-native-web';
import fra from '../assets/fra.png'; 
import unk from '../assets/unk.png'; 
import spa from '../assets/spa.png'; 
import ger from '../assets/ger.png'; 

const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
`;

const LogoContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavItemsWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavItem = styled.div`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
  align-self: center; 
  margin-top: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#6f2cf7' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#2c3e50')};
  transition: background-color 0.3s, color 0.3s;
  border-radius: ${(props) => (props.active ? '20px 20px 0 0' : '20px')};
  border: 1px solid #6f2cf7;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const SubNavItem = styled(animated.div)`
  width: 70%;
  padding: 15px;
  display: flex;
  align-items: center;
  align-self: center; 
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#6f2cf7' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#2c3e50')};
  transition: background-color 0.3s, color 0.3s;
  border-left: 1px solid #6f2cf7;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
    border: 1px solid #6f2cf7;
  }

  svg {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;

  img {
    width: 30px;
    height: 20px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
      border-color: #6f2cf7;
    }
  }
`;

const subItems = [
  { icon: FaUser, label: 'profile.title', ref: 'profileRef' },
  { icon: FaBriefcase, label: 'experience.title', ref: 'experienceRef' },
  { icon: FaTools, label: 'skills.title', ref: 'skillsRef' },
  { icon: FaGraduationCap, label: 'education.title', ref: 'educationRef' },
  { icon: FaMedal, label: 'distinctions.title', ref: 'distinctionsRef' },
  { icon: FaLanguage, label: 'languages.title', ref: 'languagesRef' }
];

const Sidebar = ({ activePage, setActivePage, scrollToSection, profileRef, experienceRef, skillsRef, educationRef, distinctionsRef, languagesRef }) => {
  const { t, i18n } = useTranslation();
  const refs = { profileRef, experienceRef, skillsRef, educationRef, distinctionsRef, languagesRef };

  const trail = useTrail(subItems.length, {
    opacity: activePage === 'cv' ? 1 : 0,
    transform: activePage === 'cv' ? 'translateY(0)' : 'translateY(-70px)',
    from: { opacity: 0, transform: 'translateY(-70px)' },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: activePage === 'cv' ? 100 : 0
  });

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <SidebarContainer>
      <LogoContainer>
        <svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
          <g>
            <text x="0" y="40" fontFamily="Arial" fontSize="24" fill="#2c3e50">Luc-Arnaud</text>
            <text x="0" y="70" fontFamily="Arial" fontSize="24" fill="#6f2cf7">Bonnet</text>
          </g>
        </svg>
      </LogoContainer>
      <NavItemsWrapper>
        <ScrollView 
          style={{ 
            width: '100%',
            flexGrow: 1,
            alignSelf:'center'
          }}
        >
          <NavItem active={activePage === 'cv'} onClick={() => setActivePage('cv')}>
            <FaFileAlt size={25} /> <span>{t('cv.title')}</span>
          </NavItem>
          {activePage === 'cv' && trail.map((style, index) => {
            const { icon: Icon, label, ref } = subItems[index];
            return (
              <SubNavItem 
                style={style} 
                key={label} 
                onClick={() => {
                  if (refs[ref] && refs[ref].current) {
                    scrollToSection(refs[ref]);
                  } 
                }}
              >
                <Icon size={25} /> <span>{t(label)}</span>
              </SubNavItem>
            );
          })}
          <NavItem active={activePage === 'Powens'} onClick={() => setActivePage('Powens')}>
            <FaMusic size={25} /> <span>{t('Powens.title')}</span>
          </NavItem>
          <NavItem active={activePage === 'Perso'} onClick={() => setActivePage('Perso')}>
            <FaMusic size={25} /> <span>{t('Perso.title')}</span>
          </NavItem>
        </ScrollView>
      </NavItemsWrapper>
      <LanguageSelector>
        <TouchableOpacity style={{marginLeft:5}} onPress={() => changeLanguage('fr')} >
          <Image
            style={{ height: 20, aspectRatio:16/9 }}
            source={fra}
            contentFit='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:5}} onPress={() => changeLanguage('en')} >
          <Image
            style={{ height: 20, aspectRatio:16/9 }}
            source={unk}
            contentFit='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:5}} onPress={() => changeLanguage('es')} >
          <Image
            style={{  height: 20, aspectRatio:16/9}}
            source={spa}
            contentFit='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:5}} onPress={() => changeLanguage('de')} >
          <Image
            style={{ height: 20, aspectRatio:16/9 }}
            source={ger}
            contentFit='contain'
          />
        </TouchableOpacity>
      </LanguageSelector>
    </SidebarContainer>
  );
};

export default Sidebar;
