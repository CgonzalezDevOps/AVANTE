# 🏥 AVANTE - Complejo Hospitalario

**Tu Salud, Nuestra Prioridad**

Sitio web oficial del Complejo Hospitalario AVANTE, desarrollado con React, Vite y CSS moderno para ofrecer una experiencia web responsive y profesional.

## 🌟 Características

- ✅ **Diseño Responsive**: Adaptado a todos los dispositivos (móvil, tablet, desktop)
- ✅ **Interfaz Moderna**: UI/UX profesional para el sector de la salud
- ✅ **Navegación Intuitiva**: Menú fijo con navegación suave
- ✅ **Secciones Completas**: Servicios, especialidades, información de contacto
- ✅ **Optimizado para SEO**: Metadatos y estructura semántica
- ✅ **Accesibilidad**: Cumple con estándares web de accesibilidad

## 🛠️ Tecnologías Utilizadas

- **React 19** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de desarrollo rápida
- **CSS3** - Estilos modernos con CSS Grid y Flexbox
- **JavaScript ES6+** - Funcionalidades modernas de JavaScript

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 20.19.0 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd web-avante
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter ESLint

## 📱 Secciones del Sitio

### 🏠 Inicio
- Hero section con llamada a la acción
- Servicios principales destacados
- Especialidades médicas
- Estadísticas del hospital
- Sección de contacto rápido

### 🏥 Servicios
- Emergencias 24/7
- Laboratorio Clínico
- Diagnóstico por Imágenes
- Medicina Deportiva
- Neurología
- Cardiología

### 👨‍⚕️ Especialidades
- Pediatría
- Ginecología
- Traumatología
- Oftalmología
- Odontología
- Oncología
- Medicina General
- Psicología

### 📞 Contacto
- Información de contacto completa
- Horarios de atención
- Ubicación del hospital
- Enlaces a redes sociales

## 🎨 Paleta de Colores

- **Primario**: `#2c5aa0` (Azul médico profesional)
- **Secundario**: `#4a90b8` (Azul claro)
- **Acento**: `#e8f4f8` (Azul muy claro)
- **Éxito**: `#28a745` (Verde médico)
- **Advertencia**: `#ffc107` (Amarillo de alerta)
- **Peligro**: `#dc3545` (Rojo de emergencia)

## 📐 Estructura del Proyecto

```
web-avante/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Layout.jsx
│   │   └── Layout.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🌐 Responsive Design

El sitio está optimizado para:
- **Móvil**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📈 Optimización

- **Performance**: Carga rápida con Vite
- **SEO**: Metadatos optimizados y estructura semántica
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Cross-browser**: Compatible con navegadores modernos

## 🚀 Despliegue

Para construir la aplicación para producción:

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 📞 Contacto

**Complejo Hospitalario AVANTE**
- 📍 Av. Principal 123, Lima, Perú
- 📧 info@avante.pe
- 📞 +51 123 456 789
- 🚨 Emergencias: +51 999 888 777

## 📄 Licencia

© 2025 Complejo Hospitalario AVANTE. Todos los derechos reservados.

---

*Desarrollado con ❤️ para brindar la mejor experiencia digital en salud*+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
