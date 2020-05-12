import React from 'react'

import Exception from '../Exception'

import Root from './Root'
import Courses from './Courses'
import Schools from './Schools'

const basePath = '/student/my-course'
const Route = [
  {
    path: basePath,
    component: Root,
    routes: [
      {
        path: `${basePath}/courses`,
        exact: true,
        component: Courses,
      },
      {
        path: `${basePath}/schools`,
        exact: true,
        component: Schools,
      },
      {
        component: () => <Exception code="404" />,
      },
    ],
  },
]

export default Route
