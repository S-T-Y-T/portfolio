"use client";

import { useEffect, useRef, useState } from "react";

interface Metric {
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const metrics: Metric[] = [
  {
    value: 15,
    suffix: "+",
    label: "Published Articles",
    description: "In prestigious academic journals and conferences",
  },
  {
    value: 12,
    suffix: "+",
    label: "Projects Delivered",
    description: "From concept to successful deployment",
  },
  {
    value: 9,
    suffix: "+",
    label: "Design Works",
    description: "Visual identities and digital experiences",
  },
  {
    value: 25,
    suffix: "+",
    label: "Competitions",
    description: "International and national achievements",
  },
];

function Counter({
  value,
  suffix = "",
  duration = 2000,
  start = false,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [start, value, duration]);

  return (
    <span className="counter">
      {count}
      {suffix}
    </span>
  );
}

export function MetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 bg-foreground text-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-background/60">
            02 — Impact
          </span>
        </div>

        {/* Statement */}
        <h2
          className={`font-serif text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight mb-20 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Years of dedicated work translated into measurable outcomes and
          meaningful contributions.
        </h2>

        {/* Metrics grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`border-t border-background/20 pt-8 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl mb-4">
                <Counter
                  value={metric.value}
                  suffix={metric.suffix}
                  start={isVisible}
                />
              </div>
              <h3 className="text-sm uppercase tracking-wider mb-2 font-medium">
                {metric.label}
              </h3>
              <p className="text-sm text-background/60">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
