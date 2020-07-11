import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { NewPost, fetchAddPosts } from '../../store/posts/thunks';

import { Input, Textarea, Select, Button } from '..';
import { Form } from './styles';

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

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
      <Textarea name="text" label="Corpo" onChange={handleChange} value={formData.text}>
        <CKEditor
          editor={InlineEditor}
          onChange={(_: any, editor: any) => {
            handleTextarea(editor.getData());
          }}
        />
      </Textarea>
      <Select onChange={handleChange} value={formData.categoryId} />
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
