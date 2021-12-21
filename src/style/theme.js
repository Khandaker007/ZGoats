import { extendTheme } from '@chakra-ui/react'

// const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

const theme = extendTheme({
  // styles:{
  //   global:{
  //     html:{
  //       fontSize: `${isLargerThan1280 ? '62.5%' : '50%'}`
  //     }
  //   }
  // },
  fonts: {
    heading: 'Space Grotesk',
    body: 'Space Grotesk',
  },
  colors: {
    primary: '#F52D86',
    secondary: '#0B172D',
    purple: '#403EC6',
    blue: '#53CAEE',
    textColor: '#C4A1CA',
    textColor2: '#A7B8FF',
    grey: '#828282',
    twitColor: '#298CFF',
    instaColor: '#FF3629',
    discordColor: '#403EC6'
  },
  fontWeights: {
      light: 300,
      normal: 400,
      semibold: 600
  }
})

export default theme;