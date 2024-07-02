import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SkillsContainer = styled.div`
`;

const TitledText = styled.h2`
  color: #6f2cf7;
`;

const StyledList = styled.ul`
  list-style-type: none; /* Enlever les puces si nécessaire */
  padding: 5px; /* Enlever le padding par défaut */
`;

const ListItem = styled.li`
  margin-bottom: 15px; /* Ajuster l'espacement entre les éléments */
  font-size: 18px; /* Optionnel: Ajuster la taille de police */
`;

const Skills = () => {
  const { t } = useTranslation();

  return (
    <SkillsContainer>
      <TitledText>{t('skills.title')}</TitledText>
      <StyledList>
        <ListItem> - {t('skills.java')}</ListItem>
        <ListItem> - {t('skills.python')}</ListItem>
        <ListItem> - {t('skills.react')}</ListItem>
        <ListItem> - {t('skills.php')}</ListItem>
        <ListItem> - {t('skills.SQL')}</ListItem>
        <ListItem> - {t('skills.firebase')}</ListItem>
        <ListItem> - {t('skills.gml')}</ListItem>
        <ListItem> - {t('skills.c')}</ListItem>
      </StyledList>
    </SkillsContainer>
  );
};

export default Skills;
