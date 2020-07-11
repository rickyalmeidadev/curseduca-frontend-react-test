import React from 'react';

import { Button } from '..';

import { Container, Content, Logo } from './styles';

import logo from '../../assets/green-logo.png';

import { FiMenu } from 'react-icons/fi';

interface Props {
  toggle: boolean;
  handleToggle(): void;
}

const Header: React.FC<Props> = ({ toggle, handleToggle }) => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca blog" />
        </Logo>
        <FiMenu size="28px" color="#2A2A2A" onClick={handleToggle} />
        <Button primary>Adicionar Post</Button>
      </Content>
    </Container>
  );
};

export default Header;
