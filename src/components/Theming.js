import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'
import { ThemeProvider } from 'emotion-theming'

const brand = colors.black
const link = colors.green

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: brand,
      offset: lighten(0.7, colors.black),
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: brand,
      link: link,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, brand),
      offset: colors.gray,
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.black,
      link: lighten(0.05, link),
      ...colors,
    },
  },
}

const { withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
