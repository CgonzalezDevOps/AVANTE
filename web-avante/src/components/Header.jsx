import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <div className="header__logo">
            <h1 className="logo">
              <span className="logo__text">AVANTE</span>
              <span className="logo__subtitle">Complejo Hospitalario</span>
            </h1>
          </div>

          {/* Navegación Desktop */}
          <nav className="header__nav">
            <ul className="nav__list">
              <li><a href="/" className="nav__link">Inicio</a></li>
              <li><a href="/nosotros" className="nav__link">Nosotros</a></li>
              <li><a href="/servicios" className="nav__link">Nuestros Servicios</a></li>
              <li><a href="/novedades" className="nav__link">Novedades</a></li>
              <li><a href="/contacto" className="nav__link">Contáctanos</a></li>
            </ul>
          </nav>

          {/* Botones de acción */}
          <div className="header__actions">
            <a href="/contacto" className="btn btn-primary">Reservar Cita</a>
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
          <nav className="mobile-nav">
            <ul className="mobile-nav__list">
              <li><a href="/" className="mobile-nav__link" onClick={toggleMobileMenu}>Inicio</a></li>
              <li><a href="/nosotros" className="mobile-nav__link" onClick={toggleMobileMenu}>Nosotros</a></li>
              <li><a href="/servicios" className="mobile-nav__link" onClick={toggleMobileMenu}>Nuestros Servicios</a></li>
              <li><a href="/novedades" className="mobile-nav__link" onClick={toggleMobileMenu}>Novedades</a></li>
              <li><a href="/contacto" className="mobile-nav__link" onClick={toggleMobileMenu}>Contáctanos</a></li>
              <li><a href="/contacto" className="btn btn-primary mobile-cta" onClick={toggleMobileMenu}>Reservar Cita</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
