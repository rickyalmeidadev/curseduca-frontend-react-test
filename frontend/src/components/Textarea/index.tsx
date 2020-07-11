import React, { TextareaHTMLAttributes } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

import { Label } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  handleTextarea(text: string): void;
}

const Textarea: React.FC<Props> = ({ name, label, children, handleTextarea, ...rest }) => {
  return (
    <Label htmlFor={name}>
      {label}
      <CKEditor
        editor={InlineEditor}
        onChange={(_: any, editor: any) => {
          handleTextarea(editor.getData());
        }}
      />
    </Label>
  );
};

export default Textarea;
