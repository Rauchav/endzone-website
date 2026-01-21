"use client";

import { useEffect, useState } from "react";

export default function Carousel({ slides = [], label }) {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const activeSlide = slides[index] || {};

  useEffect(() => {
    if (!slides.length || !autoPlay) return undefined;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, autoPlay]);

  const goTo = (nextIndex) => {
    if (!slides.length) return;
    const bounded = (nextIndex + slides.length) % slides.length;
    setIndex(bounded);
    setAutoPlay(false);
  };

  return (
    <div className="carousel" aria-label={label}>
      <div className="carousel__viewport">
        {slides.map((slide, slideIndex) => (
          <div
            key={`${slide.title}-${slideIndex}`}
            className={`carousel__slide ${slideIndex === index ? "carousel__slide--active" : ""}`}
          >
            <div className="carousel__phone">
              <div className="phone">
                <img className="phone__screen" src={slide.image} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="feature__carousel-description" key={`desc-${index}`}>
        <div className="feature__carousel-description-number">{index + 1}</div>
        <div>
          <h3 className="feature__carousel-description-title">{activeSlide.cardTitle || `Title ${index + 1}`}</h3>
          <p className="feature__carousel-description-text">
            {activeSlide.cardText ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."}
          </p>
        </div>
      </div>

      <button className="carousel__nav carousel__nav--prev" onClick={() => goTo(index - 1)} aria-label="Previous">
        ‹
      </button>
      <button className="carousel__nav carousel__nav--next" onClick={() => goTo(index + 1)} aria-label="Next">
        ›
      </button>

      <div className="carousel__dots">
        {slides.map((_, dotIndex) => (
          <button
            key={`dot-${dotIndex}`}
            className={`carousel__dot ${dotIndex === index ? "carousel__dot--active" : ""}`}
            onClick={() => goTo(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
