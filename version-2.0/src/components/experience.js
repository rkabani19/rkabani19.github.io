import React from 'react';
import styled from 'styled-components';
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

  a:link {
    color: ${colors.brightRed};
    text-decoration: none;
  }

  a:visited {
    color: ${colors.brightRed};
  }
`;

const Company = styled.div`
  font-size: ${fontSizes.large};
  font-weight: 600;
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
      </Body>
    </ExperienceContainer>
  )
 };