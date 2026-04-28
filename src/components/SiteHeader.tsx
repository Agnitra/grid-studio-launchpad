import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight text-text-primary">
          <img src={logo} alt="Grid Studio logo" className="h-8 w-8 rounded-md object-contain" />
          Grid Studio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)]"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-text-secondary hover:bg-primary-light hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
