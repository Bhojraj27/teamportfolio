"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CheckCircle2, X, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type ToastTone = "success" | "error";

type ToastItem = {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
};

type ToastInput = {
  title: string;
  description?: string;
  tone?: ToastTone;
  durationMs?: number;
};

type ToastContextValue = {
  toast: (input: ToastInput) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const toast = useCallback(
    ({ title, description, tone = "success", durationMs = 5200 }: ToastInput) => {
      const id = Date.now() + Math.floor(Math.random() * 1000);
      setItems((current) => [...current, { id, title, description, tone }]);
      window.setTimeout(() => dismiss(id), durationMs);
    },
    [dismiss],
  );

  const value = useMemo(() => ({ toast }), [toast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[120] flex flex-col items-center gap-3 p-4 sm:items-end sm:p-6"
        aria-live="polite"
        aria-relevant="additions"
      >
        {items.map((item) => (
          <ToastCard key={item.id} item={item} onDismiss={dismiss} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}

function ToastCard({
  item,
  onDismiss,
}: {
  item: ToastItem;
  onDismiss: (id: number) => void;
}) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const Icon = item.tone === "success" ? CheckCircle2 : XCircle;

  return (
    <div
      role="status"
      className={cn(
        "pointer-events-auto flex w-full max-w-md items-start gap-3 rounded-2xl border px-4 py-3 shadow-[var(--glass-shadow)] backdrop-blur-xl transition duration-300",
        entered ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0",
        item.tone === "success"
          ? "border-[color:color-mix(in_srgb,var(--accent)_45%,var(--glass-border))] bg-[color:color-mix(in_srgb,var(--accent)_12%,var(--glass-strong))]"
          : "border-red-400/35 bg-[color:color-mix(in_srgb,#ef4444_12%,var(--glass-strong))]",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 size-5 shrink-0",
          item.tone === "success" ? "text-accent" : "text-red-400",
        )}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground">{item.title}</p>
        {item.description ? (
          <p className="mt-1 text-xs leading-5 text-muted">{item.description}</p>
        ) : null}
      </div>
      <button
        type="button"
        onClick={() => onDismiss(item.id)}
        className="grid size-7 place-items-center rounded-full text-faint transition hover:bg-[color:var(--glass-hover)] hover:text-foreground"
        aria-label="Dismiss notification"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}
