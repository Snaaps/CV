import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

function Header() {
  return (
    <HeaderContainer>
      <Title>Mon CV de Développeur</Title>
    </HeaderContainer>
  );
}

export default Header;
