import React from "react"
import Layout from "../components/layout"
import styled from 'styled-components';
import { About } from "../components";

const LeftContainer = styled.div`
  flex-grow: 1;
  height: 100vh
`;

 const RightContainer = styled.div`
  flex-grow: 1;
  height: 100vh
`;

 const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  align-items: stretch;
`;

const IndexPage = () => (
  <Layout>
    <MainContainer>
      <LeftContainer>
        <About/>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </MainContainer>
  </Layout>
)

export default IndexPage
