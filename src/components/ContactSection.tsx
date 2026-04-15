"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./contact-cards.module.css";

export function ContactSection() {
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-6 lg:px-12 bg-foreground text-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-16">
        
        <div className="w-full relative z-10">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-background/60 block mb-4">
              10 — Contact
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl max-w-4xl leading-tight">
              Let’s build something meaningful.
              <br />
              <span className="italic text-secondary">
                Connect with me.
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className={styles.main}>
              <div className={styles.row}>
                {/* GitHub */}
                <a
                  href="https://github.com/S-T-Y-T"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className={`${styles.card} ${styles.cardGithub}`}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="black">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.56v-2.02c-3.2.7-3.88-1.54-3.88-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.72 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18A10.96 10.96 0 0112 6.8c.98 0 1.97.13 2.9.38 2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.27 5.7.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.79.56A10.99 10.99 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/STLdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className={`${styles.card} ${styles.cardTelegram}`}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#0088cc">
                    <path d="M9.04 15.47l-.38 4.29c.55 0 .79-.24 1.08-.52l2.6-2.47 5.39 3.95c.99.55 1.69.26 1.94-.92l3.52-16.49c.33-1.53-.55-2.13-1.51-1.77L1.22 9.36C-.28 9.94-.26 10.8.96 11.18l5.77 1.8L19.72 4.9c.6-.37 1.15-.17.7.23" />
                  </svg>
                </a>
              </div>

              <div className={styles.row}>
                {/* Email */}
                <a
                  href="mailto:seitalimuratov@gmail.com"
                  aria-label="Email"
                  className={`${styles.card} ${styles.cardEmail}`}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#ea4335">
                    <path d="M12 13.5L0 6V18h24V6L12 13.5zM12 10.5L24 3H0l12 7.5z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/styt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className={`${styles.card} ${styles.cardLinkedin}`}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="#0a66c2">
                    <path d="M4.98 3.5C4.98 5 3.86 6 2.49 6 1.12 6 0 5 0 3.5 0 2 1.12 1 2.49 1 3.86 1 4.98 2 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 4 0 4.7 2.6 4.7 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}