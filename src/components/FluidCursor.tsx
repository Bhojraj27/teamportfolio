"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, summary, .glass-interactive, .btn-glass, .btn-glass-secondary, .nav-link, .chip-interactive";

function canUseFluidCursor() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  if (window.matchMedia("(pointer: coarse)").matches) return false;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return false;
  if (window.innerWidth < 1024) return false;
  return true;
}

export function FluidCursor() {
  const [enabled, setEnabled] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncEnabled = () => setEnabled(canUseFluidCursor());
    syncEnabled();

    const mqFine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    mqFine.addEventListener("change", syncEnabled);
    mqMotion.addEventListener("change", syncEnabled);
    window.addEventListener("resize", syncEnabled);

    return () => {
      mqFine.removeEventListener("change", syncEnabled);
      mqMotion.removeEventListener("change", syncEnabled);
      window.removeEventListener("resize", syncEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-fluid-cursor");
      return;
    }

    document.documentElement.classList.add("has-fluid-cursor");

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!root || !dot || !ring) return;

    let raf = 0;
    let visible = false;
    let hovering = false;
    let pressing = false;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const tip = { x: mouse.x, y: mouse.y };
    const trail = { x: mouse.x, y: mouse.y };

    const paint = () => {
      // Tight tip + slightly lagged ring = fluid feel without rubber-banding
      tip.x += (mouse.x - tip.x) * 0.42;
      tip.y += (mouse.y - tip.y) * 0.42;
      trail.x += (mouse.x - trail.x) * 0.16;
      trail.y += (mouse.y - trail.y) * 0.16;

      const tipScale = pressing ? 0.72 : hovering ? 0.55 : 1;
      const ringScale = pressing ? 0.82 : hovering ? 1.55 : 1;

      dot.style.transform = `translate3d(${tip.x}px, ${tip.y}px, 0) translate(-50%, -50%) scale(${tipScale})`;
      ring.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      root.dataset.hover = hovering ? "true" : "false";
      root.dataset.press = pressing ? "true" : "false";
      root.dataset.visible = visible ? "true" : "false";

      const stillMoving =
        Math.abs(mouse.x - tip.x) > 0.08 ||
        Math.abs(mouse.y - tip.y) > 0.08 ||
        Math.abs(mouse.x - trail.x) > 0.08 ||
        Math.abs(mouse.y - trail.y) > 0.08;

      if (stillMoving || hovering || pressing) {
        raf = window.requestAnimationFrame(paint);
      } else {
        raf = 0;
      }
    };

    const kick = () => {
      if (!raf) raf = window.requestAnimationFrame(paint);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!visible) visible = true;
      kick();
    };

    const onOver = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const target = event.target as Element | null;
      hovering = Boolean(target?.closest(INTERACTIVE));
      kick();
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      pressing = true;
      kick();
    };

    const onUp = () => {
      pressing = false;
      kick();
    };

    const onLeave = () => {
      visible = false;
      hovering = false;
      pressing = false;
      kick();
    };

    const onEnter = () => {
      visible = true;
      kick();
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    kick();

    return () => {
      document.documentElement.classList.remove("has-fluid-cursor");
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={rootRef}
      className="fluid-cursor"
      aria-hidden="true"
      data-visible="false"
      data-hover="false"
      data-press="false"
    >
      <div ref={ringRef} className="fluid-cursor__ring" />
      <div ref={dotRef} className="fluid-cursor__dot" />
    </div>
  );
}
