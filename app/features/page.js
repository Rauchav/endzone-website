import FeatureSection from "../../components/FeatureSection";

const featureSlides = [
  {
    title: "Screen 01",
    image: "/images/mockups/pag1%20mockup.png",
    cardTitle: "Scan the code",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  },
  {
    title: "Screen 02",
    image: "/images/mockups/pag2%20mockup.png",
    cardTitle: "Order pop up",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  },
  {
    title: "Screen 03",
    image: "/images/mockups/pag3%20mockup.png",
    cardTitle: "Search for the package",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  },
  {
    title: "Screen 04",
    image: "/images/mockups/pag4%20mockup.png",
    cardTitle: "Verify package info",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  },
  {
    title: "Screen 05",
    image: "/images/mockups/pag5%20mockup.png",
    cardTitle: "Verify customer info",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  },
  {
    title: "Screen 06",
    image: "/images/mockups/pag6%20mockup.png",
    cardTitle: "Customer signature",
    cardText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod, urna at tristique sodales, lectus massa tristique ipsum, a viverra massa nisl in sapien."
  }
];

const featureSections = [
  {
    id: "external-load",
    title: "EXTERNAL LOAD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis posuere risus, sed efficitur orci. Sed vitae nibh non urna dignissim maximus.\n\nSuspendisse potenti. Integer sed aliquet odio. Phasellus et neque a eros fermentum consectetur in in arcu.",
    icon: "/images/icons/features/external%20load%20icon.png"
  },
  {
    id: "move",
    title: "MOVE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dignissim lacus a orci ultricies, sed egestas arcu bibendum.\n\nMauris sed tortor id libero luctus facilisis. Sed quis sem et lacus facilisis accumsan.",
    icon: "/images/icons/features/move%20icon.png"
  },
  {
    id: "load",
    title: "LOAD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et viverra erat. Aenean laoreet elit in nisi lacinia, in mollis urna aliquet.\n\nIn hac habitasse platea dictumst. Pellentesque sed velit vitae nibh ultrices placerat.",
    icon: "/images/icons/features/load%20icon.png"
  },
  {
    id: "customer-pickup",
    title: "CUSTOMER PICKUP (COLLECT)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, justo a luctus iaculis, libero est dignissim lacus, at gravida magna nulla ut nisi.\n\nMorbi ac ex vitae lorem feugiat aliquet. Integer at sem ut erat tincidunt viverra.",
    icon: "/images/icons/features/customer%20pickup%20icon.png"
  },
  {
    id: "delivery",
    title: "DELIVERY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum nisl eu urna luctus, vitae cursus arcu lacinia.\n\nVestibulum placerat ligula non ipsum tristique, non consequat lorem convallis.",
    icon: "/images/icons/features/delivery%20icon.png"
  },
  {
    id: "custom-feature",
    title: "CUSTOM FEATURE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor lorem a neque mattis, quis tempor velit posuere.\n\nQuisque vitae orci at libero maximus facilisis sed quis lorem.",
    icon: "/images/icons/features/new%20feature.png"
  }
];

export default function FeaturesPage() {
  return (
    <>
      <section className="section feature-menu" id="feature-menu">
        <h2 className="section__title">What can Endzone do for you?</h2>
        <div className="feature-menu__grid">
          <div className="feature-menu__column">
            {[
              {
                title: "EXTERNAL LOAD",
                text: "Enables the reception of external packages via Endzone's global integration API",
                icon: "/images/icons/features/external%20load%20icon.png",
                href: "#external-load"
              },
              {
                title: "MOVE",
                text: "Records the transfer of parcels between outbound areas or branches, updating the physical location of the parcel in real time.",
                icon: "/images/icons/features/move%20icon.png",
                href: "#move"
              },
              {
                title: "LOAD",
                text: "Allows the reception of packages from other Endzones, providing the corresponding traceability.",
                icon: "/images/icons/features/load%20icon.png",
                href: "#load"
              }
            ].map((item) => (
              <a className="feature-menu__card" href={item.href} key={item.title}>
                <img className="feature-menu__icon" src={item.icon} alt="" />
                <div>
                  <h5 className="feature-menu__card-title">{item.title}</h5>
                  <p className="feature-menu__card-text">{item.text}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="feature-menu__phone">
            <img
              className="feature-menu__phone-image"
              src="/images/mockups/home%20page%20mockup.png"
              alt="Endzone app screen"
            />
          </div>

          <div className="feature-menu__column">
            {[
              {
                title: "CUSTOMER PICKUP (COLLECT)",
                text: "Manage fast delivery at the counter or store, validating packages by scanning them to mark the order as shipped immediately.",
                icon: "/images/icons/features/customer%20pickup%20icon.png",
                href: "#customer-pickup"
              },
              {
                title: "DELIVERY",
                text: "Manage home delivery with your own or an outsourced fleet using Endzone, capturing proof of delivery to successfully update order status.",
                icon: "/images/icons/features/delivery%20icon.png",
                href: "#delivery"
              },
              {
                title: "CUSTOM FEATURE",
                text: "We can create any unique activities or workflows specific to your operations.",
                icon: "/images/icons/features/new%20feature.png",
                href: "#custom-feature"
              }
            ].map((item) => (
              <a className="feature-menu__card" href={item.href} key={item.title}>
                <img className="feature-menu__icon" src={item.icon} alt="app features icons" />
                <div>
                  <h5 className="feature-menu__card-title">{item.title}</h5>
                  <p className="feature-menu__card-text">{item.text}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {featureSections.map((section) => (
        <FeatureSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          slides={featureSlides}
          icon={section.icon}
        />
      ))}

      <section className="section section--tight cta cta--features">
        <span className="logo">
          <img className="logo__img" src="/images/logos/logo endzone.svg" alt="Endzone" />
        </span>
        <h3 className="cta__title">
          Ready to link your business to the most reliable and efficient delivery system in the market?
        </h3>
        <p className="cta__text">
          By consolidating parcel management, counter pickups, and home deliveries into a single, agile, and error-free
          digital flow, we turn the journey from warehouse to customers into a fast and simple experience.
        </p>
        <div className="cta__actions">
          <button className="btn btn--primary">Let’s talk</button>
          <button className="btn btn--secondary">Request a demo</button>
        </div>
      </section>
    </>
  );
}
