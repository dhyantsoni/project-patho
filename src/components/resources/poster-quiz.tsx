"use client";

import { useId, useState } from "react";
import type { QuizQuestion } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * A poster's quiz, answered and marked in place, with no forms and no leaving the site.
 * Each question is a radio group inside a fieldset so keyboard and screen-reader
 * users get native grouping; the score is announced politely once marked.
 */

type PosterQuizProps = {
  questions: QuizQuestion[];
  /** Names the quiz for assistive tech, e.g. "Epilepsy". */
  title: string;
};

const LETTERS = ["a", "b", "c", "d", "e"];

export const PosterQuiz = ({ questions, title }: PosterQuizProps): React.ReactElement => {
  const groupId = useId();
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [marked, setMarked] = useState(false);

  const answered = Object.keys(picked).length;
  const score = questions.reduce((n, q, i) => (picked[i] === q.answer ? n + 1 : n), 0);

  return (
    <div>
      <ol className="space-y-8">
        {questions.map((q, qi) => {
          const chosen = picked[qi];
          return (
            <li key={q.question}>
              <fieldset>
                <legend className="font-display text-lg font-semibold text-ink">
                  {qi + 1}. {q.question}
                </legend>
                <div className="mt-3 space-y-2">
                  {q.options.map((option, oi) => {
                    const isChosen = chosen === oi;
                    const isAnswer = q.answer === oi;
                    // After marking, show the right answer and flag a wrong pick.
                    const state = !marked
                      ? "idle"
                      : isAnswer
                        ? "correct"
                        : isChosen
                          ? "wrong"
                          : "idle";
                    return (
                      <label
                        key={option}
                        className={cn(
                          "flex cursor-pointer items-start gap-3 border p-3 transition-colors",
                          state === "correct" && "border-brand bg-pink-soft",
                          state === "wrong" && "border-brand-deep bg-transparent line-through",
                          state === "idle" &&
                            (isChosen ? "border-brand bg-pink-soft" : "border-border"),
                        )}
                      >
                        <input
                          type="radio"
                          name={`${groupId}-${qi}`}
                          value={oi}
                          checked={isChosen ?? false}
                          disabled={marked}
                          onChange={() => setPicked((p) => ({ ...p, [qi]: oi }))}
                          className="mt-1 h-4 w-4 shrink-0 accent-[var(--brand)]"
                        />
                        <span className="text-ink">
                          <span className="font-semibold text-brand">{LETTERS[oi]})</span> {option}
                        </span>
                        {marked && isAnswer ? (
                          <span className="ml-auto shrink-0 text-sm font-semibold text-brand">
                            Correct answer
                          </span>
                        ) : null}
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        {marked ? (
          <Button variant="outline" onClick={() => (setMarked(false), setPicked({}))}>
            Try again
          </Button>
        ) : (
          <Button onClick={() => setMarked(true)} disabled={answered < questions.length}>
            Check my answers
          </Button>
        )}
        <p aria-live="polite" className="text-ink-soft">
          {marked
            ? `You got ${score} of ${questions.length} right on the ${title} quiz.`
            : answered < questions.length
              ? `${questions.length - answered} question${questions.length - answered === 1 ? "" : "s"} left.`
              : "All answered. Check them below."}
        </p>
      </div>
    </div>
  );
};
