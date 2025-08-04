import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Header />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero__background"></div>
          <div className="hero__overlay"></div>
          <div className="hero__content">
            <div className="container">
              <div className="hero__text">
                <h1 className="hero__title">
                  Contáctanos y agenda tu <span className="hero__highlight">cita</span>
                </h1>
                <p className="hero__description">
                  Estamos aquí para atenderte. Contacta con nuestros especialistas 
                  y programa tu consulta de manera fácil y rápida.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="contact-info">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Información de Contacto</h2>
              <p className="section__subtitle">
                Múltiples canales para comunicarte con nosotros
              </p>
            </div>
            
            <div className="contact-info__grid">
              <div className="contact-card">
                <div className="contact__icon">📞</div>
                <h3>Teléfonos</h3>
                <div className="contact__details">
                  <p><strong>Urgencias:</strong> +57 (1) 123-4567</p>
                  <p><strong>Citas:</strong> +57 (1) 234-5678</p>
                  <p><strong>Información:</strong> +57 (1) 345-6789</p>
                  <p><strong>Horario:</strong> 24 horas</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact__icon">📧</div>
                <h3>Correos Electrónicos</h3>
                <div className="contact__details">
                  <p><strong>Citas:</strong> citas@avante.com.co</p>
                  <p><strong>Información:</strong> info@avante.com.co</p>
                  <p><strong>Urgencias:</strong> urgencias@avante.com.co</p>
                  <p><strong>Administración:</strong> admin@avante.com.co</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact__icon">📍</div>
                <h3>Ubicación</h3>
                <div className="contact__details">
                  <p><strong>Dirección:</strong> Calle 123 #45-67</p>
                  <p>Zona Hospitalaria Norte</p>
                  <p>Bogotá, Colombia</p>
                  <p><strong>Código Postal:</strong> 110111</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact__icon">🕒</div>
                <h3>Horarios de Atención</h3>
                <div className="contact__details">
                  <p><strong>Urgencias:</strong> 24/7</p>
                  <p><strong>Consulta Externa:</strong> 6:00 AM - 8:00 PM</p>
                  <p><strong>Laboratorio:</strong> 5:00 AM - 6:00 PM</p>
                  <p><strong>Farmacia:</strong> 24 horas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Forms */}
        <section className="contact-forms">
          <div className="container">
            <div className="forms__grid">
              {/* Appointment Form */}
              <div className="form-section">
                <div className="form__header">
                  <h3>Agendar Cita</h3>
                  <p>Programa tu consulta médica</p>
                </div>
                
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre Completo *</label>
                      <input type="text" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="form-group">
                      <label>Teléfono *</label>
                      <input type="tel" placeholder="Tu número de teléfono" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Correo Electrónico *</label>
                      <input type="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="form-group">
                      <label>Documento de Identidad *</label>
                      <input type="text" placeholder="Número de documento" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Especialidad *</label>
                      <select required>
                        <option value="">Selecciona una especialidad</option>
                        <option value="cardiologia">Cardiología</option>
                        <option value="pediatria">Pediatría</option>
                        <option value="ginecologia">Ginecología</option>
                        <option value="neurologia">Neurología</option>
                        <option value="traumatologia">Traumatología</option>
                        <option value="medicina-general">Medicina General</option>
                        <option value="dermatologia">Dermatología</option>
                        <option value="oftalmologia">Oftalmología</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Fecha Preferida *</label>
                      <input type="date" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>EPS o Seguro Médico</label>
                    <input type="text" placeholder="Nombre de tu EPS o seguro médico" />
                  </div>

                  <div className="form-group">
                    <label>Motivo de la Consulta</label>
                    <textarea rows="4" placeholder="Describe brevemente el motivo de tu consulta"></textarea>
                  </div>

                  <button type="submit" className="btn btn--primary">
                    Agendar Cita
                  </button>
                </form>
              </div>

              {/* General Contact Form */}
              <div className="form-section">
                <div className="form__header">
                  <h3>Contacto General</h3>
                  <p>Envíanos tu mensaje o consulta</p>
                </div>
                
                <form className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre Completo *</label>
                      <input type="text" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="form-group">
                      <label>Teléfono</label>
                      <input type="tel" placeholder="Tu número de teléfono" />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Correo Electrónico *</label>
                    <input type="email" placeholder="tu@email.com" required />
                  </div>

                  <div className="form-group">
                    <label>Asunto *</label>
                    <select required>
                      <option value="">Selecciona un asunto</option>
                      <option value="informacion">Solicitud de Información</option>
                      <option value="queja">Quejas y Reclamos</option>
                      <option value="sugerencia">Sugerencias</option>
                      <option value="felicitacion">Felicitaciones</option>
                      <option value="autorizacion">Autorización de Servicios</option>
                      <option value="facturacion">Facturación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Mensaje *</label>
                    <textarea rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
                  </div>

                  <div className="form-group">
                    <label className="checkbox-label">
                      <input type="checkbox" required />
                      Acepto los términos y condiciones y autorizo el tratamiento de mis datos personales
                    </label>
                  </div>

                  <button type="submit" className="btn btn--primary">
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map and Directions */}
        <section className="location-map">
          <div className="container">
            <div className="section__header">
              <h2 className="section__title">Cómo Llegar</h2>
              <p className="section__subtitle">
                Encuentra la ruta más fácil para llegar al Complejo Hospitalario AVANTE
              </p>
            </div>
            
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-icon">🗺️</div>
                <p>Mapa interactivo</p>
                <p>Calle 123 #45-67, Zona Hospitalaria Norte</p>
                <p>Bogotá, Colombia</p>
              </div>
            </div>

            <div className="directions-grid">
              <div className="direction-card">
                <h4>🚗 En Vehículo Particular</h4>
                <ul>
                  <li>Toma la Autopista Norte hasta la Calle 127</li>
                  <li>Gira a la derecha hacia la Zona Hospitalaria</li>
                  <li>Continúa por 2 cuadras hasta la Calle 123</li>
                  <li>El hospital estará a tu izquierda</li>
                </ul>
                <p><strong>Parqueadero disponible</strong> - $5,000/hora</p>
              </div>

              <div className="direction-card">
                <h4>🚌 En Transporte Público</h4>
                <ul>
                  <li>TransMilenio: Estación Hospital Norte</li>
                  <li>Bus urbano: Rutas 123, 456, 789</li>
                  <li>Camina 3 minutos desde la estación</li>
                </ul>
                <p><strong>Tiempo estimado:</strong> 45-60 minutos desde el centro</p>
              </div>

              <div className="direction-card">
                <h4>🚕 En Taxi o Uber</h4>
                <ul>
                  <li>Dirección: "Complejo Hospitalario AVANTE"</li>
                  <li>Referência: "Zona Hospitalaria Norte"</li>
                  <li>Tiempo desde el aeropuerto: 45 minutos</li>
                  <li>Desde el centro: 25 minutos</li>
                </ul>
                <p><strong>Costo estimado:</strong> $15,000 - $25,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="emergency-contact">
          <div className="container">
            <div className="emergency__content">
              <div className="emergency__info">
                <h3>🚨 Contacto de Emergencia</h3>
                <p>
                  Para situaciones de emergencia médica, comunícate inmediatamente 
                  con nuestro servicio de urgencias disponible 24 horas.
                </p>
                <div className="emergency__numbers">
                  <a href="tel:+571234567" className="emergency__number">
                    📞 +57 (1) 123-4567
                  </a>
                  <a href="tel:123" className="emergency__number emergency__number--primary">
                    🚑 Línea 123 (Emergencias Nacional)
                  </a>
                </div>
              </div>
              <div className="emergency__features">
                <div className="feature">
                  <span className="feature__icon">⚡</span>
                  <span>Atención 24/7</span>
                </div>
                <div className="feature">
                  <span className="feature__icon">🏥</span>
                  <span>UCI Especializada</span>
                </div>
                <div className="feature">
                  <span className="feature__icon">🚑</span>
                  <span>Ambulancias Disponibles</span>
                </div>
                <div className="feature">
                  <span className="feature__icon">👨‍⚕️</span>
                  <span>Especialistas de Guardia</span>
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

export default Contact;
