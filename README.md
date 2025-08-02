# AVANTE

## Configuración del Proyecto

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