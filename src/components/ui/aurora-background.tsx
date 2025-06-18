"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "transition-bg relative flex h-[100vh] flex-col items-center justify-center bg-[#0f172a] text-white overflow-hidden",
          className
        )}
        {...props}
      >
        {/* Animated background layer */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(130deg,#3b82f6 0%,#38bdf8 10%,#6366f1 20%,#7c3aed 30%,#a78bfa 40%,#e0f2fe 50%)",
              "--dark-gradient":
                "repeating-linear-gradient(130deg,#0f172a 0%,#1e293b 10%,transparent 20%,#0f172a 30%)",
              "--white-gradient":
                "repeating-linear-gradient(130deg,#e0f2fe 0%,#f8fafc 10%,transparent 20%,#e0f2fe 30%)",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `pointer-events-none absolute -inset-[20px] 
              bg-[length:400%_300%] 
              bg-[position:0%_50%] 
              animate-auroraMotion
              [background-image:var(--white-gradient),var(--aurora)] 
              opacity-[0.4] blur-[80px] filter mix-blend-lighten will-change-transform 
              after:absolute after:inset-0 
              after:animate-auroraMotion
              after:[background-image:var(--white-gradient),var(--aurora)] 
              after:bg-[length:300%_200%] 
              after:bg-[position:0%_50%] 
              after:mix-blend-difference after:content-[""] 
              dark:[background-image:var(--dark-gradient),var(--aurora)] 
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_top_right, black 10%, transparent 70%)]`
            )}
          ></div>
        </div>

        {/* Foreground content */}
        <div className="z-10 text-center px-6">{children}</div>
      </div>

      {/* Keyframes & animation class (can be global or injected locally via Tailwind plugin) */}
      <style jsx global>{`
        @keyframes auroraMotion {
          0% {
            background-position: 0% 40%;
          }
          50% {
            background-position: 70% 30%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-auroraMotion {
          animation: auroraMotion 20s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};
