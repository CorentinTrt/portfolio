import React from 'react';
import s from './style.module.scss';

const Catch = () => {
  return (
    <div className={s['catch']}>
      <div className={s['container']}>
        <h1 className={s['heading']}>
          <span>{`Hi, i'm Corentin,`}</span>
        </h1>
        <h1 className={s['heading']}>
          <span>{`Fullstack`}</span>
        </h1>
        <h1 className={s['heading']}>
          <span>{`web developer`}</span>
        </h1>
      </div>
    </div>
  );
};

export default Catch;
