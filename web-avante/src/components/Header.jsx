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
              <li><a href="#inicio" className="nav__link">Inicio</a></li>
              <li><a href="#servicios" className="nav__link">Servicios</a></li>
              <li><a href="#especialidades" className="nav__link">Especialidades</a></li>
              <li><a href="#medicos" className="nav__link">Médicos</a></li>
              <li><a href="#contacto" className="nav__link">Contacto</a></li>
            </ul>
          </nav>

          {/* Botones de acción */}
          <div className="header__actions">
            <a href="#citas" className="btn btn-primary">Reservar Cita</a>
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
              <li><a href="#inicio" className="mobile-nav__link" onClick={toggleMobileMenu}>Inicio</a></li>
              <li><a href="#servicios" className="mobile-nav__link" onClick={toggleMobileMenu}>Servicios</a></li>
              <li><a href="#especialidades" className="mobile-nav__link" onClick={toggleMobileMenu}>Especialidades</a></li>
              <li><a href="#medicos" className="mobile-nav__link" onClick={toggleMobileMenu}>Médicos</a></li>
              <li><a href="#contacto" className="mobile-nav__link" onClick={toggleMobileMenu}>Contacto</a></li>
              <li><a href="#citas" className="btn btn-primary mobile-cta" onClick={toggleMobileMenu}>Reservar Cita</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
