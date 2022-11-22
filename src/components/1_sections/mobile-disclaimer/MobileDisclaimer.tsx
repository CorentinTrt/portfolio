import React from 'react';
import s from './style.module.scss';

const MobileDisclaimer = () => {
  return (
    <div className={s['mobile-disclaimer']}>
      <h1 className={s['heading']}>{`Hello, i'm Corentin, web developer`}</h1>
      <h2
        className={s['heading-sub']}
      >{`Mobile version is coming, you should check the site on a laptop ;)`}</h2>
      <h2 className={s['contact']}>
        {'Or may be contact me : corentintruffaut@gmail.com'}
      </h2>
    </div>
  );
};

export default MobileDisclaimer;
