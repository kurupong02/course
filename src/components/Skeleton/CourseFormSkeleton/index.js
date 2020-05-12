import React from 'react'
import _ from 'lodash'

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const CourseFormSkeleton = () => {
  return (
    <div>
      <SkeletonTheme>
        <Skeleton height={24} width={240} />
      </SkeletonTheme>
      <br />
      {_.times(15).map((d, index) => {
        return (
          <div key={index} style={{ marginBottom: 10 }}>
            <SkeletonTheme>
              <Skeleton height={14} />
            </SkeletonTheme>
          </div>
        )
      })}
    </div>
  )
}

export default CourseFormSkeleton
