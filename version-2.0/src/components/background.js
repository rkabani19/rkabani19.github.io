import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../styles';

const { colors, fonts, fontSizes } = theme;

const BackgroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 50px 50px 0 50px;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
`;

const Header = styled.div`
  color: ${colors.navy};
  line-height: 1.1;
  font-size: 30px;
  font-weight: 500;
  ${media.desktop`font-size: 100px;`};
  ${media.tablet`font-size: 80px;`};
  ${media.phablet`font-size: 70px;`};
  ${media.phone`font-size: 60px;`};
`;

const Excerpt = styled.div`
  padding-left: 25px;
  margin-top: 15px;
  color: ${colors.darkGrey};
  font-size: ${fontSizes.large};

  a:link {
    color: ${colors.brightRed};
    text-decoration: none;
  }

  a:visited {
    color: ${colors.brightRed};
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