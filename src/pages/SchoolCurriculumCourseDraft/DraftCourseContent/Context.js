import React, { useState } from 'react'
import PropTypes from 'prop-types'

const DraftCourseContext = React.createContext([{}, () => {}])
const DraftCourseProvider = ({ children, defaultValues }) => {
  const [state, setState] = useState({
    drawerVisible: false,
    questionId: null,
    ...defaultValues,
  })

  return (
    <DraftCourseContext.Provider value={[state, setState]}>
      {children}
    </DraftCourseContext.Provider>
  )
}

DraftCourseProvider.propTypes = {
  children: PropTypes.node,
  defaultValues: PropTypes.object,
}

export { DraftCourseContext, DraftCourseProvider }
