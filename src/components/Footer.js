import React from 'react'
import styled from '@emotion/styled'
import { bpMaxSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, GitHub, Twitch } from './Social'
import Container from './Container'

const StyledContainer = styled(Container)`
  padding-top: 0;
  ${bpMaxSM} {
    padding-top: 0;
  }
`

const FlexConteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Author = styled.div`
  font-size: 90%;
  opacity: 0.7;
`

const Footer = ({ author, noSubscribeForm }) => (
  <footer>
    <StyledContainer>
      {!noSubscribeForm && (
        <div>
          <SubscribeForm />
          <br />
          <br />
        </div>
      )}
      <FlexConteiner>
        <Author>
          {author && `${author} \u00A9 ${new Date().getFullYear()}`}
        </Author>
        <div>
          <Twitter />
          <Twitch />
          <GitHub />
        </div>
      </FlexConteiner>
    </StyledContainer>
  </footer>
)

export default Footer
