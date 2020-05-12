import React from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

import { Content } from './style'
const MainContent = ({ route }) => {
  return (
    <Content style={{ height: '100%' }}>
      <div className="content">{renderRoutes(route.routes)}</div>
    </Content>
  )
}

MainContent.propTypes = {
  route: PropTypes.object,
}

export default MainContent
