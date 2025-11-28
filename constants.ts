
import { Coordinates, EcoTacho, WasteRoute } from './types';

// Huancayo, Junín, Perú - Ubicación por defecto (Parque Constitución)
export const DEFAULT_CENTER: Coordinates = {
  lat: -12.0681,
  lng: -75.2106
};

// --- DATA PARA AUTOCOMPLETADO (LUGARES HUANCAYO) ---
export const HUANCAYO_LANDMARKS = [
  { name: "Parque Constitución", address: "Jr. Puno & Calle Real", lat: -12.0681, lng: -75.2106 },
  { name: "Plaza Huamanmarca", address: "Calle Real & Jr. Piura", lat: -12.0695, lng: -75.2118 },
  { name: "Real Plaza Huancayo", address: "Av. Gral. Cordova", lat: -12.0635, lng: -75.2075 },
  { name: "Estadio Huancayo", address: "Av. 9 de Diciembre", lat: -12.0605, lng: -75.2185 },
  { name: "Parque de la Identidad Wanka", address: "Barrio San Antonio", lat: -12.0535, lng: -75.2015 },
  { name: "Mercado Mayorista", address: "Av. Ferrocarril", lat: -12.0655, lng: -75.2155 },
  { name: "Universidad Nacional del Centro (UNCP)", address: "Av. Mariscal Castilla 3909", lat: -12.0435, lng: -75.2285 },
  { name: "UPLA - Chorrillos", address: "Av. Giráldez", lat: -12.0505, lng: -75.1850 },
  { name: "Cerrito de la Libertad", address: "Cerrito de la Libertad", lat: -12.0585, lng: -75.1955 },
  { name: "Terminal Terrestre Huancayo", address: "Av. Evitamiento", lat: -12.0525, lng: -75.2205 },
  { name: "Hospital Carrión", address: "Av. Daniel Alcides Carrión", lat: -12.0615, lng: -75.2165 },
  { name: "Comisaría de Huancayo", address: "Calle Real", lat: -12.0675, lng: -75.2095 },
  { name: "Open Plaza Huancayo", address: "Av. Ferrocarril", lat: -12.0725, lng: -75.2145 },
  { name: "Parque Tupac Amaru", address: "San Carlos", lat: -12.0620, lng: -75.2020 },
  { name: "Colegio Salesiano", address: "San Carlos", lat: -12.0650, lng: -75.2060 },
  { name: "Municipalidad de El Tambo", address: "Av. Mariscal Castilla", lat: -12.0550, lng: -75.2150 },
];

// --- RUTAS DE HUANCAYO ---

const RUTA_PALIAN: Coordinates[] = [
  { lat: -12.0505, lng: -75.1850 }, // Palián (UPLA)
  { lat: -12.0540, lng: -75.1900 }, // Av. San Carlos Alta
  { lat: -12.0580, lng: -75.1960 }, // San Carlos Media
  { lat: -12.0620, lng: -75.2020 }, // Parque Tupac
  { lat: -12.0650, lng: -75.2060 }, // Colegio Salesiano
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

const RUTA_EL_TAMBO: Coordinates[] = [
  { lat: -12.0420, lng: -75.2250 }, // Estadio Castilla
  { lat: -12.0480, lng: -75.2200 }, // Av. Mariscal Castilla
  { lat: -12.0550, lng: -75.2150 }, // El Tambo Centro
  { lat: -12.0600, lng: -75.2120 }, // Bajando a Huancayo
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

const RUTA_CHILCA: Coordinates[] = [
  { lat: -12.0900, lng: -75.2200 }, // Chilca Alta
  { lat: -12.0850, lng: -75.2180 }, // Av. 9 de Diciembre
  { lat: -12.0780, lng: -75.2150 }, // Cerca al Cuartel
  { lat: -12.0720, lng: -75.2120 }, // Calle Real Sur
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

export const HUANCAYO_ROUTES: WasteRoute[] = [
  { id: 'r1', name: 'Ruta 1: Palián -> Centro', description: 'Cubre San Carlos y alrededores', path: RUTA_PALIAN },
  { id: 'r2', name: 'Ruta 2: El Tambo -> Centro', description: 'Av. Mariscal Castilla y transversales', path: RUTA_EL_TAMBO },
  { id: 'r3', name: 'Ruta 3: Chilca -> Centro', description: 'Zona Sur, Calle Real', path: RUTA_CHILCA },
];

// Umbrales de notificación por defecto (en metros)
export const NOTIFICATION_THRESHOLDS = {
  LONG_RANGE: 1000,
  MEDIUM_RANGE: 500,
  ARRIVAL: 50, // Ajustado a 50m para "Llegada"
};

// --- DATA SEMILLA: ECO TACHOS ---
export const ECO_TACHOS_DATA: EcoTacho[] = [
  {
    id: 't1',
    nombre: 'Tacho Domiciliario con Ruedas',
    tipo: 'Domiciliario',
    capacidadLitros: 120,
    casasSugeridas: '3–5 viviendas',
    precioMin: 180,
    precioMax: 250,
    moneda: 'PEN',
    descripcion: 'Tacho plástico con ruedas, ideal para pequeñas cuadras o pasajes. Resistente, fácil de mover y adecuado para residuos diarios.',
    beneficios: ['Fácil transporte', 'Tapa hermética anti-olores', 'Material reciclado'],
    activo: true
  },
  {
    id: 't2',
    nombre: 'Contenedor Comunitario Móvil',
    tipo: 'Comunitario',
    capacidadLitros: 240,
    casasSugeridas: '8–12 viviendas',
    precioMin: 280,
    precioMax: 400,
    moneda: 'PEN',
    descripcion: 'Tacho comunitario de mayor capacidad para colocarse en esquinas estratégicas. Reduce la cantidad de bolsas dispersas en la vía pública.',
    beneficios: ['Alta visibilidad', 'Ruedas reforzadas', 'Pedal de apertura'],
    activo: true
  },
  {
    id: 't3',
    nombre: 'Contenedor Metálico Urbano',
    tipo: 'Comunitario',
    capacidadLitros: 660,
    casasSugeridas: '20–30 viviendas',
    precioMin: 1500,
    precioMax: 3000,
    moneda: 'PEN',
    descripcion: 'Contenedor metálico de alta capacidad, ideal para barrios con alto volumen de residuos. Soporta uso intensivo.',
    beneficios: ['Anti-vandálico', 'Ignífugo (resistente al fuego)', 'Vaciado mecanizado'],
    activo: true
  },
  {
    id: 't4',
    nombre: 'Punto Verde Modular (Set x3)',
    tipo: 'Punto Verde',
    capacidadLitros: 120,
    casasSugeridas: 'Condominios o Parques',
    precioMin: 800,
    precioMax: 1500,
    moneda: 'PEN',
    descripcion: 'Conjunto de tres tachos identificados por color para separación de residuos: Orgánicos, Reciclables y No Aprovechables.',
    beneficios: ['Fomenta el reciclaje', 'Colores normados', 'Base estable'],
    activo: true
  }
];
