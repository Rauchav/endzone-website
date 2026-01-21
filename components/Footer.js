import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row footer__row--nav">
        <nav className="footer__nav">
          <Link href="/" className="footer__link">
            Home
          </Link>
          <Link href="/features" className="footer__link">
            Features
          </Link>
          <Link href="/#solutions" className="footer__link">
            Solutions
          </Link>
          <Link href="/#cta" className="footer__link">
            Contact
          </Link>
        </nav>
      </div>

      <div className="footer__row footer__row--content">
        <div className="footer__block footer__block--contact">
          <div className="footer__item">
            <span className="material-symbols-outlined footer__icon">call</span>
            <span>+1 (555) 890-2045</span>
          </div>
          <div className="footer__item">
            <span className="material-symbols-outlined footer__icon">location_on</span>
            <span>1200 Logistics Ave, Miami, FL</span>
          </div>
          <div className="footer__item">
            <span className="material-symbols-outlined footer__icon">mail</span>
            <span>contact@endzone.io</span>
          </div>
        </div>

        <div className="footer__block footer__block--logo">
          <img
            className="footer__logo"
            src="/images/logos/logo endzone 2 white.svg"
            alt="Endzone"
          />
        </div>

        <div className="footer__block footer__block--social">
          <a
            className="footer__social"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM14.5 9c-1.7 0-2.7.9-3.2 1.8V9H7.5v12h3.8v-6.2c0-1.6.3-3.2 2.2-3.2 1.9 0 1.9 1.8 1.9 3.3V21H19v-6.9c0-3.4-.7-5.1-4.5-5.1z" />
            </svg>
          </a>
          <a
            className="footer__social"
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 8.1a3.1 3.1 0 0 0-2.2-2.2C18.9 5.3 12 5.3 12 5.3s-6.9 0-8.8.6A3.1 3.1 0 0 0 1 8.1 32.4 32.4 0 0 0 1 12a32.4 32.4 0 0 0 .2 3.9 3.1 3.1 0 0 0 2.2 2.2c1.9.6 8.6.6 8.6.6s6.9 0 8.8-.6a3.1 3.1 0 0 0 2.2-2.2A32.4 32.4 0 0 0 23 12a32.4 32.4 0 0 0-.2-3.9zM9.8 15.3V8.7l5.8 3.3-5.8 3.3z" />
            </svg>
          </a>
          <a
            className="footer__social"
            href="https://www.reddit.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Reddit"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.6 12.1a2.6 2.6 0 0 0-4.5-1.7 9.7 9.7 0 0 0-3.8-1l.7-3.2 2.2.5a2 2 0 1 0 .2-1l-2.7-.6a.9.9 0 0 0-1 .7l-.9 3.8a9.8 9.8 0 0 0-4 .9 2.6 2.6 0 1 0-1.7 4.5 4.2 4.2 0 0 0-.1.8c0 2.8 3.4 5 7.6 5s7.6-2.2 7.6-5c0-.3 0-.5-.1-.8a2.6 2.6 0 0 0 1.8-2.6zM8.2 14.4a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm7.6 3.2a4.7 4.7 0 0 1-7.6 0 .7.7 0 0 1 1.1-.8 3.3 3.3 0 0 0 5.4 0 .7.7 0 0 1 1.1.8zm-.1-3.2a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2z" />
            </svg>
          </a>
          <a
            className="footer__social"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm5-3.3a1 1 0 1 1-1-1 1 1 0 0 1 1 1z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
