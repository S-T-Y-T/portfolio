"use client";

import React from "react";
import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

interface SpiderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function SpiderButton({
  children,
  className,
  size = "md",
  ...props
}: SpiderButtonProps) {
  return (
    <div className="button-wrapper">
      <button
        className={cn(
          "spiderverse-button",
          sizeStyles[size],
          className
        )}
        {...props}
      >
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
