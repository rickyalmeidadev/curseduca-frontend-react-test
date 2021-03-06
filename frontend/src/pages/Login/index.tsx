import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { ApplicationState } from '../../store';
import { fetchLogin } from '../../store/auth/thunks';
import { validateLoginData } from '../../helpers/validateLoginData';
import { Input, Button } from '../../components';
import { Container, Content, Form, Logo, ErrorMessage } from './styles';
import logo from '../../assets/green-logo.png';

const initialFormData = {
  email: '',
  password: '',
};

const initialErrors = {
  email: '',
  password: '',
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [validationErrors, setValidationErros] = useState(initialErrors);

  const { error } = useSelector((state: ApplicationState) => state.auth);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClear = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    setValidationErros({ ...validationErrors, [name]: '' });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { email, password } = formData;
    const validationResult = validateLoginData(email, password);

    if (!validationResult.isValid) {
      const { emailError, passwordError } = validationResult;

      setValidationErros({
        email: emailError,
        password: passwordError,
      });

      return;
    }

    dispatch(fetchLogin(formData, history));
  };

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logo} alt="CursEduca Blog" />
        </Logo>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="email"
            label="Email"
            placeholder="Insira seu email"
            onChange={handleChange}
            onFocus={handleClear}
            value={formData.email}
            invalid={!!validationErrors.email}
          />
          <ErrorMessage visible={!!validationErrors.email}>{validationErrors.email}</ErrorMessage>
          <Input
            type="password"
            name="password"
            label="Senha"
            placeholder="********"
            onChange={handleChange}
            onFocus={handleClear}
            value={formData.password}
            invalid={!!validationErrors.password}
          />
          <ErrorMessage visible={!!validationErrors.password}>
            {validationErrors.password}
          </ErrorMessage>
          <ErrorMessage visible={error}>Email ou senha incorretos</ErrorMessage>
          <Button type="submit">Login</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Login;
