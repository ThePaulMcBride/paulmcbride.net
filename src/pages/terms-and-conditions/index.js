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
          <h1>Terms and Conditions</h1>

          <h2>Terms</h2>
          <p>By accessing the website located at http://paulmcbride.net , you hereby agree to be bound by these Terms of Service and to comply with all applicable legislation and regulations. If you fail to comply with any of the terms or conditions contained therein, you will be prohibited from accessing the above website. All content and materials contained within this website are protected by the appropriate copyright and trademark legislation.</p>

          <h2>Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on my website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
          <ul>
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on my website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or “mirror” the materials on any other server.</li>
          </ul>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by me at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</p>

          <h2>Disclaimer</h2>
          <p>The materials on my website are provided on an ‘as is’ basis. I make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
          <p>Further, I do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on my website or otherwise relating to such materials or on any sites linked to this site.</p>

          <h2>Limitations</h2>
          <p>In no event shall I or my suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on my website, even if I or an authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>

          <h2>Accuracy of materials</h2>
          <p>The materials appearing on my website could include technical, typographical, or photographic errors. I do not warrant that any of the materials on my website are accurate, complete or current. I may make changes to the materials contained on my website at any time without notice. However I do not make any commitment to update the materials.</p>

          <h2>Links</h2>
          <p>I have not reviewed all of the sites linked to my website and I am not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by myself of the site. Use of any such linked website is at the user’s own risk.</p>

          <h2>Modifications</h2>
          <p>I may revise these terms of service for my website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>

          <h2>Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of United Kingdom of Great Britain and Northern Ireland and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
}
