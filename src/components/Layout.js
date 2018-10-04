import 'prismjs/themes/prism-okaidia.css';
import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
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
          title="Gatsby Default (Blog) Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
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
