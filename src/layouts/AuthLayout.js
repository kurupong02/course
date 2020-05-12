import React from 'react'
import PropTypes from 'prop-types'
import { Card, Layout } from 'antd'
import { renderRoutes } from 'react-router-config'

const AuthLayout = ({ route }) => {
  return (
    <Layout>
      <Layout.Content
        style={{ padding: '70px 0px', display: 'flex', alignItems: 'center' }}
      >
        <Card
          style={{
            width: 320,
            maxWidth: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {renderRoutes(route.routes)}
        </Card>
      </Layout.Content>
      <Layout.Footer>© React Dashboard</Layout.Footer>
    </Layout>
  )
}

AuthLayout.propTypes = {
  route: PropTypes.object,
}

export default AuthLayout
