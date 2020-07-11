import React, { memo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDeletePosts } from '../../store/posts/thunks';
import { ApplicationState } from '../../store';

import { Card, Title, Info, Header, Author } from './styles';

import deleteIcon from '../../assets/delete-icon.png';

import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

interface Props {
  id: number;
  title: string;
  text: string;
  category?: string;
  owner: number;
  postDate: any;
}

const Post: React.FC<Props> = ({ title, text, category, id, owner, postDate }) => {
  const { user } = useSelector((state: ApplicationState) => state.auth);
  const { authors } = useSelector((state: ApplicationState) => state.posts);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(fetchDeletePosts(id));
  };

  const parseAuthor = () => {
    const authorFound = authors.find(author => author.id === owner);
    if (authorFound) {
      return authorFound.email;
    } else {
      return 'Desconhecido';
    }
  };

  return (
    <Card>
      <Header>
        <Title>{title}</Title>
        {user.id === owner && <img src={deleteIcon} alt="Deletar" onClick={handleDelete} />}
      </Header>
      <Info>
        {category} - <Moment format="DD/MM/YYYY hh:mm">{postDate}</Moment>
      </Info>
      <hr />
      {ReactHtmlParser(text)}

      <Author>{parseAuthor()}</Author>
    </Card>
  );
};

export default memo(Post);
