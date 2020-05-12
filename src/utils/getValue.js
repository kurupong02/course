import _ from 'lodash'

export const getName = (value) => {
  const firstName = _.get(value, 'firstname')
  const lastName = _.get(value, 'lastname')
  return firstName && lastName ? `${firstName} ${lastName}` : '-'
}

export const getPrice = (value) => {
  if (value) {
    return value === 0 ? 'Free' : `${value} THB`
  }
  return '- THB'
}
