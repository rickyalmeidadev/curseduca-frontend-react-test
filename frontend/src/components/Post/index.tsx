import React from 'react';

import { useDispatch } from 'react-redux';
import { fetchDeletePosts } from '../../store/posts/thunks';

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
    <li>
      <h2>{title}</h2>
      <small>{category}</small>
      <p>{text}</p>
      <button onClick={handleDelete}>Apagar</button>
    </li>
  );
};

export default Post;
