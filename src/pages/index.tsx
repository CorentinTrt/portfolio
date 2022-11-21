import React, { useEffect, useState } from 'react';

import Slider from 'react-slick';

import type { NextPage } from 'next';
import Nav, { NavInterface } from '../utils/nav.utils';
import navItems from '../../data/navItems';
import sliderContent from '../../data/sliderContent';

import home_styles from '../../styles/modules/Home.module.scss';
import nav_styles from '../../styles/modules/Nav.module.scss';

import Catch from '../components/1_sections/catch/Catch';
import SliderItem from '../components/1_sections/slider-item/SliderItem';
import Bars from '../components/3_shared/bars/Bars';

import {
  NavContainer,
  NavContent,
  NavMenu,
  ScrollIndicator,
} from '../../styles/modules/Nav.module';

const Home: NextPage = () => {
  const [isMenuOpenState, setIsMenuOpenState] = useState(false);
  const [navigationState, setNavigationState] = useState<NavInterface>();
  const [sliderRefState, setSliderRefState] = useState<Slider>();
  const [currentSliderState, setCurrentSliderState] = useState<Number>(0);

  useEffect(() => {
    setNavigationState(new Nav(document));
  }, []);

  useEffect(() => {
    if (!navigationState) return;
    navigationState.setAttributes();

    window.addEventListener('wheel', (e: WheelEvent) => {
      e.deltaY > 0 ? sliderRefState?.slickNext() : sliderRefState?.slickPrev();
    });
  }, [navigationState, sliderRefState]);

  const sliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    // verticalSwiping: true,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (prevIndex: Number, currentIndex: Number) => {
      setCurrentSliderState(currentIndex);
    },
  };

  return (
    <div className={home_styles['container']}>
      <div
        className={nav_styles['menu-toggle']}
        onClick={() => {
          setIsMenuOpenState(!isMenuOpenState);
        }}
      >
        <Bars isOnWhite={currentSliderState >= 1} isOpen={isMenuOpenState} />
      </div>

      <div className={nav_styles['container-scroll-indicator']}>
        <ScrollIndicator
          isOnWhite={currentSliderState >= 1}
          isFocused={currentSliderState === 0}
        />
        {sliderContent.map((e, i) => (
          <ScrollIndicator
            isOnWhite={currentSliderState >= 1}
            isFocused={currentSliderState === i + 1}
            key={`scroll-indicator-${i}`}
          />
        ))}
      </div>

      <NavContainer isOpen={isMenuOpenState}>
        <NavContent isOpen={isMenuOpenState}>
          <div className={`${nav_styles['nav-content-group']} content`}>
            {navItems.map((e, i) => (
              <div
                className={`${nav_styles['nav-content-item']} nav-content`}
                key={`${e.wysiwig}_${i}`}
              >
                {e.wysiwig}
              </div>
            ))}
          </div>
        </NavContent>

        <NavMenu isOpen={isMenuOpenState}>
          <div className={nav_styles['nav-menu-group']}>
            {navItems.map((e, i) => (
              <div
                className={`${nav_styles['nav-menu-item']} nav-menu`}
                key={`${e.label}_${i}`}
              >
                <div className="number">
                  <span>{`0${i}`}</span>
                </div>
                <a
                  className="nav-menu-label"
                  onMouseEnter={() => navigationState?.showTarget(i)}
                  href="#"
                >
                  {e.label}
                </a>
              </div>
            ))}
          </div>
        </NavMenu>
      </NavContainer>

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
