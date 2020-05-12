import React from 'react'

import { Button } from 'antd'

import InputWrapper from './InputWrapper'

const SubmitButton = ({
  label,
  formItemOptions = {},
  children = 'Submit',
  ...rest
}) => {
  return (
    <InputWrapper label={label} {...formItemOptions}>
      <Button
        type="primary"
        htmlType="submit"
        {...rest}
        style={{ marginLeft: 10 }}
      >
        {children}
      </Button>
    </InputWrapper>
  )
}

export default SubmitButton
