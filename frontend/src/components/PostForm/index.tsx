import React from 'react';

import { Input, Textarea, Select } from '..';

const PostForm: React.FC = () => {
  return (
    <form>
      <Input type="text" name="title" label="Título" />
      <Select />
      <Textarea name="body" label="Corpo" />
    </form>
  );
};

export default PostForm;
