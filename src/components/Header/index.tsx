import React from 'react';

import { Container, Logo, SearchInput, TextHeader } from './styles';

import logoImage from '../../assets/logo.png';
import textIcon from '../../assets/text.png';

const Header: React.FC = () => {
  return (
      <Container>
          <Logo>
            <img src={logoImage} alt="Logo"/>
          </Logo>

          <SearchInput placeholder="Buscar produtos, marcas e muito mais..." />

          <TextHeader>
            <img src={textIcon} alt="Aproveite preços incríveis todos os dias" />
          </TextHeader>
          
      </Container>
  );
}

export default Header;