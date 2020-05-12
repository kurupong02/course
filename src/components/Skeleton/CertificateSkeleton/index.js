import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'antd';

import RowCard from '../../RowCard'
import { Card } from './style'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CertificateSkeleton = () => {
  const renderCard = () => {
    return (
      <Card>
        <Row>
          <Col xs={24} sm={8}>
            <SkeletonTheme  >
              <Skeleton height={180} />
            </SkeletonTheme>
          </Col>
          <Col xs={24} sm={16} style={{ padding: 16 }}>
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
      xs={24} 
      sm={24} 
      md={24} 
      lg={12} 
      xl={8}
      data={_.times(9)}
      renderCard={renderCard}
    />
  )
}

export default CertificateSkeleton