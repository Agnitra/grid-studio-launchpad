import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1), transparent 40%)" }} />
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold !text-primary-foreground md:text-5xl"
        >
          Ready to build your next{" "}
          <span className="text-primary-light/80">masterpiece?</span>
        </motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-base text-primary-foreground/80">
          Join 200+ companies that have scaled their digital presence with Grid Studio's precision engineering.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-background px-8 text-sm font-semibold text-primary-dark shadow-lg transition-transform hover:scale-[1.02]"
          >
            Start Your Project Today
          </Link>
          <div className="text-left">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/60">Direct Contact</p>
            <p className="text-sm text-primary-foreground">agnitramandal@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
