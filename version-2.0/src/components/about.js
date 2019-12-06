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
  color: ${colors.brightRed};
  font-size: ${fontSizes.medium};
`;

const Name = styled.div`
  color: ${colors.whitish};
  line-height: 1.1;
  font-size: 100px;
  ${media.tablet`font-size: 80px;`};
  ${media.phablet`font-size: 70px;`};
  ${media.phone`font-size: 60px;`};
`;

const Subtitle = styled.div`
  margin: 25px 0 50px 0;
  line-height: 1.1;
  color: ${colors.slate};
  font-size: 30px;
  ${media.tablet`font-size: 20px;`};
  ${media.phablet`font-size: 15px;`};
  ${media.phone`font-size: 15px;`};
`;

 export default function About(props) {
  const data = props.data[0].node;

  return (
    <AboutContainer>
      <Hello>{data.frontmatter.title}</Hello>
      <Name>{data.frontmatter.name}</Name>
      <Subtitle>{data.frontmatter.subtitle}</Subtitle>
      <Social />
    </AboutContainer>
  )
 };