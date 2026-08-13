export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[540px]">
      <div className="absolute inset-[8%] rounded-full border border-white/6 animate-spin-slow" />
      <div className="absolute inset-[18%] rounded-full border border-dashed border-white/8" />
      <div className="absolute inset-0 grid-fade rounded-[2rem] opacity-70" />

      <svg
        viewBox="0 0 520 520"
        className="relative z-10 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="line" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f8cff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8b7dff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#4fd1c5" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
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
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        <g filter="url(#glow)">
          <circle cx="260" cy="260" r="28" fill="#0c0e16" stroke="#6d7bff" strokeWidth="1.4" />
          <circle cx="260" cy="260" r="6" fill="#4f8cff" className="animate-glow" />
        </g>
        <text
          x="260"
          y="300"
          textAnchor="middle"
          fill="#9aa1b5"
          fontSize="10"
          fontFamily="ui-monospace, monospace"
        >
          PRODUCTION
        </text>

        <Node x={150} y={150} label="FRONTEND" sub="React · Next" color="#4f8cff" />
        <Node x={370} y={150} label="BACKEND" sub="Node · APIs" color="#6d7bff" />
        <Node x={150} y={370} label="CLOUD" sub="AWS · CI/CD" color="#4fd1c5" />
        <Node x={370} y={370} label="MOBILE" sub="React Native" color="#8b7dff" />

        <circle cx="210" cy="230" r="3" fill="#4f8cff" opacity="0.8" />
        <circle cx="320" cy="250" r="2.5" fill="#8b7dff" opacity="0.8" />
        <circle cx="245" cy="330" r="2.5" fill="#4fd1c5" opacity="0.8" />
        <circle cx="300" cy="200" r="2" fill="#6d7bff" opacity="0.7" />
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
      <circle cx={x} cy={y} r="22" fill="#0c0e16" stroke={color} strokeWidth="1.5" />
      <circle cx={x} cy={y} r="5" fill={color} />
      <text
        x={x}
        y={y - 34}
        textAnchor="middle"
        fill="#f4f5f8"
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
        fill="#9aa1b5"
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
      className={`rounded-full border border-white/10 bg-[#0c0e16]/80 px-3 py-1 font-mono text-[10px] tracking-wide text-muted backdrop-blur ${className ?? ""}`}
      style={{ animationDelay: delay }}
    >
      {children}
    </span>
  );
}
