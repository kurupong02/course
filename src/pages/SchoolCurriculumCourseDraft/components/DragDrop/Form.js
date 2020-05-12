import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import { Form, TextInput } from '../../../../components/Form'
import useDebounce from '../../../../utils/useDebounce'
import authClient from '../../../../utils/authClient'

import { DraftCourseContext } from '../../DraftCourseContent/Context'

const QuizForm = ({ defaultValues }) => {
  const [state, setState] = useContext(DraftCourseContext)
  const debouncedSearchTerm = useDebounce(defaultValues, 1000)

  useEffect(() => {
    if (debouncedSearchTerm) {
      updateAssessment(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const updateAssessment = async (values) => {
    await authClient.client
      .put(`/Subjects/${values.subjectId}/assessments/${values.id}`, values)
      .then((res) => res.data)
  }

  const onSubmit = (data, name) => {
    setState({ ...state })
    const clone = _.cloneDeep(state.data)

    const index = _.findIndex(clone, (o) => {
      return o.id === defaultValues.id
    })

    _.update(clone, `[${index}][${name}]`, () => data)
    setState({ ...state, data: clone })
  }

  return (
    <Form defaultValues={defaultValues} onSubmit={onSubmit}>
      <TextInput
        name="name"
        label="Title"
        placeholder="Enter title"
        onSubmit={onSubmit}
      />
      <TextInput
        name="description"
        label="Description"
        placeholder="Enter description"
        onSubmit={onSubmit}
      />
    </Form>
  )
}

QuizForm.propTypes = {
  defaultValues: PropTypes.object,
}

export default QuizForm
