import styled, { css, keyframes } from 'styled-components';

const slideXAnimation = (from: string, to: string) => keyframes`
from {
    transform: translateX(${from});
}
to {
    transform: translateX(${to});
}
`;

const colors = {
  $black: '#0a0a0a',
  $blackLight: '#3a3a3a',
  $white: '#f2f2f2',
  $grey: '#999999',
};

export const NavContainer = styled.nav.attrs(
  (props: { isOpen: Boolean }) => props
)`
  display: flex;
  visibility: hidden;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s ease;
  opacity: 0;
  ${props =>
    props.isOpen &&
    css`
      visibility: visible;
      z-index: 900;
      opacity: 1;
    `};
`;

export const NavContent = styled.div.attrs(
  (props: { isOpen: Boolean }) => props
)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${colors.$black};
  color: ${colors.$black};

  ${props =>
    props.isOpen &&
    css`
      animation: ${slideXAnimation('-100%', '0')} 0.5s
        cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
  ${props =>
    !props.isOpen &&
    css`
      animation: ${slideXAnimation('0', '-100%')} 0.5s
        cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
`;

export const NavMenu = styled.div.attrs((props: { isOpen: Boolean }) => props)`
  flex: 1;
  background: ${colors.$white};

  ${props =>
    props.isOpen &&
    css`
      animation: ${slideXAnimation('100%', '0')} 0.5s
        cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
  ${props =>
    !props.isOpen &&
    css`
      animation: ${slideXAnimation('0', '100')} 0.5s
        cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
`;

export const ScrollIndicator = styled.div.attrs(
  (props: { isFocused: Boolean; isOnWhite: Boolean }) => props
)`
  width: 1.5rem;
  height: 2px;
  margin: 0 0 1rem auto;
  transition: all 500ms ease;
  background-color: ${colors.$white};

  ${props =>
    props.isFocused &&
    css`
      width: 3rem;
    `}

  ${props =>
    props.isOnWhite &&
    css`
      background-color: ${colors.$black};
    `}
`;
