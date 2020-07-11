import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchGetPosts, fetchGetCategories } from '../../store/posts/thunks';

import { Post, Header, Sidebar } from '../../components';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const { data, loading, categories, authorsSelected, categoriesSelected } = useSelector(
    (state: ApplicationState) => state.posts,
  );

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fetchGetCategories());
    dispacth(fetchGetPosts());
  }, [dispacth]);

  const parseCategory = (id: number) => {
    const category = categories.find(category => category.id === id);

    if (!category) {
      return 'Outros';
    }

    return category.name;
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Header toggle={toggle} handleToggle={handleToggle} />
      <Content>
        <Sidebar toggle={toggle} handleToggle={handleToggle} />
        <main>
          <h1>Postagens</h1>
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
                    postDate={post.date}
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
