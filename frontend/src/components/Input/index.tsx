import React, { InputHTMLAttributes } from 'react';

import { Label, StyledInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<Props> = ({ type, name, label, ...rest }) => {
  return (
    <Label htmlFor={name}>
      {label}
      <StyledInput {...rest} type={type} name={name} id={name} />
    </Label>
  );
};

export default Input;
