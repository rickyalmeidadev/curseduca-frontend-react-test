import React, { useState, ChangeEvent, FormEvent } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchLogin } from '../../store/auth/thunks';

import { useHistory } from 'react-router-dom';

import { Input } from '../../components';

import { Container, Content } from './styles';

const initialFormData = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { error } = useSelector((state: ApplicationState) => state.auth);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await dispatch(fetchLogin(formData));

    if (!error) {
      setFormData(initialFormData);
      history.push('/');
    }
  };

  return (
    <Container>
      <Content>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>

          {error && <span>Email ou senha incorretos</span>}
        </form>
      </Content>
    </Container>
  );
};

export default Login;
