"use client";

import { useEffect, useRef, useState } from "react";

interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    id: "1",
    company: "Startup Center of FSTU",
    role: "IT Specialist",
    period: "2025 — Present",
    description:
      "Leading the startups and development of next-generation AI systems for enterprise clients.",
    highlights: [
      "Architected AI based platform for university",
      "Led team of 12 specialists",
      "Created an International volunteers assotiation",
    ],
  },
  {
    id: "2",
    company: "Bo'ston community",
    role: "Public Person",
    period: "2023 — 2025",
    description:
      "Helped to Bo'ston's workers with communication to people of community",
    highlights: [
      "Acted as a key mediator between municipal workers and residents, reducing communication friction by 30%.",
      "Developed and implemented a streamlined feedback system to collect and address resident concerns more efficiently.",
      "Boosted community trust in local workers through consistent, empathetic, and professional representation.",
    ],
  },
  {
    id: "3",
    company: "Plus Academy Inc.",
    role: "Manager",
    period: "2018 — 2023",
    description:
      "Manage Plus Academy's branch",
    highlights: [
      "Scaled the branch's student capacity by 70% through optimized scheduling and improved enrollment strategies.",
      "Led and mentored a diverse team of 6 teachers and administrators, fostering a collaborative work environment.",
      "Initiated local marketing campaigns that increased brand awareness and branch foot traffic by 40%.",
    ],
  },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          <div
            className={`lg:col-span-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              05 — Experience
            </span>
            <h2 className="font-serif text-4xl md:text-5xl">Career journey</h2>
          </div>
          <div
            className={`lg:col-span-8 lg:pl-12 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground max-w-2xl">
              A decade of progressive experience across engineering, research,
              and technical leadership, building impactful solutions for
              world-class organizations.
            </p>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4" />
          <div className="lg:col-span-8 lg:pl-12 lg:border-l border-border">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`timeline-item pb-12 last:pb-0 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground font-mono">
                    {exp.period}
                  </span>
                </div>
                <h3 className="font-serif text-2xl mb-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-4">{exp.company}</p>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li
                      key={`${exp.id}-${i}`}
                      className="text-sm text-muted-foreground pl-4 border-l border-secondary"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
