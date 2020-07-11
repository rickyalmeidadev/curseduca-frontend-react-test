import React, { useState, ChangeEvent, FormEvent } from 'react';

import { Input, Textarea, Select, Button } from '..';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { NewPost, fetchAddPosts } from '../../store/posts/thunks';
import { Form } from './styles';

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

  const { auth, posts } = useSelector((state: ApplicationState) => state);

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<PostFormFields>) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, text, categoryId } = formData;
    const { id } = auth.user;

    const data: NewPost = {
      title,
      text,
      id_category: Number(categoryId),
      id_user: id,
      date: new Date(),
    };

    await dispatch(fetchAddPosts(data));

    const { loading, error } = posts;

    if (!loading && !error) {
      setFormData(initialFormData);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        label="Título"
        onChange={handleChange}
        value={formData.title}
      />
      <Textarea name="text" label="Corpo" onChange={handleChange} value={formData.text} />
      <Select onChange={handleChange} value={formData.categoryId} />
      <Button primary type="submit">
        Postar
      </Button>
      <Button>Cancelar</Button>
    </Form>
  );
};

export default PostForm;
