import React from 'react'
import { useRouteMatch } from 'react-router'
import authClient from 'app/src/utils/authClient'
import _ from 'lodash'

import Fetch from '../../../components/crud/Fetch'
import RowCard from '../../../components/RowCard'
import CourseCard from '../../../components/CourseCard'
import { CoursesSkeleton } from '../../../components/Skeleton'
const Assigned = () => {
  const match = useRouteMatch()

  const fetch = async () => {
    const { schoolId } = match.params
    const filter = {
      // order: 'createdAt DESC',
      where: { schoolId },
      include: ['teachers'],
      limit: 30,
    }
    const res = await authClient.client
      .get(`AppUsers/me/teachingCourses`, {
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
        backgroundImage={image}
        profileImage={_.get(teachers, '[0].profileImage')}
        type={type}
        name={name}
        lectureNum={1}
        description={shortDescription}
        price={price}
      />
    )
  }
  return (
    <div>
      <Fetch fetch={fetch} skeleton={<CoursesSkeleton />}>
        {(data) => <RowCard data={data} renderCard={renderCard} />}
      </Fetch>
    </div>
  )
}

export default Assigned
