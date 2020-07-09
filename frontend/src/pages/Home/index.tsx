import React from 'react';
import { useSelector } from 'react-redux';

import { ApplicationState } from '../../store';

import { Post, PostForm } from '../../components';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const store = useSelector((state: ApplicationState) => state);

  console.log(store.posts.data);
  return (
    <Container>
      <Content>
        <h1>Home</h1>
        <PostForm />
        <ul>
          <Post />
        </ul>
      </Content>
    </Container>
  );
};

export default Home;
