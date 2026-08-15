import {
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CalendarDays,
  ChefHat,
  Clock,
  Cpu,
  Droplets,
  Factory,
  FlaskConical,
  Flame,
  Forklift,
  Globe,
  Handshake,
  HeartPulse,
  IndianRupee,
  Leaf,
  ListFilter,
  Package,
  PackageCheck,
  Recycle,
  Repeat,
  Route,
  Salad,
  ScanLine,
  Scissors,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  SprayCan,
  Sprout,
  Thermometer,
  Timer,
  Tractor,
  TrendingUp,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Content files (lib/content.ts, lib/process.ts) store icons as plain strings
 * so they stay free of JSX. This map turns those strings into components.
 *
 * Icons are imported by name rather than dynamically so the bundler can still
 * tree-shake the ~1,600 unused icons out of the build.
 */
const iconMap: Record<string, LucideIcon> = {
  Award,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CalendarDays,
  ChefHat,
  Clock,
  Cpu,
  Droplets,
  Factory,
  FlaskConical,
  Flame,
  Forklift,
  Globe,
  Handshake,
  HeartPulse,
  IndianRupee,
  Leaf,
  ListFilter,
  Package,
  PackageCheck,
  Recycle,
  Repeat,
  Route,
  Salad,
  ScanLine,
  Scissors,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Snowflake,
  SprayCan,
  Sprout,
  Thermometer,
  Timer,
  Tractor,
  TrendingUp,
  Truck,
  Users,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.75,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  // Fall back to a neutral icon rather than crashing if a name is mistyped.
  const Component = iconMap[name] ?? Leaf;
  return (
    <Component
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
    />
  );
}
