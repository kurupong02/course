import React, { useContext } from 'react'
import { Drawer } from 'antd'

import useWindowSize from '../../../utils/windowSize'

import { DraftCourseContext } from './Context'

const DrawerQuestionDetail = () => {
  const [state] = useContext(DraftCourseContext)
  const size = useWindowSize()

  const getWidth = () => {
    if (size.width < 768) {
      return size.width
    } else if (size.width < 1200) {
      return size.width * 0.45
    }
    return 700
  }

  return (
    <div style={{}}>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        mask={false}
        visible={state.drawerVisible}
        getContainer={false}
        width={getWidth()}
        style={{ zIndex: 0 }}
        bodyStyle={{ padding: '18px 0 0 0' }}
      >
        <div></div>
      </Drawer>
    </div>
  )
}

export default DrawerQuestionDetail
