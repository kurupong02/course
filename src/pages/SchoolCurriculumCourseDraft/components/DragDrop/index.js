import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useMousePosition from '@react-hook/mouse-position'

import { DraftCourseContext } from '../../DraftCourseContent/Context'
import authClient from '../../../../utils/authClient'

import Column from './Column'

const DragDrop = ({ data, lable }) => {
  const [mousePosition, ref] = useMousePosition(0, 0, 30)
  const [collapseKey, setCollapseKey] = useState('')
  const [beforeCapture, setBeforeCapture] = useState(false)
  const [state, setState] = useContext(DraftCourseContext)

  const updateQuestions = async (values) => {
    const questions = values.questions.map(({ id }, index) => {
      return {
        id,
        priority: index + 1,
      }
    })
    await authClient.client
      .post(`/Worksheets/${values.id}/questionPriority`, { questions })
      .then((res) => res.data)
  }

  const onDragEnd = (result) => {
    setCollapseKey('')

    if (!result.destination) {
      return
    }

    const { source, draggableId, destination, type } = result

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    if (type === 'QUOTE') {
      const clone = _.cloneDeep(state.data)
      const key = _.findKey(clone, { id: source.droppableId })
      const sortData = _.sortBy(clone[key].questions, ['priority'])

      _.update(clone, `[${key}].questions`, () => {
        return sortData
      })

      const dataRemove = _.remove(clone[key].questions, (n) => {
        return n.id === draggableId
      })

      clone[key].questions.splice(destination.index, 0, ...dataRemove)

      const newQuestions = clone[key].questions.map((question, index) => {
        return { ...question, priority: index + 1, number: index + 1 }
      })

      _.update(clone, `[${key}].questions`, () => {
        return newQuestions
      })

      setState({ ...state, data: clone })
      updateQuestions(clone[key])
      return
    }
  }

  const board = (
    <Droppable droppableId="board" type="COLUMN" direction="vertical">
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {data.map((order, index) => (
              <Column
                key={order.id}
                index={index}
                title={order.id}
                quotes={_.sortBy(order.questions, ['priority'])}
                collapseKey={collapseKey}
                beforeCapture={beforeCapture}
                mousePosition={mousePosition}
                data={data}
                lable={lable}
              />
            ))}
            {provided.placeholder}
          </div>
        )
      }}
    </Droppable>
  )

  return (
    <div ref={ref}>
      <DragDropContext
        onBeforeCapture={(n) => {
          setBeforeCapture(true)
          setCollapseKey(n.draggableId)
        }}
        onBeforeDragStart={() => {
          setBeforeCapture(false)
        }}
        onDragEnd={onDragEnd}
      >
        {board}
      </DragDropContext>
    </div>
  )
}

DragDrop.propTypes = {
  data: PropTypes.array,
  lable: PropTypes.string,
}

export default DragDrop
