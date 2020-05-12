import React from 'react'
import PropType from 'prop-types'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Controller } from 'react-hook-form'

import InputWrapper from '../InputWrapper'

import ImagePicker from './imagePicker'
import { Content } from './style'
Quill.register('modules/ImagePicker', ImagePicker)

const Editor = ({ name, label, formItemOptions = {}, minHeight, readOnly }) => {
  const getValue = (value) => {
    var data
    if (!value) {
      data = { content: '', delta: { ops: [] } }
    } else {
      data = JSON.parse(value)
    }
    if (readOnly) {
      return data.delta
    }
    return data.content
  }

  const handleChange = (content, editor, setValue, triggerValidation) => {
    const data = JSON.stringify({
      content,
      delta: editor.getContents(),
    })
    setValue(name, data)
    triggerValidation(name)
    if (content === '<p><br></p>') {
      setValue(name, '')
      triggerValidation(name)
    }
  }

  const RenderQuill = (form) => {
    const { setValue, triggerValidation, value } = form
    return (
      <Content minHeight={minHeight}>
        <ReactQuill
          readOnly={readOnly}
          value={getValue(value)}
          onChange={(content, delta, source, editor) =>
            handleChange(content, editor, setValue, triggerValidation)
          }
        />
      </Content>
    )
  }
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      {({ control, ...methods }) => {
        return (
          <Controller
            as={<RenderQuill {...methods} />}
            control={control}
            name={name}
          />
        )
      }}
    </InputWrapper>
  )
}
Editor.defaultProps = {
  minHeight: 150,
  readOnly: false,
}

Editor.propTypes = {
  name: PropType.string,
  label: PropType.string,
  formItemOptions: PropType.object,
  minHeight: PropType.number,
  readOnly: PropType.bool,
}

export default Editor
