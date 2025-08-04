import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Services.css';

const Services = () => {
  return (
    <>
      <Header />
      <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <h1 className="hero__title">
                Nuestros 
                <span className="hero__highlight"> Servicios</span>
              </h1>
              <p className="hero__description">
                Ofrecemos una amplia gama de servicios médicos especializados con 
                tecnología de vanguardia y el mejor equipo humano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Principales */}
      <section className="main-services section">
        <div className="container">
          <div className="section-title">
            <h2>Servicios Principales</h2>
            <p>Atención médica integral para todas tus necesidades de salud</p>
          </div>
          
          <div className="services__grid grid grid-2">
            <div className="service-detail-card card">
              <div className="service__header">
                <div className="service__icon">🚨</div>
                <div>
                  <h3>Emergencias 24/7</h3>
                  <p className="service__subtitle">Atención inmediata cuando más lo necesitas</p>
                </div>
              </div>
              <div className="service__content">
                <p>
                  Nuestro servicio de emergencias está disponible las 24 horas del día, 
                  todos los días del año. Contamos con un equipo especializado en 
                  medicina de emergencias y trauma.
                </p>
                <ul className="service__features">
                  <li>✓ Triaje especializado</li>
                  <li>✓ Unidad de shock trauma</li>
                  <li>✓ Ambulancias equipadas</li>
                  <li>✓ Helipuerto para casos críticos</li>
                </ul>
                <div className="service__contact">
                  <strong>Emergencias: 🚨 +51 999 888 777</strong>
                </div>
              </div>
            </div>

            <div className="service-detail-card card">
              <div className="service__header">
                <div className="service__icon">🔬</div>
                <div>
                  <h3>Laboratorio Clínico</h3>
                  <p className="service__subtitle">Análisis precisos y resultados rápidos</p>
                </div>
              </div>
              <div className="service__content">
                <p>
                  Laboratorio automatizado con tecnología de última generación que 
                  garantiza resultados precisos y tiempos de entrega optimizados.
                </p>
                <ul className="service__features">
                  <li>✓ Análisis bioquímicos completos</li>
                  <li>✓ Microbiología avanzada</li>
                  <li>✓ Inmunología y serología</li>
                  <li>✓ Resultados en línea 24/7</li>
                </ul>
                <div className="service__hours">
                  <strong>Horario: 24 horas, todos los días</strong>
                </div>
              </div>
            </div>

            <div className="service-detail-card card">
              <div className="service__header">
                <div className="service__icon">🩻</div>
                <div>
                  <h3>Diagnóstico por Imágenes</h3>
                  <p className="service__subtitle">Tecnología de vanguardia en imagenología</p>
                </div>
              </div>
              <div className="service__content">
                <p>
                  Centro de diagnóstico por imágenes equipado con la más moderna 
                  tecnología para diagnósticos precisos y detallados.
                </p>
                <ul className="service__features">
                  <li>✓ Resonancia Magnética 3.0 Tesla</li>
                  <li>✓ Tomógrafo multicorte 128 detectores</li>
                  <li>✓ Mamografía digital</li>
                  <li>✓ Ecografía 4D</li>
                </ul>
                <div className="service__hours">
                  <strong>Horario: Lun-Vie 7:00 AM - 8:00 PM</strong>
                </div>
              </div>
            </div>

            <div className="service-detail-card card">
              <div className="service__header">
                <div className="service__icon">🏃‍♂️</div>
                <div>
                  <h3>Medicina Deportiva</h3>
                  <p className="service__subtitle">Especialistas en lesiones deportivas</p>
                </div>
              </div>
              <div className="service__content">
                <p>
                  Centro especializado en medicina deportiva con profesionales 
                  dedicados al cuidado integral del deportista.
                </p>
                <ul className="service__features">
                  <li>✓ Evaluación biomecánica</li>
                  <li>✓ Rehabilitación deportiva</li>
                  <li>✓ Prevención de lesiones</li>
                  <li>✓ Nutrición deportiva</li>
                </ul>
                <div className="service__hours">
                  <strong>Horario: Lun-Sáb 6:00 AM - 6:00 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialidades Médicas */}
      <section className="medical-specialties section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Especialidades Médicas</h2>
            <p>Contamos con especialistas de reconocida trayectoria en diversas áreas</p>
          </div>
          
          <div className="specialties__grid grid grid-4">
            <div className="specialty-card">
              <div className="specialty__icon">❤️</div>
              <h4>Cardiología</h4>
              <p>Cuidado integral del corazón y sistema cardiovascular</p>
              <div className="specialty__services">
                <small>• Ecocardiografía</small>
                <small>• Cateterismo cardíaco</small>
                <small>• Marcapasos</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">👶</div>
              <h4>Pediatría</h4>
              <p>Atención especializada para niños y adolescentes</p>
              <div className="specialty__services">
                <small>• Neonatología</small>
                <small>• Pediatría general</small>
                <small>• Vacunación</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">🧠</div>
              <h4>Neurología</h4>
              <p>Diagnóstico y tratamiento de enfermedades neurológicas</p>
              <div className="specialty__services">
                <small>• Electroencefalografía</small>
                <small>• Neurocirugía</small>
                <small>• Rehabilitación</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">🤰</div>
              <h4>Ginecología</h4>
              <p>Salud integral de la mujer en todas las etapas</p>
              <div className="specialty__services">
                <small>• Obstetricia</small>
                <small>• Planificación familiar</small>
                <small>• Cirugía ginecológica</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">🦴</div>
              <h4>Traumatología</h4>
              <p>Tratamiento de lesiones óseas y musculares</p>
              <div className="specialty__services">
                <small>• Ortopedia</small>
                <small>• Artroscopia</small>
                <small>• Prótesis</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">👁️</div>
              <h4>Oftalmología</h4>
              <p>Cuidado especializado de la salud visual</p>
              <div className="specialty__services">
                <small>• Cirugía refractiva</small>
                <small>• Retina</small>
                <small>• Glaucoma</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">🦷</div>
              <h4>Odontología</h4>
              <p>Salud bucal y estética dental completa</p>
              <div className="specialty__services">
                <small>• Implantología</small>
                <small>• Ortodoncia</small>
                <small>• Estética dental</small>
              </div>
            </div>

            <div className="specialty-card">
              <div className="specialty__icon">🧬</div>
              <h4>Oncología</h4>
              <p>Tratamiento integral y multidisciplinario del cáncer</p>
              <div className="specialty__services">
                <small>• Quimioterapia</small>
                <small>• Radioterapia</small>
                <small>• Cuidados paliativos</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales */}
      <section className="additional-services section">
        <div className="container">
          <div className="section-title">
            <h2>Servicios Adicionales</h2>
            <p>Servicios complementarios para tu bienestar integral</p>
          </div>
          
          <div className="additional__grid grid grid-3">
            <div className="additional-card card">
              <div className="additional__icon">🏥</div>
              <h3>Hospitalización</h3>
              <p>Habitaciones privadas y compartidas con todas las comodidades</p>
              <ul>
                <li>Habitaciones VIP</li>
                <li>Cuidados intensivos</li>
                <li>Enfermería 24/7</li>
              </ul>
            </div>

            <div className="additional-card card">
              <div className="additional__icon">💊</div>
              <h3>Farmacia</h3>
              <p>Farmacia hospitalaria con medicamentos especializados</p>
              <ul>
                <li>Medicamentos oncológicos</li>
                <li>Fórmulas magistrales</li>
                <li>Entrega a domicilio</li>
              </ul>
            </div>

            <div className="additional-card card">
              <div className="additional__icon">🌐</div>
              <h3>Telemedicina</h3>
              <p>Consultas médicas virtuales desde la comodidad de tu hogar</p>
              <ul>
                <li>Consultas en línea</li>
                <li>Seguimiento médico</li>
                <li>Recetas digitales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios y Contacto */}
      <section className="schedule-contact section bg-primary">
        <div className="container">
          <div className="schedule-contact__grid grid grid-2">
            <div className="schedule__content">
              <h3>Horarios de Atención</h3>
              <div className="schedule__list">
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
                <div className="schedule__item">
                  <span>Laboratorio:</span>
                  <span>24 horas, todos los días</span>
                </div>
              </div>
            </div>
            
            <div className="contact__content">
              <h3>Reserva tu Cita</h3>
              <p>Agenda tu consulta de manera fácil y rápida</p>
              <div className="contact__actions">
                <a href="tel:+51123456789" className="btn btn-secondary btn--large">
                  📞 Llamar Ahora
                </a>
                <a href="#citas" className="btn btn--outline btn--large">
                  📅 Cita Online
                </a>
              </div>
              <div className="contact__info">
                <p>📧 citas@avante.pe</p>
                <p>📍 Av. Principal 123, Lima</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Services;
