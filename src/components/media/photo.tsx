import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A single photograph, shown plainly: square corners, no frame, no overlay.
 * `caption` renders a <figure>/<figcaption> pair; without one it's a bare image.
 */

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
} as const;

type PhotoProps = {
  src: string;
  alt: string;
  ratio?: keyof typeof ratios;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export const Photo = ({
  src,
  alt,
  ratio = "landscape",
  caption,
  priority = false,
  sizes = "(max-width: 1024px) 92vw, 46vw",
  className,
}: PhotoProps): React.ReactElement => {
  const image = (
    <div className={cn("relative w-full overflow-hidden bg-pink-soft", ratios[ratio], className)}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );

  if (!caption) return image;

  return (
    <figure>
      {image}
      <figcaption className="mt-3 text-sm text-ink-soft">{caption}</figcaption>
    </figure>
  );
};
