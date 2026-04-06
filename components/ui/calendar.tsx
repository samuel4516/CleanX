"use client";

type CalendarProps = {
  mode?: "single";
  defaultMonth?: Date;
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
};

function formatDateForInput(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function parseDateFromInput(value: string): Date | undefined {
  if (!value) return undefined;
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return undefined;
  return new Date(year, month - 1, day);
}

export function Calendar({
  mode = "single",
  defaultMonth,
  selected,
  onSelect,
  className,
}: CalendarProps) {
  if (mode !== "single") {
    return null;
  }

  const displayDate = selected ?? defaultMonth;
  const minDate = formatDateForInput(new Date());

  return (
    <input
      type="date"
      min={minDate}
      value={displayDate ? formatDateForInput(displayDate) : ""}
      onChange={(event) => onSelect?.(parseDateFromInput(event.currentTarget.value))}
      className={["calendar-native-input", className].filter(Boolean).join(" ")}
      aria-label="Preferred date"
    />
  );
}
