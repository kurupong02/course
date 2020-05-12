import React from 'react'
import { Menu, Dropdown, Button } from 'antd'

import { Link } from 'react-router-dom'
import _ from 'lodash'
import { CaretDownOutlined } from '@ant-design/icons'

import { useAuth } from '../../../../utils/auth'

import { useTheme } from '../../../../ThemeContext'
// import checkIcon from '../../../../assets/images/ic-statuscheck-24-px.svg'

import { MenuTitle, MenuItem } from './style'

const MenuSelectMode = ({ setMode, mode }) => {
  const { user } = useAuth()
  const themeState = useTheme()
  const menus = [
    {
      key: 'instructor',
      label: 'Instructor',
      path: `/school/${_.get(
        user,
        'schoolMembers[0].schoolId'
      )}/curriculum/courses`,
    },
    {
      key: 'learner',
      label: 'Learner',
      path: `/my-course/courses`,
    },
  ]
  const handleClick = (e) => {
    setMode(e.key)
  }

  const menu = () => {
    return (
      <Menu theme={themeState.dark ? 'dark' : 'light'} onClick={handleClick}>
        <div>
          <MenuTitle>Your mode</MenuTitle>
        </div>
        {menus.map(({ key, path, label }, index) => {
          return (
            <MenuItem key={key}>
              <Link to={path}>
                {label}
                {/* {key === mode && <img src={checkIcon} alt="" />} */}
              </Link>
            </MenuItem>
          )
        })}
      </Menu>
    )
  }

  return (
    <Dropdown overlay={menu()} placement="bottomRight">
      <Button style={{ margin: '22px 40px 0 0' }}>
        {_.upperFirst(mode)} <CaretDownOutlined />
      </Button>
    </Dropdown>
  )
}

export default MenuSelectMode
