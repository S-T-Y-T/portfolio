"use client";

import { useEffect, useRef, useState } from "react";

interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Programming & Engineering",
    skills: [
      { name: "Python", level: 95 },
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "C++", level: 35 },
      { name: "Next.js", level: 20 },
    ],
  },
  {
    name: "Data & Research",
    skills: [
      { name: "Machine Learning / Deep Learning", level: 90 },
      { name: "Data Analysis & Visualization", level: 95 },
      { name: "Statistical Modeling", level: 85 },
      { name: "Research Methodology", level: 90 },
      { name: "Scientific Writing", level: 85 },
    ],
  },
  {
    name: "Design & Tools",
    skills: [
      { name: "UI/UX Design", level: 60 },
      { name: "Figma / Sketch", level: 85 },
      { name: "Adobe Creative Suite", level: 75 },
      { name: "System Design", level: 90 },
      { name: "Technical Documentation", level: 35 },
    ],
  },
];

export function SkillsSection() {
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
    <section ref={sectionRef} className="py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
            06 — Skills
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl max-w-3xl">
            Technical expertise & capabilities
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.name}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + catIndex * 100}ms` }}
            >
              <h3 className="text-sm uppercase tracking-wider mb-8 font-medium border-b border-border pb-4">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className={`skill-bar-fill ${isVisible ? "animate" : ""}`}
                        style={{
                          transform: isVisible
                            ? `scaleX(${skill.level / 100})`
                            : "scaleX(0)",
                          transitionDelay: `${catIndex * 100 + 300}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
