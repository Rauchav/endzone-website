export default function HomePage() {
  const clientLogos = [
    { src: "/images/clients/client1.png", alt: "Aether Logistics" },
    { src: "/images/clients/client2.png", alt: "Vertex Retail Group" },
    { src: "/images/clients/client3.png", alt: "Nova Commerce" },
    { src: "/images/clients/client4.png", alt: "Lumin Supply Co." },
    { src: "/images/clients/client5.png", alt: "Orbital Express" },
    { src: "/images/clients/client6.png", alt: "Polaris Fulfillment" },
    { src: "/images/clients/client7.png", alt: "Pulse Network" },
    { src: "/images/clients/client8.png", alt: "Atlas Markets" }
  ];

  const testimonials = [
    {
      quote:
        "Endzone gave us total visibility across every pickup node. Our delivery SLA went from good to unstoppable.",
      name: "Priya Deshmukh",
      title: "VP of Operations",
      company: "Vertex Retail Group",
      avatar: "/images/testimonials/testimonial1.png"
    },
    {
      quote:
        "The platform connects our warehouses and stores like a single organism. The customer experience is finally premium.",
      name: "Daniel Grant",
      title: "Director of Logistics",
      company: "Aether Logistics",
      avatar: "/images/testimonials/testimonial2.png"
    },
    {
      quote:
        "Endzone's analytics unlocked a new level of precision for last-mile handoff. It's a strategic advantage.",
      name: "Sofia Alvarez",
      title: "Chief Supply Chain Officer",
      company: "Nova Commerce",
      avatar: "/images/testimonials/testimonial3.png"
    },
    {
      quote:
        "Implementation was elegant and fast. We scaled pickup points without adding operational complexity.",
      name: "Ethan Brooks",
      title: "Head of Fulfillment Strategy",
      company: "Orbital Express",
      avatar: "/images/testimonials/testimonial4.png"
    }
  ];

  return (
    <>
      <section className="hero" id="home">
        <div className="hero__content">
          <span className="logo">
            <img className="logo__img" src="/images/logos/logo icon endzone white.svg" alt="Endzone" />
          </span>
          <h1 className="hero__title">Intelligent PUDO management system</h1>
          <h3 className="hero__subtitle">
            Seamlessly link your stores and warehouses into a network of collection points.
          </h3>
          <a href="#perfect-delivery" className="btn btn--primary hero__cta">
            Learn more
          </a>
        </div>
        <div className="hero__scroll-indicator">
          <span className="material-symbols-outlined hero__scroll-icon">arrow_circle_down</span>
        </div>
      </section>

      <section className="section trust" id="trust">
        <div className="trust__header">
          <h2 className="section__title">Companies that already trust Endzone</h2>
        </div>
        <div className="trust__marquee" aria-label="Client logos">
          <div className="trust__track">
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div className="trust__logo" key={`${logo.alt}-${index}`}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className="trust__testimonials">
          <h2 className="section__title">Some customers' Testimonials.</h2>
          <div className="testimonials__grid">
            {testimonials.map((item) => (
              <article className="testimonial__card" key={item.name}>
                <p className="testimonial__quote">"{item.quote}"</p>
                <div className="testimonial__profile">
                  <img className="testimonial__avatar" src={item.avatar} alt={item.name} />
                  <div>
                    <h4 className="testimonial__name">{item.name}</h4>
                    <p className="testimonial__role">
                      {item.title} · {item.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section delivery" id="perfect-delivery">
        <div className="delivery__header">
          <h2 className="section__title">Where logistics meets the finish line</h2>
          <h3 className="section__subtitle">We ensure zero-error delivery and easy returns.</h3>
        </div>
        <h4 className="delivery__question">What is a PERFECT DELIVERY?</h4>
        <div className="delivery__steps">
          {[
            { text: "Always the correct package", icon: "/images/icons/steps/box.png" },
            { text: "To the right person", icon: "/images/icons/steps/person.png" },
            { text: "At the exact time", icon: "/images/icons/steps/clock.png" },
            { text: "In the precise location", icon: "/images/icons/steps/location.png" }
          ].map((item) => (
            <div className="delivery__step" key={item.text}>
              <img className="delivery__step-icon" src={item.icon} alt="" />
              <h5 className="delivery__step-text">{item.text}</h5>
            </div>
          ))}
        </div>
      </section>

      <section className="section infrastructure" id="infrastructure">
        <h2 className="section__title">Agile implementation in any infrastructure</h2>
        <div className="infrastructure__grid">
          {[
            {
              title: "Fulfillment Centers",
              text: "Keep traceability of the packages after the warehouse completes pick & pack. Organize for easy handover to Carriers/Couriers or Customers.",
              image: "/images/imgs/infrastructures/fulfillment centers.png"
            },
            {
              title: "Point of Sale (Retail)",
              text: "Transform everyday retail spaces into powerful logistics delivery nodes that bridge the gap between e-commerce and the local community.",
              image: "/images/imgs/infrastructures/points of sale.png"
            },
            {
              title: "Residential Micro-Hubs",
              text: "Transform common areas from residential lobbies to neighborhood gatehouses into secure and convenient logistics hubs for your customers.",
              image: "/images/imgs/infrastructures/residential micro-hubs.png"
            },
            {
              title: "Last Mile",
              text: "Routing and traceability of packages as they move between hubs or delivery trucks until they reach the customer.",
              image: "/images/imgs/infrastructures/mobile units.png"
            }
          ].map((card) => (
            <article className="infrastructure__card" key={card.title}>
              <div
                className="infrastructure__cover"
                style={{ backgroundImage: `url("${encodeURI(card.image)}")` }}
              />
              <h3 className="infrastructure__title">{card.title}</h3>
              <p className="infrastructure__text">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions" id="solutions">
        <div className="solutions__list">
          <h3 className="solutions__title">PICK UP</h3>
          {[
            {
              title: "Click & Collect Management",
              text: "Fast delivery at the counter or in-store via the Collect activity",
              icon: "inventory_2"
            },
            {
              title: "Agile & Secure Validation",
              text: "Package scanning to ensure the customer receives the correct order.",
              icon: "verified_user"
            },
            {
              title: "Instant Delivery",
              text: "Immediate update to SHIPPED status with notifications upon physical pickup.",
              icon: "flash_on"
            }
            ].map((item) => (
              <div className="solutions__item" key={item.title}>
                <div className="solution__item-icon-container">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h5 className="solutions__item-title">{item.title}</h5>
                  <p className="solutions__item-text">{item.text}</p>
                </div>
              </div>
            ))}
        </div>

        <div className="solutions__phone">
          <img
            className="solutions__phone-image"
            src="/images/mockups/glorifier%20endzone%20app.png"
            alt="Endzone app screen"
          />
        </div>

        <div className="solutions__list">
          <h3 className="solutions__title">DROP OFF</h3>
          {[
            {
              title: "Consolidation",
              text: "Manifest several packages into a single container (LPN) through the Load activity for transfers.",
              icon: "all_inbox"
            },
            {
              title: "Delivery",
              text: "Last-mile parcel management with final delivery registration via your own or a third-party fleet.",
              icon: "local_shipping"
            },
            {
              title: "Proof of Delivery",
              text: "Verification of final delivery, with photo, GPS location and customer signature at the time of delivery.",
              icon: "task_alt"
            }
            ].map((item) => (
              <div className="solutions__item" key={item.title}>
                <div className="solution__item-icon-container">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <h5 className="solutions__item-title">{item.title}</h5>
                  <p className="solutions__item-text">{item.text}</p>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="section section--tight cta cta--home" id="cta">
        <span className="logo">
          <img className="logo__img-cta" src="/images/logos/logo endzone mixed.svg" alt="Endzone" />
        </span>
        <h3 className="cta__title">
          Ready to link your business to the most reliable and efficient delivery system in the market?
        </h3>
        <p className="cta__text">
          By consolidating parcel management, counter pickups, and home deliveries into a single, agile, and
          error-free digital flow, we turn the journey from warehouse to customers into a fast and simple experience.
        </p>
        <div className="cta__actions">
          <button className="btn btn--primary">Let’s talk</button>
          <a href="/features" className="btn btn--secondary">
            Endzone Features
          </a>
        </div>
      </section>
    </>
  );
}
