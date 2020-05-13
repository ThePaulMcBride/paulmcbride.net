import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { lighten, darken } from 'polished'
import { bpMaxSM } from './breakpoints'
import { fonts } from './typography'

export default function GlobalStyles() {
  const theme = useTheme()

  return (
    <Global
      styles={css`
        body {
          background: ${theme.colors.bodyBg};
          color: ${theme.colors.text};
        }

        ::selection {
          color: ${theme.colors.white};
          background-color: ${theme.colors.link};
        }

        a {
          color: ${theme.colors.link};
          text-decoration: none;
          &:hover,
          &:focus {
            color: ${theme.colors.link};
          }
          &:hover {
            text-decoration: underline;
          }
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.text};
          a {
            color: ${theme.colors.text};
            &:hover,
            &:focus {
              color: ${theme.colors.text};
            }
          }
        }

        ${bpMaxSM} {
          p,
          em,
          strong {
            font-size: 90%;
          }
          h1 {
            font-size: 30px;
          }
          h2 {
            font-size: 24px;
          }
        }

        hr {
          margin: 50px 0;
          border: none;
          border-top: 1px solid ${darken(0.1, theme.colors.gray)};
          background: none;
        }

        em {
          font-family: ${fonts.regularItalic};
        }

        strong {
          em {
            font-family: ${fonts.semiboldItalic};
          }
        }

        input {
          border-radius: 4px;
          border: 1px solid ${theme.colors.gray};
          padding: 5px 10px;
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
          font-family: ${fonts.regular};
          margin-top: 5px;
          &::placeholder {
            opacity: 0.4;
          }
        }

        .gatsby-resp-image-image {
          background: none !important;
          box-shadow: 0;
        }

        button {
          border-radius: 4px;
          background-color: ${theme.colors.primary};
          border: none;
          color: ${theme.colors.white};
          padding: 5px 10px;
          cursor: pointer;
          border: 1px solid ${theme.colors.primary};
          transition: all 150ms;
          &:hover {
            background: ${lighten(0.05, theme.colors.primary)};
            border: 1px solid ${lighten(0.05, theme.colors.primary)};
          }
        }

        pre {
          background-color: #061526 !important;
          border-radius: 4px;
          font-size: 16px;
          padding: 10px;
          overflow-x: auto;
          /* Track */
          &::-webkit-scrollbar {
            width: 100%;
            height: 5px;
            border-radius: 0 0 5px 5px;
          }
          &::-webkit-scrollbar-track {
            background: #061526;
            border-radius: 0 0 4px 4px;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
          /* Handle */
          &::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 5px;
          }
        }
      `}
    />
  )
}
