import React, { useState } from 'react'
import { Modal, message } from 'antd'
import _ from 'lodash'
import { useRouteMatch } from 'react-router'

import { Form } from '../../../../../components/Form'
import StepsTask from '../../../../../components/StepsTask'

import authClient from '../../../../../utils/authClient'
import SelectMode from './Steps/SelectMode'
import Information from './Steps/Information'
import { Div } from './style'
import validationSchema from './validationSchema'
const CreateCourseModal = ({ visible, setVisible }) => {
  const [dataCourse, setDataCourse] = useState({})
  const [current, setCurrent] = useState(0)
  const match = useRouteMatch()
  const { params } = match
  const steps = [
    {
      title: 'First',
      content: <SelectMode setData={setDataCourse} data={dataCourse} />,
    },
    {
      title: 'Second',
      content: <Information setData={setDataCourse} data={dataCourse} />,
    },
  ]

  const onSubmit = (data) => {
    setDataCourse({ ...dataCourse, ...data })
    if (_.size(steps) !== current + 1) {
      setCurrent(current + 1)
    } else {
      create({ ...dataCourse, ...data })
    }
  }

  const create = async (data) => {
    try {
      await authClient.client
        .post(`/Schools/${params.schoolId}/draftCourses`, {
          type: 'online',
          ...data,
        })
        .then((res) => res.data)
      message.success('success')
    } catch (error) {
      message.error('error')
    }
  }

  return (
    <Div>
      <Modal
        width={720}
        title={null}
        visible={visible}
        onCancel={setVisible}
        footer={null}
        maskClosable={false}
      >
        <div style={{ marginTop: 30 }}>
          <Form
            defaultValues={dataCourse}
            validationSchema={validationSchema[current]}
            onSubmit={onSubmit}
          >
            <StepsTask
              steps={steps}
              setCurrent={setCurrent}
              current={current}
              prev={() => setCurrent(current - 1)}
            />
          </Form>
        </div>
      </Modal>
    </Div>
  )
}

export default CreateCourseModal
