import React from "react"
import styled from 'styled-components';
import About from "../components/about"

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
  <MainContainer>
    <LeftContainer>
      <About />
    </LeftContainer>    
    <RightContainer>
    </RightContainer>
  </MainContainer>
)

export default IndexPage
