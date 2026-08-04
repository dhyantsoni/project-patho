import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A photo shown inside a soft, organic blob-shaped frame — the Organic-anchor
 * way to present real photography so it sits inside the "living cell" visual
 * language rather than as a hard rectangle.
 */

const shapes = [
  "42% 58% 63% 37% / 41% 44% 56% 59%",
  "58% 42% 38% 62% / 52% 38% 62% 48%",
  "63% 37% 52% 48% / 46% 56% 44% 54%",
] as const;

/** Frame proportions — pick the one closest to the photo so faces survive the crop. */
const ratios = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
} as const;

type PhotoFrameProps = {
  src: string;
  alt: string;
  className?: string;
  shape?: 0 | 1 | 2;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  sizes?: string;
};

export const PhotoFrame = ({
  src,
  alt,
  className,
  shape = 0,
  ratio = "portrait",
  priority = false,
  sizes = "(max-width: 768px) 90vw, 40vw",
}: PhotoFrameProps): React.ReactElement => (
  <div
    className={cn(
      "relative w-full overflow-hidden shadow-[0_18px_50px_-24px_rgba(44,33,23,0.5)]",
      ratios[ratio],
      className,
    )}
    style={{ borderRadius: shapes[shape] }}
  >
    <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    {/* Gentle warm wash to unify photos with the earth palette */}
    <div
      aria-hidden="true"
      className="absolute inset-0 mix-blend-multiply"
      style={{ background: "linear-gradient(160deg, rgba(216,148,32,0.10), rgba(90,107,51,0.18))" }}
    />
  </div>
);
