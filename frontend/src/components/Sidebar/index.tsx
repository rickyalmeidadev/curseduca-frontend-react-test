import React from 'react';

import { Container, Checkbox } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <h2>Filtros</h2>
      <h3>Autor</h3>
      <ul>
        <li>
          <Checkbox type="checkbox" name="" id="" />
        </li>
      </ul>
      <h3>Categoria</h3>
      <ul>
        <li>
          <Checkbox type="checkbox" name="" id="" /> Artigos
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;
