import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'antd'
import { Controller } from 'react-hook-form'

import InputWrapper from './InputWrapper'
const TextInput = ({
  name,
  label,
  type = 'text',
  formItemOptions = {},
  onSubmit,
  ...props
}) => {
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      {({ control }) => {
        return (
          <Controller
            as={<Input type={type} {...props} />}
            control={control}
            name={name}
            onChange={([value]) => {
              onSubmit && onSubmit(value.target.value, name)
              return value
            }}
          />
        )
      }}
    </InputWrapper>
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  formItemOptions: PropTypes.object,
  onSubmit: PropTypes.func,
}

export default TextInput
