import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AppContext = React.createContext([{}, () => {}])
const AppProvider = ({ children }) => {
  const [state, setState] = useState({ mode: 'instructor', collapsed: true })
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export { AppContext, AppProvider }
