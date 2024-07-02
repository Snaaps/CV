import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const EducationContainer = styled.div`
`;

const TitledText = styled.h2`
  color: #6f2cf7 ;
`;

const Education = () => {
  const { t } = useTranslation();

  return (
    <EducationContainer>
      <TitledText>{t('education.title')}</TitledText>
      <ul>
        <li>
          <h3>{t('education.openClassroom.title')}</h3>
          <p>{t('education.openClassroom.date')}</p>
        </li>
        <li>
          <h3>{t('education.jeanPerrin.title')}</h3>
          <p>{t('education.jeanPerrin.date')}</p>
        </li>
      </ul>
    </EducationContainer>
  );
};

export default Education;
