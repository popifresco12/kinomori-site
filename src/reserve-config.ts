/* ------------------------------------------------------------------ */
/*  Reservas — configuración                                            */
/*                                                                    */
/*  CÓMO SE CONECTA (2 minutos, sin tarjeta):                        */
/*  1. El backend es un Google Apps Script pegado en tu Google        */
/*     Calendar. Cuando lo tengas desplegado, te da una URL que       */
/*     termina en /exec — pégala aquí en APPS_SCRIPT_URL.            */
/*  2. Hasta que no la pongas, la web funciona en "modo demo":        */
/*     las franjas se calculan pero nada se envía de verdad.          */
/*  Las instrucciones exactas están en el README de la reserva.        */
/* ------------------------------------------------------------------ */

// Pega aquí la URL /exec de tu Apps Script (vacía = modo demo)
export const APPS_SCRIPT_URL = "";

// ── Reglas del restaurante (tú las fijas aquí, no en el código) ──
export const RESERVE_CONFIG = {
  // Mesas que tiene el local
  tables: 9,
  // Aforo máximo por turno (sentado a la vez)
  maxPeoplePerSlot: 20,
  // Horas de cena: de OPEN_HOUR a CLOSE_HOUR
  openHour: 18, // 18:00
  closeHour: 22.5, // 22:30
  // Cada reserva dura 1h30 → turnos de 90 min
  slotMinutes: 90,
  // Las horas a las que se puede empezar una reserva
  slots: ["18:00", "19:30", "21:00"],
  // Días que el restaurante cierra (0=domingo … 6=sábado). Vacío = abre todos.
  closedDays: [] as number[],
  // Cuántos días hacia el futuro se puede reservar
  bookingWindowDays: 60,
  // Zona horaria del local (Marruecos)
  timeZone: "Africa/Casablanca",
} as const;

// Etiqueta legible de cada turno (para la UI)
export const SLOT_LABELS: Record<string, string> = {
  "18:00": "18:00 – 19:30",
  "19:30": "19:30 – 21:00",
  "21:00": "21:00 – 22:30",
};
