import React from 'react';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/titulo-azul.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca blog" />
        </Logo>
      </Content>
    </Container>
  );
};

export default Header;
