import React from 'react'
import { Collapse } from 'antd'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { FiEdit3 } from 'react-icons/fi'

import Quizs from '../DragDrop'

import QuizForm from './Form'
import { CollapseCustom } from './style'

const { Panel } = Collapse

const Quiz = ({}) => {
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <CollapseCustom
      color="red"
      expandIcon={({ isActive }) => (
        <BsFillCaretRightFill
          style={{
            transform: `rotate(${isActive ? 90 : 0}deg)`,
            transitionDuration: '0.3s',
          }}
        />
      )}
    >
      <Panel
        header={
          <div>
            <FiEdit3 style={{ marginRight: 10 }} />
            Pre-Test :{' '}
          </div>
        }
      >
        <QuizForm onSubmit={onSubmit} />
        <Quizs />
        {/* <QuoteList listId={'pe-test'} listType="QUOTE" quotes={[]} /> */}
      </Panel>
    </CollapseCustom>
  )
}

export default Quiz
