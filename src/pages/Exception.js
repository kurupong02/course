import React from 'react'
import PropTypes from 'prop-types'
import { Result, Button, Layout } from 'antd'
import { useHistory } from 'react-router-dom'
const Exception = ({ code = '500' }) => {
  const history = useHistory()
  return (
    <Layout>
      <Result
        // @ts-ignore
        status={code}
        title={code}
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => history.replace('/')}>
            Back to Home
          </Button>
        }
      />
    </Layout>
  )
}

Exception.propTypes = {
  code: PropTypes.string,
}

export default Exception
