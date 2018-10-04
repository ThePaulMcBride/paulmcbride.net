import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
  flex-wrap: wrap;
  padding-top: 32px;

  @media (min-width: 40em) {
    display: flex;
  }
`

const ItemWrapper = styled('div')`
  padding: 0 16px;
  flex: 1;
  flex: 0 0 33%;
  margin-bottom: 24px;

  ${props => props.index === 0 && `
    flex: 0 0 100%;
  `}

  ${props => props.index === 1 && `
    flex: 0 0 50%;
  `}

  ${props => props.index === 2 && `
    flex: 0 0 50%;
  `}
`

const Content = styled('div')`
  position: relative;
  height: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid #ECF0F1;
`

const TextWrapper = styled('div')`
  margin-bottom: 24px;

  @media (min-width: 40em) {
    margin-bottom: 0;

    .featured & {
      color: white!important;
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
`

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
`

const PostDate = styled('time')`
  color: #78909C;
  font-size: 14px;

  @media (min-width: 40em) {
    .featured & {
      color: rgba(255,255,255,0.8);
      font-size: 16px;
    }
  }
`

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
      color: #1F5F8B;
    }

    @media (min-width: 40em) {
      .featured & {
        color: white;
        font-size: 28px;
      }
    }
  }
`

const renderCard = (post, index) => {
  const coverImage = post.frontmatter.featuredImage.childImageSharp.hires.src;

  return (
    <ItemWrapper key={post.id} index={index} className={index === 0 && 'featured'}>
      <Content>
        <GatsbyLink to={post.frontmatter.path}>
          <CoverImage coverImageUrl={coverImage} />
        </GatsbyLink>

        <TextWrapper>
          <PostDate dateTime={post.frontmatter.date} title={post.frontmatter.date}>{post.frontmatter.date}</PostDate>
          <PostTitle>
            <GatsbyLink to={post.frontmatter.path}>{post.frontmatter.title}</GatsbyLink>
          </PostTitle>
        </TextWrapper>
      </Content>
    </ItemWrapper>
  )
}

export default function Index(props) {
  const posts = props.pageContext.group
  return (
    <Layout {...props}>
      <Container>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => renderCard(post, index))}
      </Container>
    </Layout>
  );
}
