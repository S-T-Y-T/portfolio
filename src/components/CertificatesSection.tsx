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
  {
    id: "4",
    name: "Five Million AI Leaders",
    issuer: "Ministry of DIgital Technologies of Rupublic of Uzbekistan/Dubai Future Foundation/United Arab Emirates Ministry of Cabinet Affairs",
    year: 2026,
    credentialId: "CKA-2026-XXXX",
  },
  {
    id: "5",
    name: "Professional Networking for Career Growth",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "e8780088-70a3-4921-a869-051de5224562",
  },
  {
    id: "6",
    name: "Critical Thinking in theAI Era",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "3fae7e7b-821a-407c-bf1a-f4643c5dbb68",
  },
  {
    id: "7",
    name: "Business Email",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "22c75fa3-0b03-4c0d-b4a5-eaa1cfcb4f0a",
  },
  {
    id: "8",
    name: "AI for Business Professionals",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "e4f19af1-c249-413d-9ad3-4eb4c6852bc7",
  },
  {
    id: "9",
    name: "Customer Experience (CX) for Business Success",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "c0c43e24-b8c6-448a-8207-7363cc3a3464",
  },
  {
    id: "10",
    name: "Business Communications",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "21dd1f84-c301-423a-935d-167fd8b1793d",
  },
  {
    id: "11",
    name: "Effective Presentations",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "fd992abc-7476-49e8-b67c-9c9a44e16a58",
  },
  {
    id: "12",
    name: "AI for Beginners",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "4deb9f69-0ff5-4229-bcd8-088fc441396d",
  },
  {
    id: "13",
    name: "Presenting Data",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "e4dbbe5f-9a79-4dbb-a20c-db7f6c166e7e",
  },
  {
    id: "14",
    name: "Agile Project Management",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "4d5ac366-a249-41f8-aeda-c216546f5f8d",
  },
  {
    id: "15",
    name: "Effective Leadership",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "2286e5fd-a2aa-4a59-b980-e92b0d7224d1",
  },
  {
    id: "16",
    name: "Data Science & Analytics",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "1adb9ed8-38cc-4d36-9a47-d366d782883a",
  },
  {
    id: "17",
    name: "Introduction to Digital Business Skills",
    issuer: "HP LIFE, HP Foundation",
    year: 2026,
    credentialId: "cf2a7c00-e146-4441-8789-00a245e3868f",
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
