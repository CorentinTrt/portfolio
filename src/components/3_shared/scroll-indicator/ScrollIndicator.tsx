import React from 'react';
import s from './style.module.scss';

type Props = {
  isOnWhite: Boolean;
  isFocused: Boolean;
};

const ScrollIndicator = (props: Props) => {
  const { isOnWhite, isFocused } = props;

  const classes = `${s['scroll-indicator']} ${isOnWhite && s['on-white']} ${
    isFocused && s['focused']
  }`;

  return <div className={classes}></div>;
};

export default ScrollIndicator;
