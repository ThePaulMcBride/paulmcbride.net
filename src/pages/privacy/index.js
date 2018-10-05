import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import background from './images/background.jpg';

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

export default function Template(props) {
  console.log(props)

  return (
    <Layout {...props}>
      <Helmet title={`Page`} />
      <ImageContainer
        imageSrc={background}
      />
      <PageWrapper>
        <ContentWrapper>
          <h1>Privicy Policy</h1>
          <p>Your privacy is important to me.</p>
          <p>It is my policy to respect your privacy regarding any information I may collect while operating my website. Accordingly, I have developed this privacy policy in order for you to understand how I collect, use, communicate, disclose and otherwise make use of personal information. I have outlined our privacy policy below.</p>
          <ul>
            <li>I will collect personal information by lawful and fair means and, where appropriate, with the knowledge or consent of the individual concerned.</li>
            <li>Before or at the time of collecting personal information, I will identify the purposes for which information is being collected.</li>
            <li>I will collect and use personal information solely for fulfilling those purposes specified by us and for other ancillary purposes, unless I obtain the consent of the individual concerned or as required by law.</li>
            <li>Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.</li>
            <li>I will protect personal information by using reasonable security safeguards against loss or theft, as well as unauthorised access, disclosure, copying, use or modification.</li>
            <li>I will make readily available to customers information about my policies and practices relating to the management of personal information.</li>
            <li>I will only retain personal information for as long as necessary for the fulfilment of those purposes.</li>
          </ul>
          <p>I am committed to conducting my business in accordance with these principles in order to ensure that the confidentiality of personal information is protected and maintained. I may change this privacy policy from time to time at my sole discretion.</p>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
}
