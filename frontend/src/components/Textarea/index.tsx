import React, { TextareaHTMLAttributes } from 'react';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Textarea: React.FC<Props> = ({ name, label, ...rest }) => {
  return (
    <label htmlFor={name}>
      {label}
      <textarea {...rest} name={name} id={name} />
    </label>
  );
};

export default Textarea;
