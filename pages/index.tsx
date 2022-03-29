import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import type { NextPage } from 'next';
import Nav, { NavInterface } from '../utils/nav.utils';
import navItems from '../data/navItems';
import sliderContent from '../data/sliderContent';

import {
  Container,
  MainHeadingContainer,
  Left,
  ToolContainer,
  Right,
} from '../styles/index.styled';
import {
  MainHeading,
  SubHeading,
  Text,
  ProjectLink,
} from '../styles/text.styled';
import {
  MenuToggle,
  Bars,
  NavContainer,
  NavContent,
  NavContentGroup,
  NavContentItem,
  NavMenu,
  NavMenuGroup,
  NavMenuItem,
} from '../styles/nav.styled';
import { SliderItem } from '../styles/slider.styled';

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
    <Container>
      <MenuToggle onClick={() => setIsMenuOpenState(!isMenuOpenState)}>
        <Bars isOnWhite={currentSliderState >= 1} isOpen={isMenuOpenState} />
      </MenuToggle>

      <NavContainer isOpen={isMenuOpenState}>
        <NavContent isOpen={isMenuOpenState}>
          <NavContentGroup className="content">
            {navItems.map((e, i) => (
              <NavContentItem key={`${e.wysiwig}_${i}`} className="nav-content">
                {e.wysiwig}
              </NavContentItem>
            ))}
          </NavContentGroup>
        </NavContent>

        <NavMenu isOpen={isMenuOpenState}>
          <NavMenuGroup>
            {navItems.map((e, i) => (
              <NavMenuItem key={`${e.label}_${i}`} className="nav-menu">
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
              </NavMenuItem>
            ))}
          </NavMenuGroup>
        </NavMenu>
      </NavContainer>

      {/* @ts-ignore */}
      <Slider ref={setSliderRefState} {...sliderSettings}>
        <SliderItem>
          <MainHeadingContainer>
            <MainHeading>
              <span>{`Hi, i'm Corentin,`}</span>
            </MainHeading>
            <MainHeading>
              <span>{`Fullstack`}</span>
            </MainHeading>
            <MainHeading>
              <span>{`web developer`}</span>
            </MainHeading>
          </MainHeadingContainer>
        </SliderItem>

        {sliderContent.map((e, i) => (
          <SliderItem key={`${e.title}_${i}`}>
            <Left style={{ background: `url("./images/${e.backgroundSrc}")` }}>
              <SubHeading>{e.title}</SubHeading>
            </Left>
            <Right>
              <Text>{e.intro}</Text>
              <Text>{e.job}</Text>
              <ToolContainer>
                {e.tools.map((t, i) => {
                  const Logo = t.logo;
                  return <Logo key={`${t.label}_${i}`} />;
                })}
              </ToolContainer>
              <ProjectLink
                href={e.link}
                target="_blank"
                rel="noreferrer"
              >{`Let's check the project !`}</ProjectLink>
            </Right>
          </SliderItem>
        ))}
      </Slider>
    </Container>
  );
};

export default Home;
