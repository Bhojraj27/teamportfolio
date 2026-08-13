import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-[11px] uppercase tracking-[0.24em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold">
        This page does not exist.
      </h1>
      <p className="mt-3 max-w-md text-sm text-muted">
        The link may be outdated. Head back to the studio homepage.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-gradient-to-r from-accent via-indigo to-violet px-5 py-3 text-sm text-white"
      >
        Back home
      </Link>
    </div>
  );
}
