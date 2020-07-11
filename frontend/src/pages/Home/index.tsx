import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchGetPosts } from '../../store/posts/thunks';

import { Post, Header, Sidebar } from '../../components';

import { Container, Content } from './styles';
import api from '../../services/api';

interface Categories {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const [categories, setCategories] = useState<Categories[]>([]);

  const { data, loading, authorsSelected, categoriesSelected } = useSelector(
    (state: ApplicationState) => state.posts,
  );

  const dispacth = useDispatch();

  useEffect(() => {
    getCategories();
    dispacth(fetchGetPosts());
  }, [dispacth]);

  const getCategories = async () => {
    const response = await api.get('categories');
    setCategories(response.data);
  };

  const parseCategory = (id: number) => {
    const category = categories.find(category => category.id === id);

    if (!category) {
      return 'Outros';
    }

    return category.name;
  };

  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <main>
          <h1>Postagens</h1>
          {/* <PostForm /> */}
          <ul>
            {loading ? (
              <span>Loading...</span>
            ) : (
              data
                .filter(post => {
                  let shouldNotFilter = true;
                  /**
                   * If there is at least one author selected,
                   * we are going to filter.
                   */
                  if (authorsSelected.length) {
                    shouldNotFilter = authorsSelected.includes(post.id_user);
                  }
                  return shouldNotFilter;
                })
                .filter(post => {
                  let shouldNotFilter = true;
                  /**
                   * If there is at least one category selected,
                   * we are going to filter.
                   */
                  if (categoriesSelected.length) {
                    shouldNotFilter = categoriesSelected.includes(post.id_category);
                  }
                  return shouldNotFilter;
                })
                .map(post => (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    text={post.text}
                    owner={post.id_user}
                    category={parseCategory(post.id_category)}
                  />
                ))
            )}
          </ul>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
