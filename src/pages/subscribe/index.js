import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Container from 'components/Container'
import Subscribe from 'components/Forms/Subscribe'
import Content from './content.mdx'

export default ({ data: { site } }) => (
  <Layout site={site} noFooter>
    <Container>
      <Content />
      <Subscribe simple />
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
  }
`
