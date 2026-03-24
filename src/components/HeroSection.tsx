"use client";

import { useEffect, useState } from "react";
import { SpiderButton } from "@/components/ui/spider-button";
import { GhostAnimation } from "@/components/ui/GhostAnimation";
import { PacmanLoader } from "@/components/ui/PacmanLoader";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const CV_URL =
    "https://drive.google.com/uc?export=download&id=1doiJFvNHN0iuw1Fb9naKvhFas7LsFPdA";

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 pt-24 overflow-hidden">
      
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0" />

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto w-full relative z-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN */}
        <div>
          <div
            className={`mb-6 transition-all duration-700 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Digital economist / Programmer / Researcher / Designer
            </span>
          </div>

          {/* MAIN HERO TITLE */}
	<h1
	  className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-8"
	>
	  <span
	    className={`block transition-all duration-700 ${
	      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
	    }`}
	  >
	    Building the
	  </span>
	
	  <span
	    className={`block italic text-muted-foreground transition-all duration-700 delay-150 ${
	      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
	    }`}
	  >
	    future
	  </span>

	  <span
	    className={`block transition-all duration-700 delay-300 ${
	      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
	    }`}
	  >
			through code
		</span>
	</h1>

          <p
            className={`max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transforming complex challenges into elegant solutions through
            innovation, engineering excellence, and research-driven design.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SpiderButton size="sm" onClick={scrollToPortfolio}>
              View Portfolio
            </SpiderButton>

            <SpiderButton
              size="sm"
              onClick={() => window.open(CV_URL, "_blank")}
            >
              Download CV
            </SpiderButton>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className={`flex items-center justify-center lg:justify-end gap-16 transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="relative w-[180px] h-[180px] flex items-end justify-center">
            <PacmanLoader />
          </div>

          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            <GhostAnimation />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 z-20 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
