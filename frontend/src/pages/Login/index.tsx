import React, { useState, ChangeEvent, FormEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchLogin } from '../../store/auth/thunks';

import { useHistory } from 'react-router-dom';

import { Input, Button } from '../../components';

import { Container, Content, Form, Logo } from './styles';

import logo from '../../assets/titulo-azul.png';

const initialFormData = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { error, loading } = useSelector((state: ApplicationState) => state.auth);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await dispatch(fetchLogin(formData));

    if (!error && !loading) {
      setFormData(initialFormData);
      history.push('/');
    }
  };

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca Blog" />
          <span>blog</span>
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            label="Email"
            onChange={handleChange}
            value={formData.email}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            onChange={handleChange}
            value={formData.password}
          />
          <Button type="submit">Login</Button>

          {error && <span>Email ou senha incorretos</span>}
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
