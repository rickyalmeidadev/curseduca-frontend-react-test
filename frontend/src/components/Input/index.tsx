import React, { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<Props> = ({ type, name, label }) => {
  return (
    <label htmlFor={name}>
      {label}
      <input type={type} name={name} id={name} />
    </label>
  );
};

export default Input;
