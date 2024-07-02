import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  background: #bdc3c7;
  color: #2c3e50;
  margin-top:20px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 Luc-Arnaud Bonnet. Tous droits réservés.</p>
    </FooterContainer>
  );
}

export default Footer;
