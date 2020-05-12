import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import _ from 'lodash'

import RowCard from '../../RowCard'

import { Card } from './style'
const SchoolSkeleton = () => {
  const renderCard = () => {
    return (
      <Card>
        <Skeleton circle={true} height={110} width={110} />
        <div style={{ marginTop: 30 }}>
          {_.times(4).map((d, index) => {
            return (
              <div key={index} style={{ margin: '5px' }}>
                <SkeletonTheme>
                  <Skeleton height={14} />
                </SkeletonTheme>
              </div>
            )
          })}
        </div>
        <div
          style={{
            display: 'flex',
            margin: '15px 25px',
            justifyContent: 'center',
          }}
        >
          {_.times(3).map((d, index) => {
            return <Skeleton key={index} circle={true} height={40} width={40} />
          })}
        </div>
        <Skeleton height={45} width={180} />
      </Card>
    )
  }
  return <RowCard data={_.times(8)} renderCard={renderCard} />
}

export default SchoolSkeleton
