import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const SENSE_RANGE = 240;
const FIRE_RANGE = 136;
const RELEASE_RANGE = 198;
const STRAND_OFFSETS = [-12, -8, -4, 0, 4, 8, 12];

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function nearestButtonPoint(rect, pointerX, pointerY) {
  const x = clamp(pointerX, rect.left, rect.right);
  const y = clamp(pointerY, rect.top, rect.bottom);

  if (x !== pointerX || y !== pointerY) {
    return {
      x,
      y,
      distance: Math.hypot(pointerX - x, pointerY - y),
    };
  }

  const edges = [
    { x, y: rect.top, distance: pointerY - rect.top },
    { x, y: rect.bottom, distance: rect.bottom - pointerY },
    { x: rect.left, y, distance: pointerX - rect.left },
    { x: rect.right, y, distance: rect.right - pointerX },
  ];

  return edges.reduce((nearest, edge) =>
    edge.distance < nearest.distance ? edge : nearest,
  );
}

function strandPath(web, offset) {
  const dx = web.pointerX - web.sourceX;
  const dy = web.pointerY - web.sourceY;
  const length = Math.hypot(dx, dy) || 1;
  const tangentX = -dy / length;
  const tangentY = dx / length;
  const startX = web.sourceX + tangentX * offset;
  const startY = web.sourceY + tangentY * offset;
  const endX = web.pointerX - tangentX * offset * 0.35;
  const endY = web.pointerY - tangentY * offset * 0.35;
  const bow = offset * 0.45;

  return `M ${startX} ${startY} Q ${(startX + endX) / 2 + tangentX * bow} ${(startY + endY) / 2 + tangentY * bow} ${endX} ${endY}`;
}

