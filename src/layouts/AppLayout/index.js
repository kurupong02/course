import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Skeleton } from 'antd'
import { HomeFilled } from '@ant-design/icons'

import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'

import { useAuth } from '../../utils/auth'

import { AppProvider } from './Context'
import Sidebar from './Sidebar'
import AppContent from './Content'
const AppLayout = ({ route }) => {
  const { user } = useAuth()

  if (!user) {
    return <Skeleton />
  }

  return (
    <AppProvider>
      <Layout
        style={{
          overflowX: 'hidden',
          maxHeight: '100vh',
          backgroundColor: '#fff',
        }}
      >
        <Sidebar menus={menus} />
        <Layout className="site-layout">
          <AppContent route={route} />
        </Layout>
      </Layout>
    </AppProvider>
  )
}

AppLayout.propTypes = {
  route: PropTypes.object,
}

export default AppLayout

const instructorUrl = '/schools'
const learnerUrl = '/student'

const menus = {
  instructor: [
    {
      label: 'My Courses',
      Icon: <AiOutlineHome />,
      basePath: `${instructorUrl}/5d6e95fa8d93e4a45f62168c/curriculum`,
      path: `/courses`,
    },
    {
      label: 'Member',
      Icon: <FiUsers />,
      basePath: `${instructorUrl}/5d6e95fa8d93e4a45f62168c/member`,
      path: `/profile`,
    },
  ],
  learner: [
    {
      label: 'Home',
      Icon: <HomeFilled />,
      basePath: `${learnerUrl}/home`,
      path: `/courses`,
    },
    {
      label: 'My Courses',
      Icon: <HomeFilled />,
      basePath: `${learnerUrl}/my-course`,
      path: `/courses`,
    },
  ],
}
