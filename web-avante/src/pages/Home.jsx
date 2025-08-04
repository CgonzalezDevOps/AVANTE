import React from 'react';
import Layout from '../components/Layout';
import './Home.css';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <h1 className="hero__title">
                Centro Médico Especializado 
                <span className="hero__highlight"> AVANTE</span>
              </h1>
              <p className="hero__description">
                Nace como una nueva opción en el sector salud para ofertar servicios 
                quirúrgicos y de hospitalización, con alta calidad en el servicio a 
                precios accesibles y razonables para nuestros clientes y aliados estratégicos.
              </p>
              <div className="hero__actions">
                <a href="/contacto" className="btn btn-primary btn--large">
                  Reservar Cita
                </a>
                <a href="/servicios" className="btn btn-secondary btn--large">
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
            <p>Servicios diseñados para promover y restablecer la salud, con base en criterios de alta calidad</p>
          </div>
          
          <div className="services__grid grid grid-3">
            <div className="service-card card">
              <div className="service-card__icon">🏥</div>
              <h3>Servicios Quirúrgicos</h3>
              <p>Cirugías especializadas con equipos de última generación y profesionales altamente calificados.</p>
              <a href="/servicios" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">�️</div>
              <h3>Hospitalización</h3>
              <p>Servicios de hospitalización con atención humanizada y tecnología médica avanzada.</p>
              <a href="/servicios" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🔬</div>
              <h3>Diagnóstico Médico</h3>
              <p>Servicios de diagnóstico con equipos tecnológicos de última generación para resultados precisos.</p>
              <a href="/servicios" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">⚡</div>
              <h3>Atención de Emergencia</h3>
              <p>Servicios de emergencia con agilidad en los procesos y atención médica inmediata.</p>
              <a href="/contacto" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">👨‍⚕️</div>
              <h3>Consulta Especializada</h3>
              <p>Equipo interdisciplinario de profesionales concentrados en su salud y bienestar.</p>
              <a href="/servicios" className="service-card__link">Más información</a>
            </div>
            
            <div className="service-card card">
              <div className="service-card__icon">🏆</div>
              <h3>Atención de Calidad</h3>
              <p>Garantizamos la excelencia en la prestación del servicio con criterios de alta calidad.</p>
              <a href="/nosotros" className="service-card__link">Más información</a>
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
            <h2>¿Por qué escogernos?</h2>
            <p>Contamos con un equipo interdisciplinario de profesionales concentrados en su salud</p>
          </div>
          
          <div className="why-us__grid grid grid-2">
            <div className="why-us__content">
              <div className="feature">
                <div className="feature__icon">🏥</div>
                <div className="feature__content">
                  <h4>Alta Calidad en el Servicio</h4>
                  <p>Comprometidos en brindar servicios diseñados para promover y restablecer la salud con criterios de alta calidad.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">❤️</div>
                <div className="feature__content">
                  <h4>Atención Humanizada</h4>
                  <p>Una concepción de atención humanizada, basados en principios de empatía, responsabilidad y honestidad.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">🔬</div>
                <div className="feature__content">
                  <h4>Tecnología de Última Generación</h4>
                  <p>Equipo tecnológico de última generación para diagnósticos precisos y tratamientos efectivos.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature__icon">⚡</div>
                <div className="feature__content">
                  <h4>Agilidad en los Procesos</h4>
                  <p>Eficiencia y seguridad del paciente con procesos ágiles y trabajo en equipo profesional.</p>
                </div>
              </div>
            </div>
            
            <div className="why-us__stats">
              <div className="stat-card">
                <div className="stat-card__number">Calidad</div>
                <div className="stat-card__label">Alta Calidad en Servicios</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">Equipo</div>
                <div className="stat-card__label">Profesionales Especializados</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">Tecnología</div>
                <div className="stat-card__label">Equipos de Última Generación</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card__number">Humanizado</div>
                <div className="stat-card__label">Atención con Calidez</div>
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
              <h2>¿Necesitas atención médica?</h2>
              <p>Contáctanos para agendar tu cita. Garantizamos la excelencia en la prestación del servicio, satisfaciendo todas sus necesidades en salud.</p>
            </div>
            <div className="quick-contact__actions">
              <a href="tel:+50322382300" className="btn btn-secondary btn--large">
                📞 (503) 2238-2300
              </a>
              <a href="/contacto" className="btn btn--outline btn--large">
                📅 Contactar
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
