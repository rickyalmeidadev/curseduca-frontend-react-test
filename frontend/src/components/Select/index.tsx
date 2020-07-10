import React, { SelectHTMLAttributes } from 'react';

const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({ ...rest }) => {
  return (
    <select {...rest} name="categoryId" id="categoryId">
      <option value={1}>Artigos</option>
      <option value={2}>Pensamentos</option>
      <option value={3}>Avisos</option>
      <option value={4}>Conteúdos</option>
    </select>
  );
};

export default Select;
