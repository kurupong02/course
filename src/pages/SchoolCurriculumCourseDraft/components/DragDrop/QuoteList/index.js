import React from 'react'
import PropTypes from 'prop-types'
import { Draggable, Droppable } from 'react-beautiful-dnd'

import QuoteItem from '../QuoteItem'

const InnerQuoteList = React.memo(function InnerQuoteList({ quotes, top }) {
  return quotes.map((quote, index) => {
    return (
      <Draggable key={`${quote.id}`} draggableId={`${quote.id}`} index={index}>
        {(dragProvided, dragSnapshot) => (
          <QuoteItem
            key={`${quote.id}`}
            quote={quote}
            isDragging={dragSnapshot.isDragging}
            isGroupedOver={Boolean(dragSnapshot.combineTargetFor)}
            provided={dragProvided}
            index={index}
            top={top}
          />
        )}
      </Draggable>
    )
  })
})

function InnerList(props) {
  const { quotes, dropProvided, listId, top } = props
  return (
    <div>
      <div ref={dropProvided.innerRef}>
        <InnerQuoteList quotes={quotes} listId={listId} top={top} />
        {dropProvided.placeholder}
      </div>
    </div>
  )
}

const QuoteList = ({ listId, quotes, top }) => {
  return (
    <Droppable droppableId={listId} type="QUOTE">
      {(dropProvided, dropSnapshot) => (
        <div
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
        </div>
      )}
    </Droppable>
  )
}

QuoteList.propTypes = {
  listId: PropTypes.string,
  top: PropTypes.number,
  quotes: PropTypes.array,
}

InnerList.propTypes = {
  listId: PropTypes.string,
  top: PropTypes.number,
  quotes: PropTypes.array,
  dropProvided: PropTypes.object,
}

InnerQuoteList.propTypes = {
  top: PropTypes.number,
  quotes: PropTypes.array,
}

export default QuoteList
