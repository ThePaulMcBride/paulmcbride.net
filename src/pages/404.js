import { graphql, Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';

const TitleWrapper = styled('div')`
  max-width: 1100px;
  margin: 32px auto 0;
  padding: 0 16px;
`;

const TitleBlock = styled('div')`
  padding: 32px;
  background-color: #f9fafb;
`;

const PageTitle = styled('h1')`
  margin-top: 0;
  margin-bottom: 5px;
`;

const StrapLine = styled('p')`
  margin-bottom: 0;
`;

const Container = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-top: 32px;

  @media (min-width: 40em) {
    display: flex;
  }
`;

const ItemWrapper = styled('div')`
  padding: 0 16px;
  flex: 1;
  flex: 0 0 33%;
  margin-bottom: 24px;

  ${props =>
    props.index === 0 &&
    `
    flex: 0 0 100%;
  `}

  ${props =>
    props.index === 1 &&
    `
    flex: 0 0 50%;
  `}

  ${props =>
    props.index === 2 &&
    `
    flex: 0 0 50%;
  `}
`;

const Content = styled('div')`
  position: relative;
  height: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid #ecf0f1;
`;

const TextWrapper = styled('div')`
  margin-bottom: 24px;

  @media (min-width: 40em) {
    margin-bottom: 0;
  }
`;

const CoverImage = styled('div')`
  &:after {
    display: block;
    background-size: cover;
    background-image: url("${props => props.coverImageUrl}");
    display: block;
    content: '';
    width: 100%;
    padding-bottom: 56.25%;
    margin-bottom: 24px;
  }
`;

const PostDate = styled('time')`
  color: #78909c;
  font-size: 14px;
`;

const PostTitle = styled('h3')`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 19px;
  transition: 500ms;
  margin-top: 0;
  margin-bottom: 0;

  a {
    text-decoration: none;
    color: #323232;
    transition: 500ms;

    &:hover {
      color: #1f5f8b;
    }
  }
`;

const NotFound = props => {
  const posts = props.data.posts.edges;
  return (
    <Layout title={'Page Not Found'}>
      <Helmet title={'Page Not Found'} />
      <TitleWrapper>
        <TitleBlock>
          <PageTitle>Oops! That page can’t be found.</PageTitle>
          <StrapLine>Maybe try one of the links below?</StrapLine>
        </TitleBlock>
      </TitleWrapper>
      <Container>
        {posts.map(({ node: post }) => {
          const coverImage =
            post.frontmatter.featuredImage.childImageSharp.hires.src;
          return (
            <ItemWrapper key={post.id}>
              <Content>
                <GatsbyLink to={post.frontmatter.path}>
                  <CoverImage coverImageUrl={coverImage} />
                </GatsbyLink>

                <TextWrapper>
                  <PostDate
                    dateTime={post.frontmatter.date}
                    title={post.frontmatter.date}
                  >
                    {post.frontmatter.date}
                  </PostDate>
                  <PostTitle>
                    <GatsbyLink to={post.frontmatter.path}>
                      {post.frontmatter.title}
                    </GatsbyLink>
                  </PostTitle>
                </TextWrapper>
              </Content>
            </ItemWrapper>
          );
        })}
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 9
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          timeToRead
          frontmatter {
            date(formatString: "DD MMM YYYY")
            path
            tags
            title
            featuredImage {
              childImageSharp {
                thumbnail: resize(width: 600, cropFocus: CENTER) {
                  src
                }
                hires: resize(width: 1500, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default NotFound;
