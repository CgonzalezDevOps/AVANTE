import './Home.css';

const Home = () => {
  return (
    <main className="home">
      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <h1 className="hero__title">
                Tu Salud, Nuestra 
                <span className="hero__highlight"> Prioridad</span>
              </h1>
              <p className="hero__description">
                En el Complejo Hospitalario AVANTE, brindamos atención médica integral 
                con tecnología de vanguardia y un equipo humano altamente calificado. 
                Tu bienestar es nuestro compromiso.
              </p>
              <div className="hero__actions">
                <a href="#citas" className="btn btn-primary btn--large">
                  Reservar Cita
                </a>
                <a href="#servicios" className="btn btn-secondary btn--large">
                  Ver Servicios
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section id="servicios" className="services section">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos una amplia gama de servicios médicos especializados</p>
          </div>
          
          <div className="services__grid grid grid-3">
            <div className="service-card card">
              <div className="service-card__icon">🏥</div>
              <h3>Emergencias 24/7</h3>
              <p>Atención médica de urgencia las 24 horas del día, todos los días del año.</p>
              <a href="#emergencias" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🔬</div>
              <h3>Laboratorio Clínico</h3>
              <p>Análisis clínicos completos con tecnología de última generación.</p>
              <a href="#laboratorio" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🩻</div>
              <h3>Diagnóstico por Imágenes</h3>
              <p>Radiografías, tomografías, resonancias magnéticas y ecografías.</p>
              <a href="#imagenes" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🏃‍♂️</div>
              <h3>Medicina Deportiva</h3>
              <p>Especialistas en lesiones deportivas y rehabilitación física.</p>
              <a href="#deportiva" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🧠</div>
              <h3>Neurología</h3>
              <p>Diagnóstico y tratamiento de enfermedades del sistema nervioso.</p>
              <a href="#neurologia" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">❤️</div>
              <h3>Cardiología</h3>
              <p>Cuidado integral del corazón y sistema cardiovascular.</p>
              <a href="#cardiologia" className="service-card__link">Más información</a>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades */}
      <section id="especialidades" className="specialties section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Especialidades Médicas</h2>
            <p>Contamos con especialistas de reconocida trayectoria</p>
          </div>
          
          <div className="specialties__grid grid grid-4">
            <div className="specialty-item">
              <div className="specialty-item__icon">👶</div>
              <h4>Pediatría</h4>
              <p>Cuidado integral para niños y adolescentes</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🤰</div>
              <h4>Ginecología</h4>
              <p>Salud integral de la mujer</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🦴</div>
              <h4>Traumatología</h4>
              <p>Tratamiento de lesiones óseas y musculares</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">👁️</div>
              <h4>Oftalmología</h4>
              <p>Cuidado especializado de la vista</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🦷</div>
              <h4>Odontología</h4>
              <p>Salud bucal y estética dental</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🧬</div>
              <h4>Oncología</h4>
              <p>Tratamiento integral del cáncer</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🩺</div>
              <h4>Medicina General</h4>
              <p>Atención médica integral y preventiva</p>
            </div>
            
            <div className="specialty-item">
              <div className="specialty-item__icon">🧘‍♀️</div>
              <h4>Psicología</h4>
              <p>Bienestar mental y emocional</p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="why-us section">
        <div className="container">
          <div className="section-title">
            <h2>¿Por qué elegir AVANTE?</h2>
            <p>Somos el mejor complejo hospitalario de la región</p>
          </div>
          
          <div className="why-us__grid grid grid-2">
            <div className="why-us__content">
              <div className="feature">
                <div className="feature__icon">⚡</div>
                <div className="feature__content">
                  <h4>Atención Rápida</h4>
                  <p>Sistema de triaje eficiente para minimizar tiempos de espera.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">👨‍⚕️</div>
                <div className="feature__content">
                  <h4>Médicos Especialistas</h4>
                  <p>Equipo médico con certificaciones internacionales.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">🔬</div>
                <div className="feature__content">
                  <h4>Tecnología Avanzada</h4>
                  <p>Equipos médicos de última generación para diagnósticos precisos.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">🏆</div>
                <div className="feature__content">
                  <h4>Acreditación Internacional</h4>
                  <p>Certificados por organizaciones médicas de prestigio mundial.</p>
                </div>
              </div>
            </div>
            
            <div className="why-us__stats">
              <div className="stat-card">
                <div className="stat-card__number">15+</div>
                <div className="stat-card__label">Años de Experiencia</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">50+</div>
                <div className="stat-card__label">Médicos Especialistas</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">10K+</div>
                <div className="stat-card__label">Pacientes Atendidos</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">24/7</div>
                <div className="stat-card__label">Emergencias</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto rápido */}
      <section id="contacto" className="quick-contact section bg-primary">
        <div className="container">
          <div className="quick-contact__content">
            <div className="quick-contact__text">
              <h2>¿Necesitas una cita médica?</h2>
              <p>Reserva tu cita de manera rápida y sencilla. Nuestro equipo te atenderá con la mejor calidad.</p>
            </div>
            <div className="quick-contact__actions">
              <a href="tel:+51999888777" className="btn btn-secondary btn--large">
                📞 Llamar Ahora
              </a>
              <a href="#citas" className="btn btn--outline btn--large">
                📅 Reservar Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
