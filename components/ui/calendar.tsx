"use client";

import { useEffect, useState } from "react";

type CalendarProps = {
  mode?: "single";
  defaultMonth?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
  language?: "en" | "de";
};

const MONTH_LABELS = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  de: [
    "Januar",
    "Februar",
    "Marz",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ],
} as const;

const WEEKDAY_LABELS = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
} as const;

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, amount: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function buildCalendarDays(viewMonth: Date): Date[] {
  const firstDay = startOfMonth(viewMonth);
  const offset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate() - offset
  );

  return Array.from({ length: 42 }, (_, index) => {
    return new Date(
      gridStart.getFullYear(),
      gridStart.getMonth(),
      gridStart.getDate() + index
    );
  });
}

export function Calendar({
  mode = "single",
  defaultMonth,
  selected,
  onSelect,
  className,
  language = "en",
}: CalendarProps) {
  const isSingleMode = mode === "single";
  const today = startOfDay(new Date());
  const initialMonth = startOfMonth(selected ?? defaultMonth ?? today);
  const [viewMonth, setViewMonth] = useState<Date>(initialMonth);

  useEffect(() => {
    if (!selected && !defaultMonth) return;
    setViewMonth(startOfMonth(selected ?? defaultMonth ?? new Date()));
  }, [defaultMonth, selected]);

  if (!isSingleMode) {
    return null;
  }

  const monthLabels = MONTH_LABELS[language] ?? MONTH_LABELS.en;
  const weekdayLabels = WEEKDAY_LABELS[language] ?? WEEKDAY_LABELS.en;
  const selectedDay = selected ? startOfDay(selected) : undefined;
  const days = buildCalendarDays(viewMonth);
  const monthTitle = `${monthLabels[viewMonth.getMonth()]} ${viewMonth.getFullYear()}`;
  const previousLabel = language === "de" ? "Vorheriger Monat" : "Previous month";
  const nextLabel = language === "de" ? "Nachster Monat" : "Next month";

  return (
    <div className={["calendar-widget", className].filter(Boolean).join(" ")}>
      <div className="calendar-toolbar">
        <button
          type="button"
          className="calendar-nav-btn"
          onClick={() => setViewMonth((current) => addMonths(current, -1))}
          aria-label={previousLabel}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <p className="calendar-title">{monthTitle}</p>
        <button
          type="button"
          className="calendar-nav-btn"
          onClick={() => setViewMonth((current) => addMonths(current, 1))}
          aria-label={nextLabel}
        >
          <span aria-hidden="true">›</span>
        </button>
      </div>

      <div className="calendar-weekdays" aria-hidden="true">
        {weekdayLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="calendar-grid">
        {days.map((day) => {
          const dayStart = startOfDay(day);
          const isCurrentMonth = dayStart.getMonth() === viewMonth.getMonth();
          const isDisabled = dayStart < today;
          const isToday = isSameDay(dayStart, today);
          const isSelected = selectedDay ? isSameDay(dayStart, selectedDay) : false;
          const ariaLabel = `${dayStart.getDate()} ${
            monthLabels[dayStart.getMonth()]
          } ${dayStart.getFullYear()}`;

          return (
            <button
              key={dayStart.toISOString()}
              type="button"
              className={[
                "calendar-day",
                isCurrentMonth ? "" : "is-outside",
                isToday ? "is-today" : "",
                isSelected ? "is-selected" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              onClick={() => onSelect?.(dayStart)}
              disabled={isDisabled}
              aria-label={ariaLabel}
              aria-pressed={isSelected}
            >
              {dayStart.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
