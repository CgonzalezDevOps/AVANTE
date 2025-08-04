import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <main className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <h1 className="hero__title">
                Conoce 
                <span className="hero__highlight"> AVANTE</span>
              </h1>
              <p className="hero__description">
                Más de 15 años comprometidos con la excelencia médica y el bienestar 
                de nuestros pacientes. Somos el complejo hospitalario líder en la región.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="our-story section">
        <div className="container">
          <div className="story__grid grid grid-2">
            <div className="story__content">
              <h2>Nuestra Historia</h2>
              <p>
                El Complejo Hospitalario AVANTE nació en 2009 con la visión de brindar 
                atención médica de calidad mundial en nuestra región. Desde nuestros 
                inicios, hemos estado comprometidos con la innovación, la tecnología 
                de vanguardia y la formación continua de nuestro equipo médico.
              </p>
              <p>
                Lo que comenzó como un pequeño centro médico, hoy se ha convertido en 
                un complejo hospitalario integral que atiende a más de 10,000 pacientes 
                anualmente, ofreciendo servicios especializados en múltiples áreas 
                de la medicina.
              </p>
              <div className="story__highlight">
                <h4>🏆 Nuestro Compromiso</h4>
                <p>
                  "Cada día trabajamos para ser el referente en salud, combinando 
                  tecnología avanzada con el trato humano que nuestros pacientes merecen."
                </p>
              </div>
            </div>
            <div className="story__image">
              <div className="image-placeholder">
                <span>🏥</span>
                <p>Complejo Hospitalario AVANTE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión, Visión y Valores */}
      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Misión, Visión y Valores</h2>
          </div>
          
          <div className="mvv__grid grid grid-3">
            <div className="mvv__card card">
              <div className="mvv__icon">🎯</div>
              <h3>Misión</h3>
              <p>
                Brindar servicios de salud integrales con los más altos estándares 
                de calidad, utilizando tecnología de vanguardia y un equipo humano 
                altamente calificado, comprometido con el bienestar y la recuperación 
                de nuestros pacientes.
              </p>
            </div>
            
            <div className="mvv__card card">
              <div className="mvv__icon">🔭</div>
              <h3>Visión</h3>
              <p>
                Ser el complejo hospitalario líder en la región, reconocido por la 
                excelencia en la atención médica, la innovación tecnológica y el 
                compromiso social, contribuyendo al mejoramiento de la salud y 
                calidad de vida de la comunidad.
              </p>
            </div>
            
            <div className="mvv__card card">
              <div className="mvv__icon">💎</div>
              <h3>Valores</h3>
              <ul>
                <li><strong>Excelencia:</strong> Búsqueda constante de la calidad</li>
                <li><strong>Integridad:</strong> Actuamos con ética y transparencia</li>
                <li><strong>Compasión:</strong> Tratamos con humanidad y respeto</li>
                <li><strong>Innovación:</strong> Adoptamos nuevas tecnologías</li>
                <li><strong>Compromiso:</strong> Dedicación total con nuestros pacientes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="our-team section">
        <div className="container">
          <div className="section-title">
            <h2>Nuestro Equipo Directivo</h2>
            <p>Profesionales con amplia experiencia y reconocimiento internacional</p>
          </div>
          
          <div className="team__grid grid grid-3">
            <div className="team-member card">
              <div className="member__avatar">👨‍⚕️</div>
              <h4>Dr. Carlos Mendoza</h4>
              <p className="member__role">Director Médico General</p>
              <p className="member__specialty">Cardiología Intervencionista</p>
              <p className="member__description">
                25 años de experiencia. Especializado en Harvard Medical School. 
                Pionero en procedimientos mínimamente invasivos.
              </p>
            </div>
            
            <div className="team-member card">
              <div className="member__avatar">👩‍⚕️</div>
              <h4>Dra. Ana Rodríguez</h4>
              <p className="member__role">Jefa de Pediatría</p>
              <p className="member__specialty">Pediatría y Neonatología</p>
              <p className="member__description">
                20 años de experiencia. Formación en Johns Hopkins. Especialista 
                en cuidados intensivos neonatales.
              </p>
            </div>
            
            <div className="team-member card">
              <div className="member__avatar">👨‍⚕️</div>
              <h4>Dr. Miguel Torres</h4>
              <p className="member__role">Director de Emergencias</p>
              <p className="member__specialty">Medicina de Emergencias</p>
              <p className="member__description">
                18 años de experiencia. Certificado en Trauma Life Support. 
                Experto en manejo de emergencias complejas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infraestructura */}
      <section className="infrastructure section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Nuestra Infraestructura</h2>
            <p>Instalaciones modernas diseñadas para tu comodidad y seguridad</p>
          </div>
          
          <div className="infrastructure__grid grid grid-2">
            <div className="infrastructure__content">
              <h3>Instalaciones de Vanguardia</h3>
              <div className="infrastructure__stats">
                <div className="stat-item">
                  <span className="stat-number">120</span>
                  <span className="stat-label">Camas hospitalarias</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Quirófanos equipados</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24</span>
                  <span className="stat-label">Consultorios médicos</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">6</span>
                  <span className="stat-label">Salas de UCI</span>
                </div>
              </div>
            </div>
            
            <div className="infrastructure__features">
              <h3>Tecnología Médica</h3>
              <ul className="features-list">
                <li>🏥 Resonancia Magnética 3.0 Tesla</li>
                <li>🔬 Laboratorio automatizado 24/7</li>
                <li>🩻 Tomógrafo multicorte de 128 detectores</li>
                <li>⚡ Sistema de emergencias avanzado</li>
                <li>💊 Farmacia hospitalaria especializada</li>
                <li>🚁 Helipuerto para emergencias</li>
                <li>🌐 Sistema de telemedicina</li>
                <li>♿ Instalaciones completamente accesibles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificaciones */}
      <section className="certifications section">
        <div className="container">
          <div className="section-title">
            <h2>Certificaciones y Acreditaciones</h2>
            <p>Reconocimiento a nuestros estándares de calidad</p>
          </div>
          
          <div className="certifications__grid grid grid-4">
            <div className="certification-item">
              <div className="cert__icon">🏅</div>
              <h4>ISO 9001:2015</h4>
              <p>Gestión de Calidad</p>
            </div>
            
            <div className="certification-item">
              <div className="cert__icon">⚕️</div>
              <h4>JCI Accredited</h4>
              <p>Joint Commission International</p>
            </div>
            
            <div className="certification-item">
              <div className="cert__icon">🛡️</div>
              <h4>MINSA</h4>
              <p>Ministerio de Salud</p>
            </div>
            
            <div className="certification-item">
              <div className="cert__icon">🌟</div>
              <h4>Calidad Premium</h4>
              <p>Asociación Médica Nacional</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default About;
