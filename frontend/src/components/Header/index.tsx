import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '..';
import { Container, Content, Logo } from './styles';
import { FiMenu } from 'react-icons/fi';

import logo from '../../assets/green-logo.png';

interface Props {
  toggle?: boolean;
  handleToggle?(): void;
}

const Header: React.FC<Props> = ({ toggle = null, handleToggle }) => {
  const history = useHistory();

  const handleHistory = () => {
    history.push('/add');
  };

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca blog" />
        </Logo>
        {toggle !== null ? (
          <>
            <FiMenu size="28px" color="#2A2A2A" onClick={handleToggle} />
            <Button primary onClick={handleHistory}>
              Adicionar Post
            </Button>
          </>
        ) : (
          <Button onClick={handleGoBack}>Voltar</Button>
        )}
      </Content>
    </Container>
  );
};

export default Header;
