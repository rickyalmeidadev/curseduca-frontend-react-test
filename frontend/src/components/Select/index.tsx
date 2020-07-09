import React from 'react';

const Select: React.FC = () => {
  return (
    <select name="categories" id="categories">
      <option value="1">Artigos</option>
      <option value="2">Pensamentos</option>
      <option value="3">Avisos</option>
      <option value="4">Conteúdos</option>
    </select>
  );
};

export default Select;
