import React, { useEffect, useState } from 'react';
import s from './style.module.scss';

import Slider from 'react-slick';

import Nav, { NavInterface } from '@utils/nav.utils';
import emitter from '@src/emitter.js';

import navItems from '@constants/navItems';
import sliderContent from '@constants/sliderContent';

import Catch from '@sections/catch/Catch';
import Menu from '@sections/menu/Menu';
import MobileDisclaimer from '@sections/mobile-disclaimer/MobileDisclaimer';
import SliderItem from '@sections/slider-item/SliderItem';
import Bars from '@shared/bars/Bars';
import ScrollIndicator from '@shared/scroll-indicator/ScrollIndicator';

const Home = () => {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);
  const [navigationState, setNavigationState] = useState<NavInterface>();
  const [sliderRefState, setSliderRefState] = useState<Slider>();
  const [currentSliderState, setCurrentSliderState] = useState<Number>(0);
  const [state_isOnMobile, setState_isOnMobile] = useState<Boolean>(false);

  useEffect(() => {
    if (!window) return;

    setNavigationState(new Nav(document));

    window.innerWidth < 1000
      ? setState_isOnMobile(true)
      : setState_isOnMobile(false);
  }, []);

  useEffect(() => {
    if (!navigationState) return;
    if (!window) return;

    navigationState.setAttributes();

    window.addEventListener('wheel', (e: WheelEvent) => {
      e.deltaY > 0 ? sliderRefState?.slickNext() : sliderRefState?.slickPrev();
    });

    window.addEventListener('resize', () => {
      window.innerWidth < 1000
        ? setState_isOnMobile(true)
        : setState_isOnMobile(false);
    });
  }, [navigationState, sliderRefState]);

  emitter.on('menu-item::hover', (i: Number) => {
    navigationState?.showTarget(i);
  });

  const sliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    // verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (_: Number, currentIndex: Number) => {
      setCurrentSliderState(currentIndex);
    },
  };

  return (
    <div className={s['home']}>
      {state_isOnMobile && <MobileDisclaimer />}

      <div
        className={s['menu-toggle']}
        onClick={() => {
          setIsMenuOpenState(!isMenuOpenState);
        }}
      >
        <Bars isOnWhite={currentSliderState >= 1} isOpen={isMenuOpenState} />
      </div>

      <div className={s['container-scroll-indicator']}>
        <ScrollIndicator
          isOnWhite={currentSliderState >= 1}
          isFocused={currentSliderState === 0}
        />
        {sliderContent.map((_, i) => (
          <ScrollIndicator
            isOnWhite={currentSliderState >= 1}
            isFocused={currentSliderState === i + 1}
            key={`scroll-indicator-${i}`}
          />
        ))}
      </div>

      <Menu isOpen={isMenuOpenState} items={navItems} />

      {/* @ts-ignore */}
      <Slider ref={setSliderRefState} {...sliderSettings}>
        <Catch />

        {sliderContent.map((e, i) => (
          <SliderItem
            key={`item_${i}`}
            backgroundSrc={e.backgroundSrc}
            title={e.title}
            intro={e.intro}
            job={e.job}
            tools={e.tools}
            link={e.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
