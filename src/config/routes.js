import React from 'react'

import AuthLayout from '../layouts/AuthLayout'
import AppLayout from '../layouts/AppLayout'

import Home from '../pages/Common/Home'
import Signin from '../pages/Auth/Signin'
import StudentHome from '../pages/StudentHome/routes'
import StudentMyCourse from '../pages/StudentMyCourse/routes'

import SchoolCurriculum from '../pages/SchoolCurriculum/routes'
import SchoolCurriculumCourseDraft from '../pages/SchoolCurriculumCourseDraft/routes'

import SchoolMember from '../pages/SchoolMember/routes'

import Exception from '../pages/Exception'
const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/forbidden',
    exact: true,
    component: () => <Exception code="403" />,
  },
  {
    path: '/notFound',
    exact: true,
    component: () => <Exception code="404" />,
  },
  {
    component: AuthLayout,
    routes: [
      {
        path: '/signin',
        exact: true,
        component: Signin,
      },
    ],
  },
  {
    component: AppLayout,
    routes: [
      ...StudentHome,
      ...StudentMyCourse,
      ...SchoolCurriculumCourseDraft,
      ...SchoolCurriculum,
      ...SchoolMember,
    ],
  },
  {
    component: () => <Exception code="404" />,
  },
]

const formattedRoute = routes.map((route) => {
  if (route.routes) {
    route.path = route.routes.map((r) => r.path)
  }
  return route
})

export default formattedRoute
