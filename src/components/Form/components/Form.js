import React from 'react'
import PropType from 'prop-types'
import { useForm, FormContext } from 'react-hook-form'
import * as yup from 'yup'

const Form = ({
  children,
  onSubmit,
  defaultValues,
  validationSchema = yup.object({}),
}) => {
  const methods = useForm({
    defaultValues,
    validationSchema,
  })

  const handleSubmit = (data) => {
    onSubmit(data)
  }

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>{children}</form>
    </FormContext>
  )
}

Form.propTypes = {
  children: PropType.node,
  onSubmit: PropType.func,
  defaultValues: PropType.object,
  validationSchema: PropType.object,
}

export default Form
