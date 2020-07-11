import React, { useState, useEffect, ChangeEvent } from 'react';

import api from '../../services/api';

import { Container, Checkbox } from './styles';
import { fetchGetAuthors, fetchGetCategories } from '../../store/posts/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { setSelectedAuthors, setSelectedCategories } from '../../store/posts/actions';

interface Category {
  id: number;
  name: string;
}

interface Author {
  id: number;
  email: string;
}

const Sidebar: React.FC = () => {
  // const [authors, setAuthors] = useState<Author[]>([]);
  // const [categories, setCategories] = useState<Category[]>([]);

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
    <Container>
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
    </Container>
  );
};

export default Sidebar;
