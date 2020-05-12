import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'
import { Collapse, Divider, Typography } from 'antd'
import { IoMdMore } from 'react-icons/io'
import { BsFillCaretRightFill } from 'react-icons/bs'
import { RiEditLine } from 'react-icons/ri'

import QuizForm from '../Form'
import QuoteList from '../QuoteList'
import AddQuestionButton from '../AddQuestion'

import { Container, Header, Drag, Card } from './style'
const { Text, Paragraph } = Typography
const { Panel } = Collapse
const Column = ({
  title,
  index,
  quotes,
  collapseKey,
  beforeCapture,
  mousePosition,
  data,
  lable,
}) => {
  const [activeKey, setActiveKey] = useState([])
  const [activeKeyOld, setActiveKeyOld] = useState([])
  const [top, setTop] = useState(0)

  useEffect(() => {
    if (beforeCapture) {
      setTop(mousePosition.clientY - 20)
    }
  }, [beforeCapture])

  const onChangeCollapse = (value) => {
    setActiveKey(value)
    setActiveKeyOld(value)
  }

  const renderHeader = (provided) => {
    return (
      <div style={{ display: 'flex' }}>
        <Drag
          className="dragging"
          isDragging={collapseKey === title}
          {...provided.dragHandleProps}
        >
          <div className="more">
            <IoMdMore />
            <IoMdMore />
          </div>
        </Drag>
        <RiEditLine
          style={{
            color: '#2b4df9',
            margin: '5px 10px 0 0',
          }}
        />
        <Paragraph ellipsis={{ rows: 1 }} style={{ marginBottom: 0 }}>
          {`${lable} : ${data[0].name}`}
        </Paragraph>
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
              isDragging={snapshot.isDragging}
              {...provided.draggableProps}
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
                    }}
                  />
                )}
                style={{
                  height: snapshot.isDragging ? 46 : '100%',
                }}
                onChange={onChangeCollapse}
                activeKey={[title]}
              >
                <Panel key={title} header={renderHeader(provided)}>
                  <div>
                    <Divider style={{ margin: '5px 0 24px 0', height: 2 }} />
                    <Card>
                      <QuizForm defaultValues={data[0]} />
                      <br />
                      <Text className="label">Question(s)</Text>
                      <br />
                      <QuoteList listId={title} quotes={quotes} top={top} />
                      <AddQuestionButton data={data} />
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

Column.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  quotes: PropTypes.array,
  collapseKey: PropTypes.string,
  beforeCapture: PropTypes.bool,
  mousePosition: PropTypes.object,
  data: PropTypes.array,
  lable: PropTypes.string,
}

export default Column
