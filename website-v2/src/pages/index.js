import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import About from "../components/about"

const LeftContainer = styled.div`
  display: flex;
  flex: 1;
  height: 200vh;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 1;
  height: 200vh;
`;

const MainContainer = styled.div`
  display: flex;
`;

const IndexPage = () => (
  <MainContainer>
    <LeftContainer>
      <About />
    </LeftContainer>    
    <RightContainer>
      <p>Place Holder</p>
    </RightContainer>
  </MainContainer>
)

export default IndexPage
