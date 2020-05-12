import React from 'react'
import { Typography, Row, Col } from 'antd'
import { Controller } from 'react-hook-form'

import { InputWrapper } from '../../../../../../../components/Form'
import Card from '../../../../../../../components/Card'
import publicImage from '../../../../../../../assets/images/publicCourse.svg'
import privateImage from '../../../../../../../assets/images/privateCourse.svg'

import { Content, Div } from './style'
const { Title, Text } = Typography

const SelectMode = ({ data }) => {
  const name = 'publicMode'

  const onClickCard = (value, setValue, triggerValidation) => {
    setValue(name, value)
    triggerValidation(name)
  }

  const RowCard = ({ setValue, value, triggerValidation, ...res }) => {
    return (
      <Row gutter={[16, 16]} style={{ marginTop: 50 }}>
        {mode.map((m, index) => {
          return (
            <Col xs={24} sm={12} key={index}>
              <Card
                style={{ textAlign: 'center' }}
                onClick={() =>
                  onClickCard(m.publicMode, setValue, triggerValidation)
                }
              >
                <Div select={value === m.publicMode}>
                  <Title level={4}>{m.title}</Title>
                  <Text>{m.description}</Text>
                  <br />
                  <img src={m.image} alt="publicImage" />
                </Div>
              </Card>
            </Col>
          )
        })}
      </Row>
    )
  }

  return (
    <Content>
      <Title level={3}>What type of course are you making ?</Title>
      <InputWrapper name={name}>
        {({ control, setValue, getValues, triggerValidation, ...res }) => {
          return (
            <Controller
              as={
                <RowCard
                  setValue={setValue}
                  value={getValues[name]}
                  triggerValidation={triggerValidation}
                />
              }
              control={control}
              name={name}
            />
          )
        }}
      </InputWrapper>
    </Content>
  )
}

export default SelectMode

const mode = [
  {
    title: 'Public Course',
    type: 'public',
    description:
      'Anyone can discover this type of course in the classwin marketplace',
    publicMode: 'PUBLIC',
    image: publicImage,
  },
  {
    title: 'Private Course',
    type: 'private',
    description: 'Only learner in school can access to this type of course',
    publicMode: 'PRIVATE',
    image: privateImage,
  },
]
