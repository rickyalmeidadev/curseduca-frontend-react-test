import React, { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input: React.FC<Props> = ({ name, label }) => {
  return (
    <label htmlFor={name}>
      {label}
      <textarea name={name} id={name} />
    </label>
  );
};

export default Input;
