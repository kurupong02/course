import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { Steps, Row, Col } from 'antd'
import { useRouteMatch, useHistory } from 'react-router'

import authClient from '../../utils/authClient'
import Fetch from '../../components/Fetch'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import { CourseDraftSkeleton } from '../../components/Skeleton'
const { Step } = Steps

const Root = ({ route }) => {
  const match = useRouteMatch()
  const history = useHistory()

  const fetch = async () => {
    const { courseId } = match.params
    const res = await authClient.client
      .get(`/DraftCourses/${courseId}/status`)
      .then((res) => res.data)

    history.push(`${match.url}/course-content`)
    return res
  }

  return (
    <div style={{ height: '100%' }}>
      <PageHeaderLayout
        title="Setting"
        routes={routes}
        style={{ marginTop: 0, padding: 0 }}
      >
        <Fetch fetch={fetch} skeleton={<CourseDraftSkeleton />}>
          {(data) => (
            <Row gutter={[16]} style={{ margin: 20 }}>
              <Col
                xs={24}
                md={5}
                lg={4}
                xl={4}
                xxl={2}
                style={{ position: 'sticky', top: 100 }}
              >
                <div style={{ position: 'sticky', top: 100 }}>
                  <Steps current={0} direction="vertical" size="small">
                    {steps.map((item) => (
                      <Step key={item.title} title={item.title} />
                    ))}
                  </Steps>
                </div>
              </Col>
              <Col xs={24} md={19} lg={20} xl={20} xxl={22}>
                <div>{renderRoutes(route.routes, { history })}</div>
              </Col>
            </Row>
          )}
        </Fetch>
      </PageHeaderLayout>
    </div>
  )
}

{
  /* <div>{renderRoutes(route.routes)}</div> */
}

Root.propTypes = {
  route: PropTypes.object,
}

export default Root

const steps = [
  {
    title: 'Information',
  },
  {
    title: 'Content',
  },
  {
    title: 'Instructor',
  },
  {
    title: 'Price & Promotion',
  },
  {
    title: 'Setting',
  },
]

const routes = [
  {
    path: '/schools/5d6e95fa8d93e4a45f62168c/curriculum/courses',
    breadcrumbName: 'Courses',
  },
  {
    path: 'first',
    breadcrumbName: 'Setting',
  },
]
