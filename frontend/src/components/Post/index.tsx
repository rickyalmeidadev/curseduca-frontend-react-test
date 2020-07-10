import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchDeletePosts } from '../../store/posts/thunks';

import { Card, Title, Category, Text, Header } from './styles';

import deleteIcon from '../../assets/delete-icon.png';

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
      <Header>
        <Title>{title}</Title>
        <img src={deleteIcon} alt="Deletar" onClick={handleDelete} />
      </Header>
      <Category>{category}</Category>
      <Text>{text}</Text>
    </Card>
  );
};

export default Post;
