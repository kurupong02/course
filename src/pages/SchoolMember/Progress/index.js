import React from 'react'
import { useRouteMatch } from 'react-router'

import authClient from '../../../utils/authClient'

import Fetch from '../../../components/Fetch'

const SchoolMemberProgress = () => {
  const match = useRouteMatch()

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

  return (
    <div>
      <Fetch fetch={fetch}>
        {(data) => <div style={{ padding: 20 }}></div>}
      </Fetch>
    </div>
  )
}

export default SchoolMemberProgress
