import React from 'react'
import ReactPlayer from 'react-player'
import { css } from '@emotion/core'

export default function Video({ url }) {
  return (
    <div
      css={css`
        position: relative;
        padding-top: 56.25%;
      `}
    >
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        css={css`
          position: absolute;
          top: 0;
          left: 0;
        `}
      />
    </div>
  )
}
