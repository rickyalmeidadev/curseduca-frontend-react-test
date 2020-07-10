import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Input, Textarea, Select } from '..';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { NewPost } from '../../store/posts/thunks';

interface NewPostForm {
  title: string;
  text: string;
  categoryId: number;
}

const initialFormData: NewPostForm = {
  title: '',
  text: '',
  categoryId: 1,
};

type PostFormFields = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const PostForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const { user } = useSelector((state: ApplicationState) => state.auth);

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<PostFormFields>) => {
    let { name, value } = event.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, text, categoryId } = formData;

    const data: NewPost = {
      title,
      text,
      id_category: categoryId,
      id_user: user.id,
      date: new Date(),
    };

    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        label="Título"
        onChange={handleChange}
        value={formData.title}
      />
      <Select onChange={handleChange} value={formData.categoryId} />
      <Textarea name="text" label="Corpo" onChange={handleChange} value={formData.text} />
      <button type="submit">Postar</button>
    </form>
  );
};

export default PostForm;
