import React from 'react'
import { renderRoutes } from 'react-router-config'

import PageHeaderLayout from '../../layouts/PageHeaderLayout'

const tabs = [
  { name: 'School Courses', path: 'courses' },
  { name: 'Assigned School', path: 'assigned' },
]
const Root = ({ route }) => {
  return (
    <div>
      <PageHeaderLayout title="My Course" tabs={tabs}>
        {renderRoutes(route.routes)}
      </PageHeaderLayout>
    </div>
  )
}

export default Root
