import React, { SelectHTMLAttributes } from 'react';

import { StyledSelect, Label } from './styles';

const Select: React.FC<SelectHTMLAttributes<HTMLSelectElement>> = ({ ...rest }) => {
  return (
    <Label>
      Categoria
      <StyledSelect {...rest} name="categoryId" id="categoryId">
        <option value={1}>Artigos</option>
        <option value={2}>Pensamentos</option>
        <option value={3}>Avisos</option>
        <option value={4}>Conteúdos</option>
      </StyledSelect>
    </Label>
  );
};

export default Select;
