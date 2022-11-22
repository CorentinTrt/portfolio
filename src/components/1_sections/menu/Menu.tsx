import React from 'react';
import s from './style.module.scss';

import MenuContent from '@blocs/menu-content/MenuContent';
import MenuItems from '@blocs/menu-items/MenuItems';

type Props = {
  isOpen: Boolean;
  items: [];
};

const Menu = (props: Props) => {
  const { isOpen, items } = props;

  const classes = `${s['menu']} ${isOpen && s['opened']}`;

  return (
    <div className={classes}>
      <MenuContent isOpen={isOpen} items={items} />

      <MenuItems isOpen={isOpen} items={items} />
    </div>
  );
};

export default Menu;
