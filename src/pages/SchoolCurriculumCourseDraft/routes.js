import React from 'react'

import Exception from '../Exception'

import Root from './Root'
import DraftCourseInformation from './DraftCourseInformation'
import DraftCourseContent from './DraftCourseContent'
import DraftCourseInstructor from './DraftCourseInstructor'
import DraftPricePromotion from './DraftPricePromotion'
import DraftSetting from './DraftSetting'

const basePath = `/schools/:schoolId/curriculum/courses/:courseId/draft`

const profileRoute = [
  {
    path: basePath,
    component: Root,
    routes: [
      {
        path: `${basePath}`,
        exact: true,
        component: () => <div />,
      },
      {
        path: `${basePath}/course-information`,
        exact: true,
        component: DraftCourseInformation,
      },
      {
        path: `${basePath}/course-content`,
        exact: true,
        component: DraftCourseContent,
      },
      {
        path: `${basePath}/course-instructor`,
        exact: true,
        component: DraftCourseInstructor,
      },
      {
        path: `${basePath}/price-promotion`,
        exact: true,
        component: DraftPricePromotion,
      },
      {
        path: `${basePath}/setting`,
        exact: true,
        component: DraftSetting,
      },
      {
        component: () => <Exception code="404" />,
      },
    ],
  },
]

export default profileRoute
