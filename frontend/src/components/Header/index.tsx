import React from 'react';

import { Button } from '..';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/green-logo.png';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca blog" />
        </Logo>
        <Button primary>Adicionar Post</Button>
      </Content>
    </Container>
  );
};

export default Header;
