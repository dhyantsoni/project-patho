import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: "default" | "narrow" | "wide";
};

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
} as const;

export const Container = ({
  className,
  size = "default",
  ...props
}: ContainerProps): React.ReactElement => (
  <div className={cn("mx-auto w-full px-5 sm:px-8", sizes[size], className)} {...props} />
);
