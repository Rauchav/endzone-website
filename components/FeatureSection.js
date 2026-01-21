"use client";

import Carousel from "./Carousel";

export default function FeatureSection({ id, title, description, slides, icon }) {
  return (
    <section className="section feature" id={id}>
      <div className="feature__carousel">
        <div className="feature__carousel-info">
          <h2 className="feature__carousel-title">
            {icon ? <img className="feature__carousel-icon" src={icon} alt="" /> : null}
            {title}
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus
            massa tristique ipsum, a viverra massa nisl in sapien.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>
        </div>
        <Carousel slides={slides} label={`${title} carousel`} />
      </div>
    </section>
  );
}
