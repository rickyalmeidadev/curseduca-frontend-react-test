import React, { useState, useEffect, ChangeEvent } from 'react';

import api from '../../services/api';

import { Container, Checkbox } from './styles';
import { fetchGetAuthors, fetchGetCategories } from '../../store/posts/thunks';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { setSelectedAuthors } from '../../store/posts/actions';

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

  console.log(authors, categories);

  // const fetchAuthors = async () => {
  //   try {
  //     const response = await api.get('users');
  //     /**
  //      * Here I used Object.values because the response returns an object,
  //      * so I had to transform it into an array.
  //      */
  //     setAuthors(Object.values(response.data));
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const fetchCategories = async () => {
  //   try {
  //     const response = await api.get('categories');
  //     setCategories(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target;
    dispatch(setSelectedAuthors(Number(id)));
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
                  name={author.email}
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
                <Checkbox type="checkbox" name={category.name} id={String(category.id)} />
                {category.name}
              </li>
            ))
          : null}
      </ul>
    </Container>
  );
};

export default Sidebar;
