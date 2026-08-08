import Image from "next/image";
import type { TeamMember } from "@/lib/content";

/**
 * The leadership grid. Each member is a square headshot with their name, role,
 * and bio set beneath it — no card chrome. Members without a photo get a plain
 * initials tile rather than a broken image.
 */

/** Build initials from a member's name (e.g. "Jolina Jian" -> "JJ"). */
const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

export const TeamCard = ({ member }: { member: TeamMember }): React.ReactElement => (
  <article className="flex h-full flex-col">
    {member.image ? (
      <div className="relative aspect-square w-full overflow-hidden bg-pink-soft">
        <Image
          src={member.image}
          alt={member.alt || `Headshot of ${member.name}`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
          className="object-cover"
        />
      </div>
    ) : (
      <div className="flex aspect-square w-full items-center justify-center bg-pink-soft">
        <span aria-hidden="true" className="font-display text-5xl font-semibold text-brand">
          {initialsOf(member.name) || "PP"}
        </span>
      </div>
    )}

    <h3 className="mt-5 font-display text-xl font-semibold text-ink">{member.name}</h3>
    <p className="mt-1 text-sm font-semibold text-brand">{member.role}</p>
    <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{member.bio}</p>

    {member.links?.email ? (
      <a
        href={`mailto:${member.links.email}`}
        className="mt-4 w-fit font-semibold text-brand underline-offset-4 hover:underline"
      >
        Email {member.name.split(/\s+/)[0]}
      </a>
    ) : null}
  </article>
);

export const TeamGrid = ({ members }: { members: TeamMember[] }): React.ReactElement => (
  <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {members.map((member) => (
      <li key={member.slug} className="h-full">
        <TeamCard member={member} />
      </li>
    ))}
  </ul>
);
