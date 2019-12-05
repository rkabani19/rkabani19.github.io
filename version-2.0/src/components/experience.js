import React from 'react';
import styled, {keyframes} from 'styled-components';
import { theme, media } from '../styles';

const { colors, fonts, fontSizes } = theme;

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 50px 0 50px;
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

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 25px;
  color: ${colors.darkGrey};
`;

const Company = styled.div`
  font-size: ${fontSizes.large};
  font-weight: 600;

  a {
    letter-spacing: 0.07em;
    position: relative;
  }
`;

const JobTitle = styled.div`
  font-size: ${fontSizes.medium};
  font-weight: 300;
`;

const Range = styled.div`
  font-size: ${fontSizes.small};
  font-weight: 300;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;

const pulse = keyframes`
  50%  {transform: scale(0.8);}
`

const Resume = styled.div`
  padding-top: 30px;
  position: relative;

  &:hover {
    cursor: pointer;
    &:after {
      transition: all .2s ease-in-out;
      animation: ${pulse} 0.7s ease-in infinite;
    }
  }

  &:after {
    display: inline-block;
    padding-left: 10px;
    content: '👉';
  }
`;

 export default function Experience({ data }) {

  return (
    <ExperienceContainer>
      <Header>experience.</Header>
      <Body>
        {data && data.map(({ node }) => {
          const { title, url, company, range } = node.frontmatter;
          return (
            <Row>
              <div>
                <Company><a href={url}>{company}</a></Company>
                <JobTitle>{title}</JobTitle>
              </div>
              <Range>{range}</Range>
            </Row>
          )
        })}
        <Resume onClick={()=> window.open("/resume.pdf")}>View my resume</Resume>
      </Body>
    </ExperienceContainer>
  )
 };