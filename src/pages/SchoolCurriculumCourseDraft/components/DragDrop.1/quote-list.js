// @flow
import React from 'react'
import styled from '@emotion/styled'

import { Draggable, Droppable } from 'react-beautiful-dnd'

import QuoteItem from './quote-item'

const Wrapper = styled.div`
  transition: background-color 0.2s ease, opacity 0.1s ease;
`

const DropZone = styled.div``

const Container = styled.div``

const InnerQuoteList = React.memo(function InnerQuoteList(props) {
  return props.quotes.map((quote, index) => {
    return (
      <Draggable
        key={`${props.listId}-${index.toString()}`}
        draggableId={`${props.listId}-${index.toString()}`}
        index={index}
      >
        {(dragProvided, dragSnapshot) => (
          <QuoteItem
            key={`${props.listId}-${index.toString()}`}
            quote={quote}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
            index={index}
            top={props.top}
          />
        )}
      </Draggable>
    )
  })
})

function InnerList(props) {
  const { quotes, dropProvided, listId, top } = props
  return (
    <Container>
      <DropZone ref={dropProvided.innerRef}>
        <InnerQuoteList quotes={quotes} listId={listId} top={top} />
        {dropProvided.placeholder}
      </DropZone>
    </Container>
  )
}

export default function QuoteList(props) {
  const { isCombineEnabled, listId, listType, style, quotes, top } = props
  return (
    <Droppable
      droppableId={listId}
      type={listType}
      isCombineEnabled={isCombineEnabled}
    >
      {(dropProvided, dropSnapshot) => (
        <Wrapper
          style={style}
          isDraggingOver={dropSnapshot.isDraggingOver}
          isDraggingFrom={Boolean(dropSnapshot.draggingFromThisWith)}
          {...dropProvided.droppableProps}
        >
          <InnerList
            quotes={quotes}
            dropProvided={dropProvided}
            listId={listId}
            top={top}
          />
        </Wrapper>
      )}
    </Droppable>
  )
}
