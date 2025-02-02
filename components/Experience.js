import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ExperienceContainer = styled.div`
`;

const TitledText = styled.h2`
  color: #6f2cf7 ;
`;

const Experience = () => {
  const { t } = useTranslation();

  return (
    <ExperienceContainer>
      <TitledText>{t('experience.title')}</TitledText>
      <ul>
        <li>
          <h3>{t('experience.freelance.title')}</h3>
          <p>{t('experience.freelance.date')}</p>
          <ul>
            <li>{t('experience.freelance.description.0')}</li>
            <li>{t('experience.freelance.description.1')}</li>
            <li>{t('experience.freelance.description.2')}</li>
            <li>{t('experience.freelance.description.3')}</li>
          </ul>
        </li>
        {
          /*
        <li>
          <h3>{t('experience.infiniteAgency.title')}</h3>
          <p>{t('experience.infiniteAgency.date')}</p>
          <p>{t('experience.infiniteAgency.description')}</p>
        </li>

          */
        }
        <li>
          <h3>{t('experience.aubagne.title')}</h3>
          <p>{t('experience.aubagne.date')}</p>
          <p>{t('experience.aubagne.description')}</p>
        </li>
      </ul>
    </ExperienceContainer>
  );
};

export default Experience;
