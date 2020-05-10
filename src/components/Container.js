import React from 'react'
import styled from '@emotion/styled'
import { bpMaxSM } from 'lib/breakpoints'

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${props =>
    props.maxWidth + (props.noHorizontalPadding ? 0 : 80)}px;
  padding: ${props => (props.noVerticalPadding ? 0 : '40')}px
    ${props => (props.noHorizontalPadding ? 0 : '40')}px;

  ${bpMaxSM} {
    padding: ${props => (props.noVerticalPadding ? 0 : '20')}px
      ${props => (props.noHorizontalPadding ? 0 : '20')}px;
  }
`

const Container = props => {
  const {
    maxWidth = 700,
    noHorizontalPadding = false,
    noVerticalPadding = false,
    ...restProps
  } = props
  return (
    <Wrapper
      maxWidth={maxWidth}
      noHorizontalPadding={noHorizontalPadding}
      noVerticalPadding={noVerticalPadding}
      {...restProps}
    >
      {props.children}
    </Wrapper>
  )
}

export default Container
