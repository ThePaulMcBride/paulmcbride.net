import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Tags from '../components/Tags';

const ImageContainer = styled('div')`
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f9fafb;
  background-image: url(${props => props.imageSrc});

  &:before {
    content: '';
    display: block;
    padding-bottom: 45%;
    position: relative;
  }
`;

const PageWrapper = styled('div')`
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 40em) {
    display: flex;
  }
`;

const ContentWrapper = styled('main')`
  padding: 0 16px;
  flex: 2;
`;

const SidebarWrapper = styled('div')`
  padding: 0 16px;
  flex: 1;

  @media (min-width: 40em) {
    margin-top: 3rem;
  }
`;

const PostDate = styled('span')`
  color: #78909c;
  font-size: 14px;
`;

const FormWrapper = styled('div')`
  padding: 32px;
  margin-bottom: 16px;
  text-align: center;
  background-color: #F9FAFB;
  display: none;

  @media (min-width: 40em) {
    display: block;
  }
`

const FormTitle = styled('h3')`
  padding-bottom: 16px;
  margin-top: 0;
  margin-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 1px solid #ecf0f1;
  line-height: initial;
  letter-spacing: 1px;
  font-size: 14px;
  text-transform: uppercase;
  color: #323232;
`;

const EmailInput = styled('input')`
  width: 100%;
  padding: 16px;
  border: 1px solid #ecf0f1;
  border-radius: 0;
  line-height: initial;
  background-color: #ffffff;
  font-size: 16px;
  transition: 500ms;
  margin-bottom: 16px;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid #78909c;
  }
`;

const Form = styled('form')`
  margin-bottom: 0;
`;

export default function Template(props) {
  const { data, pageContext } = props;
  const { markdownRemark: post } = data;
  const { recentPosts } = pageContext;
  return (
    <Layout {...props}>
      <Helmet title={`Gatsby Blog - ${post.frontmatter.title}`} />
      <ImageContainer
        imageSrc={post.frontmatter.featuredImage.childImageSharp.resize.src}
      />
      <PageWrapper>
        <ContentWrapper>
          <h1>{post.frontmatter.title}</h1>
          <PostDate>{post.frontmatter.date}</PostDate>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Tags list={post.frontmatter.tags || []} />
          <FormWrapper>
            <FormTitle>Join my newsletter to receive blog posts 2 weeks early</FormTitle>
            <Form
              action="https://buttondown.email/api/emails/embed-subscribe/thepaulmcbride"
              method="post"
              target="popupwindow"
              onSubmit={() =>
                window.open(
                  'https://buttondown.email/thepaulmcbride',
                  'popupwindow'
                )
              }
            >
              <EmailInput
                type="email"
                name="email"
                id="bd-email"
                placeholder="Email Address"
                required
              />
              <input type="hidden" value="1" name="embed" />
              <Button fullWidth>Subscribe</Button>
            </Form>
          </FormWrapper>
        </ContentWrapper>
        <SidebarWrapper>
          <Sidebar recentPosts={recentPosts} />
        </SidebarWrapper>
      </PageWrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        tags
        title
        featuredImage {
          childImageSharp {
            resize(width: 1500, cropFocus: CENTER) {
              src
            }
          }
        }
      }
    }
  }
`;
