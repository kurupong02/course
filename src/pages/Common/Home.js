import React from 'react'
import { useHistory } from 'react-router'
import { useEffectOnce } from 'react-use'

import { useAuth } from '../../utils/auth'

const Home = () => {
  const history = useHistory()

  const { user } = useAuth()

  useEffectOnce(() => {
    if (user) {
      history.push('/student/home/courses')
    } else {
      history.push('/signin')
    }
  })

  return <div>Home page</div>
}

export default Home
