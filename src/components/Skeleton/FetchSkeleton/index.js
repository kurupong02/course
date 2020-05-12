import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import _ from 'lodash'

const SchoolSkeleton = () => {
  return (
    <div>
        <div style={{ marginTop: 30 }}>
          {_.times(4).map((d, index)=> {
            return (
              <div key={index} style={{ margin: '10px' }} >
              <SkeletonTheme >
                <Skeleton height={14} />
              </SkeletonTheme>
            </div>
            )
          })}
        </div>
      </div>
  )
}

export default SchoolSkeleton