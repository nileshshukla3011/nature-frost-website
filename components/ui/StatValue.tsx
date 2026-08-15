/**
 * A single headline figure. Rendered statically — the previous version counted
 * up from zero on scroll, which read as gimmicky for a B2B audience.
 */
export function StatValue({
  value,
  prefix = "",
  suffix = "",
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  // Use a true minus sign so "−18°C" reads correctly rather than "-18°C".
  const text = value < 0 ? `−${Math.abs(value)}` : `${value}`;
  return (
    <span className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}
