import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-brand text-primary-foreground hover:bg-brand-deep",
        outline: "border border-brand text-brand hover:bg-brand hover:text-primary-foreground",
        ghost: "text-brand underline-offset-4 hover:underline",
        /* For maroon sections, where a maroon fill would disappear. */
        onDark: "bg-[#FDF4F2] text-brand-deep hover:bg-pink",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariantProps;

export const Button = ({ className, variant, size, ...props }: ButtonProps): React.ReactElement => (
  <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
);
