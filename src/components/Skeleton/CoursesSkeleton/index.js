import React from 'react'
import _ from 'lodash'
import RowCard from '../../RowCard'
import { Card } from './style'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CoursesSkeleton = () => {
  const renderCard = () => {
    return (
      <Card>
        <SkeletonTheme  >
          <Skeleton height={180} />
        </SkeletonTheme>
        <div style={{ padding: '5px 10px 2px 10px' }} >
          {_.times(6).map((d, index)=> {
              return (
                <div key={index} style={{ margin: '10px' }} >
                <SkeletonTheme >
                  <Skeleton height={14} />
                </SkeletonTheme>
              </div>
              )
            })}
        </div>
      </Card>
    )
  }
  return (
    <RowCard
      data={_.times(8)}
      renderCard={renderCard}
    />
  )
}

export default CoursesSkeleton