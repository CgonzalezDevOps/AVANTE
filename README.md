# AVANTE

## Descripción del Proyecto

AVANTE es una página web moderna y responsive con un administrador de archivos integrado. El proyecto está diseñado para manejar imágenes (JPEG, PNG, SVG) y texto de manera eficiente, con la capacidad de ser desplegado en cualquier servidor web.

## 🚀 Stack Tecnológico

### Frontend
- **React 18** + **TypeScript** - Framework principal
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Framework de estilos modernos y responsive
- **React Router** - Navegación entre páginas
- **React Dropzone** - Funcionalidad drag & drop para archivos
- **Axios** - Cliente HTTP para comunicación con el backend
- **Lucide React** - Iconografía moderna

### Backend
- **Node.js** + **Express** - Servidor web
- **Multer** - Manejo de subida de archivos
- **Sharp** - Procesamiento y optimización de imágenes
- **CORS** - Habilitado para desarrollo cross-origin
- **Nodemon** - Desarrollo con auto-restart

### Administrador de Archivos
- **Drag & Drop** para subir imágenes
- **Procesamiento automático** de imágenes con Sharp
- **Redimensionado inteligente** (máximo 1200x1200px)
- **Optimización de calidad** (85% JPEG)
- **Validación de tipos** (JPEG, PNG, SVG)
- **Límite de tamaño** (5MB por archivo)

## 📂 Estructura del Proyecto

```
AVANTE/
├── frontend/           # Aplicación React
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.ts
├── backend/            # Servidor Express
│   ├── server.js
│   └── package.json
├── uploads/            # Almacenamiento de archivos
├── docs/              # Documentación
└── README.md          # Este archivo
```

## 🔧 API Endpoints

### Archivos
- `GET /api/files` - Obtener lista de todos los archivos
- `POST /api/upload` - Subir nuevo archivo
- `GET /api/files/:filename` - Servir archivo específico
- `DELETE /api/files/:filename` - Eliminar archivo

### Sistema
- `GET /api/health` - Estado del servidor

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (recomendado v20+)
- npm o yarn

### Configuración del Backend
```bash
cd backend
npm install
npm run dev
```
El servidor se ejecutará en `http://localhost:3001`

### Configuración del Frontend
```bash
cd frontend
npm install
npm run dev
```
La aplicación se ejecutará en `http://localhost:5173`

## 🌟 Funcionalidades Implementadas

✅ **Subida de archivos** con validación de tipo y tamaño  
✅ **Procesamiento automático** de imágenes  
✅ **Lista de archivos** con información detallada  
✅ **Eliminación de archivos**  
✅ **Vista previa** de imágenes  
✅ **Responsive design** con Tailwind CSS  
✅ **API RESTful** completa  
✅ **Manejo de errores** robusto  

## 🎯 Configuración del Repositorio

### Estructura de Ramas

Este proyecto utiliza una estrategia de ramas GitFlow con las siguientes ramas principales:

- **main**: Rama principal de producción
- **dev**: Rama de desarrollo donde se integran las nuevas funcionalidades
- **sit**: Rama de integración y testing antes de pasar a producción

### Setup Inicial

Las ramas fueron creadas y enviadas al repositorio remoto:

```bash
# Crear ramas locales
git branch dev
git branch sit

# Enviar ramas al repositorio remoto
git push origin dev
git push origin sit
```

### Enlaces de Pull Requests

- [Crear PR para dev](https://github.com/CgonzalezDevOps/AVANTE/pull/new/dev)
- [Crear PR para sit](https://github.com/CgonzalezDevOps/AVANTE/pull/new/sit)

## 🚀 Próximos Pasos

1. **Crear componente administrador de archivos en React**
2. **Implementar interfaz de usuario con drag & drop**
3. **Configurar routing con React Router**
4. **Integrar frontend con backend**
5. **Implementar funcionalidades avanzadas:**
   - Búsqueda y filtrado de archivos
   - Organización por carpetas
   - Metadatos de archivos
   - Previsualización mejorada

## 📝 Notas de Desarrollo

- El servidor backend maneja automáticamente la creación del directorio `uploads`
- Las imágenes se optimizan automáticamente al subirlas (excepto SVG)
- Se mantiene la relación de aspecto original en el redimensionado
- CORS está habilitado para permitir desarrollo local

## 🤝 Contribución

Para contribuir al proyecto:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request