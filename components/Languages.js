import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const LanguagesContainer = styled.div`
`;

const TitledText = styled.h2`
  color: #6f2cf7 ;
`;


const Languages = () => {
  const { t } = useTranslation();

  return (
    <LanguagesContainer>
      <TitledText>{t('languages.title')}</TitledText>
      <ul>
        <li>{t('languages.french')}</li>
        <li>{t('languages.english')}</li>
      </ul>
    </LanguagesContainer>
  );
};

export default Languages;
