import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import HomeIcon from 'react-icons/lib/fa/home';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Link from '../components/Link';

const TitleWrapper = styled('div')`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`

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
  }
`

const PostDate = styled('time')`
  color: #78909C;
  font-size: 14px;
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
  }
`

function Tags({ posts, post, tag }) {
  if (tag) {
    return (
      <>
        <TitleWrapper>
          <h1>
            {post.length} post{post.length === 1 ? '' : 's'} tagged with {tag}
          </h1>
        </TitleWrapper>
        <Container>
          {post.map((post) => {
            const coverImage = post.frontmatter.featuredImage.childImageSharp.hires.src;
            return (
              <ItemWrapper key={post.id}>
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
          })}
        </Container>
      </>
    );
  }
  return (
    <div>
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(posts).map(tagName => (
          <li key={tagName}>
            <GatsbyLink to={`/tags/${tagName}`}>{tagName}</GatsbyLink>
          </li>
        ))}
      </ul>
      <Link to="/">
        <HomeIcon /> All posts
      </Link>
    </div>
  );
}

export default function TagsTemplate(props) {
  const { pageContext } = props;
  return (
    <Layout {...props}>
      <Tags {...pageContext} />
    </Layout>
  );
}
