import React from 'react';

import { PostForm, Header } from '../../components';
import { Container, Content } from './styles';

const AddPost: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <PostForm />
      </Content>
    </Container>
  );
};

export default AddPost;
