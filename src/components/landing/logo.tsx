import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 40"
      className={cn("h-9 w-auto shrink-0", className)}
      aria-hidden="true"
    >
      <rect width="52" height="40" rx="11" className="fill-primary" />
      <path
        className="fill-paper"
        d="M8.4 9.2h8.1c3.2 0 5.3 2 5.3 4.9 0 2.15-1.2 3.85-3.15 4.6L22.6 29H18.2l-3.5-5.4h-2.8V29H8.4V9.2Zm3.75 2.75v4.45h4.15c1.4 0 2.3-.95 2.3-2.25 0-1.28-.9-2.2-2.3-2.2h-4.15Z"
      />
      <path
        className="fill-paper"
        d="M27.3 29V9.2h3.05l3.25 9.15 3.25-9.15h3.05V29h-2.85V15.4L33.7 24.4h-2.5l-3.05-9V29H27.3Z"
      />
      <rect x="14" y="32.6" width="24" height="2" rx="1" className="fill-accent" />
    </svg>
  );
}

export function BrandLockup({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <a
      href="#home"
      className={cn("flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40", className)}
    >
      <LogoMark className={compact ? "size-8" : "size-9"} />
      <span
        className={cn(
          "font-semibold tracking-tight text-ink",
          compact ? "text-sm" : "text-sm md:text-base",
        )}
      >
        {SITE.name}
      </span>
    </a>
  );
}
