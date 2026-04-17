import { Search, FileEdit, Palette, Code, Rocket, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
}

const steps: Step[] = [
  { icon: Search, title: "Discover", description: "Deep dive into your business goals and market needs.", number: "01" },
  { icon: FileEdit, title: "Define", description: "Structuring the roadmap and project architecture.", number: "02" },
  { icon: Palette, title: "Design", description: "Crafting the visual identity and user experience.", number: "03" },
  { icon: Code, title: "Develop", description: "Precision coding and technical implementation.", number: "04" },
  { icon: Rocket, title: "Launch", description: "Final quality assurance and public deployment.", number: "05" },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
      <div className="grid gap-10 md:grid-cols-5 md:gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative">
              <div className={`grid h-14 w-14 place-items-center rounded-xl shadow-md ${i === 0 ? "bg-primary text-primary-foreground" : "bg-card border border-border text-primary"}`}>
                <step.icon className="h-5 w-5" />
              </div>
              <span className="absolute -bottom-2 -right-2 grid h-6 w-6 place-items-center rounded-md bg-primary-dark text-[10px] font-bold text-primary-foreground">
                {step.number}
              </span>
            </div>
            <h3 className="mt-6 text-base font-semibold">{step.title}</h3>
            <p className="mt-2 max-w-[160px] text-xs leading-relaxed text-text-secondary">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
