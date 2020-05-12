import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'
import { IoMdMore } from 'react-icons/io'
import _ from 'lodash'

import { DraftCourseContext } from '../../../DraftCourseContent/Context'

import { Container, Header, Content, Drag, Details, Line } from './style'

const { Text } = Typography

function QuoteItem(props) {
  const { quote, isDragging, provided, top, index } = props
  const [state, setState] = useContext(DraftCourseContext)

  const title = JSON.parse(quote.title)

  const IconMore = () => {
    return (
      <div className="more">
        <IoMdMore />
        <IoMdMore />
      </div>
    )
  }

  return (
    <Container>
      <Header
        onClick={() =>
          setState({ ...state, drawerVisible: true, questionId: quote.id })
        }
        isSelect={state.questionId === quote.id}
        isDragging={isDragging}
        ref={provided.innerRef}
        {...provided.draggableProps}
        data-is-dragging={isDragging}
        data-testid={quote.id}
        data-index={index}
        aria-label={`${quote.name}`}
        style={{
          ...provided.draggableProps.style,
          top,
        }}
      >
        <Content>
          <Drag
            className="dragging"
            isDragging={isDragging}
            {...provided.dragHandleProps}
          >
            {IconMore()}
          </Drag>
          {`${index + 1}. ${_.get(
            title,
            'delta.ops[0].insert',
            title.content
          )}`}
          <Details className="details" isDragging={isDragging}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Details &gt;
            </Text>
          </Details>
          <Line className="line" />
        </Content>
      </Header>
    </Container>
  )
}

QuoteItem.propTypes = {
  top: PropTypes.number,
  quote: PropTypes.object,
  isDragging: PropTypes.bool,
  provided: PropTypes.object,
  index: PropTypes.number,
}

export default QuoteItem
