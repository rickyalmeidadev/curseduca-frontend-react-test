import { validateEmail } from './emailValidate';

interface Errors {
  isValid: boolean;
  emailError: string;
  passwordError: string;
}

export const validateLoginData = (email: string, password: string): Errors => {
  const errors = {
    isValid: false,
    emailError: '',
    passwordError: '',
  };

  errors.emailError = validateEmailComplete(email);

  errors.passwordError = validatePassword(password);

  if (!errors.emailError && !errors.passwordError) {
    return { ...errors, isValid: true };
  }

  return errors;
};

export const validatePassword = (password: string) => {
  return !password ? 'O campo de senha é obrigatório' : '';
};

export const validateEmailComplete = (email: string) => {
  let error = '';

  if (!email) {
    error = 'O campo de email é obrigatório';
  }

  if (!error) {
    if (!validateEmail(email)) {
      error = 'Insira um endereço de email válido';
    }
  }

  return error;
};
