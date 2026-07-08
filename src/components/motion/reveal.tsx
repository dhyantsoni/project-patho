"use client";

import { createElement, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Lightweight scroll/load reveal. Uses IntersectionObserver + a CSS class
 * (no animation-library JS in the critical path). Content is visible by default
 * for no-JS and reduced-motion users (see .reveal rules in globals.css).
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps): React.ReactElement => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", visible && "is-visible", className),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  );
};
