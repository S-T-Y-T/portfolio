"use client";

import { useEffect, useRef, useState } from "react";

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  honors?: string;
}

const education: Education[] = [
  {
    id: "1",
    institution: "KSPU's Academic Liseum",
    degree: "Special High",
    field: "Exact Sciences",
    period: "2021 — 2023",
    location: "Kokand, Uzbekistan",
    honors: "High level",
  },
  {
    id: "2",
    institution: "Fergana State Technical University",
    degree: "Bachelour",
    field: "Digital Economics",
    period: "2023 — 2027",
    location: "Fergana, Uzbekistan",
    honors: "In progress",
  },
];

export function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
            07 — Education
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Academic background
          </h2>
        </div>

        {/* Education cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`border border-border p-8 transition-all duration-700 hover:border-foreground ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <span className="text-xs text-muted-foreground font-mono block mb-6">
                {edu.period}
              </span>
              <h3 className="font-serif text-2xl mb-2">{edu.degree}</h3>
              <p className="text-muted-foreground mb-4">{edu.field}</p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-medium">{edu.institution}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
                {edu.honors && (
                  <p className="text-xs text-secondary mt-2 uppercase tracking-wider">
                    {edu.honors}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
