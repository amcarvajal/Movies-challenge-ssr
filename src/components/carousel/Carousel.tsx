import React, { PropsWithChildren, useRef } from "react";
import "./carousel.scss";

interface CarouselProps extends PropsWithChildren {
  title: string;
}

export default function Carousel({ title, children }: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel">
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__wrapper">
        <button className="carousel__btn left" onClick={scrollLeft}>
          ‹
        </button>

        <div className="carousel__container" ref={containerRef}>
          {children}
        </div>

        <button className="carousel__btn right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
}
