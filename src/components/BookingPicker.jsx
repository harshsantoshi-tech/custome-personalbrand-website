import { useState, useMemo } from "react";
import "./BookingPicker.css";

const TIME_SLOTS = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

function getNextDays(count) {
  const days = [];
  const today = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

// Deterministic mock availability so the same date always shows the same slots
function availableSlotsFor(date) {
  const seed = date.getDate();
  return TIME_SLOTS.filter((_, i) => (seed + i) % 3 !== 0);
}

export default function BookingPicker() {
  const days = useMemo(() => getNextDays(7), []);
  const [selectedDate, setSelectedDate] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [step, setStep] = useState("pick"); // pick -> details -> confirmed
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  const slots = availableSlotsFor(selectedDate);

  const handleDateSelect = (d) => {
    setSelectedDate(d);
    setSelectedTime(null);
  };

  const handleContinue = () => {
    if (selectedTime) setStep("details");
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (form.name && form.email) setStep("confirmed");
  };

  const dateLabel = selectedDate.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  if (step === "confirmed") {
    return (
      <div className="booking confirmed">
        <p className="booking-confirmed-mark">✓</p>
        <h3 className="display booking-confirmed-heading">You're booked</h3>
        <p className="booking-confirmed-text">
          {dateLabel} at {selectedTime}. A confirmation has been sent to{" "}
          {form.email}.
        </p>
        <button
          className="booking-back-btn"
          onClick={() => {
            setStep("pick");
            setSelectedTime(null);
            setForm({ name: "", email: "", note: "" });
          }}
        >
          Book another session
        </button>
      </div>
    );
  }

  if (step === "details") {
    return (
      <form className="booking" onSubmit={handleConfirm}>
        <button
          type="button"
          className="booking-back-link"
          onClick={() => setStep("pick")}
        >
          ← Change time
        </button>
        <p className="booking-summary">
          {dateLabel} · {selectedTime}
        </p>
        <label className="booking-field-label">Name</label>
        <input
          className="booking-input"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          required
        />
        <label className="booking-field-label">Email</label>
        <input
          className="booking-input"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          required
        />
        <label className="booking-field-label">What would you like to discuss?</label>
        <textarea
        className="booking-input booking-textarea"
        value={form.note}
        onChange={(e) => setForm({ ...form, note: e.target.value })}
        placeholder="A brief note on your business and what you need"
        rows={3}
        />
        <button className="booking-confirm-btn" type="submit">
          Confirm booking
        </button>
      </form>
    );
  }

  return (
    <div className="booking">
      <p className="booking-field-label">Select a date</p>
      <div className="booking-days">
        {days.map((d) => {
          const isActive = d.toDateString() === selectedDate.toDateString();
          return (
            <button
              key={d.toISOString()}
              className={`booking-day ${isActive ? "active" : ""}`}
              onClick={() => handleDateSelect(d)}
              type="button"
            >
              <span className="booking-day-name">
                {d.toLocaleDateString(undefined, { weekday: "short" })}
              </span>
              <span className="booking-day-num">{d.getDate()}</span>
            </button>
          );
        })}
      </div>

      <p className="booking-field-label">Select a time</p>
      <div className="booking-slots">
        {slots.length === 0 && (
          <p className="booking-empty">No openings this day — try another.</p>
        )}
        {slots.map((t) => (
          <button
            key={t}
            className={`booking-slot ${selectedTime === t ? "active" : ""}`}
            onClick={() => setSelectedTime(t)}
            type="button"
          >
            {t}
          </button>
        ))}
      </div>

      <button
        className="booking-confirm-btn"
        disabled={!selectedTime}
        onClick={handleContinue}
      >
        Continue
      </button>
    </div>
  );
}