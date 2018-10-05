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
          <h1>About</h1>
          <p>Hey, I’m Paul, I’m a software coach, developer and tech enthusiast. I love making things with code and helping others do the same.</p>
          <h3>So where did it all begin?</h3>
          <p>Well, back in 2000, when I was 9 years old, I decided I liked computers, I played a lot of online games (mostly Runescape) and decided I should have a website to share my achievements. Savagegamer.com was born. Or at least thats what I would have called it if I’d had any idea how to buy a domain. I did build a website though. I built it using Yahoo Geocities, and damn, I was proud!</p>
          <p>I was hooked! I was getting at least 3 visitors per month and learning so much about html and css. I knew that this would be a life long hobby, but I had no idea that it would one day become my career. I already had a plan for that…</p>
          <h3>How did I get my first coding job?</h3>
          <p>I didn’t take the usual route into tech. In fact, my story couldn’t be further from the status quo. When I was a little kid, I dreamed of joining the Royal Air Force and when I grew up, thats exactly what I did. I served for 5 years all over the globe and in that time, learnt so much about myself. I wouldn’t trade that experience for the world. One of the most important things I learned during my time in the RAF was that a career in the military wasn’t for me.</p>
          <p>During this time, I kept thinking back to my gaming website and wondering if I could take my interest in coding and make a living from it. So I began researching. I signed up to a few online tutorial websites and soaked up all of the coding knowledge I could. I built more terrible websites and kept learning. I worked a lot of night shifts while in the RAF and during the quieter hours, I’d continue studying and building.</p>
          <p>Eventually, I wasn’t building terrible websites, I was building websites that were actually pretty good. When I left the RAF, I convinced a small digital studio near Belfast to give me a shot and it paid off!</p>
          <h3>How did I start coaching?</h3>
          <p>For around a year, I worked as a contractor for Team Treehouse. My role was to coach their students through a “tech degree” course and carry out code reviews on the students projects. I loved it. After my first coaching session, I remember thinking that this was it, this is what I would spend the rest of my life doing, so here we are. Since then, I’ve worked in more senior software roles and this always involves coaching junior members of the team!</p>
        </ContentWrapper>
      </PageWrapper>
    </Layout>
  );
}
