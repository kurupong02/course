import React from 'react'
import {
  InputWrapper
} from '../Form'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Controller } from "react-hook-form";

import ImagePicker from './imagePicker'

Quill.register('modules/ImagePicker', ImagePicker)

const Editor = ({
  name,
  label,
  type = 'text',
  formItemOptions = {},
  ...rest
}) => {

  const handleChange =(content, editor, setValue, triggerValidation) => {
    const data = JSON.stringify(
      {
        content,
        delta: editor.getContents(),
      }
    )
    setValue(name, data);
    triggerValidation(name);
    if( content === '<p><br></p>'){
      setValue(name, '');
      triggerValidation(name);
    }
  }

  const RenderQuill = ({ setValue , triggerValidation}) => {
    return (
      <ReactQuill 
        onChange={(content, delta, source, editor)=> handleChange(content, editor, setValue , triggerValidation)}
      /> 
    )
  }
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      {({ control, ...methods }) => {
        return (
          <Controller
            as={<RenderQuill {...methods}/> }
            control={control}
            name={name}
          />
      )}}
    </InputWrapper>
  )
}

export default Editor
