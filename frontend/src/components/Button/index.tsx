import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './styles';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
}

const Button: React.FC<Props> = ({ children, primary = false, ...rest }) => {
  return (
    <StyledButton {...rest} primary={primary}>
      {children}
    </StyledButton>
  );
};

export default Button;
