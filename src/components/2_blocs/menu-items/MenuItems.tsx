import React from 'react';
import s from './style.module.scss';

import type { NavItem } from '@constants/navItems';

import emitter from '@src/emitter';

type Props = {
  isOpen: Boolean;
  items: NavItem[];
};

const MenuItems = (props: Props) => {
  const { isOpen, items } = props;

  const handleHoverItem = (i: Number) => {
    emitter.emit('menu-item::hover', i);
  };

  const classes = `${s['menu-items']} ${isOpen && s['opened']}`;

  return (
    <div className={classes}>
      <div className={s['menu-items--group']}>
        {items.map((e, i) => (
          <div id="menu-item" className={s['item']} key={`${e.label}_${i}`}>
            <div id="number" className={s['number']}>
              <span>{`0${i}`}</span>
            </div>
            <a onMouseEnter={() => handleHoverItem(i)} href="#">
              {e.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
