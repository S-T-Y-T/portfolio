"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

interface Competition {
  id: string;
  name: string;
  year: number;
  achievement: string;
  category: string;
}

const competitions: Competition[] = [
  {
    id: "1",
    name: "Guinness World Record: “The Most People Assembling Robots Simultaneously”",
    year: 2025,
    achievement: "Participant",
    category: "Engineering",
  },
  {
    id: "2",
    name: "Subject Olympiad in Informatics among Academic Lyceum Students of the Fergana Valley, organized by TATU Fergana Branch named after Muhammad al-Khwarizmi",
    year: 2022,
    achievement: "2nd place",
    category: "Programming",
  },
  {
    id: "3",
    name: "iOKA Case Challenge",
    year: 2025,
    achievement: "2nd place",
    category: "Ideaton",
  },
  {
    id: "4",
    name: "EconX Competition",
    year: 2025,
    achievement: "1st place",
    category: "Ideaton",
  },
  {
    id: "5",
    name: "AI Case Challenge",
    year: 2025,
    achievement: "Participant",
    category: "Ideaton",
  },
  {
    id: "6",
    name: "Cryptology Olympiad – Republican Stage",
    year: 2024,
    achievement: "Participant",
    category: "Cyber security",
  },
  {
    id: "7",
    name: "Cryptology Olympiad – University Stage",
    year: 2023,
    achievement: "1st place",
    category: "Cyber security",
  },
  {
    id: "8",
    name: "“We, the Youth, Are Against Corruption” Essay Competition",
    year: 2024,
    achievement: "2nd place",
    category: "Writing",
  },
  {
    id: "9",
    name: "“University Cup” Hackathon",
    year: 2025,
    achievement: "Best Project",
    category: "AI/ML hackaton",
  },
  {
    id: "10",
    name: "Startup Battle",
    year: 2025,
    achievement: "Top-30",
    category: "Startup competition",
  },
  {
    id: "11",
    name: "Fergana Startup Day",
    year: 2025,
    achievement: "Volunteer",
    category: "Startup competition",
  },
  {
    id: "12",
    name: "“Let’s Preserve the Future Together” Project",
    year: 2024,
    achievement: "Volunteer",
    category: "Eco Volunteer",
  },
  {
    id: "13",
    name: "Bo‘ston Community",
    year: 2024,
    achievement: "Volunteer",
    category: "Volunteer",
  },
  {
    id: "14",
    name: "“One Student – One Project” Competition",
    year: 2025,
    achievement: "3rd place",
    category: "Ideaton",
  },
  {
    id: "15",
    name: "Hult Prize",
    year: 2026,
    achievement: "Participant",
    category: "Startup competition",
  },
  {
    id: "16",
    name: "Red Bull Basement National Final",
    year: 2026,
    achievement: "Top-20",
    category: "Startup competition",
  },
  {
    id: "17",
    name: "CECECO Clean Energy Hackathon",
    year: 2026,
    achievement: "Participant",
    category: "Hackaton",
  },
  {
    id: "18",
    name: "University Cup Dron Racing",
    year: 2026,
    achievement: "3rd plase",
    category: "Dron Racing",
  },
  {
    id: "19",
    name: "The city stage of the Mirzo Ulugbek Successors' Selection",
    year: 2026,
    achievement: "Top-5",
    category: "Science and Innovation",
  },
  {
    id: "20",
    name: "University Cup Hackaton",
    year: 2026,
    achievement: "1st place",
    category: "Hackaton",
  },
  {
    id: "21",
    name: "University Cup The best idea",
    year: 2026,
    achievement: "1st place",
    category: "Ideaton",
  },
  {
    id: "22",
    name: "University Cup Architecture",
    year: 2026,
    achievement: "Participant",
    category: "Architecture",
  },
  {
    id: "23",
    name: "University Cup Robotics",
    year: 2026,
    achievement: "Participant",
    category: "Robotics",
  },
  {
    id: "24",
    name: "Engeneers of the future",
    year: 2026,
    achievement: "Participant",
    category: "Engeneering",
  },
  {
    id: "25",
    name: "Greenleaf competition",
    year: 2026,
    achievement: "Volunteer",
    category: "Volunteer",
  },
  {
    id: "26",
    name: "Paynet Hackaton",
    year: 2026,
    achievement: "Participant",
    category: "Hackaton",
  },
  {
    id: "27",
    name: "HealthTech Hakaton",
    year: 2026,
    achievement: "Participant",
    category: "Hackaton",
  },  
  {
    id: "28",
    name: "The regional stage of the Mirzo Ulugbek Successors' Selection",
    year: 2026,
    achievement: "Participant",
    category: "Science and Innovation",
  },
  {
    id: "29",
    name: "University Cup Cybersecurity CTF",
    year: 2026,
    achievement: "Organizer",
    category: "CTF",
  },
];

export function CompetitionsSection() {
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
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div
            className={`transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              08 — Competitions
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Awards & recognition
            </h2>
          </div>
          <div
            className={`flex items-end transition-all duration-700 delay-100 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <p className="text-muted-foreground max-w-md">
              Competitive achievements demonstrating excellence in engineering,
              research, and innovation.
            </p>
          </div>
        </div>

        {/* Competitions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {competitions.map((comp, index) => (
            <div
              key={comp.id}
              className={`group bg-background border border-border p-6 transition-all duration-700 hover:border-secondary ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Badge
                  variant="secondary"
                  className="text-xs uppercase tracking-wider"
                >
                  {comp.category}
                </Badge>
                <span className="text-xs text-muted-foreground font-mono">
                  {comp.year}
                </span>
              </div>
              <h3 className="font-serif text-lg mb-3 group-hover:text-muted-foreground transition-colors">
                {comp.name}
              </h3>
              <div className="flex items-center gap-2 text-secondary">
                <Trophy className="h-4 w-4" />
                <span className="text-sm font-medium">{comp.achievement}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
