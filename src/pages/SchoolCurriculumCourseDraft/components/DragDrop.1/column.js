import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import { Draggable } from 'react-beautiful-dnd'
import { Collapse, Divider } from 'antd'
import _ from 'lodash'
import { IoMdMore } from 'react-icons/io'
import { BsFillCaretRightFill } from 'react-icons/bs'
import useMousePosition from '@react-hook/mouse-position'

import QuizForm from './Form'
import QuoteList from './quote-list'

const { Panel } = Collapse

const Container = styled.div`
  background: #dedede;
  border-radius: 6px;
  .more > :last-child {
    position: relative;
    right: 13px;
  }
`
const Header = styled.div`
  background: #fff;
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border-radius: ${({ isDragging }) => (isDragging ? 6 : 0)}px;
  border: ${({ isDragging }) => (isDragging ? 1 : 0)}px solid #d9d9d9;
  &:hover .dragging {
    display: ${({ show }) => (show ? 'block' : 'none')};
  }
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

const Card = styled.div`
  border-top: 8px solid #e8ecee;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  min-height: 1px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(21, 27, 38, 0.15);
  padding: 15px;
`

const Column = ({
  title,
  index,
  quotes,
  collapseKey,
  beforeCapture,
  mousePosition,
  lock,
}) => {
  const [activeKey, setActiveKey] = useState([])
  const [activeKeyOld, setActiveKeyOld] = useState([])
  const [top, setTop] = useState(0)

  useEffect(() => {
    if (!_.isEmpty(activeKeyOld)) {
      setActiveKey(activeKeyOld)
    }
    if (collapseKey === title) {
      setActiveKey([])
    }
  }, [collapseKey])

  useEffect(() => {
    if (beforeCapture) {
      setTop(mousePosition.clientY - 20)
    }
  }, [beforeCapture])

  const onChangeCollapse = (value) => {
    setActiveKey(value)
    setActiveKeyOld(value)
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
    <Container>
      <Draggable draggableId={title} index={index}>
        {(provided, snapshot) => {
          return (
            <Header
              ref={provided.innerRef}
              {...provided.draggableProps}
              isDragging={snapshot.isDragging}
              show={collapseKey === '' && !lock}
              style={{
                ...provided.draggableProps.style,
                height: collapseKey === title ? 46 : '100%',
                top,
                margin: collapseKey !== '' ? '0' : '10px 0',
              }}
            >
              <Collapse
                bordered={false}
                expandIcon={({ isActive }) => (
                  <BsFillCaretRightFill
                    style={{
                      transform: `rotate(${isActive ? 90 : 0}deg)`,
                      transitionDuration: '0.3s',
                    }}
                  />
                )}
                style={{
                  height: snapshot.isDragging ? 46 : '100%',
                }}
                onChange={onChangeCollapse}
                activeKey={activeKey}
              >
                <Panel
                  key={title}
                  header={
                    <div>
                      <Drag
                        className="dragging"
                        isDragging={collapseKey === title}
                        {...provided.dragHandleProps}
                      >
                        {IconMore()}
                      </Drag>
                      {title}
                    </div>
                  }
                >
                  <div>
                    <Divider style={{ margin: '5px 0 24px 0', height: 2 }} />
                    <Card>
                      <QuizForm onSubmit={() => null} />
                      <QuoteList
                        listId={title}
                        listType="QUOTE"
                        quotes={quotes}
                        top={top}
                      />
                    </Card>
                  </div>
                </Panel>
              </Collapse>
            </Header>
          )
        }}
      </Draggable>
    </Container>
  )
}
export default Column
