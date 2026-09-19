import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/landing/logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper/90 backdrop-blur-md transition-[box-shadow,border-color] duration-200",
        scrolled ? "border-border shadow-card" : "border-border/80",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <BrandLockup />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors duration-150 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild>
            <a href="#contact">Get Started</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full text-ink ring-1 ring-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "border-t border-border bg-paper lg:hidden",
          "transition-[opacity,transform] duration-200 ease-out",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none hidden opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-ivory"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Get Started
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
