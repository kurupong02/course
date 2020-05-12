const white = '#FFFFFF'
const buleLight = 'rgb(73,114,255)'
const buleDark = '#181818'

const themeLight = {
  background: white,
  contentBackground: '#f5f5f5',
  line: '#f5f5f5',
  borderColor: '#e8e8e8',
  body: white,

  headerTextTitle: 'rgba(0, 0, 0, 0.85)',
  textTitle: '#253e87',
  textSub: 'rgb(87, 136, 252)',
  textNote: '#a6a6a6',

  sideberBackground: '#161b2b',
  sideberBackgroundSelected: '#272e48',
  sideberIcon: white,
  sideberIconSelected: white,
  headerBackground: white,

  cardBorder: '#eaeaea',

  btnBackground: buleLight,

  primary1: '#5A69FE',

  blue1: '#253E87',

  gray1: 'rgba(0, 0, 0, 0.65)',
  gray2: '#6f7782',
}

const themeDark = {
  background: buleDark,
  sideberBackgroundSelected: '#3b4256',
  contentBackground: '#212121',
  line: '#212121',
  borderColor: '#7d7d7d',
  body: white,

  headerTextTitle: white,
  textTitle: white,
  textSub: white,
  textNote: white,

  sideberBackground: buleDark,
  sideberIcon: white,
  sideberIconSelected: buleLight,
  headerBackground: buleDark,

  cardBorder: '#404040',

  btnBackground: buleLight,

  primary1: '#5A69FE',

  blue1: '#253E87',

  gray1: 'rgba(0, 0, 0, 0.65)',
  gray2: '#6f7782',
}

const theme = (mode) => (mode === 'dark' ? themeDark : themeLight)

export default theme
