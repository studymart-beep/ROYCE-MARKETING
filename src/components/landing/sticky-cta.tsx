import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 480);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-paper/95 p-3 shadow-float backdrop-blur-md transition-transform duration-200 md:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Button asChild size="sm" className="flex-1">
          <Link to="/book-call">Book Call</Link>
        </Button>
        <Button asChild variant="secondary" size="sm" className="flex-1">
          <Link to="/free-audit">Free Audit</Link>
        </Button>
      </div>
    </div>
  );
}
