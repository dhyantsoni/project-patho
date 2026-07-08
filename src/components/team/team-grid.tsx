import { Mail } from "lucide-react";
import type { TeamMember } from "@/lib/content";
import { Cell } from "@/components/organic/cell";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/**
 * Data-driven Team grid built as a small compound component. `TeamGrid` owns
 * the responsive layout and semantics (a <ul> of <li> cards); `TeamCard`
 * renders a single member and can be composed independently. No boolean-prop
 * hell — behaviour is driven entirely by the member data.
 */

// Saturated fills only, so the light initials keep strong contrast.
const cellColors = ["brand", "moss", "clay"] as const;
const cellVariants = [0, 1, 2] as const;

/** Build initials from a member's name (e.g. "Jolina Jian" -> "JJ"). */
const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

type TeamCardProps = {
  member: TeamMember;
  /** Position in the list — rotates the decorative Cell colour/variant. */
  index?: number;
};

export const TeamCard = ({ member, index = 0 }: TeamCardProps): React.ReactElement => {
  const color = cellColors[index % cellColors.length];
  const variant = cellVariants[index % cellVariants.length];
  const initials = initialsOf(member.name) || "PP";

  return (
    <article className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_18px_40px_-20px_rgba(44,33,23,0.35)]">
      {/* Cell-framed initials avatar (headshots coming soon) */}
      <div className="relative h-24 w-24">
        <Cell color={color} variant={variant} animate="breathe" className="absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            aria-hidden="true"
            className="font-display text-2xl font-semibold text-surface"
          >
            {initials}
          </span>
        </div>
      </div>

      <h3 className="mt-6 font-display text-2xl font-semibold text-ink">{member.name}</h3>

      <span className="mt-2 inline-flex w-fit items-center rounded-full bg-surface-2 px-3 py-1 text-sm font-semibold text-brand-deep">
        {member.role}
      </span>

      <p className="mt-4 flex-1 leading-relaxed text-ink-soft">{member.bio}</p>

      {member.links?.email ? (
        <a
          href={`mailto:${member.links.email}`}
          aria-label={`Email ${member.name}`}
          className="mt-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-brand-deep transition-colors hover:bg-brand hover:text-primary-foreground focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Mail aria-hidden="true" className="h-5 w-5" />
        </a>
      ) : null}
    </article>
  );
};

type TeamGridProps = {
  members: TeamMember[];
};

export const TeamGrid = ({ members }: TeamGridProps): React.ReactElement => (
  <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {members.map((member, i) => (
      <Reveal as="li" key={member.slug} delay={i * 70} className="h-full">
        <TeamCard member={member} index={i} />
      </Reveal>
    ))}
  </ul>
);
