import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';

const FooterContainer = styled('footer')`
  padding: 32px 0 16px;
  background-color: #f9fafb;
  border-top: 1px solid #ecf0f1;

  @media (min-width: 64em) {
    padding: 64px 0 16px;
  }
`;

const FooterColumns = styled('div')`
  max-width: 1100px;
  padding: 0 16px;
  margin: 0 auto;

  @media (min-width: 40em) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Column = styled('div')`
  margin-bottom: 1rem;

  @media (min-width: 40em) {
    width: 50%;
  }

  @media (min-width: 64rem) {
    width: auto;
    flex: 1;
  }
`;

const FooterNav = styled('nav')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    padding: 0;
    margin-bottom: 8px;
    font-size: 14px;
  }
`;

const SocialLinks = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  a {
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 8px;
    font-size: 14px;

    svg {
      width: 25px;
      height: 25px;
      margin-right: 4px;
    }
  }
`;

const FooterTaglineContainer = styled('div')`
  font-size: 14px;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #ecf0f1;
  text-align: center;
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

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterColumns>
          <Column>
            <a href="/">Paul McBride</a>
          </Column>

          <Column>
            <FooterNav>
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/privacy-policy">Privacy</Link>
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </FooterNav>
          </Column>

          <Column>
            <SocialLinks>
              <OutboundLink
                href="https://twitter.com/thepaulmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z" />
                </svg>
                Twitter
              </OutboundLink>

              <OutboundLink
                href="https://facebook.com/thepaulmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z" />
                </svg>
                Facebook
              </OutboundLink>

              <OutboundLink
                href="https://instagram.com/thepaulmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>ei-sc-instagram</title>
                  <g fillRule="evenodd">
                    <path d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076" />
                    <path d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0" />
                  </g>
                </svg>
                Instagram
              </OutboundLink>

              <OutboundLink
                href="https://github.com/thepaulmcbride"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
                  />
                </svg>
                Github
              </OutboundLink>
            </SocialLinks>
          </Column>

          <Column>
            <p>Newsletter</p>

            <form
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
                aria-label="Email Address"
              />
              <input type="hidden" value="1" name="embed" />
              <Button fullWidth>Subscribe</Button>
            </form>
          </Column>
        </FooterColumns>
        <FooterTaglineContainer>
          <span>&copy; {new Date().getFullYear()} Paul McBride</span>
        </FooterTaglineContainer>
      </FooterContainer>
    );
  }
}

export default Footer;
