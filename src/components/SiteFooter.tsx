import { Link } from "@tanstack/react-router";
import { Globe, Share2, AtSign, Mail, Phone, ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-semibold text-text-primary">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-bold">G</span>
              Grid Studio
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              Engineering clarity and growth through precision digital design and development.
            </p>
            <div className="flex items-center gap-3 pt-2 text-text-secondary">
              <a href="#" aria-label="Website" className="rounded-md p-2 hover:bg-primary-light hover:text-primary transition-colors"><Globe className="h-4 w-4" /></a>
              <a href="#" aria-label="Share" className="rounded-md p-2 hover:bg-primary-light hover:text-primary transition-colors"><Share2 className="h-4 w-4" /></a>
              <a href="#" aria-label="Email" className="rounded-md p-2 hover:bg-primary-light hover:text-primary transition-colors"><AtSign className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/services" className="text-text-secondary hover:text-primary">Services</Link></li>
              <li><Link to="/process" className="text-text-secondary hover:text-primary">Process</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-primary">About Us</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-text-secondary"><Mail className="h-4 w-4 text-primary" /> hello@gridstudio.dev</li>
              <li className="flex items-center gap-2 text-text-secondary"><Phone className="h-4 w-4 text-primary" /> +1 (555) 010-2024</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary">Newsletter</h4>
            <p className="mt-4 text-sm text-text-secondary">Get insights on digital growth and design trends.</p>
            <form className="mt-4 flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground hover:bg-primary-dark"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-text-secondary md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Grid Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">LinkedIn</a>
            <a href="#" className="hover:text-primary">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
