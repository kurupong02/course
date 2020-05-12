import React from 'react'
import { Typography } from 'antd'

import { TextInput } from '../../../../../../../components/Form'
import Editor from '../../../../../../../components/classwinEditor'

import { Content } from './style'
const { Title } = Typography

const SelectMode = () => {
  return (
    <Content>
      <Title level={3}>Add course information</Title>
      <TextInput name="name" label="Title" />
      <TextInput name="shortDescription" label="Subtitle" />
      <Editor name="description" label="Description" />
    </Content>
  )
}

export default SelectMode
