import React from 'react'
import PropTypes from 'prop-types'
import { Typography, Divider, Tag } from 'antd'

import GroupIcon from '../../../components/GroupIcon'
import { getPrice, getName } from '../../../utils/getValue'
import { getImage } from '../../../utils/getFile'
// import LessonIcon from '../../../assets/images/ic-lessons-blue-24-px.svg'
import CreditIcon from '../../../assets/icons/ic-credit-blue-24-px.svg'
import OnlineIcon from '../../../assets/icons/ic-online-blue-24-px.svg'
import ClassIcon from '../../../assets/icons/ic-classroom-blue-24-px.svg'

import { Card, Title } from '../style'

import { IconWithText, BackgroundImage, Footer } from './style'

const { Text, Paragraph } = Typography
const CourseCard = ({
  backgroundImage,
  type,
  name,
  description,
  price,
  onClick,
  teachers,
}) => {
  return (
    <Card onClick={onClick}>
      <BackgroundImage src={getImage(backgroundImage)} />
      <div style={{ padding: 16 }}>
        <Tag
          icon={
            <img
              style={{ marginRight: 5 }}
              src={type === 'online' ? OnlineIcon : ClassIcon}
              alt="online-icon"
            />
          }
          color="blue"
          style={{ marginBottom: 10 }}
        >
          {type}
        </Tag>
        <Title strong>{name}</Title>
        <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
        {/* <Progress percent={50} showInfo={false} status="active" /> */}
        <Divider style={{ margin: '10px 0' }} />
        <Footer>
          <GroupIcon
            data={teachers.map(({ profileImage, ...teacher }) => {
              return {
                name: getName(teacher),
                image: getImage(profileImage),
              }
            })}
          />
          <IconWithText>
            <img src={CreditIcon} alt="assignment-icon" />
            <Text>{getPrice(price)}</Text>
          </IconWithText>
        </Footer>
      </div>
    </Card>
  )
}

CourseCard.propTypes = {
  backgroundImage: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
  teachers: PropTypes.array,
}

export default CourseCard
