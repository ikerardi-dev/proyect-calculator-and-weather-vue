# 🧮 Calculadora Multifuncional con Vue 3

Aplicación de calculadora multifuncional desarrollada como ejercicio del bootcamp de Factoría F5, que integra en una sola vista una calculadora básica con memoria, un conversor de divisas en tiempo real y un widget del tiempo meteorológico.

## 📋 Índice

- [Características](#-características)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Scripts disponibles](#-scripts-disponibles)
- [Testing](#-testing)
- [Despliegue](#-despliegue)

## ✨ Características

### Calculadora
- Operaciones básicas: suma, resta, multiplicación y división
- Teclado numérico completo (0-9), punto decimal
- Tecla CE para resetear
- Control de errores (ej. división entre cero)
- Memoria con Pinia: M+ (guardar), MR (recuperar), MC (borrar)

### Conversor de Divisas
- Conversión en tiempo real entre Euro (€), Dólar ($) y Yen (¥)
- Datos obtenidos de la API de [CurrencyFreaks](https://currencyfreaks.com/)

### El Tiempo
- Información meteorológica a nivel nacional o de Asturias
- Icono dinámico según el estado del cielo (`stateSky`)
- Datos obtenidos de la [API de El Tiempo](https://www.el-tiempo.net/api)

### Diseño
- Enfoque **Mobile First** con breakpoints de Tailwind CSS
- Diseño modular y componentes reutilizables

## 🛠️ Tecnologías utilizadas

- [Vue 3](https://vuejs.org/) (Composition API)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/) — gestión de estado (memoria de la calculadora)
- [Axios](https://axios-http.com/) — llamadas a APIs
- [Vitest](https://vitest.dev/) — tests unitarios
- [Playwright](https://playwright.dev/) — tests end-to-end

## 📁 Estructura del proyecto

src/
├── components/
│ ├── calculator/ # Componentes de la calculadora
│ ├── currency/ # Componentes del conversor de divisas
│ └── weather/ # Componentes del widget del tiempo
├── composables/ # Lógica reutilizable (Composition API)
├── stores/ # Estado global con Pinia
├── services/ # Llamadas a APIs externas (Axios)
└── utils/ # Funciones puras (matemáticas, iconos, etc.)
e2e/ # Tests end-to-end con Playwright

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/ikerardi-dev/nombre-del-repo.git
cd nombre-del-repo
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (ver siguiente sección).

4. Arranca el servidor de desarrollo:
```bash
npm run dev
```

## 📜 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Arranca el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run test` | Ejecuta los tests unitarios con Vitest |
| `npm run test:e2e` | Ejecuta los tests end-to-end con Playwright |

## 🧪 Testing

El proyecto cuenta con dos niveles de testing:

- **Tests unitarios (Vitest)**: cubren la lógica pura (operaciones matemáticas, mapeo de iconos), los composables (`useCalculator`, `useCurrency`, `useWeather`) y el store de Pinia (memoria).
- **Tests E2E (Playwright)**: simulan la interacción real de un usuario con la calculadora en el navegador (sumas, control de errores, reseteo).

```bash
npm run test        # unitarios
npm run test:e2e    # end-to-end
```

<img width="680" height="145" alt="Captura de pantalla 2026-08-11 174232" src="https://github.com/user-attachments/assets/a358fe06-a47c-4637-b1f9-869dbc982761" />
<img width="458" height="295" alt="Captura de pantalla 2026-08-11 172315" src="https://github.com/user-attachments/assets/9c567e98-cc1d-4e9f-aa4b-9bbdf312a3b3" />



## 🌐 Despliegue

La aplicación está desplegada en GitHub Pages: [enlace aquí]

## 👤 Autor

Iker Ardevines — [@ikerardi-dev](https://github.com/ikerardi-dev)

Proyecto realizado como ejercicio del bootcamp Full Stack de Factoría F5.
