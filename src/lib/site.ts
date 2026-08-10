/**
 * Site-wide config a non-coder can safely edit: name, contact details, social
 * links, the volunteer form, and the primary navigation. Change a value here and
 * it updates everywhere (header, footer, contact page).
 */
export const site = {
  name: "Project Patho",
  shortName: "ProjectPatho",
  tagline: "Student-run nonprofit organization",
  mission:
    "ProjectPatho is a student-led nonprofit that educates elementary and middle school students about diseases and disorders through interactive resources. We spread awareness about rare or commonly misunderstood conditions to reduce stigma, inspire empathy, and spark interest in the science of pathology from an early age.",
  url: "https://www.projectpatho.org",
  email: "projectpatho@gmail.com",
  instagram: "https://www.instagram.com/projectpatho/",
  instagramHandle: "@projectpatho",
  interestForm:
    "https://docs.google.com/forms/d/e/1FAIpQLScQMuYxPLsD_xrC2x-MHdtHhm0oHsjykwNtABSAxWM7-BM4BA/viewform",
  // Spotify SHOW page for PathoTalks (so people can follow/subscribe). Paste the
  // show URL here (open.spotify.com/show/…) and a "Follow PathoTalks" button
  // appears on the Podcast page. Leave empty to hide it.
  podcastShow: "https://open.spotify.com/show/5FsyVw5fQ7bbhdEhK3Sjxz",
  fiscalSponsor: {
    name: "Brushstrokes for Biodiversity",
    note: "Fiscally sponsored by Brushstrokes for Biodiversity, a 501(c)(3) nonprofit organization.",
    url: "https://brushstrokesforbiodiversity.org/",
  },
} as const;

export type NavLink = { label: string; href: string };

/** Primary navigation — the new, flattened information architecture. */
export const nav: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Events", href: "/events" },
  { label: "Podcast", href: "/podcast" },
  { label: "Join Us", href: "/join" },
];
