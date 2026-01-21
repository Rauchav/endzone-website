"use client";

import Carousel from "./Carousel";

export default function FeatureSection({ id, title, description, slides, icon }) {
  return (
    <section className="section feature" id={id}>
      <div className="feature__carousel">
        <h2 className="feature__carousel-title">
          {icon ? <img className="feature__carousel-icon" src={icon} alt="" /> : null}
          {title}
        </h2>
        <Carousel slides={slides} label={`${title} carousel`} />
      </div>
    </section>
  );
}
