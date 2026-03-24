"use client";

import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  year: number;
  credentialId?: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    name: "InnoX acceleration&incubation programm",
    issuer: "Fergana Youth's Technopark/IT Park/Startup Garage/FSTU/Startup Center of FSTU",
    year: 2026,
    credentialId: "GWR-UZB-2026-XXXX",
  },
  {
    id: "2",
    name: "Winter University at SPbPU",
    issuer: "МИНОБРНАУКИ/Социо Центр/Передовые инжиниринговые школы/ПОЛИТЕХ/Цифровой Инжиниринг ПИШ СПбПУ/Инжиниринговый центр КРОНШДАДТ",
    year: 2026,
    credentialId: "GCP-PMLE-2026-XXXX",
  },
  {
    id: "3",
    name: "DronsXPilots",
    issuer: "FSTU/Startup Center of FSTU",
    year: 2026,
    credentialId: "CKA-2026-XXXX",
  },
];

export function CertificatesSection() {
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
    <section ref={sectionRef} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
            09 — Certifications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Professional credentials
          </h2>
        </div>

        {/* Certificates list */}
        <div className="divide-y divide-border">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`group py-6 grid md:grid-cols-12 gap-4 items-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${100 + index * 75}ms` }}
            >
              {/* Icon */}
              <div className="md:col-span-1">
                <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Award className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
              </div>

              {/* Name */}
              <div className="md:col-span-5">
                <h3 className="font-medium group-hover:text-muted-foreground transition-colors">
                  {cert.name}
                </h3>
              </div>

              {/* Issuer */}
              <div className="md:col-span-4">
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </div>

              {/* Year */}
              <div className="md:col-span-2 text-right">
                <span className="text-xs text-muted-foreground font-mono">
                  {cert.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
