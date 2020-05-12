import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

const RowCard = ({ data, renderCard, span }) => {
  return (
    <div>
      <Row gutter={[25, 25]}>
        {data.map((d, index) => {
          return (
            <Col {...span} key={index}>
              {renderCard(d, index)}
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

RowCard.defaultProps = {
  span: {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 6,
  },
}

RowCard.propTypes = {
  data: PropTypes.array,
  span: PropTypes.object,
  renderCard: PropTypes.func,
}

export default RowCard
