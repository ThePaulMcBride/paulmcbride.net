import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import { ItemTitle, ItemWrapper } from './SharedComponents';

const PostThumbnailLink = styled(Link)``;

const PostThumbnail = styled('div')`
  background-image: url(${props => props.thumbnailUrl});
  display: block;
  position: relative;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #f9fafb;
  margin-bottom: 8px;

  &:after {
    display: block;
    content: '';
    width: 100%;
    padding-bottom: 56.25%;
  }
`;

const PostWrapper = styled('div')`
  &:not(:last-of-type) {
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ecf0f1;
  }

  a {
    color: black;

    &:hover {
      color: #1f5f8b;
    }
  }
`;

const PostDate = styled('time')`
  color: #78909c;
  font-size: 14px;
`;

const PostTitle = styled('h3')`
  margin-top: 0;
  margin-bottom: 0;
  margin-bottom: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  transition: 500ms;
`;

class RecentPosts extends Component {
  renderPost = post => {
    const thumbnailUrl =
      post.frontmatter.featuredImage.childImageSharp.thumbnail.src;
    return (
      <PostWrapper key={post.id}>
        <PostThumbnailLink to={post.frontmatter.path}>
          <PostThumbnail thumbnailUrl={thumbnailUrl} />
        </PostThumbnailLink>
        <PostDate title={post.frontmatter.date}>
          {post.frontmatter.date}
        </PostDate>
        <PostTitle>
          <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
        </PostTitle>
      </PostWrapper>
    );
  };

  render() {
    const { posts } = this.props;

    return (
      <ItemWrapper>
        <ItemTitle>Recent Posts</ItemTitle>
        {posts.map(({ node }) => this.renderPost(node))}
      </ItemWrapper>
    );
  }
}

export default RecentPosts;
