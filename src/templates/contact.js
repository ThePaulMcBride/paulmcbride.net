import { graphql } from 'gatsby';
import React, { Component } from 'react';
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
  background-color: #ecf0f1;
`;

const SuccessWraper = styled('div')`
  padding: 32px;
  background-color: #f9fafb;
  margin-bottom: 32px;
  border-left: 5px solid #77dd77;
`;

const Message = styled('p')`
  margin-top: 0;
  margin-bottom: 0;
`;

const ErrorWraper = styled('div')`
  padding: 32px;
  background-color: #f9fafb;
  margin-bottom: 32px;
  border-left: 5px solid #ff6961;
`;

const InputWrapper = styled('fieldset')`
  border: none;
  margin-bottom: 1rem;

  ${props =>
    props.hide &&
    `
    position: absolute;
    overflow: hidden;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    width: 1px;
    margin: -1px;
    border: 0px none;
    padding: 0px;
  `};
`;

const Label = styled('label')`
  display: block;
  margin-bottom: 5px;
`;

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

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

class Template extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    emailSent: false,
    emailError: false
  };

  componentDidMount = () => {
    this.setState({ emailSent: false, emailError: false });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message, honey } = this.state;

    this.setState({ emailSent: false, emailError: false });

    if (!name.trim() || !email.trim() || !message.trim()) {
      return this.setState({ emailError: true });
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        name,
        email,
        message,
        honey
      })
    })
      .then(res => {
        if (res.ok) {
          this.setState({
            emailSent: true,
            name: '',
            email: '',
            message: ''
          });
        }
      })
      .catch(() => this.setState({ emailError: true }));
  };

  render() {
    const { page } = this.props.data;
    const postImage = page.frontmatter.featuredImage.childImageSharp.resize.src;
    const { id } = page;
    const { name, email, honey, message, emailSent, emailError } = this.state;

    return (
      <Layout {...this.props}>
        <SEO key={`seo-${id}`} postImage={postImage} postData={page} />
        <Helmet title={page.frontmatter.title} />
        <ImageContainer imageSrc={postImage} />
        <PageWrapper>
          <ContentWrapper>
            <h1>{page.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.html }} />
            <Spacer />

            {emailSent && (
              <SuccessWraper>
                <Message>
                  Thanks for getting in touch. I'll get back to you soon!
                </Message>
              </SuccessWraper>
            )}

            {emailError && (
              <ErrorWraper>
                <Message>
                  There was a problem sending your message. Make sure you've
                  filled in all of the fields and try again.
                </Message>
              </ErrorWraper>
            )}

            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="honey"
              onSubmit={this.handleSubmit}
            >
              <InputWrapper hide={true}>
                <Label htmlFor="honey">Please leave blank</Label>
                <Input
                  type="text"
                  id="honey"
                  name="honey"
                  required
                  onChange={this.handleChange}
                  value={honey}
                />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  aria-required="true"
                  onChange={this.handleChange}
                  value={name}
                />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  onChange={this.handleChange}
                  value={email}
                />
              </InputWrapper>

              <InputWrapper>
                <Label htmlFor="message">Message</Label>
                <Input
                  as="textarea"
                  name="message"
                  id="message"
                  required
                  rows="10"
                  onChange={this.handleChange}
                  value={message}
                />
              </InputWrapper>

              <InputWrapper>
                <div data-netlify-recaptcha />
              </InputWrapper>

              <Button>Submit</Button>
            </form>
          </ContentWrapper>
        </PageWrapper>
      </Layout>
    );
  }
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

export default Template;
