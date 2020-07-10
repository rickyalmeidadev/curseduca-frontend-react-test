import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchDeletePosts } from '../../store/posts/thunks';
import { Card, Title, Category, Text } from './styles';
import { Button } from '..';

interface Props {
  id: number;
  title: string;
  text: string;
  category?: string;
}

const Post: React.FC<Props> = ({ title, text, category, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(fetchDeletePosts(id));
  };

  return (
    <Card>
      <Title>{title}</Title>
      <Category>{category}</Category>
      <Text>{text}</Text>
      <Button onClick={handleDelete}>Apagar</Button>
    </Card>
  );
};

export default Post;
