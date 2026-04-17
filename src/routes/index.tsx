import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grid Studio — We Build Scalable Digital Experiences" },
      { name: "description", content: "Web development and graphic design engineered for clarity, speed, and growth. We transform complex problems into seamless digital solutions." },
      { property: "og:title", content: "Grid Studio — Scalable Digital Experiences" },
      { property: "og:description", content: "Web development and graphic design engineered for clarity, speed, and growth." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-light via-primary-light/40 to-background">
        <div className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(37,99,235,0.12), transparent 50%)" }} />
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary backdrop-blur">
              Digital Agency Elite
            </span>
            <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
              We Build <span className="text-primary">Scalable Digital</span> Experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              Web Development and Graphic Design engineered for clarity, speed, and growth. We transform complex problems into seamless digital solutions.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-glow)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-semibold text-text-primary transition-colors hover:border-primary hover:text-primary"
              >
                View Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-primary-light/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Precision Expertise" />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Our Engineering Process" align="center" />
          <div className="mt-16">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBanner />
    </>
  );
}
