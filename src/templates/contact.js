import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Button from '../components/Button';
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

const Spacer = styled('hr')`
  height: 1px;
  margin: 32px 0;
  border: 0;
  background-color: #ECF0F1;
`

const InputWrapper = styled('fieldset')`
  border: none;
  margin-bottom: 1rem;
`

const Label = styled('label')`
  display: block;
  margin-bottom: 5px;
`

const Input = styled('input')`
  width: 100%;
  padding: 16px;
  border: 1px solid #ecf0f1;
  border-radius: 0;
  line-height: initial;
  background-color: #ffffff;
  font-size: 16px;
  transition: 500ms;
  margin-bottom: 16px;
  resize: vertical;

  &:hover,
  &:active,
  &:focus {
    border: 1px solid #78909c;
  }
`;

export default function Template(props) {
  const { page } = props.data
  const postImage = page.frontmatter.featuredImage.childImageSharp.resize.src
  const { id } = page

  return (
    <Layout {...props}>
      <SEO
        key={`seo-${id}`}
        postImage={postImage}
        postData={page}
      />
      <Helmet title={page.frontmatter.title} />
      <ImageContainer
        imageSrc={postImage}
      />
      <PageWrapper>
        <ContentWrapper>
          <h1>{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
          <Spacer />

          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" aria-required="true" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" name="email" aria-required="true" />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="message">Message</Label>
              <Input as="textarea" name="message" id="message" rows="10"/>
            </InputWrapper>

            <Button>Submit</Button>
          </form>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
}

export const query = graphql`
  query AboutPageQuery($path: String!) {
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
