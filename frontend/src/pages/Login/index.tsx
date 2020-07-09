import React from 'react';

import { Input } from '../../components';

import { Container, Content } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <Input type="email" name="email" label="Email" />
          <Input type="password" name="password" label="Senha" />
          <button type="submit">Login</button>
        </form>
      </Content>
    </Container>
  );
};

export default Login;
