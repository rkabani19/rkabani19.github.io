import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles';
import Social from './social'

const {colors} = theme;

 const AboutContainer = styled.div`
  background-color: ${colors.navy};
  height: 100%;
`;

 export default () => (
  <AboutContainer>
    <Social/>
  </AboutContainer>
) 