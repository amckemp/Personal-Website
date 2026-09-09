"use client";

import { useState } from "react";

export function CrochetCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((previous) =>
      previous === 0 ? images.length - 1 : previous - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((previous) =>
      previous === images.length - 1 ? 0 : previous + 1,
    );
  };

  return (
    <div className="crochet-carousel-wrapper">
      <div className="crochet-carousel">
        <button
          type="button"
          className="carousel-arrow"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          ←
        </button>

        <div className="carousel-image-frame">
          <img src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} />
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={goToNext}
          aria-label="Next image"
        >
          →
        </button>
      </div>

      <div className="carousel-dots" aria-label="Image navigation">
        {images.map((image, index) => (
          <button
            key={`${title}-${index}`}
            type="button"
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
