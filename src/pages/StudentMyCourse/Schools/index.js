import React from 'react'

import authClient from '../../../utils/authClient'
import Fetch from '../../../components/Fetch'
import RowCard from '../../../components/RowCard'
import SchoolCard from '../../../components/Cards/SchoolCard'
import { SchoolSkeleton } from '../../../components/Skeleton'

const SchoolsPage = () => {
  const fetch = async () => {
    const filter = {
      include: {
        relation: 'school',
        scope: {
          include: {
            relation: 'schoolStudents',
            scope: {
              where: {
                isApproved: true,
              },
              include: 'appUser',
            },
          },
        },
      },
      order: 'createdAt DESC',
      limit: 15,
    }
    const res = await authClient.client
      .get(`/AppUsers/me/schoolStudents`, {
        params: {
          filter,
        },
      })
      .then((res) => res.data)
    return res.map(({ school }) => school)
  }

  const renderCard = (data, index) => {
    const { privacy, logo, name, description, schoolStudents } = data
    const students = schoolStudents.map(({ appUser }) => {
      return { ...appUser }
    })
    return (
      <SchoolCard
        tag={privacy}
        image={logo}
        name={name}
        description={description}
        students={students}
      />
    )
  }

  return (
    <Fetch fetch={fetch} skeleton={<SchoolSkeleton />}>
      {(data) => <RowCard data={data} renderCard={renderCard} />}
    </Fetch>
  )
}

export default SchoolsPage
