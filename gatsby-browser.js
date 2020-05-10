import React from 'react'

import ThemeProvider from 'lib/theme-provider'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
