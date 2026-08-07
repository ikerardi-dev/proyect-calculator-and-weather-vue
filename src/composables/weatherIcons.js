const SKY_ICON_MAP = {
  11: '☀️', // Despejado
  12: '🌤️', // Poco nuboso
  13: '⛅', // Intervalos nubosos
  14: '🌥️', // Nuboso
  15: '☁️', // Muy nuboso
  16: '☁️', // Cubierto
  17: '🌤️', // Nubes altas
  23: '🌦️', // Intervalos nubosos con lluvia escasa
  24: '🌦️', // Nuboso con lluvia escasa
  25: '🌧️', // Muy nuboso con lluvia escasa
  26: '🌧️', // Cubierto con lluvia escasa
  33: '🌦️', // Intervalos nubosos con lluvia
  34: '🌧️', // Nuboso con lluvia
  35: '🌧️', // Muy nuboso con lluvia
  36: '🌧️', // Cubierto con lluvia
  43: '⛈️', // Intervalos nubosos con tormenta
  44: '⛈️', // Nuboso con tormenta
  45: '⛈️', // Muy nuboso con tormenta
  46: '⛈️', // Cubierto con tormenta
  62: '⛈️', // Nuboso con tormenta y lluvia escasa
  64: '⛈️', // Cubierto con tormenta y lluvia escasa
}

const DEFAULT_ICON = '🌡️'

export function getWeatherIcon(stateSkyId) {
  if (!stateSkyId) return DEFAULT_ICON

  // Los códigos nocturnos llevan una "n" al final (ej. "12n"), la quitamos
  const normalizedId = String(stateSkyId).replace('n', '')
  const numericId = parseInt(normalizedId, 10)

  return SKY_ICON_MAP[numericId] || DEFAULT_ICON
}