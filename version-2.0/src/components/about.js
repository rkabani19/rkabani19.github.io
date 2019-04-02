import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../styles';
import Social from './social'

const { colors, fonts, fontSizes } = theme;

 const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0 50px 0 125px;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
  background-color: ${colors.navy};
`;

const Hello = styled.div`
  color: ${colors.whitish};
  font-size: ${fontSizes.medium};
`;

const Name = styled.div`
  color: ${colors.brightRed};
  line-height: 1.1;
  font-size: 100px;
  ${media.desktop`font-size: 100px;`};
  ${media.tablet`font-size: 80px;`};
  ${media.phablet`font-size: 70px;`};
  ${media.phone`font-size: 60px;`};
`;

const Subtitle = styled.div`
  margin-top: 25px;
  line-height: 1.1;
  color: ${colors.slate};
  font-size: 50px;
  ${media.desktop`font-size: 50px;`};
  ${media.tablet`font-size: 40px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 20px;`};
`;

const Excerpt = styled.div`
  margin-top: 15px;
  color: ${colors.slate};
`;

 export default function About(props) {
  const data = props.data[0].node;

  return (
    <AboutContainer>
      <Hello>{data.frontmatter.title}</Hello>
      <Name>{data.frontmatter.name}</Name>
      <Subtitle>{data.frontmatter.subtitle}</Subtitle>
      {/* <Excerpt dangerouslySetInnerHTML={{ __html: data.html }}/> */}
      <Social/>
    </AboutContainer>
  )
 };