import Image from "next/image";
import type { Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * A grid of photographs. Rendered as a <ul> so screen readers announce it as a
 * set; every photo carries the alt text written in its content file.
 */

type PhotoStripProps = {
  photos: Photo[];
  /** Grid columns at the widest breakpoint. */
  columns?: 2 | 3 | 4;
  /** `contain` keeps a poster or flyer whole instead of cropping it to the frame. */
  fit?: "cover" | "contain";
  className?: string;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export const PhotoStrip = ({
  photos,
  columns = 3,
  fit = "cover",
  className,
}: PhotoStripProps): React.ReactElement | null => {
  if (photos.length === 0) return null;

  return (
    <ul className={cn("grid gap-3", columnClasses[columns], className)}>
      {photos.map((photo) => (
        <li key={photo.src} className="relative aspect-[4/3] overflow-hidden bg-pink-soft">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className={fit === "contain" ? "object-contain" : "object-cover"}
          />
        </li>
      ))}
    </ul>
  );
};
