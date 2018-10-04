import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/Layout';

const PageWrapper = styled('div')`
  max-width: 1100px;
  margin: 0 auto;

  @media (min-width: 40em) {
    display: flex;
  }
`;

export default function Template(props) {
  return (
    <Layout {...props}>
      <Helmet title={`Page`} />
      <PageWrapper>
        <h1>Hello</h1>
      </PageWrapper>
    </Layout>
  );
}
