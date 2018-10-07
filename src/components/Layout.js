import 'prismjs/themes/prism-okaidia.css';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import config from '../../config';
import Footer from '../components/Footer';
import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

// import '../css/normalize.css';

const MainContainer = styled('main')`
  margin: 0 auto;
  padding-top: 0;
`;

export default class Template extends React.Component {
  state = {
    navOpen: false,
  };

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="%s | Paul McBride"
          defaultTitle={config.title}
        >
          <html lang="en" />
        </Helmet>

        <GlobalStyles />

        <Header />

        <MainContainer>{this.props.children}</MainContainer>

        <Footer />
      </React.Fragment>
    );
  }
}
