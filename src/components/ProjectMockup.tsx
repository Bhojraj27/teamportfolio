import { cn } from "@/lib/utils";

type Variant = "saas" | "commerce" | "ios" | "dashboard";

export function ProjectMockup({
  variant,
  className,
}: {
  variant: Variant;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#090b12]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(79,140,255,0.16),transparent_40%),radial-gradient(circle_at_100%_80%,rgba(139,125,255,0.12),transparent_36%)]" />
      {variant === "ios" ? <IosMock /> : <WebChrome variant={variant} />}
    </div>
  );
}

function WebChrome({ variant }: { variant: Exclude<Variant, "ios"> }) {
  return (
    <div className="relative p-4 sm:p-5">
      <div className="mb-3 flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-white/20" />
        <span className="size-2 rounded-full bg-white/12" />
        <span className="size-2 rounded-full bg-white/12" />
        <span className="ml-3 h-5 flex-1 rounded-full bg-white/5" />
      </div>
      {variant === "saas" ? <SaaSScreen /> : null}
      {variant === "commerce" ? <CommerceScreen /> : null}
      {variant === "dashboard" ? <DashboardScreen /> : null}
    </div>
  );
}

function SaaSScreen() {
  return (
    <div className="grid min-h-[240px] grid-cols-[72px_minmax(0,1fr)] gap-3 sm:min-h-[280px]">
      <div className="rounded-2xl bg-white/4 p-2">
        <div className="space-y-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-6 rounded-lg bg-white/6" />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {["Users", "Workflows", "Uptime"].map((label) => (
            <div key={label} className="rounded-xl border border-white/6 bg-white/4 p-3">
              <p className="text-[10px] uppercase tracking-wider text-faint">{label}</p>
              <div className="mt-2 h-2 w-12 rounded bg-accent/50" />
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-white/6 bg-white/4 p-3">
          <div className="flex h-24 items-end gap-1.5">
            {[40, 62, 48, 78, 55, 88, 70, 92, 64, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-indigo/20 to-accent/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CommerceScreen() {
  return (
    <div className="grid min-h-[240px] grid-cols-2 gap-3 sm:min-h-[280px] sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-white/6 bg-white/4 p-2">
          <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-accent/20 to-violet/10" />
          <div className="mt-2 h-2 w-3/4 rounded bg-white/12" />
          <div className="mt-1.5 h-2 w-1/3 rounded bg-white/8" />
        </div>
      ))}
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="min-h-[240px] space-y-3 sm:min-h-[280px]">
      <div className="grid grid-cols-4 gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-white/6 bg-white/4 p-3">
            <div className="h-1.5 w-8 rounded bg-white/12" />
            <div className="mt-3 h-3 w-10 rounded bg-cyan/40" />
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-white/6 bg-white/4 p-4">
        <svg viewBox="0 0 320 110" className="h-28 w-full">
          <path
            d="M0 80 C 40 70, 50 40, 80 48 S 130 90, 160 60 S 220 20, 260 38 S 300 70, 320 50"
            fill="none"
            stroke="#4f8cff"
            strokeWidth="2"
          />
          <path
            d="M0 90 C 40 85, 50 60, 80 68 S 130 100, 160 78 S 220 40, 260 58 S 300 86, 320 70"
            fill="none"
            stroke="#8b7dff"
            strokeWidth="1.5"
            opacity="0.7"
          />
        </svg>
      </div>
    </div>
  );
}

function IosMock() {
  return (
    <div className="flex min-h-[280px] items-center justify-center py-8">
      <div className="relative w-[170px] rounded-[2rem] border border-white/16 bg-[#07080d] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
        <div className="absolute left-1/2 top-2 h-3 w-16 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="overflow-hidden rounded-[1.55rem] bg-[#0e111a] px-3 pb-4 pt-8">
          <div className="h-2 w-16 rounded bg-white/20" />
          <div className="mt-4 space-y-2">
            <div className="h-16 rounded-2xl bg-gradient-to-br from-accent/40 to-violet/20" />
            <div className="h-10 rounded-xl bg-white/6" />
            <div className="h-10 rounded-xl bg-white/6" />
            <div className="h-10 rounded-xl bg-white/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
