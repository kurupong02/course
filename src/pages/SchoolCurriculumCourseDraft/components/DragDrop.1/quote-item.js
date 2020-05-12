import React from 'react'
import styled from '@emotion/styled'
import { Collapse } from 'antd'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { IoMdMore } from 'react-icons/io'

const Container = styled.div`
  background: #dedede;
  border-radius: 6px;
`

const Content = styled.div`
  // display: flex;
  width: 100%;
  &:hover .dragging {
    display: ${({ show }) => (show ? 'block' : 'block')};
  }
  // cursor: pointer;
`

const Drag = styled.div`
  padding: 0px;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 14px;
  font-size: 18px;
  color: #a6a6a6;
  display: ${({ isDragging }) => (isDragging ? 'block' : 'none')};
`

const { Panel } = Collapse

function getStyle(provided, style) {
  if (!style) {
    return provided.draggableProps.style
  }

  return {
    ...provided.draggableProps.style,
    ...style,
  }
}

function QuoteItem(props) {
  const { quote, isDragging, isGroupedOver, provided, top, index } = props

  const onChangeCollapse = (value) => {
    // setActiveKey(value)
    // setActiveKeyOld(value)
  }

  const IconMore = () => {
    return (
      <div className="more">
        <IoMdMore />
        <IoMdMore />
      </div>
    )
  }

  return (
    <Container
      isDragging={isDragging}
      isGroupedOver={isGroupedOver}
      ref={provided.innerRef}
      {...provided.draggableProps}
      data-is-dragging={isDragging}
      data-testid={quote.id}
      data-index={index}
      aria-label={`${quote.name}`}
      style={{
        ...provided.draggableProps.style,
        height: isDragging ? 46 : '100%',
        top,
        // margin: collapseKey !== '' ? '0' : '10px 0',
      }}
    >
      <Content>
        <Collapse
          expandIcon={({ isActive }) => (
            <BsFillCaretRightFill
              style={{
                transform: `rotate(${isActive ? 90 : 0}deg)`,
                transitionDuration: '0.3s',
              }}
            />
          )}
          style={{
            height: isDragging ? 46 : '100%',
          }}
          onChange={onChangeCollapse}
          activeKey={isDragging ? [] : [index]}
        >
          <Panel
            key={index}
            header={
              <div>
                <Drag
                  className="dragging"
                  isDragging={true}
                  {...provided.dragHandleProps}
                >
                  {IconMore()}
                </Drag>
                {index}
              </div>
            }
          >
            {/* <QuoteList listId={title} listType="QUOTE" quotes={quotes} /> */}
          </Panel>
        </Collapse>
      </Content>
    </Container>
  )
}

export default QuoteItem
