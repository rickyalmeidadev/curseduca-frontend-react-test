import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

import { ApplicationState } from '../../store';
import { NewPost, fetchAddPosts } from '../../store/posts/thunks';
import { Input, Textarea, Select, Button } from '..';
import { Form } from './styles';

interface NewPostForm {
  title: string;
  text: string;
  categoryId: number;
  date: string;
}

const initialFormData: NewPostForm = {
  title: '',
  text: '',
  categoryId: 1,
  date: moment().format('YYYY-MM-DD'),
};

type PostFormFields = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

const PostForm: React.FC = () => {
  const [formData, setFormData] = useState(initialFormData);

  const history = useHistory();

  const { auth, posts } = useSelector((state: ApplicationState) => state);

  const dispatch = useDispatch();

  const handleChange = (event: ChangeEvent<PostFormFields>) => {
    let { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTextarea = (text: string) => {
    setFormData({ ...formData, text });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const { title, text, categoryId, date } = formData;
    const { id } = auth.user;

    const data: NewPost = {
      title,
      text,
      id_category: Number(categoryId),
      id_user: id,
      date: new Date(date),
    };

    await dispatch(fetchAddPosts(data));

    const { loading, error } = posts;

    if (!loading && !error) {
      setFormData(initialFormData);
      history.push('/');
    }
  };

  const handleHistory = () => {
    history.push('/');
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
      <Textarea name="text" label="Corpo" handleTextarea={handleTextarea} value={formData.text} />
      <Select onChange={handleChange} value={formData.categoryId} />
      <Input
        type="date"
        name="date"
        label="Agendar"
        placeholder={formData.date}
        min={new Date().toISOString().split('T')[0]}
        onChange={handleChange}
        value={formData.date}
      />
      <Button primary type="submit">
        Postar
      </Button>
      <Button type="button" onClick={handleHistory}>
        Cancelar
      </Button>
    </Form>
  );
};

export default PostForm;
