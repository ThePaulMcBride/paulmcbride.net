import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import { useTheme } from 'emotion-theming'
import Container from 'components/Container'
import { rhythm } from 'lib/typography'
import SEO from 'components/SEO'
import Button from 'components/Button'
import Home from './home.mdx'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 20px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          Hi, I'm Paul McBride.{' '}
          <span role="img" aria-label="Hi">
            👋🏼
          </span>
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Divider = styled.hr`
  border-top: 1px solid ${(props) => props.theme.colors.offset};
`

export default function Index({ data: { site, allMdx } }) {
  return (
    <Layout site={site}>
      <SEO />
      <Hero />

      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <Home />
        <Button
          css={css`
            margin-top: 3rem;
          `}
          to="/blog"
          aria-label="Visit blog page"
        >
          View all articles
        </Button>
        <Divider />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                fluid(maxWidth: 900) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
