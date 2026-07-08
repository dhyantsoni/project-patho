import { cn } from "@/lib/utils";

/**
 * The signature "living cell" motif. A soft, organic blob shape used as the
 * visual language throughout the site — hero backdrop, section dividers, photo
 * frames. Decorative by default (aria-hidden). Gentle breathing motion respects
 * prefers-reduced-motion via the global CSS override.
 */

const PATHS = [
  "M46.5,-58.6C58.9,-49.2,66.5,-33.4,69.4,-16.8C72.3,-0.2,70.6,17.2,62.5,30.9C54.4,44.6,40,54.6,24.3,60.9C8.6,67.2,-8.4,69.8,-24.3,65.4C-40.2,61,-55,49.6,-63.2,34.6C-71.4,19.6,-73,1,-68.4,-15.4C-63.8,-31.8,-53,-46,-39.6,-55.3C-26.2,-64.6,-10.3,-69,3.7,-73.6C17.6,-78.2,35.3,-83,46.5,-58.6Z",
  "M39.8,-51.6C50.6,-43.4,58.1,-30.9,62.3,-16.8C66.5,-2.7,67.4,12.9,61.7,25.6C56,38.3,43.7,48.1,30.1,55.3C16.5,62.5,1.6,67.1,-13.9,65.6C-29.4,64.1,-45.5,56.5,-56.4,44C-67.3,31.5,-73,14.1,-71.6,-2.4C-70.2,-18.9,-61.7,-34.5,-49.4,-42.9C-37.1,-51.3,-21,-52.5,-4.5,-47.1C12,-41.7,24,-59.8,39.8,-51.6Z",
  "M43.3,-56.8C55.1,-47.6,62.8,-33.3,66.3,-18C69.8,-2.7,69.1,13.6,62.4,26.9C55.7,40.2,43,50.5,28.9,57.3C14.8,64.1,-0.7,67.4,-16.9,64.6C-33.1,61.8,-50,52.9,-59.6,39.2C-69.2,25.5,-71.5,7,-68.1,-9.9C-64.7,-26.8,-55.6,-42.1,-42.8,-51.2C-30,-60.3,-15,-63.2,0.9,-64.4C16.8,-65.6,33.6,-66,43.3,-56.8Z",
];

const colorClass = {
  brand: "text-brand",
  moss: "text-moss",
  marigold: "text-marigold",
  clay: "text-clay",
  "marigold-soft": "text-marigold-soft",
} as const;

type CellProps = {
  variant?: 0 | 1 | 2;
  color?: keyof typeof colorClass;
  className?: string;
  animate?: false | "breathe" | "drift" | "drift-slow";
  opacity?: number;
};

export const Cell = ({
  variant = 0,
  color = "brand",
  className,
  animate = "breathe",
  opacity = 1,
}: CellProps): React.ReactElement => (
  <svg
    viewBox="-80 -80 160 160"
    aria-hidden="true"
    focusable="false"
    className={cn(
      colorClass[color],
      animate === "breathe" && "animate-breathe",
      animate === "drift" && "animate-drift",
      animate === "drift-slow" && "animate-drift-slow",
      className,
    )}
    style={{ opacity }}
  >
    <path d={PATHS[variant]} fill="currentColor" />
  </svg>
);
