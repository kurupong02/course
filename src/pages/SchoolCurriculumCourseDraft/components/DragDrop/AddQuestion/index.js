import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { FiPlus } from 'react-icons/fi'
import _ from 'lodash'

import { DraftCourseContext } from '../../../DraftCourseContent/Context'
import authClient from '../../../../../utils/authClient'

import { AddQuestionButton } from './style'

const AddQuestion = ({ data }) => {
  const [state, setState] = useContext(DraftCourseContext)

  const addQuestion = async () => {
    const length = data[0].questions.length + 1
    const question = {
      answers: [],
      choices: [],
      correctScore: 1,
      number: length,
      priority: length,
      title: JSON.stringify({
        content: 'Question',
        delta: { ops: [] },
      }),
      type: 'choice question',
    }

    const res = await authClient.client
      .post(`/Worksheets/${data[0].id}/questions`, question)
      .then((res) => res.data)

    const clone = _.cloneDeep(state.data)
    const key = _.findKey(clone, { id: data[0].id })

    _.update(clone, `[${key}].questions[${length - 1}]`, () => {
      return res
    })
    setState({ ...state, data: clone })
  }

  return (
    <AddQuestionButton type="link" icon={<FiPlus />} onClick={addQuestion}>
      Add question
    </AddQuestionButton>
  )
}

AddQuestion.propTypes = {
  data: PropTypes.array,
}

export default AddQuestion
