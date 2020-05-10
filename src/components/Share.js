import React from 'react'
import styled from '@emotion/styled'
import { TwitterShareButton, FacebookShareButton } from 'react-share'

const ShareWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    margin-right: 20px;
    cursor: pointer;
    :hover {
      color: ${props => props.theme.colors.link};
    }
  }
  span {
    margin-right: 20px;
    font-size: 70%;
    text-transform: uppercase;
    line-height: 2.5;
    opacity: 0.7;
  }
`

const Divider = styled.div`
  flex-grow: 1;
  border-top: 1px solid ${props => props.theme.colors.offset};
`

const Share = ({ url, title, twitterHandle }) => {
  return (
    <ShareWraper>
      <Divider />
      <span>Share article</span>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        Twitter
      </TwitterShareButton>
      <FacebookShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        Facebook
      </FacebookShareButton>
    </ShareWraper>
  )
}

export default Share
