import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Steps, Button, Row, Col, Affix } from 'antd'

const { Step } = Steps

const StepsTaskVertical = ({ steps, defaultCurrent }) => {
  const [current, setCurrent] = useState(defaultCurrent)

  const renderGroupButton = () => {
    return (
      <div className="steps-action" style={{ textAlign: 'end' }}>
        {current < steps.length - 1 && (
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => setCurrent(current + 1)}
          >
            Next
          </Button>
        )}
        {current > 0 && (
          <Button onClick={() => setCurrent(current - 1)}>Previous</Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
            Create
          </Button>
        )}
      </div>
    )
  }

  return (
    <div>
      <Row gutter={[16]}>
        <Col xs={24} md={8} lg={6} xl={6}>
          <Affix offsetTop={90}>
            <Steps current={current} direction="vertical" size="small">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </Affix>
        </Col>
        <Col xs={24} md={16} lg={18} xl={18}>
          <div>
            <div className="steps-content">{steps[current].content}</div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

StepsTaskVertical.defaultProps = {
  defaultCurrent: 0,
}

StepsTaskVertical.propTypes = {
  steps: PropTypes.array,
  current: PropTypes.number,
  prev: PropTypes.func,
  defaultCurrent: PropTypes.number,
}

export default StepsTaskVertical
