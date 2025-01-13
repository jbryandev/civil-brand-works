"use client";

import * as React from "react";

import { cn } from "@/utilities/ui";

interface PatternBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number | string;
  lineColor?: string;
}

export function PatternBackground({
  width = "100%",
  height = "100%",
  lineColor = "currentColor",
  strokeWidth = 2,
  className,
  style,
  ...props
}: PatternBackgroundProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{
        width,
        height,
        ...style,
      }}
      {...props}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <pattern
            id="diagonalLines"
            width="12"
            height="12"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-1.5,1.5 l3,-3
                 M0,12 l12,-12
                 M10.5,13.5 l3,-3"
              stroke={lineColor}
              strokeWidth={strokeWidth}
              strokeLinecap="square"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
  );
}
