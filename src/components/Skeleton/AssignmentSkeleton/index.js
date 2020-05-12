import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'antd';

import RowCard from '../../RowCard'
import { Card } from './style'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const AssignmentSkeleton = () => {
  const renderCard = () => {
    return (
      <Card>
        <Row>
          <Col xs={24} sm={16} style={{ padding:10 }}>
            <div>
              {_.times(4).map((d, index) => {
                return (
                  <div key={index} style={{ margin: '10px' }} >
                    <SkeletonTheme >
                      <Skeleton height={14} />
                    </SkeletonTheme>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Card>
    )
  }
  return (
    <RowCard
      data={_.times(9)}
      renderCard={renderCard}
    />
  )
}

export default AssignmentSkeleton