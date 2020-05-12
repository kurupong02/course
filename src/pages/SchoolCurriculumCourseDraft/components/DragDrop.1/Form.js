import React from 'react'

import { Form, TextInput } from '../../../../components/Form'
const QuizForm = ({ defaultValues, onSubmit }) => {
  return (
    <Form defaultValues={defaultValues} onSubmit={onSubmit}>
      <TextInput
        name="name"
        label="Title"
        placeholder="Enter title"
        submit
        onSubmit={onSubmit}
      />
      <TextInput
        name="Description"
        label="Description"
        placeholder="Enter description"
        submit
        onSubmit={onSubmit}
      />
    </Form>
  )
}

export default QuizForm
