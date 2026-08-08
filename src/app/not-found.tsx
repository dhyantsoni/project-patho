import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NotFound = (): React.ReactElement => (
  <section className="py-24 sm:py-32">
    <Container>
      <div className="max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-5xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          It may have moved, or the link might have a typo. Let&apos;s get you back to something
          useful.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className={cn(buttonVariants({ size: "lg" }))}>
            Back to home
          </Link>
          <Link href="/resources" className={cn(buttonVariants({ variant: "ghost", size: "lg" }))}>
            Browse our posters
          </Link>
        </div>
      </div>
    </Container>
  </section>
);

export default NotFound;
