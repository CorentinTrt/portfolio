import React from 'react';
import s from './style.module.scss';

type Props = {
  isOpen: Boolean;
  items: [];
};

const MenuContent = (props: Props) => {
  const { isOpen, items } = props;

  const classes = `${s['menu-content']} ${isOpen && s['opened']}`;

  return (
    <div id="menu-content" className={classes}>
      <div id="menu-content-group" className={s['menu-content--group']}>
        {items.map((e, i) => (
          <div className={s['item']} key={`${e.label}_${i}`}>
            {e.wysiwig}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuContent;
