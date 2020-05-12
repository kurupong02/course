import React from 'react'

import Exception from '../Exception'

import Root from './Root'
import Courses from './Courses'
// import Assigned from './Assigned'

const basePath = `/schools/:schoolId/curriculum`
const profileRoute = [
  {
    path: basePath,
    component: Root,
    routes: [
      {
        path: `${basePath}/courses`,
        exact: true,
        component: Courses,
      },
      // {
      //   path: `${basePath}/assigned`,
      //   exact: true,
      //   component: Assigned,
      // },
      {
        component: () => <Exception code="404" />,
      },
    ],
  },
]

export default profileRoute
