import React, { useContext } from 'react'
import _ from 'lodash'

import DragDrop from '../components/DragDrop'
import useWindowSize from '../../../utils/windowSize'

import { DraftCourseContext } from './Context'

const PreTest = ({ dataName, ...props }) => {
  const [state] = useContext(DraftCourseContext)
  const size = useWindowSize()

  const getWidth = () => {
    if (size.width < 768) {
      return size.width
    } else if (size.width < 1200) {
      return size.width * 0.45 - 60
    }
    return 700 - 60
  }

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ overflow: 'hidden', flex: 1 }}>
        <DragDrop data={[_.find(state.data, { type: dataName })]} {...props} />
      </div>
      <div style={{ width: state.drawerVisible ? getWidth() : 0 }} />
    </div>
  )
}

export default PreTest
