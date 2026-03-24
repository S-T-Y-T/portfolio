"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  category: string;
  image: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Qalqon AI",
    description:
      "An intelligent ecosystem that utilizes computer vision to identify students and staff in real-time. The platform enhances university security by automating access control and providing seamless attendance tracking through facial recognition.",
    role: "AI Engineer",
    technologies: ["Python", "AI/ML", "Computer Vision"],
    category: "Development",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSprp_9X6eoyG8EmMFLudne9c8snJXVNqfg9Q&s",
    featured: true,
  },
  {
    id: "2",
    title: "VoiceSlide",
    description:
      "An innovative tool designed to provide a hands-free presentation experience. By leveraging speech recognition, the application allows presenters to navigate slides, trigger animations, and manage multimedia through intuitive voice commands, ensuring a natural and engaging flow.",
    role: "Founder",
    technologies: ["Python", "NLP", "AI/ML"],
    category: "Development",
    image:
      "https://startupbase.uz//media/logos/ChatGPT_Image_2_%D0%BE%D0%BA%D1%82._2025_%D0%B3._17_06_21.png",
    featured: true,
  },
  {
    id: "3",
    title: "SmartExam",
    description:
      "A comprehensive examination ecosystem that ensures academic integrity through AI-driven surveillance. The platform monitors student behavior in real-time to prevent cheating and utilizes advanced Large Language Models (LLMs) to automatically grade open-ended answers with high consistency and speed.",
    role: "Founder",
    technologies: ["Python", "NLP", "AI/ML"],
    category: "Development",
    image:
      "https://startupbase.uz//media/logos/logo_GanI41F.png",
  },
  {
    id: "4",
    title: "Unisport",
    description:
      "Complete visual identity and design system for a fintech startup, from logo to UI components.",
    role: "Cofounder",
    technologies: ["Python", "React", "AI/ML"],
    category: "Development",
    image:
      "https://play-lh.googleusercontent.com/ILW8b5QyXvBZgL1RN7mQ16HGfV2MMtXm2WwFVB5mMl08lJG0LUmKD0EoyiO-IOaCQPaQGqkb47vGvZh4Jh8cJQ=w240-h480-rw",
  },
  {
    id: "5",
    title: "EduVR",
    description:
      "EduVR is an innovative startup in the field of EdTech, offering a VR platform for interactive learning and training. With the help of EduVR, students, teachers, and companies can create and use realistic learning simulations in virtual reality. The system monitors progress, adapts tasks to user level, and supports collaborative work. EduVR reduces the cost of traditional learning and increases the effectiveness of knowledge acquisition by creating a new standard in the education industry.",
    role: "Founder",
    technologies: ["Python", "Unity", "AI/ML"],
    category: "Development",
    image:
      "https://startupbase.uz//media/logos/ChatGPT_Image_2_%D0%BE%D0%BA%D1%82._2025_%D0%B3._17_30_57.png",
  },
  {
    id: "6",
    title: "GreenBox",
    description:
      "GreenBox is an innovative startup in the field of environmental technologies. Our smart container system uses computer vision and AI to automatically recognize and sort waste in offices, schools, and business centers. Each container is equipped with an IoT module that sends data on the amount and type of waste to the company's personal account, helping to maintain records and reporting. GreenBox makes waste sorting simple, automated, and efficient, contributing to the formation of a sustainable company image and a real reduction in the environmental burden.",
    role: "Founder",
    technologies: ["Python", "Computer Vision", "AI/ML"],
    category: "Development",
    image:
      "https://startupbase.uz//media/logos/ChatGPT_Image_2_%D0%BE%D0%BA%D1%82._2025_%D0%B3._17_24_22.png",
  }
];

export function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div
            className={`transition-all duration-700 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              03 — Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              Selected projects
            </h2>
          </div>
          <p
            className={`max-w-md text-muted-foreground mt-6 lg:mt-0 transition-all duration-700 delay-100 ${isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
              }`}
          >
            A curated collection of work spanning engineering, research, and
            design across various industries and domains.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
                } ${project.featured ? "md:col-span-1" : ""}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden mb-6">
                <div className="absolute inset-0 bg-foreground/5" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* View button */}
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-background text-sm uppercase tracking-wider">
                    View Project
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-background" />
                </div>
                {/* Category badge */}
                <Badge className="absolute top-6 left-6 bg-background/90 text-foreground hover:bg-background text-xs uppercase tracking-wider">
                  {project.category}
                </Badge>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-2xl mb-2 group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-muted-foreground border border-border px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground border border-border px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View all link */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors arrow-link"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
