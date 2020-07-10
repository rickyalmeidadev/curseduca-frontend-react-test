import React, { TextareaHTMLAttributes } from 'react';

import { StyledTextarea, Label } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <Label htmlFor={name}>
      {label}
      <StyledTextarea {...rest} name={name} id={name} />
    </Label>
  );
};

export default Textarea;
