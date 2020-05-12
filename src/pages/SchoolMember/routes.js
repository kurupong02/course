import React from 'react'

import Exception from '../Exception'

import Root from './Root'
import Timeline from './Profile'
import Progress from './Progress'

const basePath = `/schools/:schoolId/member`
const profileRoute = [
  {
    path: basePath,
    component: Root,
    routes: [
      {
        path: `${basePath}/profile`,
        exact: true,
        component: Timeline,
      },
      {
        path: `${basePath}/progress`,
        exact: true,
        component: Progress,
      },
      {
        component: () => <Exception code="404" />,
      },
    ],
  },
]

export default profileRoute
