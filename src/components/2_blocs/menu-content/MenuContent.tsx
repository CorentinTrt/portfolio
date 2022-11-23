import React from 'react';
import s from './style.module.scss';

import type { NavItem } from '@constants/navItems';

type Props = {
  isOpen: Boolean;
  items: NavItem[];
};

const MenuContent = (props: Props) => {
  const { isOpen, items } = props;

  const classes = `${s['menu-content']} ${isOpen && s['opened']}`;

  return (
    <div id="menu-content" className={classes}>
      <div id="menu-content-group" className={s['menu-content--group']}>
        {items.map((e, i) => {
          const Wysiwyg = () => e.wysiwyg;

          return (
            <div className={s['item']} key={`${e.label}_${i}`}>
              <Wysiwyg />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuContent;
