
# EcoAlert - Recolección Silenciosa

Solución tecnológica para reducir la contaminación sonora de camiones recolectores en Huancayo mediante geolocalización, notificaciones silenciosas y organización vecinal.

## Arquitectura de la Solución (Actualizada v1.1)

### 1. Frontend (Esta Aplicación)
- **Tecnología:** React (PWA) con TypeScript + Vite.
- **Autenticación:** Simulación de Login con número celular (OTP) para UX más fluida.
- **Geolocalización:** Captura automática de coordenadas GPS del usuario al registrarse ("Mi Casa").
- **Mapa:** Leaflet (OpenStreetMap) optimizado para móvil.
- **EcoTachos (Nuevo):** Módulo de catálogo para contenedores de basura, diseñado para fomentar la compra comunitaria.

### 2. Backend (Estructura de Datos Simulada)
En producción (Firebase), la estructura sería:
- **Colección `/users`:** 
  - `phoneNumber`: ID principal.
  - `location`: GeoPoint (Lat, Lng).
  - `fcmToken`: Para notificaciones push reales.
- **Colección `/ecoTachos`:**
  - Catálogo de productos (Nombre, Precio Referencial, Tipo).
  - Permite al administrador actualizar precios según proveedores locales.
- **Colección `/campaigns` (Futuro):**
  - Para agrupar vecinos (`userIds`) interesados en comprar un contenedor comunitario.

## Funcionalidades Clave

### A. Autenticación y Ubicación
1. El usuario ingresa su celular.
2. Recibe código SMS (Simulado: `123456`).
3. Se solicita permiso de GPS. Esa ubicación se guarda como su punto de alerta.

### B. Rastreo en Tiempo Real
- El usuario ve su casa (Punto Azul) y el camión (Punto Naranja).
- Cálculo de proximidad en el cliente (Haversine) para disparar alertas.

### C. EcoTachos (Monetización)
- Sección educativa y comercial.
- Lista de contenedores recomendados (120L, 240L, Puntos Verdes).
- Precios referenciales para que las juntas vecinales se organicen.

## Instrucciones de Uso (Demo)

1. **Registro:** Ingresa cualquier celular -> Código OTP: `123456`.
2. **GPS:** Acepta el permiso o usa la ubicación por defecto (Huancayo Centro).
3. **Simulación:** Usa el botón flotante de navegación para mover el camión virtual.
4. **Marketplace:** Ve a la pestaña "EcoTachos" para ver el catálogo.

## Futuras Mejoras
- **Campañas de Compra:** Botón "Unirme a compra" que agrupa usuarios por geolocalización cercana para compras al por mayor.
- **Pagos:** Integración con Yape/Plin para la cuota del contenedor.
