import React from 'react';
import s from './style.module.scss';

import Icon from "../../3_shared/icons/Icons";

type Props = {
  backgroundSrc: string;
  title: string;
  intro: string;
  job: string;
  tools: string[];
  link: string;
};

const SliderItem = (props: Props) => {
  const { backgroundSrc, title, intro, job, tools, link } = props;

  return (
    <div className={s['slider-item']}>
      <div
        className={s['left']}
        style={{ background: `url("./images/${backgroundSrc}")` }}
      >
        <h2 className={s['left--heading']}>{title}</h2>
      </div>
      <div className={s['right']}>
        <p className={s['right--text']}>{intro}</p>
        <p className={s['right--text']}>{job}</p>
        <div className={s['tool-container']}>
          {tools.map((t, i) => {
            return <Icon key={`${t}_${i}`} label={t}/>;
          })}
        </div>
        <a
          className={s['right--link']}
          href={link}
          target="_blank"
          rel="noreferrer"
        >{`Let's check the project !`}</a>
      </div>
    </div>
  );
};

export default SliderItem;
