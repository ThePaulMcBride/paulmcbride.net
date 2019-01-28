import { Link } from 'gatsby';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../images/paul-mcbride-logo.png';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translate(-20px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`;

const Header = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #ecf0f1;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  max-width: 1100px;
  padding: 16px;
`;

const LogoContainer = styled('div')`
  flex: 1;
  display: flex;
`;

const LogoHeading = styled('h1')`
  display: inline-block;
  margin-top: 0;
  margin-bottom: 0;
`;

const LogoImage = styled('img')`
  max-height: 32px;
  margin-bottom: 0;
  display: block;
  max-width: 100%;
  font-style: italic;
`;

const LogoTitle = styled('span')`
  position: absolute;
  clip: rect(0 0 0 0);
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const CloseIcon = styled('button')`
  height: 22px;
  width: 25px;
  border: 0;
  position: absolute;
  background-color: transparent;
  top: 22px;
  right: 22px;
  padding: 0;
  display: none;

  .open & {
    display: inline-block;
  }

  &:before,
  &:after {
    content: '';
    display: block;
    height: 2px;
    transition: 500ms;
    background-color: white;
    position: relative;
  }

  &:before {
    top: 2px;
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

const NavToggle = styled('button')`
  border: 0;
  height: 22px;
  cursor: pointer;
  @media (min-width: 64rem) {
    display: none;
  }

  span {
    display: block;
    height: 1px;
    width: 25px;
    background: black;

    &:before,
    &:after {
      content: '';
      height: 1px;
      display: block;
      background-color: black;
      transition: 500ms;
    }

    &:before {
      transform: translateY(-7px);
    }

    &:after {
      transform: translateY(7px);
    }
  }
`;

const NavWrapper = styled('div')`
  @media (min-width: 64rem) {
    flex: 3;
  }

  .open & {
    flex: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #27729c;
    z-index: 99;
  }
`;

const NavContainer = styled('div')`
  flex: 3;
  display: none;
  flex-direction: row;

  .open & {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 64rem) {
    display: flex;
  }
`;

const Navigation = styled('nav')`
  flex: 3;
  text-align: center;

  .open & {
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const NavLink = styled(Link)`
  display: inline-block;
  margin-right: 1rem;
  color: black;
  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    color: #1f5f8b;

    &:hover {
      color: black;
    }
  }

  .open & {
    opacity: 0;
    margin-right: 0;
    margin-bottom: 1rem;
    font-size: 2rem;
    color: white;
    animation: ${FadeIn} 0.2s 1 forwards;
    animation-delay: ${props => `${props.index * 0.12}s`};
  }
`;

const SocialLinks = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .open & {
    flex: none;
  }
`;

const SocialLink = styled('a')`
  svg {
    width: 25px;
    height: 25px;
    fill: #323232;
    transition: fill 300ms ease;
    display: block;
  }

  &:hover svg {
    fill: #1f5f8b;
  }

  .open & {
    svg {
      fill: white;
      width: 35px;
      height: 35px;
    }
  }
`;

class HeaderComponent extends Component {
  state = {
    navOpen: false
  };

  toggleNav = e => {
    e.preventDefault();
    this.setState(prevState => ({ navOpen: !prevState.navOpen }));
  };

  render() {
    const { navOpen } = this.state;

    return (
      <Header className={navOpen && 'open'}>
        <HeaderContainer>
          <LogoContainer>
            <LogoHeading>
              <StyledLink to="/">
                <LogoImage src={`${Logo}`} alt="Paul McBride" />
                <LogoTitle>Paul McBride</LogoTitle>
              </StyledLink>
            </LogoHeading>
          </LogoContainer>

          <NavToggle onClick={this.toggleNav}>
            <span />
          </NavToggle>

          <NavWrapper>
            <CloseIcon onClick={this.toggleNav} />
            <NavContainer>
              <Navigation>
                <NavLink index={1} to="/" activeClassName="active">
                  Home
                </NavLink>
                <NavLink index={2} to="/about" activeClassName="active">
                  About
                </NavLink>
                <NavLink
                  as="a"
                  index={3}
                  href="https://paul-mcbride.teachable.com/"
                  activeClassName="active"
                >
                  Courses
                </NavLink>
                <NavLink index={4} to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </Navigation>

              <SocialLinks>
                <SocialLink
                  href="https://facebook.com/thepaulmcbride"
                  as={OutboundLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Paul's Facebook page"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z" />
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://twitter.com/thepaulmcbride"
                  as={OutboundLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Paul's Twitter Profile"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path d="M39.2 16.8c-1.1.5-2.2.8-3.5 1 1.2-.8 2.2-1.9 2.7-3.3-1.2.7-2.5 1.2-3.8 1.5-1.1-1.2-2.7-1.9-4.4-1.9-3.3 0-6.1 2.7-6.1 6.1 0 .5.1.9.2 1.4-5-.2-9.5-2.7-12.5-6.3-.5.7-.8 1.7-.8 2.8 0 2.1 1.1 4 2.7 5-1 0-1.9-.3-2.7-.8v.1c0 2.9 2.1 5.4 4.9 5.9-.5.1-1 .2-1.6.2-.4 0-.8 0-1.1-.1.8 2.4 3 4.2 5.7 4.2-2.1 1.6-4.7 2.6-7.5 2.6-.5 0-1 0-1.4-.1 2.4 1.9 5.6 2.9 9 2.9 11.1 0 17.2-9.2 17.2-17.2V20c1.2-.9 2.2-1.9 3-3.2z" />
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://instagram.com/thepaulmcbride"
                  as={OutboundLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Paul's Instagram page"
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fillRule="evenodd">
                      <path d="M25 12c-3.53 0-3.973.015-5.36.078-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5 6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36.063 1.384.283 2.329.604 3.155.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604 1.387.063 1.83.078 5.36.078 3.53 0 3.973-.015 5.36-.078 1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5 6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155.063-1.387.078-1.83.078-5.36 0-3.53-.015-3.973-.078-5.36-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303 6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076 1.267.058 1.956.27 2.414.448.607.236 1.04.517 1.495.972.455.455.736.888.972 1.495.178.458.39 1.146.448 2.414.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495 4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972 4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448 1.37-.062 1.782-.076 5.253-.076" />
                      <path d="M25 18a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0" />
                    </g>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://github.com/thepaulmcbride"
                  as={OutboundLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Paul's GitHub account"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"
                    />
                  </svg>
                </SocialLink>
              </SocialLinks>
            </NavContainer>
          </NavWrapper>
        </HeaderContainer>
      </Header>
    );
  }
}

export default HeaderComponent;
