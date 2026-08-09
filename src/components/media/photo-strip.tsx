import Image from "next/image";
import type { Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * A photo album laid out in columns. Every photo keeps its own proportions —
 * a wide group shot stays wide — so nobody gets cropped out of the frame.
 * Rendered as a <ul> so screen readers announce it as a set; each photo carries
 * the alt text written in its content file.
 */

type PhotoStripProps = {
  photos: Photo[];
  /** Column count at the widest breakpoint. */
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses = {
  2: "sm:columns-2",
  3: "sm:columns-2 lg:columns-3",
  4: "sm:columns-2 lg:columns-4",
} as const;

const sizesFor = {
  2: "(max-width: 640px) 92vw, 46vw",
  3: "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw",
  4: "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 23vw",
} as const;

export const PhotoStrip = ({
  photos,
  columns = 3,
  className,
}: PhotoStripProps): React.ReactElement | null => {
  if (photos.length === 0) return null;

  return (
    <ul className={cn("gap-3 space-y-3", columnClasses[columns], className)}>
      {photos.map((photo) => (
        <li key={photo.src} className="break-inside-avoid overflow-hidden bg-pink-soft">
          <Image
            src={photo.src}
            alt={photo.alt}
            // Falling back to 4:3 only when the header couldn't be read.
            width={photo.width ?? 1200}
            height={photo.height ?? 900}
            sizes={sizesFor[columns]}
            className="h-auto w-full"
          />
        </li>
      ))}
    </ul>
  );
};
