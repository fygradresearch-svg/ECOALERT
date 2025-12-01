
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
  { name: "Justicia Paz y Vida", address: "El Tambo Sector Norte", lat: -12.0305, lng: -75.2250 },
  { name: "Parque de los Sombreros", address: "El Tambo", lat: -12.0510, lng: -75.2120 },
  { name: "Parque Peñaloza", address: "Chilca", lat: -12.0790, lng: -75.2160 },
];

// --- RUTAS DE HUANCAYO (AMPLIADAS) ---

// Ruta 1: Este -> Centro
const RUTA_PALIAN_SAN_CARLOS: Coordinates[] = [
  { lat: -12.0505, lng: -75.1850 }, // Palián (UPLA)
  { lat: -12.0540, lng: -75.1900 }, // Cooperativa Santa Isabel
  { lat: -12.0580, lng: -75.1960 }, // San Carlos
  { lat: -12.0620, lng: -75.2020 }, // Parque Tupac
  { lat: -12.0650, lng: -75.2060 }, // Colegio Salesiano
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

// Ruta 2: Norte -> Centro (Eje Principal)
const RUTA_EL_TAMBO_PRINCIPAL: Coordinates[] = [
  { lat: -12.0420, lng: -75.2250 }, // Ciudad Universitaria (UNCP)
  { lat: -12.0480, lng: -75.2200 }, // Av. Mariscal Castilla
  { lat: -12.0520, lng: -75.2180 }, // El Tambo (Mun)
  { lat: -12.0550, lng: -75.2150 }, // Parque Bolognesi
  { lat: -12.0600, lng: -75.2120 }, // Bajando a Huancayo
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

// Ruta 3: Sur -> Centro (Eje Principal)
const RUTA_CHILCA_CENTRO: Coordinates[] = [
  { lat: -12.0900, lng: -75.2200 }, // Chilca Alta
  { lat: -12.0850, lng: -75.2180 }, // Av. 9 de Diciembre
  { lat: -12.0780, lng: -75.2150 }, // Cerca al Cuartel
  { lat: -12.0720, lng: -75.2120 }, // Calle Real Sur
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

// Ruta 4: Chilca Este (Ocopilla)
const RUTA_OCOPILLA: Coordinates[] = [
  { lat: -12.0800, lng: -75.2050 }, // Ocopilla Alta
  { lat: -12.0750, lng: -75.2080 }, // Próceres
  { lat: -12.0700, lng: -75.2100 }, // Cerca al Estadio
  { lat: -12.0681, lng: -75.2106 }, // Centro
];

// Ruta 5: El Tambo Noroeste (Justicia)
const RUTA_JUSTICIA: Coordinates[] = [
  { lat: -12.0250, lng: -75.2300 }, // Justicia Paz y Vida
  { lat: -12.0350, lng: -75.2250 }, // Asentamiento Humano
  { lat: -12.0450, lng: -75.2200 }, // Evitamiento
  { lat: -12.0550, lng: -75.2150 }, // Empalme El Tambo
];

// Ruta 6: San Antonio / Pio Pata
const RUTA_SAN_ANTONIO: Coordinates[] = [
  { lat: -12.0450, lng: -75.2100 }, // San Antonio
  { lat: -12.0500, lng: -75.2080 }, // Parque de la Identidad
  { lat: -12.0550, lng: -75.2050 }, // Pio Pata
  { lat: -12.0600, lng: -75.2080 }, // Cerca al Open Plaza
  { lat: -12.0650, lng: -75.2100 }, // Ferrocarril
];

// Ruta 7: Azapampa (Sur Profundo)
const RUTA_AZAPAMPA: Coordinates[] = [
  { lat: -12.1050, lng: -75.2250 }, // Azapampa
  { lat: -12.0950, lng: -75.2220 }, // Auquimarca
  { lat: -12.0900, lng: -75.2200 }, // Empalme Chilca
];

export const HUANCAYO_ROUTES: WasteRoute[] = [
  { id: 'r1', name: 'Ruta 1: Palián - San Carlos', description: 'UPLA, San Carlos, Colegio Salesiano', path: RUTA_PALIAN_SAN_CARLOS },
  { id: 'r2', name: 'Ruta 2: El Tambo - UNCP', description: 'Av. Mariscal Castilla, Parque Bolognesi', path: RUTA_EL_TAMBO_PRINCIPAL },
  { id: 'r3', name: 'Ruta 3: Chilca - Calle Real', description: 'Av. 9 de Diciembre, Calle Real Sur', path: RUTA_CHILCA_CENTRO },
  { id: 'r4', name: 'Ruta 4: Ocopilla - Estadio', description: 'Zona Este de Chilca, Próceres', path: RUTA_OCOPILLA },
  { id: 'r5', name: 'Ruta 5: Justicia Paz y Vida', description: 'El Tambo Norte, Evitamiento', path: RUTA_JUSTICIA },
  { id: 'r6', name: 'Ruta 6: San Antonio - Pio Pata', description: 'Parque Identidad, Open Plaza', path: RUTA_SAN_ANTONIO },
  { id: 'r7', name: 'Ruta 7: Azapampa - Auquimarca', description: 'Zona Sur Profundo', path: RUTA_AZAPAMPA },
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
    activo: true,
    image: 'https://www.dacorp.com.pe/wp-content/uploads/2021/04/CONTENEDOR-DE-120-LTS-VERDE.jpg'
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
    activo: true,
    image: 'https://s.alicdn.com/@sc04/kf/Ha89a252f709d402f8e21295cdd1e2feeU/Steel-Garbage-Dumpster-Bin-Trash-Can-4-Yard-Front-Load-Container-with-Plastic-Lids.png'
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
    activo: true,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6PZVUu_46LXSubnbFrH_6ilOwSAw3e8qSmw&s'
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
    activo: true,
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhMSEg8QEA8QFREQDw8QEA8PDhAPFRcXFxURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQFy4dHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMkA+wMBEQACEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xABNEAABAwEDBwgFBwgJBQEAAAABAAIDEQQhMQUSIkFRcYEGBxMyYZGxwSNScqHRM0KCkrLS8BQXJFNzk7PCQ1RiY2SDlKKjFSU04fEW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECBAMFBv/EADcRAQEAAQIDBgUCBQMEAwAAAAABAgMRBBIxExQhMkFRBTNScYEisWFywdHwIzShFWKS4SRCkf/aAAwDAQACEQMRAD8A9xQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQZWWctNs5aCwvJGe+hp0cVQ3PPEgUXTDT5lMs+VqrmuEDJX0aTSpAJphWmpBwbuctuqyk/57B5LX3X+LP2/8DDzmD+qt42ln3VPdZ9R2/wDAw853+Gj/ANSz4J3WfUjt77GnnP8A7iHjaGJ3WfUdvfYw86H91Z/9Q1O7Y/UdvfYw86R9Sy8ZwndsfqO2y+k086R2WT9//wC1PdsPqO2y9iHnSdssf713xTu+H1HbZ+xp503f4P8AeOPmnd9P6jts/Y386rttj+u/4p3fT9zts/Y0867tti+tJ8U7vp/Udrn7GnnYdtsX1pPvJ2Gn9R2up7EPOw/1rF3y/eTsNL6kdrqexDzrybbF/wAv3k7DS+o7XU9h+diTbYu+X7ydhpfUdrqexDzry7bF3y/eTsNL6jtdT2L+deX/AAXfJ95O76X1Ha6n0j868v8Agu+T76d30/qO21PpKOdeTZY/rv8AvJ3fT+o7bP6Ug51n+rZP3h+8nd8PqO2z+kfnXf8Aq7Mf80jzTu2H1Hb5fScOdZ/6mzn/AD07rj9R2+X0pBzrO/q8P+oHwTuuP1HeMvpTR858hwsTXezPX+RO6T6jvF+k93OeW9aw0rttFPFid0n1f5/+neP+0o50m/1M8J2n+VR3T/uT3j+CQc6MeuyScJGnyUd0vud5nseOdCDXZZuBYU7pl7p7zPZiZa5aRzukLY5GNkYyN2c0E0aS4UodpHcuuGjyyb+jnlrTJ1OS+cGzTyxwthtAdI4MaXCPNBOs6WCz5cPljN93bHXmV22dgs7sEHn/ADmcirJNZ5rS2PorSxufnx6LZDX57cDvuPacFfTv6pEZX9LwC02J7Ma0qRWv42LRZY5bxEYzTAoB0LgKkGiipNMZpWhUbbjpbVEzNr0LS7RAF14pjWnZgtGUm3Rxxt323V3ZKq0OMTADgA6p8FTkl9Fufb1UZbC0GmZ3FVuE9lpkb/0uoLgw0GuqryRPPUIsF+BTkhzInMoTW+hoVFTCtYDq96nc2PEY/BTeI2GY3Z71O8Ni9G3Z708DYdG3Z708DYdGNnvTeGxDG3Ye9PA2NLRsPeq2xOySGyZ1aE3Cp3KZEWrceRrqlrqAVxopmERc09lsDcRZ8/VpPAHgVblnsi5fxbOSmvvzIII826pq4+6mxdJNukc7ZfVLJbLWXlgMIpW/Mfq3uU25IkxZnLcacWPUdhvCrrei2l6ub+suDscwO2lT4oLnO9Zyb02afJ3JstptEMAlczpntjzzVwbU3upW+mxN7JubR9EcmOQ1jsVHNa6acf08xzng/wBgYM14Cu0lcLnlfV15Z7OnVEhBj8sBWxWn9k5X0/PFc/LXz7laAFn0vituWLNjUQsYzBdqamOPiXI632MCM3er4hVuKZkghsQMOF9HeJSY+Kbkth+ddmkFuaL6Xi+9dr4uXRfzRmDeVaRS1UngGKpt4rzLwSsgHRH8awo5fFPMpCz396nlOZztrFJHj+0Vly8MrGjHxxiJryFXm2TskExU81RtB0p7FPPU7QvSnsTnpsOlPYnPTYdMU5qjY10pUXJOxudrSZeG9NmxybZnCfsYPBy6aXju56nhs6V0Wi7cfBdpi42m5Pi0eJ8lbZG6fJzaZ+/zKvsoZGPSv3O8QliYz+U1nz3t/ssPiuOrPF10+jGsljBJXLldN1jJ9kBc675p8lNxRzI7BYgSajUlxOZ0nIGzf9wsvZLXuBPkpzm2FMbvlH0KsLSEAgyuVYrY7T+xk+yV00vPPupqeWvBbc2rTvC9Gxil8QG+jG5qYzxMr4H25vozub4hRYtKhsjfRcHeJVdvFNvggkfpdW+4VrdRXqsXYmgNqK3k1xV450souCrt4p9ErB6J341hTsbqjW396bG7kspj0sntFYdXz1t0/LFcKix4UgUhUAgQqQhCihpCqOg5KDRtHst8HrRoTq46vo6iUaJ3FaJHCo7CNHifJTUQ6wYv3/FWqIZF8o/c7xCipiPKjauPZH5uXLU6umHRmWRl53Kuy26ewR3u9k+IVsorKSwx0J3JlCV0HICP/uFm9qQ90byq63y6nTv6490XnNoQCDN5TD9EtP7Cb7BV9Lzz7qanlv2eDWsaJ3herWCEd8lwHimPVGV8D7X8mdw8lF6rSobP8jwd4lRJ4pvQydtwO5WyimN8VsjQamKcjH4BPVHolZ8m78bFO3ieirrTZDkspj00ntFYNXz1t0/LFUalzXOAxUhKXIHUvUhBrQB1IBA0KB0fJTq2j2WeD1p0PVw1vR003VO4rvHCo7F1eJVqrBYDe/f8VNTEcPyj9zvFVpC27F/7MeLlTPqvjfBnWYY7lFid1iwjreyVexWUlkGPBRYSuj5u2VyhZ+zpj/xPHmuev8ur6Pnj2tea3BAIKHKAVstoG2Cb7DlfT88+6uflrwK0YHgvWedA75PgPFTj1Rl0OtJ9Gdw8lW9Vp0Q2c+i4O8Sk6l6Cbqj6Ktl0Vx6rBOg1RCmuwCep6JGH0Z/GxT6o9FbWpHJ5U+Wk9pefq+etun5YqN1Lk6Jo24qxuXM0GnaVKDyzSA3pIbm5nW7CU2Nzcy5vaQFOxuWRlHEdpTYRgY702HQ8l+rPuZ4PWjRnVw1vR0s7tE7iu8cKhsZ0eJU0hthPW3qajEyE6T+Piq1MFpN7/Zb/ADKuXVbHoqWfWovVPosWbB25XqkLDrUVOLrOa1tbduhlP+5g81w4v5f5duH8/wCHr681uCAQV8oCsUg2sf8AZKnHrEXo+d3m7gF7Ty4PmfjamPUpZD6P6Ki9U49EVnPo/rKPVN6FkOiPo+Stkrj1TNOiEhQTco9U+iRh0SrKoDqQcrlT5aTf5BedrfMrdpeSIWC9m4rlHWrVlF71dUf0LPa8ypiFxzfTM9lytBEwXTe05SIiNGP2mqdkI5zpO9o+KmRCJgx3qJEt3k/1JvoeBXfS9WfV9G3IbjuXZxMgNylEJYjcd6mohkRvd+NarVoSY9fc3zVcuq06K8RxUeqfRZgwduV1BFrUUjsuadv6Y87LO/3vjWfi/J+XfhvP+HrS81uCAQR2kVY4bWuHuUzqivnFxu4Be08qAHQSdU0rjocEpEUB0O9V9VqV/U4N8Qr5KY9UzOqFESUqPU9EjOqVZCB2pEMi15JL5M7pA3pCaAgmlGu+5715XEZ7aleloYb6crNfCWuAqDQltRrur5qmF3XymyWyHr/jauyiWzQOeyNjRVxdcAKk0qaU4KNTPkwuXstpafaZzHfbdelsMwe15YW6JzQWubnA6xXFY+/4zrjXoz4Vnl0ylQS2csa/OxeSQOxa9DWmrN5NtmHieHuhly277q5box+01aNmYxlnL3OAFTVxuFbqrlras0sea+7vw3D5cRqcmN28N1hmSJaHRONa5pWT/qOH01u/6TnPC5xo5MszoxM12Pozwc2o8V6XC6s1cOaPJ4zSulqclu+zSc64rUxkiwQNshuO9TUQ2M3uVUw2XB3aAq5dVp0V48U9U+i3Fg5WUDNaVMdzzSN/SJjshA73j4LLxnln3aOG81eqLzm0IBAjhUEbUHzacOC9uvJgB0TxSJoPU4JSIYTo96r6rU9/U4DyV6pj1Sxm5RCnlPVPocw3FShC7EKUHOsVodmOZBM9lJKOZFI5puIuIG1xXjcVL2uT1+Hs7LH8sK3WOVga6SGWLOkeG9LHJGTRrcM4CqjT60z22VrPi9aZHFq8m3lskBFc4OkLaCpzujkoQNd6pr+Glb/nV14fHn1ccem/9nWZWtks0jHmN+bGA2ga4UbfXzXialuV32r6nhcMdHTuNym9vuw+VEue4XOADX0a6lQC4ml29evwN5sb93zfH6XZZSWy+How5G6Me8LdYwL3JskTONCbnVoK3ZzdSw/EflT+b+71/g23b5fy3947aw5QaGBr4ZCRXSBIFanYK7Na8rDL9O1j0uL4XPPVuWNmYxlnL3OAFTVxuFbqrlras0sea+7vw3D5cRqcmN28N1hmSJaHRONa5pWT/qOH01u/6TnPC5xo5MszoxM12Pozwc2o8V6XC6s1cOaPJ4zSulqclu+zSc64rUxkiwQNshuO9TUQ2M3uVUw2XB3aAq5dVp0V48U9U+i3Fg5WUDNaVMdzzSN/SJjshA73j4LLxnln3aOG81eqLzm0IBAIBB83TihI2EjuK9udHleqMdU8VMKPm8ClREMJ0TvKqtUrupwCtVZ1SRYJA4qPVPoezAqUIX4jepVZtq5Q2yJ7o47TKyNvVYCM1tbzSo2klebr6eN1LvHoaGVmE2qlbMr2m0dH008kobnFoeagE3EjuVMcZOjpbais46y7RRYss742xvje6N7XaL2Ete2tQaEYXEjipslm1V32bLeUdtDwPyy0UobjK8+8qs0cPZa55KVst802e6WV8rhVjXPcXENxza7LyuuGEx6RS5W9VfVH7QXSxU+xW+aB7nwyPiec5pcw0JaTWm6oHcouGOU2pzWXwXG8rMoV/8yfH1hhswXGcNp+3/N/uv2uX+SH2S0vk6aSRxe97mlzjiSAAK8AFp08JhNp0cNXK5XerTiurP6nRm5Em2bDilIaw48FCTZDc7gFXLqmdEDMUT6LjMDwUqkBQejcz7b7UeyAfxFj43pj+f6NXC9b+HpKwNgQCAQfOWURSWQbHyDucV7WPljy8uquMDxUxFDTo8ClREMOB3lVXqQ9Tgr1SdT4TckRUij1T6HNwKkRv1b0Q5fLB9O/6P2QsOt5626Pkisx+HZVco7bLdlf1u1dYpT88dG3f8VZU/wDKNMHYCFaIK2YUd2klWxRUgeKM3hWtQYXi/efFTL4I2Rxke9VlTs1slnQk9oeS6Y1y1Oq+4Lo4eoZggLPhxSphjPMKEkk+dvHgFS9Vp0QM6ymF6LjcFKpAg9L5oG6NqO10I7g/4rDxvWNfC+r0RYmsIBAIPnfLTaWicbJpx/vcvZw8s+0eXl5r91NuB4q0RSR9XvTLqRDDgd6qtUvzOBV6pOp0OCQqRR6noc1SI36t6Ic5lV7BM+secdG/OIroheNxeWU1rtfb9nu8Fhp3RnNjvfH91fPj/U03PJWXtM/qbez0fo/5/wDRJZYwc1gNRXOc6tT2UwWnh8875mLi8dKX/TPsssZaM5j3ObUkNdQOGq+l1FbU1MpfCssxi10sH6iT9837ip2ufucsDpYdUMn71n3U7XP3OWGSWiIGOsb82t7S+ucOxwAvqrzW1OW7VEwm7sbNk7Jr42vZFJNW4hpnY5purXOIBx1LyNTjuKxysuW3/j/Zrx0NOzp+6R2R7CKfoct5/XE07TpXLlPiPE/X/wAT+y/d9P2VLbZoowRFEYmnNJDnZxLq41qexe98J19TW0srqXe7/wBI83jcMcM5MfZGcF67ANSBLObkqYYzHiqpNk17/IKt6rToij6yQvRbGCuqAoHqPNE30NoO2Vo7mD4rBxnmjZwvSu9WNqCAQCD585SNpa7SP7+0fxHL2NPyT7R5mfmv3rObgVaK02Lq96nLqiIocDvVV0rOpwd5q9UnU6HBIipFHqn0OCkMdq3hEMLKbB0r7vV+yF4HHfPv4/Z9T8Mxl4bH8/vUPRDwWLmelyRnWj5Ry9Hh/JHhcb86tDIjRmntx4EfFRrdWRtfkzPVC47h7IG+qFG6GRyiboNI1PBB2Z2d8Auun1TOrueRUYdZIicSXVJoa9bbuXhcb4atjdp+VvmzM9UdwWN0c1ylaA8ACmizD2ivq/gP8At8v5v6R5PH/Mn2/uzyvcYDXYcFIbB1e9KQjMeKqk2TXvVb1WiKLrJC9FoYKypAiXq/NI39FmO2cjujj+K8/jPPPs2cL5b93cLI0hAIBB4DyubS22r9tKe8k+a9bR8k+zzdTz1ksXRSmwdXvU5IiKHXvVV0rOpwd5q9UnU6HBRCpE9T0KFIR/wreEQxMpD0rvo+AXgcf8AOv4/Z9V8L/22P5/emUu4hYXqMq0DTcvS4byR8/x3zq0chjRP0vJRr9Yxt4NXAKGoMflGNBvts+y9ddLqR2/IMfoUW8+97gvD4/59btLyukcFidXKcqPlB7LPtFfWfAv9tl/Nf2jyOP8AmT7f1rOK9thNfgdxQNh6veppCR48fJViTJPMql6rQyLrFTCrQwVlTRig9c5qW0sb+2eQ/wC1g8l53F+f8N3DeT8uzWVoCAQCDwblw2lvtP7Sve1p816uh8uPO1vPWGxdVKbBgpqsRQ61R0TR9Q/S810rn6nQ4KIVInqFCkNf5hEMfKI9K7D5v2QvB+IT/Xv4fU/Cr/8AGn3v7mMYbu8rBXqy77Mm0EdI6hr8aL0+Gn6I+d46y612avJtoN1b78LzTb7lGvOjLG7HA6jcL7jc+7fQLOk4wuv7BcQ19+6oRDG5VloDGgmpcDQ0BoA6poCbrwu2jPHcjsuQBrYmUvpn3bCHOND3heH8Q+fW7R8rpHuvApcQTWt2q73rFs6uS5SvrJhSgYN95vX1vwObcNf5r+0eRx3zfx/dQXssJJMDuQNh6velCMx71ESY/wAz4lU9VoZDiVMKtalZU1uKD2LmvbSwjtklPvp5LzeK+Y38P5HWrM7hAIBB4XzhCmUbT7UZ74mHzXqcP8uf56vO1vPf89HOsK7KU2DA71NREcWtVXTQ9Q/SV3P1OgKiFSHFPUKFIR/wQc1lyGs7j2N8F43G5bav4j3Ph+nzaMv8ahjs/wCOBWG5vTw0PFQbiV6Gn5Y8XW89SQipaO1Tq+VzjabZLlm3TuZJYgm5zMKQUcd5WjDpE16Zzfw51kN5GnqJB1L5/wCIXbWatLytqbJlfnO+s5Y+1dXPZXhzH5tSeqbzVfW/Brvw2/8AG/0eTxvzfwhXrMZsmBRBI+qlIRmPeqxJjvMqq5kGJUxFWtSlU1qmJez82raZPi7XTH/kcPJeZxXzL+G7h/lx1Czu4QCAQeIc5TaZRn7RCf8AiYPJenw3y4wa/nrmGru5UyHXvU1ERx4u/G1VXT2fqneVdzLAqxNSHFSg5SGyIOfy7n9Kc0VubqJvovG43GXWv2j3OB1bhoTazrUNlc4t0hQiuII3XLz9SbXaPY4bUueHNWcW4bSKnvK9HSvo8DU8buksYOeygqAb+zt96auXopJ4buglExoIonP9YtY94GytMNfcuERJuc1koB6SMsdqDmuZUbaHioqLNnLyNNSTdpG7XtWjCr7PSua+asEjKdVzDjqP/wAK8H4nP9SX3jXo9G27KUjpZGNYzNjdmguJqSAK1odtViuEmMvuvuxOUR9KNzPCq+s+C/7WfevJ435v4UV67IbJgUAzqqKEjx71ETeiNxw4qqxtn1qYirJUoNYpHtvN62mT7P2iQ98j15fE/Mr0ND5cdGuDqEAgEHkHOFYTLlTowQ0yRxkE4XNd91b9DPl0t2PVx5tTZlu5Gzg/KRcTQ+KnvM9k92vubHyMtAr6SInsO1T3qeyO7X3Rf/i7SCaPhNcNI/BR3nH2T3e+6ha8mSWc5khaXEZ4zCSKGo8lo09SZzeM+phcLspQeQVorklOKlBVISTBQOZ5RRuMxoSBmt2LBxOlMs93ocNq5Y6e0qhG2UCjX0GygWa8LL4tWHGamE2lPgs516hQdq7aenZ1Zc85Q2zSB1RQUoQTeK7lF0bac82W6WhxFZKUu0QAk4b3R2knQ4flDcJQa45zQSl4ZHaS9VH8ifU6xjXt3KZoWVbtJs0+TuWLVZM/oY4T0maHGVr3Gja0AzXDaVj1+A7fbm3mzrjrTHonkt9okc574bG5z3Fzi6z5952ZxKnHgZjJJnlNv4q3W39Gq22SSta+TMz6hvo2lraNBAuJOoL0+D0Zo6Uxnvf+ax6+XNnumC1OBJMFIG4KKGx48D4qIm9EZ1Kixtn1q0KslSqRiD3PkM2lgs3sV7yT5rytf5lejo+SN1cnQIBAIPLeXNRleE7YAQe3048ls0/kX7/2Zs/nT/PdctTHC97oyRe1xikdcCALgf7SztCu0RkXCHCpBjlpcMfqinxQMMkYOiYQ4O9SbAYYY4eCDl+UYHSNzQ3q0OYJKZ1b+tfrC3cJ5axcV5owIqg0peMexaI4VM7EKUHKUEkwUVLDyyPS/Rb5rPqz9TVo39KuyJc9nRNHErxSpGxKVU+YBqUBC2uqilCIxKRNZoRfUVXLNfEx1xIVbN1l6DqN9o+a1aXkjNqearIXRzJJggUYJQ2PHgoiahdq3Kiws+CmFWCrKkYkK955HtpYbL+xjPe0HzXla3zL93o6Xkn2bC5OgQCAQeT87Ero7bBI2mcIBSt4ue+v2lu4aTLCysmvbjnLHMu5XWytzo+LZD/Mr3h8UTXyOj5YWzWYvqy/fU92x/ii8RkifyzttaDoadrJSf4ir3fFaa+WyhlLKc1po6V7AWUADM5mcMcC41XXDTmM6ueepcqp2cXhdMXPJadqVlDipQZIblCYzMosrJwC46k/U76V/SWKFV5XTmWIrKpc904sZ2e5A82Qog02VBH+S7kpKkjhoFzym68qCWIbFG1W3SR4N3nzWnTn6Yz6l/VVgK6hJMEC6kpDGa9yiLVE/wAlRJbPgpiKmcpQRikr3/kw2ljso2WeD+G1eTq+fL716Wn5J9mmua4QCAQeUc8raTWc7Y5B3OB81u4TpWTiescFZIw+ua2SVwFSIgHUGomgNFp5p7uG19kj7E/VDOOwxu8aKeae5y32RCyEXlk1dgYR4qN57p2vsjkYBXrNwoHNIJUy7ovgliiju9JfszSryKWxKXQg6T3dzWe8lN4jYx+UbKNYPb0ra+5Rz4+6eS+yF2VLP2H6Tz4AKOfFPJTGBjznEkCg1KL43wWl5ZtVtjYxr9ynlV54la+PanKc0PbNGNZUctTzQrp2bfBOUuUJ0zNqctRzQGSM679yctTzQwyx7fBRyHPEMmYdaXBMzQMtETbn6q0qS33q2Nkmytlt3WGWqzn5x3B7HK3NFdkj2RkaMl+oOB8QpQU2c0uLXbnNr3FRUoXxObWopd2KFjGhh9fhRc91titjpgCR2i9WlRYmLW0vD+00AFFO8RsiJbfQ17qqYivobIrKWeAbIoh3MC8fPzV6ePli4qrBAIILdbI4WOkkcGsYKkn3AbScKKZLbtEW7PGOXuVnW9zTmxsZGJWsFTnFr83raq6Orat+jp8uNl9WTVy5rNvR13M1kN9lsbi6GOMTO6QSDO6acX0e+uDAKBoGoE/OqcWcku0asbvN3oCosEFa15PglLTLDFKWVzDJGx5ZWlc0kXVoO4KZlZ0qLjL1h8Vljb1Y2N9lrW+CW2myWihIzRsHcgQxt9UdwQeY8ksgS/8AV55pYJGxxOtj43vjc1jnSSZrc0kUNWOcblr1ssbp4yX/ADZm0sbM8rXpvRt9UdwWRpHRt9UdwQHRt9UdwQHRt9UdwQHRt9UdwQHRt9UdwQHRt9VvcEFDL+SGWmzT2cgATxvjzqCrS4aLh2g0PBTKjZxPNHkqWI2rpoJIzSBreljcypb0laVF+rDsWnicpZjtWfQllu8ejdG31R3BZWlFaLFFIKPijeNj2NcPeFMys6VFkvVkWrkbk6TGyRt/Z50P2CF1mvqT/wCzndHC+jPj5vLEySOVhnYYnskDRIHMJY4OAOcCaXbVa8TnZZfVXu+Eu8dcs7uECPaCCCAQRQgioIOohB89ZZ5KSWe2y0s0dmY/OLI2SF8VCetESAcw3nN+beNVFv4XGdYycRbfB7DyZ5SRyhsL82OUANYM6rXgClAdvYuOtoXH9U8Y66erMvCulWZ2CAQCBpjacWg8AgcgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgEAgZJC11M5rXUwzgDTdVNwjYGDBjRuaAp3NkigCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCAQCD//Z'
  }
];
