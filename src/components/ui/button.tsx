import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-brand text-primary-foreground shadow-[0_2px_0_var(--brand-deep)] hover:bg-brand-deep hover:-translate-y-0.5 hover:shadow-[0_6px_16px_-4px_rgba(158,74,38,0.5)]",
        secondary:
          "bg-moss text-secondary-foreground shadow-[0_2px_0_var(--moss-deep)] hover:bg-moss-deep hover:-translate-y-0.5",
        outline:
          "border-2 border-brand text-brand-deep bg-transparent hover:bg-brand hover:text-primary-foreground",
        ghost: "text-ink-soft hover:bg-surface-2 hover:text-ink",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
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
