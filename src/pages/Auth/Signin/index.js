import React from 'react'
import { Typography, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

import { useAuth } from '../../../utils/auth'
import { Form, TextInput } from '../../../components/Form'

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
})

const Signin = () => {
  const { login } = useAuth()
  const history = useHistory()

  const handleSubmit = async (formData) => {
    await login(formData)
    history.push('/student/home/courses')
  }
  return (
    <div>
      <Typography.Title>Sign in</Typography.Title>
      <Typography.Paragraph>
        Login using your email and password
      </Typography.Paragraph>
      <Form
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        defaultValues={{ email: 'ak@yopmail.com', password: 'Hello123' }}
      >
        <TextInput name="email" label="Email" />
        <TextInput name="password" label="Password" type="password" />
        <Button type="primary" htmlType="submit">
          LOG IN
        </Button>
      </Form>
    </div>
  )
}

export default Signin
