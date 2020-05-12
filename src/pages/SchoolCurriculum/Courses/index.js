import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router'

import authClient from '../../../utils/authClient'

import Fetch from '../../../components/Fetch'
import RowCard from '../../../components/RowCard'
import CourseCard from '../../../components/Cards/CourseCard'
import { CoursesSkeleton } from '../../../components/Skeleton'

const Courses = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const [visible, setVisible] = useState(false)

  const fetch = async () => {
    const { schoolId } = match.params
    const filter = {
      include: ['teachers'],
      limit: 30,
    }
    const res = await authClient.client
      .get(`Schools/${schoolId}/courses`, {
        params: {
          filter,
        },
      })
      .then((res) => res.data)
    const resDraft = await authClient.client
      .get(`DraftCourses`, {
        params: {
          filter: { where: { schoolId } },
        },
      })
      .then((res) => res.data)
    return [...resDraft, ...res]
  }

  const renderCard = (data, index) => {
    const { id, image, teachers, type, name, shortDescription, price } = data
    return (
      <CourseCard
        key={index}
        backgroundImage={image}
        teachers={teachers ? teachers : []}
        type={type}
        name={name}
        description={shortDescription}
        price={price}
        onClick={() => history.push(`${match.url}/${id}/draft`)}
      />
    )
  }

  return (
    <div>
      <Fetch fetch={fetch} skeleton={<CoursesSkeleton />}>
        {(data) => (
          <RowCard
            data={data}
            renderCard={renderCard}
            onClickCreate={() => setVisible(!visible)}
            minHeight={383}
            createText="Create new course"
          />
        )}
      </Fetch>
    </div>
  )
}

export default Courses
