import React from 'react';
import { Link } from "gatsby";
import styled, { keyframes } from 'styled-components';
import { theme, media } from '../styles';
import Layout from "../components/layout";

const { colors, fontSizes } = theme;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.navy};
`;

const ErrorCode = styled.div`
  color: ${colors.whitish};
  line-height: 1.1;
  font-size: 120px;
  ${media.tablet`font-size: 120px;`};
  ${media.phablet`font-size: 100px;`};
  ${media.phone`font-size: 80px;`};
`;

const ErrorMessage = styled.div`
  margin: 25px 0 50px 0;
  line-height: 1.1;
  color: ${colors.slate};
  font-size: 30px;
  letter-spacing: 0.07em;
  ${media.tablet`font-size: 20px;`};
  ${media.phablet`font-size: 15px;`};
  ${media.phone`font-size: 15px;`};
`;

const pulse = keyframes`
  50%  {transform: scale(0.8);}
`;

const ErrorEscape = styled.div`
  margin: 40px 0;
  position: relative;
  color: ${colors.brightRed};
  font-size: 25px;
  ${media.tablet`font-size: 20px;`};
  ${media.phablet`font-size: 15px;`};
  ${media.phone`font-size: 15px;`};

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

  a {
    &:after {
      display: none;
    }
  }
`;

const NotFoundPage = () => (
  <Layout>
    <Container>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops, looks like there is nothing here</ErrorMessage>
      <ErrorEscape><Link to="/">Go home</Link></ErrorEscape>
    </Container>
  </Layout>
)

export default NotFoundPage
