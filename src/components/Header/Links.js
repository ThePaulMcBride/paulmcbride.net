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
      <a href="mailto:hello@paulmcbride.net" aria-label="Send me an email">
        Get in touch
      </a>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
