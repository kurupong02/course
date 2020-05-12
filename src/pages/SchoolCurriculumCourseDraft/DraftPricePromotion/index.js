import React, { useState } from 'react'
import { Typography, Divider, Button } from 'antd'
import { useRouteMatch } from 'react-router'
import _ from 'lodash'

import { Form, TextInput, Editor, SelectInput } from '../../../components/Form'
import { CourseFormSkeleton } from '../../../components/Skeleton'
import Fetch from '../../../components/Fetch'
import authClient from '../../../utils/authClient'

import validationSchema from './validationSchema'

import { Content } from './style'
const { Title } = Typography

const DraftPricePromotion = () => {
  const match = useRouteMatch()
  const [categorieId, setCategorieId] = useState()

  const fetch = async () => {
    const { courseId } = match.params

    const DraftCourses = await authClient.client
      .get(`/DraftCourses/${courseId}`)
      .then((res) => res.data)

    const courseCategories = await authClient.client
      .get(`/CourseCategories`, {
        params: {
          filter: {
            include: ['subcategories'],
          },
        },
      })
      .then((res) => res.data)

    const courseLevels = await authClient.client
      .get(`/CourseLevels`)
      .then((res) => res.data)

    setCategorieId(DraftCourses.categoryId)
    return { courseCategories, courseLevels, DraftCourses }
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  const onChangeCategorie = (id) => {
    setCategorieId(null)
    setCategorieId(id)
  }

  return (
    <Fetch fetch={fetch} skeleton={<CourseFormSkeleton />}>
      {({ courseCategories, courseLevels, DraftCourses }) => (
        <Content>
          <Title level={3}>Course Information</Title>
          <Form
            validationSchema={validationSchema}
            defaultValues={DraftCourses}
            onSubmit={onSubmit}
          >
            <TextInput
              name="name"
              label="Course Title"
              placeholder="Enter your course title"
            />
            <TextInput
              name="shortDescription"
              label="Course Subtitle"
              placeholder="Enter your course subtitle"
            />
            <Editor
              name="description"
              label="Description"
              placeholder="Enter your description"
            />
            <SelectInput
              name="categoryId"
              label="Categories"
              options={courseCategories}
              onChange={onChangeCategorie}
              resetValueName="subCategoryId"
              placeholder="Select category"
            />
            {categorieId && (
              <SelectInput
                name="subCategoryId"
                label="Subcategories"
                options={
                  _.find(courseCategories, { id: categorieId }).subcategories
                }
                placeholder="Select subcategory"
              />
            )}
            <SelectInput
              name="levelId"
              label="Level"
              options={courseLevels}
              placeholder="Select level"
            />
          </Form>
        </Content>
      )}
    </Fetch>
  )
}

export default DraftPricePromotion
