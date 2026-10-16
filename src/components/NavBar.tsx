'use client';

import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.scss';

export default function NavBar() {
  const [showBrand, setShowBrand] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 115) {
        setShowBrand(true);
      } else {
        setShowBrand(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${styles.navbar}`}>
      <div className="container-fluid p-0">
        <a
          className={`navbar-brand ${styles.brand} ${showBrand ? styles.brandVisible : styles.brandHidden}`}
          href="#home"
          onClick={closeMenu}
        >
          Chaitanya Khanna
        </a>

        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="navbarText"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a href="#home" className={`nav-link ${styles.navLink}`} onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about-me" className={`nav-link ${styles.navLink}`} onClick={closeMenu}>
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="#work-ex" className={`nav-link ${styles.navLink}`} onClick={closeMenu}>
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#proj" className={`nav-link ${styles.navLink}`} onClick={closeMenu}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact-me" className={`nav-link ${styles.navLink}`} onClick={closeMenu}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
