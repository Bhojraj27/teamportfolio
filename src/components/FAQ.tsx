"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered."
            subtitle="Straightforward answers for founders, agencies, and companies hiring remotely."
          />
          <div className="divide-y divide-white/8 rounded-[1.8rem] border border-white/8 bg-surface">
            {faqs.map((item, index) => {
              const isOpen = open === index;
              return (
                <div key={item.question}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : index)}
                  >
                    <span className="text-sm font-medium text-foreground sm:text-[15px]">
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
