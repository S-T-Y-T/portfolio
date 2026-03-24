"use client";

import { useEffect, useRef, useState } from "react";
import RetroTV from "./RetroTV";

export function AboutSection() {
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
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            01 — About
          </span>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Retro TV & Statement */}
          <div
            className={`space-y-12 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
              Driven by curiosity,
              <br />
              <span className="italic text-muted-foreground">
                guided by precision
              </span>
            </h2>
            {/* Retro TV */}
            <RetroTV />
            
            {/* Statement */}

          </div>

          {/* Right column - Bio */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a digital economist and project manager with hands-on experience in building and leading multiple startup initiatives. My background combines engineering discipline with formal specialization in economics, allowing me to approach product development not only from a technical perspective, but also through financial modeling, market logic, and long-term sustainability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Having worked within startup environments, I understand the full lifecycle of a product — from problem validation and MVP development to strategy, positioning, and scaling. This experience has strengthened my ability to operate under uncertainty, make data-informed decisions, and align technical execution with business objectives.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In parallel, I am engaged in academic research focused on the digitalization of government systems and development of sports sector within the framework of digital economy. My research explores how technology, data infrastructure, and platform models can improve transparency, efficiency, and institutional performance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My core interests lie in FinTech, data-driven systems, and scalable digital platforms. I am committed to advancing further in economics and financial technologies, building solutions that generate sustainable economic value and systemic impact.
            </p>

            {/* Focus areas */}
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3 font-medium">
                  Innovation
                </h3>
                <p className="text-sm text-muted-foreground">
                  Pioneering new approaches and technologies that redefine
                  industry standards.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3 font-medium">
                  Programming
                </h3>
                <p className="text-sm text-muted-foreground">
                  Programming interesting projects using different technologies.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3 font-medium">
                  Research
                </h3>
                <p className="text-sm text-muted-foreground">
                  Applying scientific rigor to solve real-world problems.
                </p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider mb-3 font-medium">
                  Design
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creating experiences that are both beautiful and functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}