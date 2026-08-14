import { Container } from "@/components/ui/Section";
import { trustItems } from "@/data/site";

export function TrustBar() {
  return (
    <section
      aria-label="Capabilities"
      className="section-shell relative border-y border-[color:var(--glass-border)] bg-[color:var(--background-alt)]"
    >
      <Container>
        <ul className="no-scrollbar flex items-center gap-0 overflow-x-auto py-3.5 sm:grid sm:grid-cols-3 sm:overflow-visible sm:py-4 lg:grid-cols-6">
          {trustItems.map((item, index) => (
            <li
              key={item}
              className="flex min-w-[10.5rem] items-center justify-center gap-3 px-3 text-center sm:min-w-0"
            >
              {index > 0 ? (
                <span
                  className="hidden h-5 w-px bg-[color:var(--glass-border)] sm:block lg:hidden"
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
