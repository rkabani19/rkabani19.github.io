import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components';
import { About, Background, Experience, Projects, HelmetHeader } from "../components";
import { media } from '../styles';
import { graphql } from 'gatsby';

const LeftContainer = styled.div`
  flex-basis: 50%;

  ${media.desktop`
    flex-basis: 100%;
  `};
`;

 const RightContainer = styled.div`
  flex-basis: 50%;
  height: 100vh;
  overflow: auto;

  ${media.desktop`
    flex-basis: 100%;
    height: 100%;
    overflow: none;
    margin-top: 30px;
  `};
`;

 const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: stretch;

  ${media.bigDesktop`
    flex-wrap: inherit;
  `};

  ${media.desktop`
    flex-wrap: wrap;
  `};
`;

const IndexPage = ({ data }) => (
  <Layout>
    <HelmetHeader />
    <MainContainer>
      <LeftContainer>
        <About data={data.about.edges} />
      </LeftContainer>
      <RightContainer>
        <Background data={data.background.edges} />
        <Experience data={data.experience.edges} />
        <Projects data={data.projects.edges}/>
      </RightContainer>
    </MainContainer>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery{
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
      edges {
        node {
          frontmatter {
            name,
            title,
            subtitle,
          }
          html
        }
      }
    }
    background: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/background/" } }) {
      edges {
        node {
          frontmatter {
            title,
          }
          html
        }
      }
    }
    experience: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/experience/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            company
            location
            range
            url
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/projects/" } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            tech
            link
          }
          html
        }
      }
    }
  }
`;

// TODO: update background description
// TODO: add resume
// TODO: update metadata