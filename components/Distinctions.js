import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const DistinctionsContainer = styled.div`
`;

const TitledText = styled.h2`
  color: #6f2cf7 ;
`;

const Distinctions = () => {
  const { t } = useTranslation();

  return (
    <DistinctionsContainer>
      <TitledText>{t('distinctions.title')}</TitledText>
      <ul>
        <li>{t('distinctions.music')}</li>
        <li>{t('distinctions.technology')}</li>
        <li>{t('distinctions.media')}</li>
        <li>{t('distinctions.veille')}</li>
        <li>{t('distinctions.events')}</li>
      </ul>
    </DistinctionsContainer>
  );
};

export default Distinctions;
