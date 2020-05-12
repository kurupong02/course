import React, { useState } from 'react'
import styled from '@emotion/styled'
import arrayMove from 'array-move'
import _ from 'lodash'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import useMousePosition from '@react-hook/mouse-position'

import Column from './column'

const Container = styled.div`
  // border-left: 10px solid red;
  // border-radius: 10px;
  // box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
`

const DragDrop = ({ data, lock }) => {
  const [mousePosition, ref] = useMousePosition(0, 0, 30)
  const [ordered, setOrdered] = useState(data)
  const [collapseKey, setCollapseKey] = useState('')
  const [beforeCapture, setBeforeCapture] = useState(false)

  const onDragEnd = (result) => {
    setCollapseKey('')

    if (!result.destination) {
      return
    }

    const { source } = result
    const { destination } = result

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    if (result.type === 'COLUMN') {
      const newOrdered = arrayMove(ordered, source.index, destination.index)
      setOrdered(newOrdered)
      return
    }

    if (result.type === 'QUOTE') {
      const clone = _.cloneDeep(ordered)
      const newKey = _.findKey(clone, { name: destination.droppableId })
      const oldKey = _.findKey(clone, { name: source.droppableId })

      clone[newKey].data.splice(
        destination.index,
        0,
        clone[oldKey].data[source.index]
      )
      _.remove(clone[oldKey].data, (n, index) => {
        return index == source.index
      })
      setOrdered(clone)
      return
    }
  }

  const board = (
    <Droppable droppableId="board" type="COLUMN" direction="vertical">
      {(provided) => {
        return (
          <Container ref={provided.innerRef} {...provided.droppableProps}>
            {ordered.map((order, index) => (
              <Column
                key={order.name}
                index={index}
                title={order.name}
                quotes={order.data}
                collapseKey={collapseKey}
                beforeCapture={beforeCapture}
                mousePosition={mousePosition}
                lock={lock}
              />
            ))}
            {provided.placeholder}
          </Container>
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

export default DragDrop
