import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import type { NextPage } from 'next';
import Nav, { NavInterface } from '../utils/nav.utils';
import navItems from '../data/navItems';
import sliderContent from '../data/sliderContent';

import home_styles from '../styles/modules/Home.module.scss';
import slider_styles from '../styles/modules/Slider.module.scss';
import text_styles from '../styles/modules/Text.module.scss';
import nav_styles from '../styles/modules/Nav.module.scss';

import {
  Bars,
  NavContainer,
  NavContent,
  NavMenu,
} from '../styles/modules/Nav.module';

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
    // swipeToSlide: true,
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
        <div className={slider_styles['slider-item']}>
          <div className={home_styles['container-main-heading']}>
            <h1 className={text_styles['heading-main']}>
              <span>{`Hi, i'm Corentin,`}</span>
            </h1>
            <h1 className={text_styles['heading-main']}>
              <span>{`Fullstack`}</span>
            </h1>
            <h1 className={text_styles['heading-main']}>
              <span>{`web developer`}</span>
            </h1>
          </div>
        </div>

        {sliderContent.map((e, i) => (
          <div className={slider_styles['slider-item']} key={`${e.title}_${i}`}>
            <div
              className={home_styles['left']}
              style={{ background: `url("./images/${e.backgroundSrc}")` }}
            >
              <h2 className={text_styles['heading-sub']}>{e.title}</h2>
            </div>
            <div className={home_styles['right']}>
              <p className={home_styles['right-text']}>{e.intro}</p>
              <p className={home_styles['right-text']}>{e.job}</p>
              <div className={home_styles['tool-container']}>
                {e.tools.map((t, i) => {
                  const Logo = t.logo;
                  return <Logo key={`${t.label}_${i}`} />;
                })}
              </div>
              <a
                className={home_styles['right-link']}
                href={e.link}
                target="_blank"
                rel="noreferrer"
              >{`Let's check the project !`}</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
