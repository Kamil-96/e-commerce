import React, { useState } from 'react';

import styles from './HomeCarousel.module.scss';

import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';

const items = [
  {
    src: '/images/Carousel-jeans-1.jpg',
    altText: '',
    caption: 'Welcome to my shop!',
  },
  {
    src: '/images/Carousel-jeans-2.jpg',
    altText: '',
    caption: 'Find what you need!',
  },
  {
    src: '/images/Carousel-jeans-3.jpg',
    altText: '',
    caption: 'Buy at the best price!',
  },
];

const HomeCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionHeader={item.caption} captionText={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      className={styles.homepageCarousel}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
      <CarouselControl direction="next" directionText=" " onClickHandler={next} />
    </Carousel>
  );
};

export default HomeCarousel;
