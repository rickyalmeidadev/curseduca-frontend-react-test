import React, { InputHTMLAttributes } from 'react';

import { Label, StyledInput } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid?: boolean;
}

const Input: React.FC<Props> = ({ type, name, label, invalid = false, ...rest }) => {
  return (
    <Label htmlFor={name}>
      {label}
      <StyledInput {...rest} type={type} name={name} id={name} invalid={invalid} />
    </Label>
  );
};

export default Input;
