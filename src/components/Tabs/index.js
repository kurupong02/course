import React from 'react'
import PropTypes from 'prop-types'
import { Tabs as TabsAntd } from 'antd'
import { useHistory, useRouteMatch } from 'react-router'

const { TabPane } = TabsAntd
const Tabs = ({ tabs = [] }) => {
  const history = useHistory()
  const match = useRouteMatch()
  const onChangeTab = (value) => {
    history.push(`${match.url}/${tabs[value].path}`)
  }

  return (
    <TabsAntd defaultActiveKey="0" tabBarGutter={0} onChange={onChangeTab}>
      {tabs.map(({ name }, index) => {
        return <TabPane key={index} tab={name} />
      })}
    </TabsAntd>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array,
}

export default Tabs
