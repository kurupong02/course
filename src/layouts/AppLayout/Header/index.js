import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Button, Affix, Breadcrumb, Typography } from 'antd'
import { useHistory } from 'react-router'

import { IoIosNotificationsOutline } from 'react-icons/io'
import {
  AiOutlineSwap,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai'

import MenuSelect from '../components/MenuSelect'

const { Header } = Layout
const { Title } = Typography
const MainHeader = ({ toggle, collapsed, mode, setMode, title }) => {
  const history = useHistory()

  const onClickMode = () => {
    if (mode === 'learner') {
      history.push('/schools/5d6e95fa8d93e4a45f62168c/curriculum/courses')
    } else {
      history.push('/student/home/courses')
    }
    setMode(mode === 'learner' ? 'instructor' : 'learner')
  }

  return (
    <Header
      style={{
        position: 'sticky',
        width: '100%',
        zIndex: 10,
        top: 0,
        boxShadow: '0 1px 3px 0 rgba(21,27,38,.15)',
      }}
    >
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div>
            {React.createElement(
              collapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
              {
                className: 'trigger',
                onClick: toggle,
              }
            )}
          </div>
          <div
            style={{
              margin: '10px 0 0 15px',
              display: 'flex',
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <div style={{ minHeight: 30 }}>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div style={{ alignItems: 'flex-end' }}>
              <Title level={3} style={{ lineHeight: 0.9 }}>
                {title}
              </Title>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <Button
            type="primary"
            icon={
              <AiOutlineSwap
                style={{ top: 3, position: 'relative', marginRight: 5 }}
              />
            }
            style={{ marginTop: 14 }}
            onClick={onClickMode}
          >
            {`Switch to ${mode === 'learner' ? 'instructor' : 'learner'}`}
          </Button>
          <IoIosNotificationsOutline style={{ fontSize: 30, margin: 16 }} />
          <MenuSelect mode={mode} />
        </div>
      </div>
    </Header>
  )
}

MainHeader.propTypes = {
  toggle: PropTypes.func,
  collapsed: PropTypes.bool,
  mode: PropTypes.string,
  setMode: PropTypes.func,
}

export default MainHeader
