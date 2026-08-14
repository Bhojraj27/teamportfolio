"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="section-shell section-accent-wash section-pad relative">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            subtitle="Straightforward answers for founders, agencies, and companies building remotely."
          />
          <div className="glass-cool divide-y divide-[color:var(--glass-border)] rounded-[1.8rem]">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-[color:var(--accent-soft)] sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span
                      className={cn(
                        "text-sm font-medium sm:text-[15px]",
                        isOpen ? "text-accent" : "text-foreground",
                      )}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "size-4 shrink-0 text-muted transition duration-300",
                        isOpen && "rotate-180 text-accent",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                    )}
                  >
                    <p className="overflow-hidden px-5 text-sm leading-6 text-muted sm:px-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
