import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from 'antd'

import { getName } from '../../../utils/getValue'
import { getImage } from '../../../utils/getFile'
import GroupIcon from '../../../components/GroupIcon'
import { Card, Title } from '../style'

import { ProfileImage } from './style'
const { Paragraph } = Typography
const SchoolCard = ({ image, name, description, students }) => {
  return (
    <Card style={{ textAlign: 'center', padding: 30 }}>
      <ProfileImage src={getImage(image)} alt="logo" />
      <Title strong>{name}</Title>
      <Paragraph ellipsis={{ rows: 2 }}>{description}</Paragraph>
      <GroupIcon
        data={students.map(({ profileImage, ...teacher }) => {
          return {
            name: getName(teacher),
            image: getImage(profileImage),
          }
        })}
        n={4}
        size={40}
      />
    </Card>
  )
}

SchoolCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  students: PropTypes.array,
}

export default SchoolCard
