import * as yup from 'yup'

const validationSchemas = [
  yup.object().shape({
    publicMode: yup.string().required('Please select at least 1 item.'),
  }),
  yup.object().shape({
    name: yup.string().required(),
    shortDescription: yup.string().required(),
  })
]

export default validationSchemas