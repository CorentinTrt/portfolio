import styled, { css } from 'styled-components';

import {
  slideInLeft,
  slideOutLeft,
  slideInRight,
  slideOutRight,
} from './_animation.config';

export const MenuToggle = styled.div`
  display: flex;
  position: fixed;
  z-index: 1000;
  top: 50px;
  right: 50px;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  cursor: pointer;
`;

export const Bars = styled.div.attrs(
  (props: { isOpen: Boolean; isOnWhite: Boolean }) => props
)`
  position: relative;
  z-index: 1000;
  width: 40px;
  height: 2px;
  transition: background 0.25s ease;
  background: ${props => props.theme.white};

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: center center;
    transition: transform 0.25s ease, top 0.25s ease, bottom 0.25s ease,
      background 0.5s ease;
    background: inherit;
  }
  &:before {
    top: -15px;
  }
  &:after {
    bottom: -15px;
  }

  ${props =>
    props.isOnWhite &&
    css`
      background: ${props => props.theme.black};
      &:after {
        background: ${props => props.theme.black};
      }
    `}

  ${props =>
    props.isOpen &&
    css`
      background: transparent;

      &:before,
      &:after {
        background: ${props => props.theme.black};
      }

      &:before {
        transform: rotate(45deg);
        top: 0;
      }
      &:after {
        transform: rotate(-45deg);
        bottom: 0;
      }
    `}
`;

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
  background: ${props => props.theme.black};
  color: ${props => props.theme.black};

  ${props =>
    props.isOpen &&
    css`
      animation: ${slideInLeft} 0.5s cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
  ${props =>
    !props.isOpen &&
    css`
      animation: ${slideOutLeft} 0.5s cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
`;

export const NavContentContainer = styled.div`
  position: relative;
  width: 50%;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

// showcase menu
export const NavContentGroup = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: visible;
  list-style-type: none;
  transition: top 0.4s ease;
`;

export const NavContentItem = styled.li`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10vh;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: ${props => props.theme.white};
  font-family: 'Montserrat', serif;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 10px;
`;

// menu
export const NavMenu = styled.div.attrs((props: { isOpen: Boolean }) => props)`
  flex: 1;
  background: ${props => props.theme.white};

  ${props =>
    props.isOpen &&
    css`
      animation: ${slideInRight} 0.5s cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
  ${props =>
    !props.isOpen &&
    css`
      animation: ${slideOutRight} 0.5s cubic-bezier(0.3, 0, 0.3, 1) forwards;
    `}
`;

export const NavMenuGroup = styled.ul`
  width: 100%;
  height: 100%;
  padding: 5rem 3rem 1rem 4rem;
  overflow-y: auto;
  list-style-type: none;

  &::-webkit-scrollbar {
    width: 6px;
    height: 10px;

    &-button {
      width: 0px;
      height: 0px;
    }

    &-thumb {
      border: 0px none #ffffff;
      border-radius: 3px;
      background: rgba(0, 0, 0, 0.4);

      &:hover {
        background: #000;
      }

      &:active {
        background: #000;
      }
    }

    &-track {
      border: 0px none #ffffff;
      border-radius: 0;
      background: rgba(0, 0, 0, 0.1);

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }

      &:active {
        background: rgba(0, 0, 0, 0.1);
      }
    }

    &-corner {
      background: transparent;
    }
  }
`;

export const NavMenuItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Montserrat', serif;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1.2rem;
  cursor: default;

  .number {
    display: inline-block;
    padding: 0 0 0 40px;
    overflow: hidden;
    font-family: 'Noto Sans', serif;
    > span {
      display: block;
      transform: translateY(100%);
      transition: transform 0.25s ease;
    }
  }

  a {
    display: inline-block;
    padding: 2.5rem 0 2.5rem 3rem;
    transition: transform 0.25s ease;
    color: ${props => props.theme.black};
    font-size: 2.2rem;
    line-height: 1;
    text-decoration: none;
  }

  &:hover {
    a {
      transform: translateX(20px);
    }
    .number {
      > span {
        transform: translateY(0);
      }
    }
  }
`;
