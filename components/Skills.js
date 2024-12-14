import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SkillsListContainer = styled.div`
  flex: 1;
  min-width: 300px;
`;

const ChartContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-height: 50vh;
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

  const data = {
    labels: [
      'Java',
      'Python',
      'JS/React/Node',
      'PHP',
      'SQL',
      'Firebase',
      'GML',
      'C',
    ],
    datasets: [
      {
        label: t('skills.title'),
        data: [5, 7, 8, 4, 5, 7, 6, 3],
        backgroundColor: 'rgba(111, 44, 247, 0.2)',
        borderColor: 'rgba(111, 44, 247, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <SkillsContainer>
      <SkillsListContainer>
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
      </SkillsListContainer>
      <ChartContainer>
        <Radar data={data} />
      </ChartContainer>
    </SkillsContainer>
  );
};

export default Skills;
