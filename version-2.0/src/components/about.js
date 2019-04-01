import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
import Social from './social'

const {colors, fonts} = theme;

 const AboutContainer = styled.div`
  background-color: ${colors.navy};
  height: 100%;
`;

const Hello = styled.div`
`;

const Name = styled.div`
`;

const Subtitle = styled.div`
`;

const Excerpt = styled.div`
`;

 export default function About(props) {
  const data = props.data[0].node;

  return (
    <AboutContainer>
      <Hello>{data.frontmatter.title}</Hello>
      <Name>{data.frontmatter.name}</Name>
      <Subtitle>{data.frontmatter.subtitle}</Subtitle>
      {/* <Excerpt>{data.html}</Excerpt> */}
      <Social/>
    </AboutContainer>
  )
 };