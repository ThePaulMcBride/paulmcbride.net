import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const PageWrapper = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
`;

const ImageContainer = styled('div')`
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f9fafb;
  background-image: url(${props => props.imageSrc});

  &:before {
    content: '';
    display: block;
    padding-bottom: 22%;
    position: relative;
  }
`;

const ContentWrapper = styled('div')`
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 40em) {
    width: 66.6666666667%;
  }
`;

export default function Template(props) {
  const { page } = props.data;
  const postImage = page.frontmatter.featuredImage.childImageSharp.resize.src;
  const { id } = page;

  return (
    <Layout {...props}>
      <SEO key={`seo-${id}`} postImage={postImage} postData={page} />
      <Helmet title={page.frontmatter.title} />
      <ImageContainer imageSrc={postImage} />
      <PageWrapper>
        <ContentWrapper>
          <h1>{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
}

export const query = graphql`
  query PageQuery($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        featuredImage {
          childImageSharp {
            resize(width: 1500, cropFocus: CENTER) {
              src
            }
          }
        }
        title
        path
      }
      id
      html
      excerpt(pruneLength: 250)
    }
  }
`;
