import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Tooltip } from 'antd'
import _ from 'lodash'

import { GroupIconStyle } from './style'

const GroupIcon = ({ size, data, n, ...props }) => {
  const newData = _.slice(data, 0, n)
  const other = _.slice(data, n)
  const nIcon = _.size(newData) + parseInt(_.isEmpty(other) ? 0 : 1)
  const width = nIcon * (size - 10)
  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <GroupIconStyle height={size} width={width} {...props}>
        {newData.map(({ image, name }, index) => {
          return (
            <Tooltip key={index} title={name}>
              <Avatar
                size={size}
                style={{
                  left: index * (size - 10),
                }}
                src={image}
              />
            </Tooltip>
          )
        })}
        {!_.isEmpty(other) && (
          <Avatar
            size={size}
            style={{
              left: n * (size - 10),
            }}
          >
            +{_.size(other)}
          </Avatar>
        )}
      </GroupIconStyle>
    </div>
  )
}

GroupIcon.propTypes = {
  size: PropTypes.number,
  data: PropTypes.array,
  n: PropTypes.number,
}

GroupIcon.defaultProps = {
  size: 40,
  n: 3,
}

export default GroupIcon
