import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDeletePosts } from '../../store/posts/thunks';
import { ApplicationState } from '../../store';

import { Card, Title, Category, Text, Header } from './styles';

import deleteIcon from '../../assets/delete-icon.png';

import ReactHtmlParser from 'react-html-parser';

interface Props {
  id: number;
  title: string;
  text: string;
  category?: string;
  owner: number;
}

const Post: React.FC<Props> = ({ title, text, category, id, owner }) => {
  const { user } = useSelector((state: ApplicationState) => state.auth);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(fetchDeletePosts(id));
  };

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        {user.id === owner && <img src={deleteIcon} alt="Deletar" onClick={handleDelete} />}
      </Header>
      <Category>{category}</Category>
      <hr />
      <Text>{ReactHtmlParser(text)}</Text>
    </Card>
  );
};

export default Post;
