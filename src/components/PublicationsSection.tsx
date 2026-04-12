"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface Publication {
  id: string;
  title: string;
  journal: string;
  year: number;
  authors: string;
  doi?: string;
}

const publications: Publication[] = [
  {
    id: "1",
    title:
      "Improving the Methodology for Increasing the Efficiency of Innovative and Investment Activities of Sports Equipment Manufacturing Enterprises",
    journal: "Proceedings of the International Scientific and Practical Conference on “Social Work and Modernity: Theory and Practice”",
    year: 2025,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/17IhJFeWrADIIp-j-j-nNfXrk9xeAu7U7/view?usp=sharing",
  },
  {
    id: "2",
    title:
      "Problems of organizing independent work when learning foreign languages (using the examples of the russian languages)",
    journal: "International Scientific and Practical Conference on Achieving Long-Term Sustainable Economic Growth through Human Capital and Technological Innovation Development, Solutions to Climate Problems, and Resource Efficiency",
    year: 2024,
    authors: "S.Muratov, M.Parpiyeva",
    doi: "https://drive.google.com/file/d/1nfkGfExuM06EIAqeVgmWgzJ9gLn2O5ME/view?usp=sharing",
  },
  {
    id: "3",
    title:
      "Issues relating to the country’s economic development based on innovation and the green economy.",
    journal: "An international scientific and practical conference on the theme of “Achieving Long-Term Sustainable Economic Growth through the Development of Human Capital and Technological Innovation, Solutions to Climate Problems, and Resource Efficiency”",
    year: 2024,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/1hfJXBdoJrjMStrwN3rgCSme3Bfz5F6LE/view?usp=sharing",
  },
  {
    id: "4",
    title: "The development of AI technologies in the healthcare sector",
    journal: "International Scientific and Practical Conference on the Use of Modern Marketing and Sales Concepts in the Implementation of the “Uzbekistan – 2030” Strategy",
    year: 2024,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/1750Ci73M-pp2f_Tuqt1nDYiy4RwynWRD/view?usp=sharing",
  },
  {
    id: "5",
    title:
      "Integration of Innovative Teaching Technologies in Education",
    journal: "The Role of the Social Work Profession in Improving Family, School and Community Partnership in General Education Schools International Scientific and Practical Conference on the theme: ‘The Role of the Social Work Profession in Improving Family, School and Community Partnership in General Education Schools’ (Dedicated to the memory of Professor Farhodjon Turg'unboyev, Doctor of Philosophical Sciences)",
    year: 2024,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/1fDsKY8nsaUyav-i5DQkJyOx_faCJmCFv/view?usp=sharing",
  },
  {
    id: "6",
    title:
      "Smart education: how AI and machine learning are transforming the management of education systems",
    journal: "INTERNATIONAL SCIENTIFIC AND TECHNICAL CONFERENCE ON “ADVANCED INTERNATIONAL EXPERIENCE IN IMPROVING THE EDUCATION SYSTEM”",
    year: 2024,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/1cZDueJjwjjphzarLjH3kcMNJ_km8zn2W/view?usp=sharing",
  },
  {
    id: "7",
    title:
      "From chalk to code: how leading countries are transforming education into a digital era",
    journal: "INTERNATIONAL SCIENTIFIC AND TECHNICAL CONFERENCE ON “ADVANCED INTERNATIONAL EXPERIENCE IN IMPROVING THE EDUCATION SYSTEM”",
    year: 2024,
    authors: "S.Muratov, I.Xamraqulov",
    doi: "https://drive.google.com/file/d/1LbUxppayGT1-LmZ8Ie5EVDcINlRVeI9f/view?usp=sharing",
  },
  {
    id: "8",
    title:
      "Rebooting the economy: key reforms in the era of digital transformation of industries and regions",
    journal: "SCIENCE AND INNOVATION",
    year: 2024,
    authors: "S.Muratov, D.Jumaboyev",
    doi: "https://drive.google.com/file/d/14t8GQAd-TxPKRSGAX9lis7d2_D9FbYkE/view?usp=sharing",
  },
  {
    id: "9",
    title:
      "Higher Education in the Digital Economy",
    journal: "International Scientific and Technical Conference on ‘The Role of Modern Information Technologies in the Development of Science and Technology’",
    year: 2023,
    authors: "S.Muratov, M.Parpiyeva",
    doi: "https://drive.google.com/file/d/1f95X45hwsWJce-VmthVoLsT_6pUX8dKO/view?usp=sharing",
  },
];

export function PublicationsSection() {
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
    <section
      id="publications"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground block mb-4">
            04 — Publications
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
            Research & writings
          </h2>
        </div>

        {/* Publications list */}
        <div className="space-y-0 divide-y divide-border">
          {publications.map((pub, index) => (
            <article
              key={pub.id}
              className={`group py-8 lg:py-10 transition-all duration-700 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${100 + index * 100}ms` }}
            >
              <a
                href={pub.doi ? `${pub.doi}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-start"
              >
                {/* Year */}
                <div className="lg:col-span-1">
                  <span className="text-sm text-muted-foreground font-mono">
                    {pub.year}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-9">
                  <h3 className="font-serif text-xl lg:text-2xl mb-2 group-hover:text-muted-foreground transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    <span className="italic">{pub.journal}</span>
                    <span className="mx-2">—</span>
                    <span>{pub.authors}</span>
                  </p>
                </div>

                {/* Arrow */}
                <div className="lg:col-span-2 flex justify-end">
                  <span className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">
                    Read
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
