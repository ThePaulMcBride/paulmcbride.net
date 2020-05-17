import React from 'react'
import { css } from '@emotion/core'
import fonts from '../lib/typography'
import { useTheme } from 'emotion-theming'

import { TwitterShareButton } from 'react-share'
import Rocket from './Rocket'

import colors from '../lib/colors'

const Share = ({ url, title, twitterHandle }) => {
  const theme = useTheme()
  return (
    <div>
      <div
        css={{
          margin: '3rem auto',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          maxWidth: '25rem',
        }}
      >
        <Rocket />

        <TwitterShareButton
          url={url}
          title={title}
          via={twitterHandle.split('@').join('')}
          css={css`
            cursor: pointer;
            :hover {
              color: ${colors.primary};
            }
          `}
        >
          <h2
            css={{
              margin: '1rem 0',
              fontFamily: fonts.semibold,
              span: {
                color: colors.primary,
              },
            }}
          >
            <span
              css={css`
                color: ${theme.colors.link};
              `}
            >
              Click here
            </span>{' '}
            to share this article with your friends on Twitter.
          </h2>
        </TwitterShareButton>

        <small>
          <span
            css={{
              opacity: 0.7,
            }}
          >
            I really appreciate it!
          </span>
        </small>
      </div>
    </div>
  )
}

export default Share
