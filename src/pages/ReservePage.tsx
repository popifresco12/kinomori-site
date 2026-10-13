import { useEffect, useMemo, useState } from "react";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "../i18n/I18nContext";
import {
  getAvailability,
  createBooking,
  isDateBookable,
  isDemoMode,
  type SlotAvailability,
} from "../reserve-api";
import { RESERVE_CONFIG } from "../reserve-config";

// Fecha de hoy en formato YYYY-MM-DD (zona local)
function todayISO(): string {
  const d = new Date();
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}
function maxISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + RESERVE_CONFIG.bookingWindowDays);
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

type State = "form" | "sending" | "done";

export function ReservePage() {
  const { t, lang } = useI18n();
  const tr = t as unknown as (k: string) => string; // t acepta claves punteadas
  const r = (k: string) => tr(`reserve.${k}`);

  const [date, setDate] = useState<string>(todayISO());
  const [slot, setSlot] = useState<string>("");
  const [people, setPeople] = useState<number>(2);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [slots, setSlots] = useState<SlotAvailability[] | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [state, setState] = useState<State>("form");
  const [error, setError] = useState<string>("");

  const dateOk = useMemo(() => isDateBookable(date), [date]);

  // Consulta disponibilidad cada vez que cambia la fecha
  useEffect(() => {
    if (!dateOk) {
      setSlots(null);
      setSlot("");
      return;
    }
    let alive = true;
    setLoadingSlots(true);
    setSlot("");
    getAvailability(date)
      .then((s) => {
        if (alive) setSlots(s);
      })
      .catch(() => {
        if (alive) setSlots([]);
      })
      .finally(() => {
        if (alive) setLoadingSlots(false);
      });
    return () => {
      alive = false;
    };
  }, [date, dateOk]);

  const availableSlots = (slots ?? []).filter((s) => s.available);
  const anySlotLeft = availableSlots.length > 0;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!slot) {
      setError(r("errorSlot"));
      return;
    }
    setState("sending");
    try {
      const res = await createBooking({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        people,
        date,
        slot,
        notes: notes.trim() || undefined,
        lang,
      });
      if (res.ok) {
        setState("done");
      } else {
        setError(res.error === "slot-full" ? r("errorSlot") : r("errorGeneric"));
        setState("form");
      }
    } catch {
      setError(r("errorGeneric"));
      setState("form");
    }
  }

  function reset() {
    setState("form");
    setSlot("");
    setNotes("");
    setName("");
    setEmail("");
    setPhone("");
    setPeople(2);
  }

  // ── Pantalla de confirmación ──
  if (state === "done") {
    return (
      <SiteLayout title={r("confirmTitle")} kicker={r("kicker")}>
        <div className="reserve reserve--done">
          <div className="reserve-success">✓</div>
          <h2>{r("success")}</h2>
          <p className="reserve-done-note">{r("successNote")}</p>
          <div className="reserve-recap">
            <div>
              <span>{r("date")}</span>
              <strong>{date}</strong>
            </div>
            <div>
              <span>{r("slot")}</span>
              <strong>{slot}</strong>
            </div>
            <div>
              <span>{r("people")}</span>
              <strong>{people}</strong>
            </div>
            <div>
              <span>{r("name")}</span>
              <strong>{name}</strong>
            </div>
          </div>
          <button type="button" className="reserve-submit" onClick={reset}>
            {r("another")}
          </button>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout title={r("title")} kicker={r("kicker")}>
      <div className="reserve">
        <p className="reserve-intro">{r("intro")}</p>

        {isDemoMode() && (
          <div className="reserve-demo-note">
            ⚙️ {r("loadingSlots")} <em>(demo — sin backend conectado)</em>
          </div>
        )}

        <form className="reserve-form" onSubmit={onSubmit}>
          {/* Día */}
          <label className="reserve-field">
            <span>{r("date")}</span>
            <input
              type="date"
              value={date}
              min={todayISO()}
              max={maxISO()}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>

          {/* Personas */}
          <label className="reserve-field">
            <span>{r("people")}</span>
            <div className="reserve-people">
              <button
                type="button"
                onClick={() => setPeople((p) => Math.max(1, p - 1))}
                aria-label="-"
              >
                −
              </button>
              <strong>{people}</strong>
              <button
                type="button"
                onClick={() =>
                  setPeople((p) => Math.min(RESERVE_CONFIG.maxPeoplePerSlot, p + 1))
                }
                aria-label="+"
              >
                +
              </button>
            </div>
            <em className="reserve-hint">{r("maxPeople")}</em>
          </label>

          {/* Turnos */}
          <fieldset className="reserve-field reserve-slots">
            <legend>
              {r("slot")} <em>({r("duration")})</em>
            </legend>
            {loadingSlots && <p className="reserve-hint">{r("loadingSlots")}</p>}
            {!loadingSlots && dateOk && !anySlotLeft && (
              <p className="reserve-noslots">🚫 {r("noSlots")}</p>
            )}
            {!loadingSlots &&
              availableSlots.map((s) => (
                <label key={s.slot} className={`reserve-slot${slot === s.slot ? " is-active" : ""}`}>
                  <input
                    type="radio"
                    name="slot"
                    value={s.slot}
                    checked={slot === s.slot}
                    onChange={() => setSlot(s.slot)}
                  />
                  <span className="reserve-slot-time">{s.label}</span>
                  <span className="reserve-slot-left">
                    {s.peopleLeft > 0 ? `${s.peopleLeft} ${r("peopleLeft")}` : r("slotFull")}
                  </span>
                </label>
              ))}
          </fieldset>

          {/* Datos de contacto */}
          <label className="reserve-field">
            <span>{r("name")}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoComplete="name"
            />
          </label>

          <label className="reserve-field">
            <span>{r("phone")}</span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              autoComplete="tel"
              placeholder="+212 …"
            />
          </label>

          <label className="reserve-field">
            <span>
              {r("email")} <em>({r("optional")})</em>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </label>

          <label className="reserve-field reserve-field--full">
            <span>
              {r("notes")} <em>({r("optional")})</em>
            </span>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
          </label>

          <p className="reserve-table-notice">{r("tableNotice")}</p>

          {error && <p className="reserve-error">{error}</p>}

          <button
            type="submit"
            className="reserve-submit"
            disabled={state === "sending" || !slot || !dateOk}
          >
            {state === "sending" ? r("submitting") : r("submit")}
          </button>
        </form>
      </div>
    </SiteLayout>
  );
}
