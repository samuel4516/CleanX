"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

import type { SiteLanguage } from "./language-provider";

type CalendarDemoProps = {
  language: SiteLanguage;
  initialDate?: Date;
  onDateChange?: (date: Date | undefined) => void;
  registerReset?: (resetFn: () => void) => void;
};

const CalendarDemo = ({
  language,
  initialDate,
  onDateChange,
  registerReset,
}: CalendarDemoProps) => {
  const [date, setDate] = useState<Date | undefined>(initialDate ?? new Date());
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  const locale = language === "de" ? "de-DE" : "en-US";
  const formattedDate = useMemo(() => {
    if (!date) return "";
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  }, [date, locale]);

  useEffect(() => {
    onDateChange?.(date);
  }, [date, onDateChange]);

  useEffect(() => {
    registerReset?.(() => {
      setDate(new Date());
      setIsOpen(false);
    });
  }, [registerReset]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!popoverRef.current) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (!popoverRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, []);

  const placeholder =
    language === "de" ? "Wunschtermin auswählen" : "Select preferred date";

  return (
    <div className="calendar-popover" ref={popoverRef}>
      <input
        type="text"
        readOnly
        className="calendar-input-control"
        value={formattedDate}
        placeholder={placeholder}
        onClick={() => setIsOpen((current) => !current)}
        aria-label={language === "de" ? "Wunschtermin" : "Preferred date"}
      />

      {isOpen ? (
        <div className="calendar-popover-panel" role="dialog" aria-modal="false">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={(nextDate) => {
              setDate(nextDate);
              setIsOpen(false);
            }}
            language={language}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CalendarDemo;
