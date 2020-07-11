import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { Post as PostType } from '../../store/posts/types';
import { fetchGetPosts, fetchGetCategories } from '../../store/posts/thunks';

import { Post, Header, Sidebar, Button, Loading } from '../../components';

import { Container, Content, PostControls } from './styles';

const Home: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const history = useHistory();

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

  const applyFilterToPost = (post: PostType) => {
    const shouldFilter =
      (!authorsSelected.includes(post.id_user) && authorsSelected.length > 0) ||
      (!categoriesSelected.includes(post.id_category) && categoriesSelected.length > 0);

    return shouldFilter;
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleHistory = () => {
    history.push('/add');
  };

  return (
    <Container>
      <Header toggle={toggle} handleToggle={handleToggle} />
      <Content>
        <Sidebar toggle={toggle} handleToggle={handleToggle} />
        <main>
          <PostControls>
            <h1>Postagens</h1>
            <Button primary onClick={handleHistory}>
              Adicionar Post
            </Button>
          </PostControls>
          <ul>
            {loading ? (
              <Loading />
            ) : (
              data.map(post => {
                if (applyFilterToPost(post)) {
                  return null;
                }

                return (
                  <Post
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    text={post.text}
                    owner={post.id_user}
                    category={parseCategory(post.id_category)}
                    postDate={post.date}
                  />
                );
              })
            )}
          </ul>
        </main>
      </Content>
    </Container>
  );
};

export default Home;
