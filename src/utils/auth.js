import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useEffectOnce } from 'react-use'

const Context = React.createContext({})
export const AuthProvider = ({
  children,
  forbiddenPath = '/forbidden',
  loadingComponent = () => <div>Loading</div>,
  client = {
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    getUserInfo: () =>
      Promise.resolve({
        id: 1,
        name: 'Mock',
      }),
    logout: () => Promise.resolve(),
  },
}) => {
  const [user, setuser] = useState()
  const [loading, setloading] = useState(true)
  const history = useHistory()

  useEffectOnce(() => {
    async function fetchData() {
      try {
        const res = await client.getUserInfo()
        setuser(res)
      } catch (e) {
        return
      } finally {
        setloading(false)
      }
    }
    fetchData()
  })

  if (loading) {
    return loadingComponent()
  }
  const getUserInfo = async () => {
    const user = await client.getUserInfo()
    setuser(user)
    return user
  }
  const contextValue = {
    user,
    onForbidden: () => history.push(forbiddenPath),
    ...client,
    getUserInfo,
    login: async (payload) => {
      await client.login(payload)
      return await getUserInfo()
    },
    logout: async () => {
      await client.logout()
      setuser(null)
      return
    },
  }
  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.node,
  forbiddenPath: PropTypes.string,
  loadingComponent: PropTypes.func,
  client: PropTypes.object,
}

export const useAuth = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useAuth should be use in side auth context')
  }
  return context
}

export const useAuthenticated = (forbiddenCb) => {
  const { user, onForbidden } = useAuth()
  if (!user) {
    forbiddenCb ? forbiddenCb() : onForbidden()
  }
}
