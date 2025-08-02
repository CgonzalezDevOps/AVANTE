const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

// Configuración de multer para subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|svg/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Solo se permiten archivos de imagen (jpeg, jpg, png, svg)'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB límite
  }
});

// Rutas

// Obtener lista de archivos
app.get('/api/files', (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, '../uploads');
    
    if (!fs.existsSync(uploadsDir)) {
      return res.json([]);
    }

    const files = fs.readdirSync(uploadsDir).map(filename => {
      const filePath = path.join(uploadsDir, filename);
      const stats = fs.statSync(filePath);
      
      return {
        id: filename,
        name: filename,
        size: stats.size,
        type: path.extname(filename).substring(1),
        uploadDate: stats.birthtime,
        url: `/api/files/${filename}`
      };
    });

    res.json(files);
  } catch (error) {
    console.error('Error al obtener archivos:', error);
    res.status(500).json({ error: 'Error al obtener la lista de archivos' });
  }
});

// Subir archivo
app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se ha enviado ningún archivo' });
    }

    // Procesar imagen con Sharp si no es SVG
    if (req.file.mimetype !== 'image/svg+xml') {
      const processedPath = path.join(path.dirname(req.file.path), 'processed-' + req.file.filename);
      
      await sharp(req.file.path)
        .resize(1200, 1200, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85 })
        .toFile(processedPath);

      // Eliminar archivo original y renombrar el procesado
      fs.unlinkSync(req.file.path);
      fs.renameSync(processedPath, req.file.path);
    }

    const fileInfo = {
      id: req.file.filename,
      name: req.file.originalname,
      filename: req.file.filename,
      size: req.file.size,
      type: path.extname(req.file.originalname).substring(1),
      uploadDate: new Date(),
      url: `/api/files/${req.file.filename}`
    };

    res.json(fileInfo);
  } catch (error) {
    console.error('Error al subir archivo:', error);
    res.status(500).json({ error: 'Error al procesar el archivo' });
  }
});

// Servir archivo específico
app.get('/api/files/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Archivo no encontrado' });
    }

    res.sendFile(filePath);
  } catch (error) {
    console.error('Error al servir archivo:', error);
    res.status(500).json({ error: 'Error al servir el archivo' });
  }
});

// Eliminar archivo
app.delete('/api/files/:filename', (req, res) => {
  try {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, '../uploads', filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: 'Archivo no encontrado' });
    }

    fs.unlinkSync(filePath);
    res.json({ message: 'Archivo eliminado exitosamente' });
  } catch (error) {
    console.error('Error al eliminar archivo:', error);
    res.status(500).json({ error: 'Error al eliminar el archivo' });
  }
});

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Servidor funcionando correctamente' });
});

// Manejo de errores de multer
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ error: 'El archivo es demasiado grande. Máximo 5MB.' });
    }
  }
  
  if (error.message) {
    return res.status(400).json({ error: error.message });
  }
  
  res.status(500).json({ error: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
  console.log(`📁 Archivos servidos desde: /api/files/`);
});
