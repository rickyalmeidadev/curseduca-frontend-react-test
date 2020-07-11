import React, { SelectHTMLAttributes } from 'react';
import { FiChevronDown } from 'react-icons/fi';

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
      <FiChevronDown size="24px" color="#2A2A2A" />
    </Label>
  );
};

export default Select;
