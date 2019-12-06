import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../styles';

const { colors, fontSizes } = theme;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px;
  ${media.desktop`padding: 50px 100px;`};
  ${media.tablet`padding: 50px 50px;`};
  ${media.phablet`padding: 50px 25px;`};
`;

const Header = styled.div`
  color: ${colors.navy};
  line-height: 1.1;
  font-size: 30px;
  font-weight: 500;
  ${media.tablet`font-size: 30px;`};
  ${media.phablet`font-size: 30px;`};
  ${media.phone`font-size: 30px;`};
`;

const Excerpt = styled.div`
  padding-left: 25px;
  margin-top: 15px;
  color: ${colors.darkGrey};
  font-size: ${fontSizes.medium};

  a {
    position: relative;
  }

  p {
    margin-bottom: 0;
  }
`;

 export default function Background(props) {
  const data = props.data[0].node;

  return (
    <BackgroundContainer>
      <Header>{data.frontmatter.title}</Header>
      <Excerpt dangerouslySetInnerHTML={{ __html: data.html }}/>
    </BackgroundContainer>
  )
 };