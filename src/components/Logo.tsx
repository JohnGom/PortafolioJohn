import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-8", className)}
      aria-label="John Gomez logo"
    >
      <defs>
        <linearGradient id="logo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(160 20% 5%)" />
          <stop offset="100%" stopColor="hsl(160 20% 10%)" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#logo-bg)" />
      <path
        d="M32 32 L18 50 L32 68"
        stroke="hsl(150 60% 59%)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M68 32 L82 50 L68 68"
        stroke="hsl(150 60% 59%)"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 75 L55 25"
        stroke="hsl(150 60% 59%)"
        strokeWidth="7"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
