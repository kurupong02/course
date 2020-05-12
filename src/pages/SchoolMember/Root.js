import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import {
  Row,
  Col,
  Avatar,
  Typography,
  Divider,
  Descriptions,
  Button,
  Affix,
} from 'antd'

import PageHeaderLayout from '../../layouts/PageHeaderLayout'

import Tabs from '../../components/Tabs'

import { Content } from './style'
const tabs = [
  { name: 'Profile', path: 'profile' },
  { name: 'Progress', path: 'progress' },
]
const { Title, Text } = Typography
const Root = ({ route }) => {
  return (
    <Content>
      <PageHeaderLayout style={{ padding: 20 }}>
        <Row gutter={[50, 50]}>
          <Col xs={24} lg={8} xl={6}>
            <Affix offsetTop={90}>
              <div style={{ textAlign: 'center' }}>
                <Avatar size={100}>agh</Avatar>
                <Title level={4}>Apichayaphat Chaimongkhonsritrathorn</Title>
                <Text type="secondary">Depldsas</Text>
              </div>
              <Divider />
              <Descriptions layout="vertical">
                <Descriptions.Item label="Email" span={3}>
                  bsrisompong@gmail.com
                </Descriptions.Item>
                <Descriptions.Item label="Web" span={3}>
                  <a href="/">
                    https://dev.new-client.classwin.dev.witsawa.com
                  </a>
                </Descriptions.Item>
                <Descriptions.Item label="Phone" span={3}>
                  098-32133213
                </Descriptions.Item>
              </Descriptions>
              <Divider />
              <Button type="primary" block>
                Export resume
              </Button>
            </Affix>
          </Col>
          <Col xs={20} lg={16} xl={18}>
            <Tabs tabs={tabs} />
            {renderRoutes(route.routes)}
          </Col>
        </Row>
      </PageHeaderLayout>
    </Content>
  )
}

Root.propTypes = {
  route: PropTypes.object,
}

export default Root
