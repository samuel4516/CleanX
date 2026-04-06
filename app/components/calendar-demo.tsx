"use client";

import { useEffect, useState } from "react";

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

  useEffect(() => {
    onDateChange?.(date);
  }, [date, onDateChange]);

  useEffect(() => {
    registerReset?.(() => {
      setDate(new Date());
    });
  }, [registerReset]);

  return (
    <div className="calendar-date-field">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
      <p className="calendar-date-caption" role="region">
        {language === "de" ? "Standardmonat" : "Default Month"}
      </p>
    </div>
  );
};

export default CalendarDemo;
