import React from 'react'
import PropType from 'prop-types'
import { useFormContext } from 'react-hook-form'
import { Form } from 'antd'
import _ from 'lodash'

const InputWrapper = ({
  name = undefined,
  label = '',
  children,
  formItemLayout = {
    labelAlign: 'left',
    labelCol: {
      xs: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
    },
  },
  colon = false,
}) => {
  const { errors, ...methods } = useFormContext()
  const error = _.get(errors, `[${name}].message`)

  return (
    <Form.Item
      {...formItemLayout}
      label={label}
      help={error}
      validateStatus={error && 'error'}
      colon={colon}
    >
      {children({ ...methods })}
    </Form.Item>
  )
}

InputWrapper.propTypes = {
  name: PropType.string,
  label: PropType.string,
  children: PropType.func,
  formItemLayout: PropType.object,
  colon: PropType.bool,
}
export default InputWrapper
