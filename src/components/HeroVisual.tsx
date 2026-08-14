export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full overflow-hidden">
      <div className="absolute inset-[8%] animate-spin-slow rounded-full border border-[color:color-mix(in_srgb,var(--foreground)_8%,transparent)]" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-[color:color-mix(in_srgb,var(--foreground)_10%,transparent)]" />
      <div className="absolute inset-0 grid-fade rounded-[2rem] opacity-70" />

      <svg
        viewBox="0 0 520 520"
        className="relative z-10 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="50%" stopColor="var(--violet)" stopOpacity="0.65" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        <path
          d="M150 150 C 210 190, 310 190, 370 150"
          fill="none"
          stroke="url(#line)"
          strokeWidth="1.2"
          className="animate-dash"
        />
        <path
          d="M150 370 C 210 330, 310 330, 370 370"
          fill="none"
          stroke="url(#line)"
          strokeWidth="1.2"
          className="animate-dash"
        />
        <path
          d="M150 150 C 190 210, 190 310, 150 370"
          fill="none"
          stroke="url(#line)"
          strokeWidth="1.2"
          className="animate-dash"
        />
        <path
          d="M370 150 C 330 210, 330 310, 370 370"
          fill="none"
          stroke="url(#line)"
          strokeWidth="1.2"
          className="animate-dash"
        />
        <path
          d="M150 150 L 260 260 L 370 150 M150 370 L 260 260 L 370 370"
          fill="none"
          stroke="color-mix(in srgb, var(--foreground) 14%, transparent)"
          strokeWidth="1"
        />

        <g>
          <circle
            cx="260"
            cy="260"
            r="28"
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="1.4"
          />
          <circle cx="260" cy="260" r="6" fill="var(--accent)" />
        </g>
        <text
          x="260"
          y="300"
          textAnchor="middle"
          fill="var(--muted)"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          PRODUCTION
        </text>

        <Node x={150} y={150} label="FRONTEND" sub="React · Next" color="var(--accent)" />
        <Node x={370} y={150} label="BACKEND" sub="Node · APIs" color="var(--violet)" />
        <Node x={150} y={370} label="CLOUD" sub="AWS · CI/CD" color="var(--cyan)" />
        <Node x={370} y={370} label="MOBILE" sub="React Native" color="var(--accent)" />

        <circle cx="210" cy="230" r="3" fill="var(--accent)" opacity="0.7" />
        <circle cx="320" cy="250" r="2.5" fill="var(--violet)" opacity="0.7" />
        <circle cx="245" cy="330" r="2.5" fill="var(--cyan)" opacity="0.7" />
        <circle cx="300" cy="200" r="2" fill="var(--accent)" opacity="0.6" />
      </svg>

      <CodeChip className="absolute left-[4%] top-[18%] animate-float" delay="0s">
        export default
      </CodeChip>
      <CodeChip className="absolute right-[2%] top-[28%] animate-float-slow" delay="0.6s">
        POST /api/v1
      </CodeChip>
      <CodeChip className="absolute left-[8%] bottom-[16%] animate-float" delay="1.1s">
        aws deploy
      </CodeChip>
      <CodeChip className="absolute right-[6%] bottom-[22%] animate-float-slow" delay="1.7s">
        react-native
      </CodeChip>
    </div>
  );
}

function Node({
  x,
  y,
  label,
  sub,
  color,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  color: string;
}) {
  return (
    <g>
      <circle cx={x} cy={y} r="22" fill="var(--surface)" stroke={color} strokeWidth="1.5" />
      <circle cx={x} cy={y} r="5" fill={color} />
      <text
        x={x}
        y={y - 34}
        textAnchor="middle"
        fill="var(--foreground)"
        fontSize="10"
        letterSpacing="1.6"
        fontFamily="ui-sans-serif, system-ui"
      >
        {label}
      </text>
      <text
        x={x}
        y={y + 42}
        textAnchor="middle"
        fill="var(--muted)"
        fontSize="9"
        fontFamily="ui-monospace, monospace"
      >
        {sub}
      </text>
    </g>
  );
}

function CodeChip({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <span
      className={`rounded-full border border-[color:var(--glass-border)] bg-[color:var(--glass)] px-3 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur-md ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </span>
  );
}
