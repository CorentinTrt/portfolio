import React from 'react';
import s from './style.module.scss';

type Props = {
  isOnWhite: Boolean;
  isOpen: Boolean;
};

const Bars = (props: Props) => {
  const { isOnWhite, isOpen } = props;

  const classes = `${s['bars']} ${isOnWhite && s['on-white']} ${
    isOpen && s['opened']
  }`;

  return <div className={classes}></div>;
};

export default Bars;
