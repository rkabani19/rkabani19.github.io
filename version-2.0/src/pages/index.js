import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components';
import { About, Background, Experience } from "../components";
import { graphql } from 'gatsby';

const LeftContainer = styled.div`
  flex-basis: 50%;
  flex: 1;
  height: 100vh
`;

 const RightContainer = styled.div`
  flex-basis: 50%;
  flex; 1;
  height: 100vh
`;

 const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: stretch;
`;

const IndexPage = ({data}) => (
  <Layout>
    <MainContainer>
      <LeftContainer>
        <About data={data.about.edges} />
      </LeftContainer>
      <RightContainer>
        <Background data={data.background.edges} />
        <Experience data={data.experience.edges} />
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
  }
`;