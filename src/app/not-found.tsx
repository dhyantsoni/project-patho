import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { Cell } from "@/components/organic/cell";
import { cn } from "@/lib/utils";

const NotFound = (): React.ReactElement => (
  <section className="relative overflow-hidden py-24 sm:py-32">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <Cell
        color="marigold-soft"
        variant={0}
        animate="drift-slow"
        opacity={0.5}
        className="absolute -top-16 -right-16 h-80 w-80"
      />
      <Cell
        color="moss"
        variant={2}
        animate="drift"
        opacity={0.12}
        className="absolute -bottom-20 -left-20 h-72 w-72"
      />
    </div>
    <Container size="narrow">
      <div className="mx-auto max-w-xl text-center">
        <div aria-hidden="true" className="relative mx-auto flex h-32 w-32 items-center justify-center">
          <Cell color="brand" variant={1} animate="breathe" className="absolute inset-0" />
          <span className="relative font-display text-4xl font-semibold text-primary-foreground">
            404
          </span>
        </div>
        <h1 className="mt-8 font-display text-4xl font-semibold text-ink sm:text-5xl">
          This cell wandered off
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We couldn&apos;t find that page. It may have moved, or the link might have a typo. Let&apos;s
          get you back to something useful.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
            <Home aria-hidden="true" className="h-5 w-5" />
            Back to home
          </Link>
          <Link href="/resources" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            <ArrowLeft aria-hidden="true" className="h-5 w-5" />
            Browse our posters
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default NotFound;
