/* ------------------------------------------------------------------ */
/*  Cliente del backend de reservas (Google Apps Script)               */
/*                                                                    */
/*  - getAvailability(date) → cuántas plazas quedan en cada turno      */
/*  - createBooking(payload) → envía la reserva                         */
/*                                                                    */
/*  Si APPS_SCRIPT_URL está vacío, trabaja en "modo demo": calcula     */
/*  las franjas en local (para poder diseñar y probar) pero marca      */
/*  demo=true y no envía nada. Cuando pegues la URL real, todo         */
/*  empieza a funcionar sin tocar el resto del código.                 */
/* ------------------------------------------------------------------ */

import { APPS_SCRIPT_URL, RESERVE_CONFIG, SLOT_LABELS } from "./reserve-config";

export type SlotAvailability = {
  slot: string; // "18:00"
  label: string; // "18:00 – 19:30"
  available: boolean; // ¿queda sitio?
  peopleLeft: number; // plazas libres (0 si está lleno)
};

export type BookingPayload = {
  name: string;
  email: string;
  phone: string;
  people: number;
  date: string; // YYYY-MM-DD
  slot: string; // "18:00"
  notes?: string;
  lang: string;
};

export const isDemoMode = () => !APPS_SCRIPT_URL;

// GET al Apps Script. JSONP-less: el script responde con CORS abierto
// (se configura con doGet y ContentService MIME_JSON).
async function callBackend<T>(params: Record<string, string>): Promise<T> {
  const url = new URL(APPS_SCRIPT_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), { method: "GET", redirect: "follow" });
  if (!res.ok) throw new Error(`backend ${res.status}`);
  return (await res.json()) as T;
}

export async function getAvailability(date: string): Promise<SlotAvailability[]> {
  // Modo demo: sin backend, todas las franjas "disponibles" y aforo completo.
  // Sirve para maquetar y probar la UI antes de conectar.
  if (isDemoMode()) {
    return RESERVE_CONFIG.slots.map((slot) => ({
      slot,
      label: SLOT_LABELS[slot] ?? slot,
      available: true,
      peopleLeft: RESERVE_CONFIG.maxPeoplePerSlot,
    }));
  }
  const data = await callBackend<{ ok: boolean; slots: SlotAvailability[] }>({
    action: "availability",
    date,
  });
  if (!data.ok) throw new Error("availability failed");
  return data.slots;
}

export async function createBooking(payload: BookingPayload): Promise<{ ok: boolean; id?: string; error?: string }> {
  // En modo demo no se envía nada: devolvemos ok para que la UI muestre el flujo,
  // pero el comentario del código deja claro que no hay reserva real.
  if (isDemoMode()) {
    return { ok: true, id: "demo" };
  }
  // Apps Script doPost lee el cuerpo JSON.
  const res = await fetch(APPS_SCRIPT_URL, {
    method: "POST",
    // text/plain evita el preflight CORS: Apps Script no lo exige y así
    // el navegador manda la petición directa.
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(payload),
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`backend ${res.status}`);
  return (await res.json()) as { ok: boolean; id?: string; error?: string };
}

// ── Validación de la fecha (días cerrados, ventana de reserva) ──
export function isDateBookable(dateStr: string): boolean {
  const d = new Date(dateStr + "T12:00:00"); // mediodía: evita el lío de zonas horarias
  const day = d.getDay();
  if (RESERVE_CONFIG.closedDays.includes(day)) return false;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const max = new Date(today);
  max.setDate(max.getDate() + RESERVE_CONFIG.bookingWindowDays);
  return d >= today && d <= max;
}
