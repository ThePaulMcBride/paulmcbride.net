import React from 'react'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { useTheme } from 'emotion-theming'

const Code = ({
  children,
  codeString,
  className = 'language-js',
  ...props
}) => {
  const styleTheme = useTheme()

  const theme = styleTheme.themeName === 'default' ? nightOwl : nightOwlLight
  const language = className.replace(/language-/, '')
  if (props['react-live']) {
    return (
      <LiveProvider code={children.trim()} theme={theme}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <Highlight
        {...defaultProps}
        code={children.trim()}
        language={language}
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: '20px' }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    )
  }
}

export default Code
