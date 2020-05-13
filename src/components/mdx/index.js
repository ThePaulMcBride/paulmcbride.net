import React from 'react'
import { css } from '@emotion/core'

import Title from './Title'
import Subtitle from './Subtitle'
import H3 from './h3'
import Paragraph from './Paragraph'
import Code from './Code'

export default {
  h1: props => <Title {...props} />,
  h2: props => <Subtitle {...props} />,
  h3: props => <H3 {...props} />,
  p: props => <Paragraph {...props} />,
  code: Code,
  pre: preProps => <pre {...preProps} />,
  ul: ({ children, ...props }) => (
    <ul
      css={css`
        margin-left: 1.55rem;
        list-style: initial;
      `}
      {...props}
    >
      {children}
    </ul>
  ),
}
