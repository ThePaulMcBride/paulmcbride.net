import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../config';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Container = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-top: 32px;

  @media (min-width: 40em) {
    display: flex;
  }
`;

const ControlsContainer = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 0 16px 16px;
  display: flex;
`;

const ItemWrapper = styled('div')`
  padding: 0 16px;
  flex: 1;
  flex: 0 0 33.333333334%;
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

    .featured & {
      color: white !important;
      z-index: 1;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 92px;
    }
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

    @media (min-width: 40em) {
      .featured & {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 40em) {
    .featured & {
      &:before {
        position: absolute;
        top: 0;
        left: 0;
        content: '';
        width: 100%;
        padding-bottom: 56.25%;
        display: block;
        background-size: cover;
        opacity: .6;
        background-image: linear-gradient(to right, black, transparent);
      }
    }
  }
`;

const PostDate = styled('time')`
  color: #78909c;
  font-size: 14px;

  @media (min-width: 40em) {
    .featured & {
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;
    }
  }
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

    @media (min-width: 40em) {
      .featured & {
        color: white;
        font-size: 28px;
      }
    }
  }
`;

const PageLink = styled(GatsbyLink)`
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  flex: 1;
`;

const BackLink = styled(PageLink)`
  text-align: left;
`;

const NextLink = styled(PageLink)`
  text-align: right;
`;

const renderCard = (post, index) => {
  const coverImage = post.frontmatter.featuredImage.childImageSharp.hires.src;

  return (
    <ItemWrapper
      key={post.id}
      index={index}
      className={index === 0 && 'featured'}
    >
      <Content>
        <GatsbyLink
          to={post.frontmatter.path}
          aria-label={post.frontmatter.title}
        >
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
            <GatsbyLink
              to={post.frontmatter.path}
              aria-label={post.frontmatter.title}
            >
              {post.frontmatter.title}
            </GatsbyLink>
          </PostTitle>
        </TextWrapper>
      </Content>
    </ItemWrapper>
  );
};

export default function Index(props) {
  const posts = props.pageContext.group;
  const pageNumber = props.pageContext.index;
  const pageCount = props.pageContext.pageCount;
  const prevPageLink =
    pageNumber > 1 && (pageNumber === 2 ? '/' : `/${pageNumber - 1}`);
  const nextPageLink = pageNumber < pageCount && `/${pageNumber + 1}`;

  return (
    <Layout>
      <Helmet titleTemplate="%s" title={config.title} />
      <SEO />
      <Container>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => renderCard(post, index))}
      </Container>
      <ControlsContainer>
        {prevPageLink && <BackLink to={prevPageLink}>Previous</BackLink>}
        {nextPageLink && <NextLink to={nextPageLink}>Next</NextLink>}
      </ControlsContainer>
    </Layout>
  );
}
