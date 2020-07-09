import React from 'react';

import { Post, PostForm } from '../../components';

import { Container, Content } from './styles';

const Home: React.FC = () => {
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
