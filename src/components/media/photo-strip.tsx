import Image from "next/image";
import type { Photo } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * A row of real photographs in soft-cornered frames — used for event galleries
 * and the "moments" band. Rendered as a <ul> so screen readers announce it as a
 * set; every photo carries the alt text written in its content file.
 */

type PhotoStripProps = {
  photos: Photo[];
  /** Tailwind grid columns for the widest breakpoint. */
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
    <ul className={cn("grid gap-4", columnClasses[columns], className)}>
      {photos.map((photo) => (
        <li
          key={photo.src}
          className={cn(
            "group relative overflow-hidden rounded-[1.5rem]",
            fit === "contain" && "bg-surface-2",
          )}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
              className={cn(
                "transition-transform duration-500 group-hover:scale-[1.04]",
                fit === "contain" ? "object-contain" : "object-cover",
              )}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
