import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'
import { Controller } from 'react-hook-form'

import InputWrapper from './InputWrapper'

const { Option } = Select
const SelectInput = ({
  name,
  label,
  formItemOptions = {
    labelCol: {
      xs: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      lg: { span: 12 },
    },
  },
  options = [],
  onChange,
  resetValueName,
  ...props
}) => {
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      {({ control }) => {
        return (
          <Controller
            as={
              <Select {...props}>
                {options.map((option, index) => {
                  return (
                    <Option key={index} value={option.id}>
                      {option.name}
                    </Option>
                  )
                })}
              </Select>
            }
            onChange={([selected]) => {
              onChange && onChange(selected)
              resetValueName && control.setValue([{ [resetValueName]: null }])
              return selected
            }}
            control={control}
            name={name}
          />
        )
      }}
    </InputWrapper>
  )
}

SelectInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  formItemOptions: PropTypes.object,
  options: PropTypes.array,
  onChange: PropTypes.func,
  resetValueName: PropTypes.string,
}
export default SelectInput
