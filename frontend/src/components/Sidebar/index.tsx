import React, { useEffect, ChangeEvent } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchGetAuthors, fetchGetCategories } from '../../store/posts/thunks';
import { setSelectedAuthors, setSelectedCategories } from '../../store/posts/actions';

import { Container, Checkbox } from './styles';

import { FiX } from 'react-icons/fi';
import { Button } from '..';

interface Props {
  toggle: boolean;
  handleToggle(): void;
}

const Sidebar: React.FC<Props> = ({ toggle, handleToggle }) => {
  const { authors, categories } = useSelector((state: ApplicationState) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGetAuthors());
    dispatch(fetchGetCategories());
  }, [dispatch]);

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, id } = event.target;

    switch (name) {
      case 'author':
        dispatch(setSelectedAuthors(Number(id)));
        break;

      case 'category':
        dispatch(setSelectedCategories(Number(id)));
        break;

      default:
        break;
    }
  };

  return (
    <Container toggle={toggle}>
      <FiX size="28px" color="#2A2A2A" onClick={handleToggle} />
      <h2>Filtros</h2>
      <h3>Autor</h3>
      <ul>
        {authors.length
          ? authors.map(author => (
              <li key={author.id}>
                <Checkbox
                  type="checkbox"
                  name="author"
                  id={String(author.id)}
                  onChange={handleFilter}
                />
                {author.email}
              </li>
            ))
          : null}
      </ul>
      <h3>Categoria</h3>
      <ul>
        {categories.length
          ? categories.map(category => (
              <li key={category.id}>
                <Checkbox
                  type="checkbox"
                  name="category"
                  id={String(category.id)}
                  onChange={handleFilter}
                />
                {category.name}
              </li>
            ))
          : null}
      </ul>
      <Button onClick={handleToggle}>Filtrar</Button>
      <Button primary>Adicionar Post</Button>
    </Container>
  );
};

export default Sidebar;
