import React from 'react'
import _ from 'lodash'

import authClient from '../../../utils/authClient'
import Fetch from '../../../components/Fetch'
import RowCard from '../../../components/RowCard'
import CourseCard from '../../../components/Cards/CourseCard'
import { CoursesSkeleton } from '../../../components/Skeleton'

const CoursesPage = () => {
  const fetch = async () => {
    const filter = {
      include: ['teachers', 'school', 'publishedSubject'],
      order: 'createdAt DESC',
      limit: 15,
    }
    const res = await authClient.client
      .get(`/Courses/browseCourse`, {
        params: {
          filter,
        },
      })
      .then((res) => res.data)
    return res
  }

  const renderCard = (data, index) => {
    const { image, teachers, type, name, shortDescription, price } = data
    return (
      <CourseCard
        key={index}
        backgroundImage={image}
        profileImage={_.get(teachers, '[0].profileImage')}
        teachers={teachers}
        type={type}
        name={name}
        lectureNum={1}
        description={shortDescription}
        price={price}
      />
    )
  }

  return (
    <Fetch fetch={fetch} skeleton={<CoursesSkeleton />}>
      {(data) => <RowCard data={data} renderCard={renderCard} />}
    </Fetch>
  )
}

export default CoursesPage
