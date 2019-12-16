import React from 'react';
import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { socialMedia } from '../config';
import { IconGithub, IconLinkedin, IconFacebook, IconEmail } from './icons';
import { media, theme } from '../styles';

const {colors} = theme;

const SocialContainer = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  color: ${colors.bluish};

  ${media.desktop`
    position: inherit;
    left: 0;
    width: fit-content;
  `};
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
    background-color: ${colors.slate};
  }

  ${media.desktop`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &:after {
      display: none;
    }
  `};
`;

const SocialItem = styled.li`
  &:last-of-type {
    margin-bottom: 20px;
  }

  ${media.desktop`
    margin: 0;
    &:last-of-type {
      margin-bottom: 0;
    }
  `};
`;

const SocialLink = styled.a`
  padding: 10px;
  svg {
    width: 18px;
    height: 18px;
    fill: ${colors.slate};
    transition: all 0.3s;
    transform-origin: 50% 50%;
  }

  &:hover {
    &:after {
      display: none;
    }
    svg {
      fill: ${colors.brightRed};
      transform: scale(1.2);
    }
  }

  ${media.desktop`
    svg {
      width: 25px;
      height: 25px;
    }
    padding: 0 50px 0 0;
  `};

  ${media.phablet`
    svg {
      width: 18px;
      height: 18px;
    }
    padding: 0 30px 0 0;
  `};
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