export function SpiderButton({
  children,
  className = "",
  contentClassName = "gap-2.5",
  onClick,
  type = "button",
}) {
  const buttonRef = useRef(null);
  const [web, setWeb] = useState(null);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    );
    const updateMotionPreference = () => {
      const reduce = Boolean(motionPreference?.matches);
      setReducedMotion(reduce);
      if (reduce) setWeb(null);
    };
    const updateViewport = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    const handlePointerMove = (event) => {
      if (event.pointerType === "touch" || reducedMotion) return;

      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;

      const nearest = nearestButtonPoint(rect, event.clientX, event.clientY);
      if (nearest.distance > SENSE_RANGE) {
        setWeb((current) => (current ? null : current));
        return;
      }

      setWeb((current) => ({
        sourceX: nearest.x,
        sourceY: nearest.y,
        pointerX: event.clientX,
        pointerY: event.clientY,
        distance: nearest.distance,
        caught:
          nearest.distance <= (current?.caught ? RELEASE_RANGE : FIRE_RANGE),
      }));
    };
    const clearWebWhenPointerLeavesWindow = (event) => {
      if (!event.relatedTarget) setWeb(null);
    };

    updateMotionPreference();
    updateViewport();
    motionPreference?.addEventListener("change", updateMotionPreference);
    window.addEventListener("resize", updateViewport);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("mouseout", clearWebWhenPointerLeavesWindow);

    return () => {
      motionPreference?.removeEventListener("change", updateMotionPreference);
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("mouseout", clearWebWhenPointerLeavesWindow);
    };
  }, [reducedMotion]);

  const activeWeb = reducedMotion ? null : web;
  const webOpacity = activeWeb?.caught ? 0.92 : 0.45;
  const baseClassName =
    "group relative isolate inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-white/35 text-white transition-[filter,transform,box-shadow] duration-300 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6d001a] focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.98] motion-reduce:transition-none";

  return (
    <>
      <button
        ref={buttonRef}
        type={type}
        onClick={onClick}
        className={`${baseClassName} ${className}`}
        style={{
          background:
            "linear-gradient(180deg, #8b3047 0%, #6d001a 52%, #4d0012 100%)",
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,.32), inset 0 -2px 0 rgba(0,0,0,.2), 0 10px 24px -14px rgba(0,0,0,.7)",
        }}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full rounded-full"
          viewBox="0 0 300 72"
          preserveAspectRatio="none"
          style={{ overflow: "hidden" }}
        >
          <rect
            x="1.5"
            y="1.5"
            width="297"
            height="69"
            rx="34.5"
            fill="none"
            stroke="white"
            strokeOpacity="0.35"
            strokeWidth="1.5"
          />
          <g
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.48"
            strokeWidth="0.8"
          >
            <path d="M3 8 24 20 10 4m14 16L6 30m18-10L34 7M297 8l-21 12 14-16m-14 16 18 10m-18-10L266 7M3 64l21-12L10 68m14-16L6 42m18 10 10 13m263-1-21-12 14 16m-14-16 18-10m-18 10-10 13" />
          </g>
        </svg>
        <span
          className={`relative z-10 inline-flex items-center ${contentClassName}`}
        >
          {children}
        </span>
      </button>

      {activeWeb &&
        viewport.width > 0 &&
        typeof document !== "undefined" &&
        createPortal(
          <svg
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[60] h-screen w-screen"
            viewBox={`0 0 ${viewport.width} ${viewport.height}`}
            preserveAspectRatio="none"
          >
            {activeWeb.caught ? (
              <>
                {STRAND_OFFSETS.map((offset) => (
                  <g key={offset}>
                    <path
                      d={strandPath(activeWeb, offset)}
                      fill="none"
                      stroke="#4d0012"
                      strokeLinecap="round"
                      strokeWidth={offset === 0 ? 3.2 : 2.6}
                      opacity="0.92"
                    />
                    <path
                      d={strandPath(activeWeb, offset)}
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeWidth={offset === 0 ? 1.4 : 0.9}
                      opacity={webOpacity}
                      style={{
                        transition: "opacity 150ms ease",
                      }}
                    />
                  </g>
                ))}
                <circle
                  cx={activeWeb.pointerX}
                  cy={activeWeb.pointerY}
                  r="15"
                  fill="none"
                  stroke="#4d0012"
                  strokeWidth="3"
                />
                <circle
                  cx={activeWeb.pointerX}
                  cy={activeWeb.pointerY}
                  r="15"
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.92"
                  strokeWidth="1.2"
                />
                <path
                  d={`M ${activeWeb.pointerX - 10} ${activeWeb.pointerY} H ${activeWeb.pointerX + 10} M ${activeWeb.pointerX} ${activeWeb.pointerY - 10} V ${activeWeb.pointerY + 10} M ${activeWeb.pointerX - 7} ${activeWeb.pointerY - 7} L ${activeWeb.pointerX + 7} ${activeWeb.pointerY + 7} M ${activeWeb.pointerX + 7} ${activeWeb.pointerY - 7} L ${activeWeb.pointerX - 7} ${activeWeb.pointerY + 7}`}
                  fill="none"
                  stroke="#4d0012"
                  strokeWidth="2.8"
                />
                <path
                  d={`M ${activeWeb.pointerX - 10} ${activeWeb.pointerY} H ${activeWeb.pointerX + 10} M ${activeWeb.pointerX} ${activeWeb.pointerY - 10} V ${activeWeb.pointerY + 10} M ${activeWeb.pointerX - 7} ${activeWeb.pointerY - 7} L ${activeWeb.pointerX + 7} ${activeWeb.pointerY + 7} M ${activeWeb.pointerX + 7} ${activeWeb.pointerY - 7} L ${activeWeb.pointerX - 7} ${activeWeb.pointerY + 7}`}
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.92"
                  strokeWidth="0.9"
                />
              </>
            ) : (
              STRAND_OFFSETS.slice(0, 5).map((offset) => {
                const dx = activeWeb.pointerX - activeWeb.sourceX;
                const dy = activeWeb.pointerY - activeWeb.sourceY;
                const length = Math.hypot(dx, dy) || 1;
                const startX = activeWeb.sourceX - (dy / length) * offset;
                const startY = activeWeb.sourceY + (dx / length) * offset;
                const rayLength =
                  12 + Math.max(0, 1 - activeWeb.distance / SENSE_RANGE) * 22;
                const endX = startX + (dx / length) * rayLength;
                const endY = startY + (dy / length) * rayLength;

                const path = `M ${startX} ${startY} l ${
                  (endX - startX) * 0.45
                } ${(endY - startY) * 0.45 - 4} L ${endX} ${endY}`;

                return (
                  <g key={offset}>
                    <path
                      d={path}
                      fill="none"
                      stroke="#4d0012"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      opacity="0.85"
                    />
                    <path
                      d={path}
                      fill="none"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.2"
                      opacity="0.9"
                    />
                  </g>
                );
              })
            )}
          </svg>,
          document.body,
        )}
    </>
  );
}

export default SpiderButton;
