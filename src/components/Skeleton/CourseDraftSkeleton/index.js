import React from 'react'
import _ from 'lodash'
import { Row, Col } from 'antd'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import CourseFormSkeleton from '../CourseFormSkeleton'
const CourseDraftSkeleton = () => {
  return (
    <div>
      <Row gutter={[16]}>
        <Col xs={24} md={8} lg={6} xl={6}>
          <div>
            {_.times(5).map((d, index) => {
              return (
                <div key={index} style={{ marginBottom: 30 }}>
                  <SkeletonTheme>
                    <Skeleton height={14} />
                  </SkeletonTheme>
                </div>
              )
            })}
          </div>
        </Col>
        <Col xs={24} md={16} lg={18} xl={18}>
          <CourseFormSkeleton />
        </Col>
      </Row>
    </div>
  )
}

export default CourseDraftSkeleton
