"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 10);
      if (current > lastScroll && current > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${hidden ? "navbar--hidden" : ""} ${scrolled ? "navbar--scrolled" : ""}`}>
       <Link href="/" className="logo">
          <img className="logo__img-navbar" src="/images/logos/logo endzone.svg" alt="Endzone" />
        </Link>
      <nav className="navbar__nav">
        <Link href="/" className="navbar__link">
          Home
        </Link>
        <Link href="/features" className="navbar__link">
          Features
        </Link>
        <Link href="/#solutions" className="navbar__link">
          Solutions
        </Link>
        <Link href="/#cta" className="navbar__link">
          Contact
        </Link>
      </nav>
      <div className="navbar__cta">
        <Link href="/features" className="btn btn--primary">
          GET STARTED
        </Link>
      </div>
    </header>
  );
}
