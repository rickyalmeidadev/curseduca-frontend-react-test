import React from 'react';

interface Props {
  title: string;
  text: string;
  category?: string;
}

const Post: React.FC<Props> = ({ title, text, category }) => {
  return (
    <li>
      <h2>{title}</h2>
      <small>{category}</small>
      <p>{text}</p>
    </li>
  );
};

export default Post;
