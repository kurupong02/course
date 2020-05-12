import * as yup from 'yup'

const validationSchema = yup.object().shape({
  // name: yup.string().required('Please select at least 1 item.'),
})

export default validationSchema
