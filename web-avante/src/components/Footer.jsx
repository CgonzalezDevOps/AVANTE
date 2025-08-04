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
                <span className="logo__subtitle">Centro Médico Especializado</span>
              </h3>
            </div>
            <p className="footer__description">
              Centro médico especializado que ofrece servicios quirúrgicos y de 
              hospitalización con alta calidad en el servicio a precios accesibles 
              y razonables, con atención humanizada y tecnología de última generación.
            </p>
            <div className="footer__emergency">
              <h4>Contacto Principal</h4>
              <a href="tel:+50322382300" className="emergency-phone">
                📞 (503) 2238-2300
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer__section">
            <h4 className="footer__title">Enlaces Rápidos</h4>
            <ul className="footer__links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
              <li><a href="/servicios">Nuestros Servicios</a></li>
              <li><a href="/novedades">Novedades</a></li>
              <li><a href="/contacto">Contáctanos</a></li>
            </ul>
          </div>

          {/* Servicios */}
          <div className="footer__section">
            <h4 className="footer__title">Nuestros Servicios</h4>
            <ul className="footer__links">
              <li><a href="/servicios">Servicios Quirúrgicos</a></li>
              <li><a href="/servicios">Hospitalización</a></li>
              <li><a href="/servicios">Diagnóstico Médico</a></li>
              <li><a href="/servicios">Consulta Especializada</a></li>
              <li><a href="/contacto">Atención de Emergencia</a></li>
            </ul>
          </div>

          {/* Información de contacto */}
          <div className="footer__section">
            <h4 className="footer__title">Contáctanos</h4>
            <div className="footer__contact">
              <div className="contact__item">
                <span className="contact__icon">📍</span>
                <div>
                  <p>1ra. Calle Poniente #3488</p>
                  <p>Entre 73 y 75 Av. Norte</p>
                  <p>San Salvador, El Salvador</p>
                </div>
              </div>
              <div className="contact__item">
                <span className="contact__icon">📧</span>
                <a href="mailto:administracion@centromedicosv.com">administracion@centromedicosv.com</a>
              </div>
              <div className="contact__item">
                <span className="contact__icon">📞</span>
                <a href="tel:+50322382300">(503) 2238-2300</a>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="footer__social">
              <h4>Síguenos</h4>
              <div className="social__links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <span className="icon-facebook"></span>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <span className="icon-twitter"></span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <span className="icon-linkedin"></span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Horarios de atención */}
        <div className="footer__schedule">
          <h4>Horarios de Atención</h4>
          <div className="schedule__grid">
            <div className="schedule__item">
              <span>Servicios Quirúrgicos:</span>
              <span>Previa cita médica</span>
            </div>
            <div className="schedule__item">
              <span>Consulta Especializada:</span>
              <span>Lun - Vie: 8:00 AM - 5:00 PM</span>
            </div>
            <div className="schedule__item">
              <span>Información General:</span>
              <span>(503) 2238-2300</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>&copy; 2025 Centro Médico Especializado AVANTE. Todos los derechos reservados.</p>
          </div>
          <div className="footer__legal">
            <a href="/contacto">Política de Privacidad</a>
            <a href="/contacto">Términos de Uso</a>
            <a href="/contacto">Información Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
