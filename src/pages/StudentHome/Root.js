import React from 'react'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'

import PageHeaderLayout from '../../layouts/PageHeaderLayout'

const tabs = [
  { name: 'Courses', path: 'courses' },
  { name: 'Schools', path: 'schools' },
]
const Root = ({ route }) => {
  return (
    <div>
      <PageHeaderLayout title="All Browse" tabs={tabs}>
        {renderRoutes(route.routes)}
      </PageHeaderLayout>
    </div>
  )
}

Root.propTypes = {
  route: PropTypes.object,
}

export default Root
