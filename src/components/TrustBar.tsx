import { Container } from "@/components/ui/Section";
import { trustItems } from "@/data/site";

export function TrustBar() {
  return (
    <section aria-label="Capabilities" className="relative border-y border-white/8">
      <Container>
        <ul className="no-scrollbar flex items-center gap-0 overflow-x-auto py-5 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
          {trustItems.map((item, index) => (
            <li
              key={item}
              className="flex min-w-[11rem] items-center justify-center gap-4 px-4 text-center sm:min-w-0"
            >
              {index > 0 ? (
                <span
                  className="hidden h-8 w-px bg-white/8 sm:block lg:hidden"
                  aria-hidden="true"
                />
              ) : null}
              <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
