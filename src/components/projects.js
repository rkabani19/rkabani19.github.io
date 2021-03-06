import React from 'react';
import styled, { keyframes } from 'styled-components';
import { theme, media } from '../styles';

const { colors, fontSizes } = theme;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 50px 0 50px;
  ${media.desktop`padding: 0 100px;`};
  ${media.tablet`padding: 0 50px;`};
  ${media.phablet`padding: 0 25px;`};
`;

const Body = styled.div`
  width: 100%;
  padding-left: 25px;
  color: ${colors.darkGrey};
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

const Name = styled.div`
  font-size: ${fontSizes.large};
  font-weight: 600;
  letter-spacing: 0.07em;
  width: 100%;
  
  a {
    color: ${colors.darkGrey};
    position: relative;

    &:after {  
      background: ${colors.darkGrey};
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  display: flex;
  color: ${colors.brightRed};
  font-size: ${fontSizes.xxsmall};
  border-style: solid;
  border-width: 1px;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem;
  border-radius: 1.2rem;

  &:first-child {
    margin-left: 0px;
  }
`;

const Description = styled.div`
  font-size: ${fontSizes.medium};
  font-weight: 300;
  margin-bottom: 15px;

  p {
    margin-bottom: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-bottom: 20px;
`;

const pulse = keyframes`
  50%  {transform: scale(0.8);}
`;

const ProjectLink = styled.div`
  margin: 40px 0;
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

 export default function Projects({ data }) {

  return (
    <ProjectsContainer>
      <Header>projects.</Header>
      <Body>
        {data && data.map(({ node }) => {
            const { link, title, tech } = node.frontmatter;
            const { html } = node;

            return (
              <Row>
                <Name><a href={link} target='_blank' rel="noopener noreferrer">{title}</a></Name>
                <Description dangerouslySetInnerHTML={{ __html: html }}/>
                <Tags>
                  {tech && tech.map((tag) =>
                    <Tag>{tag}</Tag>
                  )}
                </Tags>
              </Row>
            );
        })}
        <ProjectLink onClick={()=> window.open("https://www.github.com/rkabani19")}>View more projects</ProjectLink>
      </Body>
    </ProjectsContainer>
  )
 };