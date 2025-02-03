import React, { useState } from 'react'; 
import { TouchableOpacity } from 'react-native-web';
import styled from 'styled-components';
import { FaBars,FaMusic, FaUser, FaBriefcase, FaGraduationCap, FaTools, FaFileAlt, FaComments, FaMedal, FaLanguage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import { Image } from 'expo-image';
import fra from '../assets/fra.png'; 
import unk from '../assets/unk.png'; 
import spa from '../assets/spa.png'; 
import ger from '../assets/ger.png'; 

const NavbarContainer = styled.div`
  width: 100%;
  background-color: #f8f9fa;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const MenuIcon = styled(FaBars)`
  cursor: pointer;
  margin-right:40px;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#6f2cf7' : 'transparent')};
  color: ${(props) => (props.active ? '#ffffff' : '#2c3e50')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #6f2cf7;
    color: #ffffff;
  }

  svg {
    margin-right: 10px;
  }
`;

const FlagImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 4px solid #6f2cf7;
  position: absolute;
  top: 130px;
`;
const LanguageSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 10px 20px;

  img {
    width: 30px;
    height: 20px;
    cursor: pointer;

    &:hover {
      border-color: #6f2cf7;
    }
  }
`;

const Navbar = ({ activePage, setActivePage, scrollToSection, profileRef, experienceRef, skillsRef, educationRef, distinctionsRef, languagesRef }) => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowMenu(false);
  };

  return (
    <NavbarContainer>
      <div>Luc-Arnaud Bonnet</div>
      <MenuIcon size={25} onClick={() => setShowMenu(!showMenu)} />
      <DropdownMenu show={showMenu}>
        <DropdownItem active={activePage === 'cv'} onClick={() => setActivePage('cv')}>
          <FaFileAlt size={20} /> <span>{t('cv.title')}</span>
        </DropdownItem>
        
        <DropdownItem active={activePage === 'Powens'} onClick={() => { setActivePage('Powens'); setShowMenu(false); }}>
  
          <FaMusic size={20} /> <span>Powens</span>
        </DropdownItem>
        <DropdownItem active={activePage === 'Perso'} onClick={() => { setActivePage('Perso'); setShowMenu(false); }}>
  
          <FaMusic size={20} /> <span>Perso</span>
        </DropdownItem>
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
      </DropdownMenu>
    </NavbarContainer>
  );
};

export default Navbar;
