import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components';
import { About } from "../components";
import { graphql } from 'gatsby';
import { media } from '../styles';

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
        <About data={data.about.edges}/>
      </LeftContainer>
      <RightContainer>
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
            subtitle
          }
          html
        }
      }
    }
  }
`;