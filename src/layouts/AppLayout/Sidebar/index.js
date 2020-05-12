import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

import ClasswinLogo from '../../../assets/images/logo-classwin-blue.png'
import { AppContext } from '../Context'
const { Sider } = Layout

const SideBar = ({ menus = [] }) => {
  const history = useHistory()
  const [state] = useContext(AppContext)

  const { pathname } = history.location
  const defaultSelected = _.find(menus[state.mode], (o) => {
    return _.includes(pathname, o.basePath)
  })

  const renderMenu = (value) => {
    const path = `${value.basePath}${value.path}`
    return (
      <Menu.Item key={value.basePath} onClick={() => history.push(path)}>
        {value.Icon}
        <span style={{ marginLeft: 10 }}>{value.label}</span>
      </Menu.Item>
    )
  }

  return (
    <Sider
      collapsed={state.collapsed}
      collapsedWidth="0"
      style={{ height: '100vh', position: 'sticky', top: 0 }}
    >
      <a href="/student/home/courses">
        <img
          style={{ width: 110, margin: '10px 0 40px 25px' }}
          src={ClasswinLogo}
          alt="classwin-logo"
        />
      </a>
      <Menu
        theme="dark"
        selectedKeys={[defaultSelected.basePath]}
        defaultSelectedKeys={[defaultSelected.basePath]}
        mode="inline"
      >
        {menus[state.mode].map(renderMenu)}
      </Menu>
    </Sider>
  )
}

SideBar.propTypes = {
  menus: PropTypes.array,
  Icon: PropTypes.node,
  collapsed: PropTypes.bool,
}

export default SideBar
