import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './News.css';

const News = () => {
  return (
    <>
      <Header />
      <main className="news-page">
      {/* Hero Section */}
      <section className="news-hero">
        <div className="hero__background">
          <div className="hero__overlay"></div>
        </div>
        <div className="hero__content">
          <div className="container">
            <div className="hero__text">
              <h1 className="hero__title">
                Novedades y 
                <span className="hero__highlight"> Noticias</span>
              </h1>
              <p className="hero__description">
                Mantente informado sobre las últimas noticias, avances médicos 
                y eventos del Complejo Hospitalario AVANTE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Noticias Destacadas */}
      <section className="featured-news">
        <div className="container">
          <div className="section-title">
            <h2>Noticias Destacadas</h2>
            <p>Las noticias más importantes de nuestro complejo hospitalario</p>
          </div>
          
          <div className="featured__grid grid grid-2">
            <article className="news-card news-card--featured">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>🏥</span>
                </div>
                <div className="news__category">Infraestructura</div>
              </div>
              <div className="news__content">
                <h3>Inauguración de Nueva Área de Cuidados Intensivos</h3>
                <p className="news__excerpt">
                  AVANTE inaugura su nueva UCI con 12 camas adicionales y tecnología 
                  de última generación para brindar el mejor cuidado crítico.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 15 de Julio, 2025</span>
                  <span className="news__author">👨‍⚕️ Dr. Carlos Mendoza</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card news-card--featured">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>🔬</span>
                </div>
                <div className="news__category">Tecnología</div>
              </div>
              <div className="news__content">
                <h3>Nuevo Equipo de Resonancia Magnética 3.0 Tesla</h3>
                <p className="news__excerpt">
                  Incorporamos tecnología de punta en diagnóstico por imágenes 
                  para obtener resultados más precisos y rápidos.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 8 de Julio, 2025</span>
                  <span className="news__author">👩‍⚕️ Dra. María López</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Todas las Noticias */}
      <section className="all-news section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>Todas las Noticias</h2>
          </div>
          
          <div className="news__grid grid grid-3">
            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>👨‍⚕️</span>
                </div>
                <div className="news__category">Equipo Médico</div>
              </div>
              <div className="news__content">
                <h4>Nuevo Especialista en Cardiología Intervencionista</h4>
                <p className="news__excerpt">
                  El Dr. Roberto Silva se incorpora a nuestro equipo con más de 
                  20 años de experiencia internacional.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 2 de Julio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>🏆</span>
                </div>
                <div className="news__category">Reconocimientos</div>
              </div>
              <div className="news__content">
                <h4>AVANTE Recibe Certificación de Calidad ISO 9001:2015</h4>
                <p className="news__excerpt">
                  Orgullosos de recibir esta importante certificación que avala 
                  nuestros altos estándares de calidad.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 28 de Junio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>💉</span>
                </div>
                <div className="news__category">Salud Pública</div>
              </div>
              <div className="news__content">
                <h4>Campaña de Vacunación Gratuita Contra la Influenza</h4>
                <p className="news__excerpt">
                  Campaña dirigida a adultos mayores y población de riesgo 
                  durante todo el mes de julio.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 25 de Junio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>📚</span>
                </div>
                <div className="news__category">Educación</div>
              </div>
              <div className="news__content">
                <h4>Seminario de Primeros Auxilios para la Comunidad</h4>
                <p className="news__excerpt">
                  Capacitación gratuita para la comunidad sobre técnicas 
                  básicas de primeros auxilios y RCP.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 20 de Junio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>🌱</span>
                </div>
                <div className="news__category">Sostenibilidad</div>
              </div>
              <div className="news__content">
                <h4>AVANTE Implementa Programa de Sostenibilidad Ambiental</h4>
                <p className="news__excerpt">
                  Nuevas iniciativas ecológicas para reducir nuestro impacto 
                  ambiental y promover la salud del planeta.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 15 de Junio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news__image">
                <div className="image-placeholder">
                  <span>🤝</span>
                </div>
                <div className="news__category">Alianzas</div>
              </div>
              <div className="news__content">
                <h4>Convenio con Universidad para Investigación Médica</h4>
                <p className="news__excerpt">
                  Alianza estratégica para impulsar la investigación médica 
                  y la formación de nuevos profesionales.
                </p>
                <div className="news__meta">
                  <span className="news__date">📅 10 de Junio, 2025</span>
                </div>
                <a href="#" className="news__link">Leer más →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Eventos Próximos */}
      <section className="upcoming-events section">
        <div className="container">
          <div className="section-title">
            <h2>Próximos Eventos</h2>
            <p>Participa en nuestras actividades y charlas educativas</p>
          </div>
          
          <div className="events__grid grid grid-2">
            <div className="event-card card">
              <div className="event__header">
                <div className="event__date">
                  <span className="event__day">25</span>
                  <span className="event__month">AGO</span>
                </div>
                <div className="event__info">
                  <h4>Charla: Prevención de Enfermedades Cardiovasculares</h4>
                  <p className="event__time">⏰ 6:00 PM - 8:00 PM</p>
                  <p className="event__location">📍 Auditorio Principal</p>
                </div>
              </div>
              <p className="event__description">
                Charla educativa dirigida al público general sobre la prevención 
                de enfermedades del corazón. Entrada libre.
              </p>
              <div className="event__actions">
                <a href="#" className="btn btn-primary">Registrarse</a>
                <span className="event__capacity">👥 50 cupos disponibles</span>
              </div>
            </div>

            <div className="event-card card">
              <div className="event__header">
                <div className="event__date">
                  <span className="event__day">15</span>
                  <span className="event__month">SEP</span>
                </div>
                <div className="event__info">
                  <h4>Jornada de Salud Comunitaria</h4>
                  <p className="event__time">⏰ 8:00 AM - 4:00 PM</p>
                  <p className="event__location">📍 Plaza Principal</p>
                </div>
              </div>
              <p className="event__description">
                Jornada gratuita de salud con chequeos médicos básicos, 
                vacunación y charlas educativas para toda la familia.
              </p>
              <div className="event__actions">
                <a href="#" className="btn btn-primary">Más información</a>
                <span className="event__capacity">👥 Evento gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter section bg-primary">
        <div className="container">
          <div className="newsletter__content">
            <div className="newsletter__text">
              <h3>Mantente Informado</h3>
              <p>
                Suscríbete a nuestro boletín y recibe las últimas noticias, 
                consejos de salud y eventos directamente en tu correo.
              </p>
            </div>
            <div className="newsletter__form">
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  className="newsletter__input"
                />
                <button className="btn btn-secondary">Suscribirse</button>
              </div>
              <p className="newsletter__privacy">
                📧 Respetamos tu privacidad. Sin spam, solo contenido de valor.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default News;
