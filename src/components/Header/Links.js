import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from 'emotion-theming'
import ThemeToggler from './ThemeToggler'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/blog" activeClassName="active" aria-label="View blog page">
        Blog
      </Link>
      <a
        href="https://egghead.io/instructors/paul-mcbride?af=auhexg"
        aria-label="View blog page"
      >
        Lessons
      </a>
      <Link to="/about" activeClassName="active" aria-label="View about page">
        About
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
