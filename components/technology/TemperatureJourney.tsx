"use client";

import { useEffect, useRef, useState } from "react";
import { temperatureJourney } from "@/lib/process";

/*
 * Plot geometry. A fixed viewBox keeps the SVG crisp at any size; the wrapper
 * scrolls horizontally on narrow screens rather than squashing the labels.
 */
const VB_W = 680;
const VB_H = 308;
/* PLOT_TOP leaves room for the "°C" unit caption to sit clear of the top tick. */
const PLOT_TOP = 34;
const PLOT_BOTTOM = 248;
const FIRST_X = 86;
/* Keeps the widest end label ("Cold Storage") inside the viewBox. */
const LAST_X = 612;

const TEMP_MAX = 100;
const TEMP_MIN = -40;

/** Maps a temperature in °C to a y coordinate in the viewBox. */
const yFor = (temp: number) =>
  PLOT_TOP +
  ((TEMP_MAX - temp) / (TEMP_MAX - TEMP_MIN)) * (PLOT_BOTTOM - PLOT_TOP);

/** Evenly spaces the five stages across the plot. */
const xFor = (index: number) =>
  FIRST_X + (index * (LAST_X - FIRST_X)) / (temperatureJourney.length - 1);

const yTicks = [100, 50, 0, -40];

/**
 * The temperature a product passes through, from field heat to cold store.
 *
 * A single series, so there is no legend — the heading names what is plotted.
 * Values are not printed on the markers because the axis captions already
 * carry them; duplicating them on every point is the "number on every data
 * point" anti-pattern.
 */
export function TemperatureJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const points = temperatureJourney.map((stage, i) => ({
    ...stage,
    x: xFor(i),
    y: yFor(stage.temp),
  }));

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-7"
    >
      <h3 className="text-lg font-semibold text-foreground">
        The temperature journey
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
        Every stage between the field and your cold store, and the temperature
        the product is held at through it.
      </p>

      {/* Wide chart scrolls inside its own container instead of squashing. */}
      <div className="mt-6 -mx-1 overflow-x-auto px-1">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="h-auto w-full min-w-lg"
          role="img"
          aria-label="Line chart of processing temperature: raw material at ambient, blanching at 90 degrees Celsius, cooling to 10 degrees, IQF freezing at minus 35 to minus 40 degrees, then cold storage at minus 18 degrees or lower."
        >
          {/* Gridlines — solid hairlines, one step off the surface. */}
          {yTicks.map((tick) => (
            <g key={tick}>
              <line
                x1={46}
                x2={VB_W - 20}
                y1={yFor(tick)}
                y2={yFor(tick)}
                stroke="var(--border)"
                strokeWidth={tick === 0 ? 1.5 : 1}
              />
              <text
                x={38}
                y={yFor(tick) + 4}
                textAnchor="end"
                className="fill-faint-foreground text-[11px] tabular-nums"
              >
                {tick > 0 ? tick : tick === 0 ? 0 : `−${Math.abs(tick)}`}
              </text>
            </g>
          ))}

          <text
            x={38}
            y={14}
            textAnchor="end"
            className="fill-faint-foreground text-[11px]"
          >
            °C
          </text>

          {/* Series line — 2px, round joins, drawn in on scroll. */}
          <path
            d={path}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 1400,
              strokeDashoffset: shown ? 0 : 1400,
              transition: "stroke-dashoffset 1600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          />

          {/* Markers: 9px dots with a 2px surface ring so they stay legible. */}
          {points.map((p, i) => (
            <circle
              key={p.label}
              cx={p.x}
              cy={p.y}
              r={4.5}
              fill="var(--accent)"
              stroke="var(--card)"
              strokeWidth={2}
              style={{
                opacity: shown ? 1 : 0,
                transition: `opacity 400ms ease ${600 + i * 160}ms`,
              }}
            />
          ))}

          {/* X-axis captions carry the stage name and its temperature. */}
          {points.map((p) => (
            <g key={`label-${p.label}`}>
              <text
                x={p.x}
                y={PLOT_BOTTOM + 26}
                textAnchor="middle"
                className="fill-foreground text-[12px] font-semibold"
              >
                {p.label}
              </text>
              <text
                x={p.x}
                y={PLOT_BOTTOM + 44}
                textAnchor="middle"
                className="fill-muted-foreground text-[11px]"
              >
                {p.sub}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
