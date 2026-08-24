import { useState } from "react";

export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0);

  const goTo = (i) => {
    setIndex((i + slides.length) % slides.length);
  };

  return (
    <div className="carousel" id="carousel">
      <div className="carousel-slides" id="carousel-slides">
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`carousel-slide${i === index ? " active" : ""}`}
            loading="lazy"
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" id="prev" aria-label="Previous Slide" onClick={() => goTo(index - 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 18, height: 18 }}>
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button className="carousel-btn" id="next" aria-label="Next Slide" onClick={() => goTo(index + 1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ width: 18, height: 18 }}>
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
