import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Información principal */}
          <div className="footer__section footer__main">
            <div className="footer__logo">
              <h3 className="logo">
                <span className="logo__text">AVANTE</span>
                <span className="logo__subtitle">Complejo Hospitalario</span>
              </h3>
            </div>
            <p className="footer__description">
              Brindamos atención médica de calidad con tecnología de vanguardia 
              y un equipo humano comprometido con tu bienestar y el de tu familia.
            </p>
            <div className="footer__emergency">
              <h4>Emergencias 24/7</h4>
              <a href="tel:+51999888777" className="emergency-phone">
                📞 +51 999 888 777
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer__section">
            <h4 className="footer__title">Enlaces Rápidos</h4>
            <ul className="footer__links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#especialidades">Especialidades</a></li>
              <li><a href="#medicos">Nuestros Médicos</a></li>
              <li><a href="#citas">Reservar Cita</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer__section">
            <h4 className="footer__title">Servicios</h4>
            <ul className="footer__links">
              <li><a href="#cardiologia">Cardiología</a></li>
              <li><a href="#pediatria">Pediatría</a></li>
              <li><a href="#neurologia">Neurología</a></li>
              <li><a href="#ginecologia">Ginecología</a></li>
              <li><a href="#emergencias">Emergencias</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="footer__section">
            <h4 className="footer__title">Contáctanos</h4>
            <div className="footer__contact">
              <div className="contact__item">
                <span className="contact__icon">📍</span>
                <div>
                  <p>Av. Principal 123</p>
                  <p>Lima, Perú</p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">📧</span>
                <a href="mailto:info@avante.pe">info@avante.pe</a>
              </div>
              <div className="contact__item">
                <span className="contact__icon">📞</span>
                <a href="tel:+51123456789">+51 123 456 789</a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="footer__social">
              <h4>Síguenos</h4>
              <div className="social__links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios de atención */}
        <div className="footer__schedule">
          <h4>Horarios de Atención</h4>
          <div className="schedule__grid">
            <div className="schedule__item">
              <span>Consultas Generales:</span>
              <span>Lun - Vie: 7:00 AM - 7:00 PM</span>
            </div>
            <div className="schedule__item">
              <span>Sábados:</span>
              <span>8:00 AM - 2:00 PM</span>
            </div>
            <div className="schedule__item">
              <span>Emergencias:</span>
              <span>24 horas, todos los días</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; 2025 Complejo Hospitalario AVANTE. Todos los derechos reservados.</p>
          </div>
          <div className="footer__legal">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos de Uso</a>
            <a href="#cookies">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
