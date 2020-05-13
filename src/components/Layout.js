import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import mdxComponents from './mdx'
import Header from './Header'
import config from '../../config/website'
import Global from 'lib/global-styles'
import Reset from 'lib/reset'
import Footer from 'components/Footer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`

export default ({
  site,
  frontmatter = {},
  children,
  noFooter,
  noSubscribeForm,
}) => {
  const {
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <>
      <Global />
      <Reset />
      <Wrapper>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: description },
            { name: 'keywords', content: keywords },
          ]}
        >
          <html lang="en" />
          <noscript>This site runs best with JavaScript enabled.</noscript>
        </Helmet>
        <Header />
        <MDXProvider components={mdxComponents}>
          <>{children}</>
        </MDXProvider>
        {!noFooter && (
          <Footer
            author={site.siteMetadata.author.name}
            noSubscribeForm={noSubscribeForm}
          />
        )}
      </Wrapper>
    </>
  )
}

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author {
        name
      }
      keywords
    }
  }
`
