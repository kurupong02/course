const baseURL = process.env.REACT_APP_API_URL
const container = ''

const coverImage =
  'https://www.solidbackgrounds.com/images/2560x1600/2560x1600-dark-gray-solid-color-background.jpg'
const profileImage =
  'https://facebook.github.io/react-native/docs/assets/favicon.png'

export const getImage = (
  image,
  defaultImage = coverImage,
  width = 400,
  height = 400
) => {
  if (image) {
    if (image.substring(0, 4) === 'http') {
      return image
    }
    return `${baseURL}/Containers/${container}/cover/${image}?width=${width}&height=${height}`
  }
  return defaultImage
}
export const getProfileImage = (image, defaultImage = profileImage) => {
  if (image) {
    return `${baseURL}/Containers/${container}/download/${image}`
  }
  return defaultImage
}
