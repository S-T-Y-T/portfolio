"use client";

import { useState, useEffect } from "react";
import "./transition.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // Для плавного исчезновения
  const [targetSection, setTargetSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (isTransitioning || isExiting) return;

    setTargetSection(href);
    setIsTransitioning(true);
  };

  const handleAnimationEnd = () => {
    if (targetSection) {
      const target = document.querySelector(targetSection);
      if (target) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Вместо мгновенного удаления, включаем фазу "выхода"
    setIsExiting(true);
    
    // Даем время на плавное исчезновение оверлея (0.5с в CSS)
    setTimeout(() => {
      setIsTransitioning(false);
      setIsExiting(false);
      setTargetSection(null);
      setMobileMenuOpen(false);
    }, 500); 
  };

  return (
    <>
      {/* ===== Transition Overlay ===== */}
      {isTransitioning && (
        <div className={`transition-overlay ${isExiting ? "exit-active" : ""}`}>
          <div className="transition-content">
            <div className="button-loader">
              <span className="actual-text">&nbsp;Donate me pls:=)&nbsp;</span>
              <span aria-hidden="true" className="hover-text">
                &nbsp;Donate me pls:=)&nbsp;
              </span>
            </div>

            <div className="bar">
              <div className="ball" onAnimationEnd={handleAnimationEnd}></div>
            </div>
          </div>
        </div>
      )}

      {/* ===== Header ===== */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-sm py-4" : "py-6"}`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="#about" onClick={(e) => handleNavigation(e, "#about")} className="text-xl font-serif italic tracking-tight">
            Seitali Muratov's Portfolio
          </a>

          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex flex-col gap-1.5 w-6">
            <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 top-16 bg-background transition-all duration-500 ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${index * 100}ms` }} className={`transition-all ${mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                <a href={link.href} onClick={(e) => handleNavigation(e, link.href)} className="text-3xl font-serif italic">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}