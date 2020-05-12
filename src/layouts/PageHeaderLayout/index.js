import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { PageHeader } from 'antd'

import { AppContext } from '../../layouts/AppLayout/Context'
import Header from '../../layouts/AppLayout/Header'
import Tabs from '../../components/Tabs'

import { Content } from './style'
const PageHeaderLayout = ({
  title,
  tabs,
  children,
  routes = [],
  detail,
  ...props
}) => {
  const [state, setState] = useContext(AppContext)

  return (
    <Content>
      <Header
        toggle={() =>
          setState((state) => ({ ...state, collapsed: !state.collapsed }))
        }
        collapsed={state.collapsed}
        mode={state.mode}
        setMode={(value) => setState((state) => ({ ...state, mode: value }))}
        title={title}
      />
      {/* <PageHeader title={title} breadcrumb={{ routes }}>
        {detail && detail}
        {tabs && <Tabs tabs={tabs} />}
      </PageHeader> */}
      <div style={{ marginTop: 20, padding: 20 }} {...props}>
        {children}
      </div>
    </Content>
  )
}

PageHeaderLayout.propTypes = {
  tabs: PropTypes.array,
  routes: PropTypes.array,
  title: PropTypes.string,
  children: PropTypes.node,
  detail: PropTypes.func,
}

export default PageHeaderLayout
