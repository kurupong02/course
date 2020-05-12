import React from 'react'
import { Typography } from 'antd'
import { useRouteMatch } from 'react-router'

import { CourseFormSkeleton } from '../../../components/Skeleton'
import Fetch from '../../../components/Fetch'
import authClient from '../../../utils/authClient'

import DrawerQuestionDetail from './Drawer'
import PreTest from './PreTest'
import { DraftCourseProvider } from './Context'
import { Content } from './style'
const { Title } = Typography

const DraftCourseContent = () => {
  const match = useRouteMatch()

  const fetch = async () => {
    const { courseId } = match.params
    const filter = {
      include: ['questions'],
      limit: 30,
    }

    const res = await authClient.client
      .get(`/DraftCourses/${courseId}`)
      .then((res) => res.data)
    const assessments = await authClient.client
      .get(`/Subjects/${res.subjectId}/assessments`, {
        params: {
          filter,
        },
      })
      .then((res) => res.data)

    return assessments
  }

  return (
    <Fetch fetch={fetch} skeleton={<CourseFormSkeleton />}>
      {(data) => (
        <DraftCourseProvider defaultValues={{ data }}>
          <Content>
            <Title level={3}>Course Content</Title>
            <PreTest dataName="pretest" lable="Pre-Test" />
            <DrawerQuestionDetail />
          </Content>
        </DraftCourseProvider>
      )}
    </Fetch>
  )
}

export default DraftCourseContent
