"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SpiderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function SpiderButton({
  children,
  className,
  ...props
}: SpiderButtonProps) {
  return (
    <div className="button-wrapper">
      <button className={cn("spiderverse-button", className)} {...props}>
        {children}
        <div className="glitch-layers">
          <div className="glitch-layer layer-1">{children}</div>
          <div className="glitch-layer layer-2">{children}</div>
        </div>
        <div className="noise" />
        <div className="glitch-slice" />
      </button>
    </div>
  );
}
