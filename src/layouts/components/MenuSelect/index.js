import React from 'react'
import { Avatar, Menu, Switch, Dropdown } from 'antd'

import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import { useAuth } from '../../../../utils/auth'

import { useTheme } from '../../../../ThemeContext'
import { getImage } from '../../../../utils/getFile'
import LogoutIcon from '../../../../assets/icons/ic-logout-gray-24-px.svg'
import SunIcon from '../../../../assets/icons/ic-sun.svg'
import MoonIcon from '../../../../assets/icons/ic-moon.svg'

import menus from './menus'

import { MenuTitle } from './style'

const MenuSelect = ({ mode }) => {
  const { user, logout } = useAuth()
  const themeState = useTheme()
  const history = useHistory()
  const handleLogout = async () => {
    await logout()
    history.push('/')
  }

  const setPath = (link) => {
    const schoolId = _.get(user, 'schoolMembers[0].schoolId')
    return mode === 'instructor' ? `/school/${schoolId}${link}` : link
  }

  const menu = () => {
    return (
      <Menu theme={themeState.dark ? 'dark' : 'light'}>
        {menus[mode].map(({ label, link, icon }, index) => {
          return (
            <Menu.Item key={index}>
              <Link to={setPath(link)}>
                <Avatar size={20} src={icon} style={{ marginRight: 10 }} />
                {label}
              </Link>
            </Menu.Item>
          )
        })}
        <div>
          <MenuTitle>
            <Avatar size={20} src={LogoutIcon} style={{ marginRight: 10 }} />
            Dark mode
            <Switch
              style={{ marginLeft: 16, marginRight: 16 }}
              defaultChecked={themeState.dark}
              onChange={() => themeState.toggle()}
              unCheckedChildren={
                <Avatar size={18} src={SunIcon} style={{ marginLeft: 10 }} />
              }
              checkedChildren={
                <Avatar size={16} src={MoonIcon} style={{ marginRight: 10 }} />
              }
            />
          </MenuTitle>
        </div>
        <Menu.Item onClick={handleLogout}>
          <Avatar size={20} src={LogoutIcon} style={{ marginRight: 10 }} />
          Logout
        </Menu.Item>
      </Menu>
    )
  }

  return (
    <Dropdown overlay={menu()}>
      <Avatar
        size={45}
        src={getImage(user.profileImage)}
        style={{ margin: '10px 10px 0 0' }}
      />
    </Dropdown>
  )
}

export default MenuSelect
