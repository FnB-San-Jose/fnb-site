import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { DotButton, NextButton, PrevButton } from './embla-carousel-buttons'

import Image from 'next/image';

declare module '*.jpg';
import media1 from "public/assets/images/media-1.png";
import media2 from "public/assets/images/media-2.png";
import media3 from "public/assets/images/media-3.png";
import media4 from "public/assets/images/media-4.png";
import media5 from "public/assets/images/media-5.png";
import media6 from "public/assets/images/media-6.png";

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = (index: number) => media[index % media.length];

const EmblaCarousel = (props: PropType) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="embla">
        <div className="embla__viewport rounded" ref={viewportRef}>
          <div className="embla__container">
            {props.slides.map((index) => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <Image
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default EmblaCarousel;