import React from "react";
import clsx from "clsx";

export interface GeometricVisualProps {
  theme: "orange" | "brown-500" | "brown-800";
  className?: string;
}

export const GeometricVisual: React.FC<GeometricVisualProps> = ({
  theme,
  className,
}) => {
  const bgStyles = {
    orange: "bg-orange-500",
    "brown-500": "bg-brown-500",
    "brown-800": "bg-brown-800",
  }[theme];

  return (
    <div
      className={clsx(
        "h-[240px] w-full relative overflow-hidden flex items-center justify-center p-6 select-none",
        bgStyles,
        className
      )}
      aria-hidden="true"
    >
      {/* Geometric compositions built with simple rectangles, circles, bars in white, orange, and one green accent */}
      {theme === "orange" && (
        <div className="relative w-48 h-36 flex items-center justify-center">
          {/* Base card rectangle */}
          <div className="absolute inset-0 bg-white/90 rounded-xl shadow-lg border border-white p-3 flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <div className="w-16 h-2 rounded bg-brown-950/20" />
            </div>
            <div className="space-y-1.5">
              <div className="w-full h-2 rounded bg-brown-950/10" />
              <div className="w-3/4 h-2 rounded bg-brown-950/10" />
            </div>
            {/* Green accent pill */}
            <div className="w-12 h-3 rounded-full bg-green-500" />
          </div>
          {/* Floating graphic bar & circle */}
          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-orange-500" />
          </div>
        </div>
      )}

      {theme === "brown-500" && (
        <div className="relative w-44 h-40 flex items-center justify-center">
          {/* Mobile frame shape */}
          <div className="w-28 h-40 rounded-2xl bg-white/95 shadow-xl border-2 border-white/60 p-2.5 flex flex-col justify-between relative">
            <div className="w-8 h-1 rounded-full bg-brown-950/20 mx-auto" />
            <div className="space-y-2 my-auto">
              <div className="w-full h-8 rounded-lg bg-orange-500/15 p-1.5 flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-orange-500" />
                <div className="w-10 h-1.5 rounded bg-orange-700/40" />
              </div>
              <div className="w-full h-3 rounded bg-brown-950/10" />
              <div className="w-4/5 h-3 rounded bg-brown-950/10" />
            </div>
            {/* Green circle indicator */}
            <div className="flex items-center justify-between px-1">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="w-6 h-1 rounded bg-brown-950/20" />
            </div>
          </div>
          {/* Floating square accent */}
          <div className="absolute -left-2 top-6 w-8 h-8 rounded-lg bg-orange-500 shadow-md" />
        </div>
      )}

      {theme === "brown-800" && (
        <div className="relative w-48 h-36 flex items-center justify-center">
          {/* System dashboard composition */}
          <div className="w-full h-full bg-white/95 rounded-xl shadow-xl p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-200/60 pb-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-brown-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
              <div className="w-12 h-2 rounded bg-brown-950/20" />
            </div>
            <div className="grid grid-cols-3 gap-2 my-1">
              <div className="h-10 rounded bg-orange-500/10 border border-orange-500/20 p-1 flex flex-col justify-between">
                <div className="w-3 h-1.5 rounded bg-orange-500" />
                <div className="w-6 h-1.5 rounded bg-orange-700/30" />
              </div>
              <div className="h-10 rounded bg-brown-950/5 border border-brown-950/10 p-1 flex flex-col justify-between">
                <div className="w-3 h-1.5 rounded bg-brown-600" />
                <div className="w-5 h-1.5 rounded bg-brown-950/20" />
              </div>
              <div className="h-10 rounded bg-green-500/10 border border-green-500/20 p-1 flex flex-col justify-between">
                <div className="w-3 h-1.5 rounded bg-green-500" />
                <div className="w-5 h-1.5 rounded bg-green-700/30" />
              </div>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="h-1.5 flex-1 rounded bg-brown-950/10" />
              <div className="w-8 h-1.5 rounded bg-orange-500" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
