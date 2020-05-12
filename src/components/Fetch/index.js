import React, { useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { Result } from 'antd'
import _ from 'lodash'
import { useAsyncRetry } from 'react-use'

import { FetchSkeleton } from '../Skeleton'
const Fetch = React.forwardRef(
  (
    {
      fetch = (payload) => Promise.resolve(payload),
      params,
      children,
      skeleton,
    },
    ref
  ) => {
    const state = useAsyncRetry(async () => {
      const res = await fetch(params)
      return res
    }, [params])
    useImperativeHandle(ref, () => ({
      reload: state.retry,
    }))

    if (state.loading) {
      return skeleton ? skeleton : <FetchSkeleton />
    }

    if (state.error) {
      const errorStatus = _.get(state, 'error.response.status')
      const message = _.get(
        state,
        'error.response.data.error.message',
        'Error occur'
      )
      if (errorStatus) {
        return (
          <Result
            status={errorStatus.toString()}
            title={errorStatus.toString()}
            subTitle={message}
          />
        )
      }
      return <Result status="500" />
    }
    return <React.Fragment>{children(state.value)}</React.Fragment>
  }
)

Fetch.propTypes = {
  fetch: PropTypes.func,
  params: PropTypes.object,
  children: PropTypes.func,
  skeleton: PropTypes.node,
}

export default Fetch
