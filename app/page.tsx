
import EnquiryForm from "../components/EnquiryForm";
import Image from 'next/image';


const services = [
  {
    number: "01",
    title: "Buying a Home",
    description:
      "Find a home that reflects your lifestyle, preferences, and future aspirations.",
  },
  {
    number: "02",
    title: "Selling a Property",
    description:
      "Navigate your property-selling journey with thoughtful guidance and support.",
  },
  {
    number: "03",
    title: "Finding the Right Fit",
    description:
      "Explore residential opportunities across Gurgaon and the wider Delhi NCR region.",
  },
];

const values = [
  {
    number: "01",
    title: "People First",
    description:
      "Every home search starts with understanding the people and aspirations behind it.",
  },
  {
    number: "02",
    title: "Thoughtful Guidance",
    description:
      "We aim to make the property journey clearer, more informed, and less overwhelming.",
  },
  {
    number: "03",
    title: "Local Perspective",
    description:
      "Our initial focus is on the residential real estate landscape of Gurgaon and Delhi NCR.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <header className="site-header">
        <div className="container nav-container">
          <a className="brand" href="#home" aria-label="DreamNest home">
            {/* <span className="brand-mark">D</span> */}
            <Image
              src="/images/logo/DNLOGOTR.png"
              alt="DreamNest Logo"
              width={180}
              height={60}
              priority
              className="brand-logo"
            />

            <span className="brand-text">
              {/* <span className="brand-name">Dreamnest</span> */}
              <span className="brand-tagline">FIND YOUR PLACE</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#about" className="nav-link">
              About Us
            </a>
            <a href="#approach" className="nav-link">
              Our Approach
            </a>
            <a href="#why-us" className="nav-link">
              Why DreamNest
            </a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s Connect <span aria-hidden="true">↗</span>
          </a>

          <details className="mobile-menu">
            <summary aria-label="Toggle navigation menu">
              <span></span>
              <span></span>
            </summary>

            <nav aria-label="Mobile navigation">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#approach">Our Approach</a>
              <a href="#why-us">Why DreamNest</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-image" aria-hidden="true"></div>
        <div className="hero-overlay" aria-hidden="true"></div>

        <div className="container hero-content">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-line"></span>
              A NEW PERSPECTIVE ON REAL ESTATE
            </p>

            <h1>
              More than a house.
              <br />
              <span>A place to belong.</span>
            </h1>

            <p className="hero-description">
              Every home tells a story. Let&apos;s help you discover the
              place where yours begins, with DreamNest.
            </p>

            <div className="hero-actions">
              <a href="#about" className="button button-light">
                Discover DreamNest <span aria-hidden="true">↗</span>
              </a>

              <a href="#approach" className="hero-text-link">
                Explore our approach <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <div className="hero-location">
            <span className="location-dot"></span>
            GURGAON &amp; DELHI NCR
          </div>

          <div className="hero-bottom-note">
            FIND A HOME THAT FEELS LIKE YOURS.
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro section-padding" id="about">
        <div className="container intro-grid">
          <div className="intro-heading">
            <p className="eyebrow">
              <span className="eyebrow-line"></span>
              GET TO KNOW US
            </p>

            <h2>
              Finding a home
              <br />
              should feel <span>personal.</span>
            </h2>
          </div>

          <div className="intro-content">
            <p className="intro-lead">
              At DreamNest, we believe finding a home is about more than
              four walls. It&apos;s about discovering a place that fits your
              life, your ambitions, and your idea of the future.
            </p>

            <p className="body-copy">
              We are building a residential real estate brand focused on
              thoughtful guidance, meaningful connections, and a more
              considered home-finding experience across Gurgaon and Delhi
              NCR.
            </p>

            <a href="#approach" className="text-link">
              Get to know our approach <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="container intro-image-wrap">
          <div className="intro-image"></div>

          <div className="image-caption">
            <span>A SPACE TO CALL YOUR OWN</span>
            <span>01 — THE DREAMNEST PERSPECTIVE</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services section-padding" id="approach">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">
                <span className="eyebrow-line"></span>
                HOW WE CAN HELP
              </p>

              <h2>
                Your journey.
                <br />
                <span>Our approach.</span>
              </h2>
            </div>

            <p className="section-description">
              Every property journey is different. Our aim is to make the
              experience more personal, considered, and aligned with what
              matters to you.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="card-number">{service.number}</span>

                <div className="service-icon" aria-hidden="true">
                  {service.number === "01"
                    ? "⌂"
                    : service.number === "02"
                      ? "↗"
                      : "◇"}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href="#contact"
                  className="card-link"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <span>Let&apos;s talk</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why DreamNest */}
      <section className="why-us section-padding" id="why-us">
        <div className="container why-grid">
          <div className="why-image">
            <div className="why-image-label">
              <span className="label-dot"></span>
              A MORE PERSONAL APPROACH
            </div>
          </div>

          <div className="why-content">
            <p className="eyebrow">
              <span className="eyebrow-line"></span>
              THE DREAMNEST DIFFERENCE
            </p>

            <h2>
              Real estate,
              <br />
              with <span>you</span> at the centre.
            </h2>

            <p className="body-copy why-description">
              A property decision is an important part of your life.
              We believe the experience should reflect that, with a
              focus on understanding your needs and helping you make
              informed choices.
            </p>

            <div className="values-list">
              {values.map((value) => (
                <div className="value-item" key={value.number}>
                  <span className="value-number">{value.number}</span>

                  <div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </div>

                  <span className="value-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision">
        <div className="vision-image" aria-hidden="true"></div>
        <div className="vision-overlay" aria-hidden="true"></div>

        <div className="container vision-content">
          <p className="eyebrow vision-eyebrow">
            <span className="eyebrow-line"></span>
            OUR VISION
          </p>

          <h2>
            Every great story
            <br />
            deserves a <span>place to begin.</span>
          </h2>

          <p>
            We envision a home-finding experience built around people,
            guided by understanding, and shaped by the possibilities
            of a place you can truly call your own.
          </p>

          <a href="#contact" className="button button-light">
            Start a Conversation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>



      {/* Contact / Enquiry */}
      <section className="contact section-padding" id="contact">
        <EnquiryForm /> 
      </section>

   

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">D</span>

            <span className="brand-text">
              <span className="brand-name">dreamnest</span>
              <span className="brand-tagline">FIND YOUR PLACE</span>
            </span>
          </a>

          <p className="footer-message">
            Thoughtful real estate.
            <br />
            A more personal journey home.
          </p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#approach">Our Approach</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="container footer-bottom">
          {/* <p>© {new Date().getFullYear()} DreamNest. All rights reserved.</p> */}

          <p>GURGAON · DELHI NCR · INDIA</p>

          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
