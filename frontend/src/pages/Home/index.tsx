import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from '../../store';
import { fetchGetPosts } from '../../store/posts/thunks';

import { Post, PostForm } from '../../components';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const { data, loading } = useSelector((state: ApplicationState) => state.posts);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fetchGetPosts());
  }, [dispacth]);

  return (
    <Container>
      <Content>
        <h1>Home</h1>
        <PostForm />
        <ul>{loading ? <span>Loading...</span> : data.map(post => <Post key={post.id} />)}</ul>
      </Content>
    </Container>
  );
};

export default Home;
