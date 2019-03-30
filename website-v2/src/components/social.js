import React from 'react';
import styled from 'styled-components';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {socialMedia} from '../config';
import {IconGithub, IconLinkedin, IconFacebook, IconEmail} from './icons';
import {theme} from '../styles';

const {colors} = theme;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${colors.lightBlack};
`;
const SocialItemList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0;
    background-color: ${colors.lightBlack};
  }
`;
const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }
`;
const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
    fill: ${colors.lightBlack};
  }
`;

const SocialLine = () => {
  return (
    <SocialContainer>
      <TransitionGroup>
        <CSSTransition timeout={3000} classNames="fade">
          <SocialItemList>
            {socialMedia &&
              socialMedia.map(({ url, name }, i) => (
                <SocialItem key={i}>
                  <SocialLink
                    href={url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    aria-label={name}>
                    {name === 'Github' ? (
                      <IconGithub />
                    ) : name === 'Linkedin' ? (
                      <IconLinkedin />
                    ) : name === 'Facebook' ? (
                      <IconFacebook />
                    ) : name === 'Email' ? (
                      <IconEmail />
                    ) : (
                      <IconGithub/>
                    )}
                  </SocialLink>
                </SocialItem>
              ))}
          </SocialItemList>
        </CSSTransition>
      </TransitionGroup>
    </SocialContainer>
  );
}

export default SocialLine
