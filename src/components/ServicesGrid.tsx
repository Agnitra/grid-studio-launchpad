import { Code2, Layers, Sparkles, Megaphone, LayoutTemplate, ShoppingCart, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  { icon: Code2, title: "Web Development", description: "High-performance, secure, and scalable web applications built with the latest modern frameworks." },
  { icon: Layers, title: "UI/UX Design", description: "User-centric interfaces that prioritize conversion while maintaining high aesthetic standards." },
  { icon: Sparkles, title: "Brand Identity", description: "Developing cohesive visual languages that communicate your brand values across every touchpoint." },
  { icon: Megaphone, title: "Social Media Design", description: "Strategic visual content tailored for social platforms to drive engagement and brand awareness." },
  { icon: LayoutTemplate, title: "Landing Page Design", description: "Conversion-optimized landing pages designed to capture leads and maximize your ROI." },
  { icon: ShoppingCart, title: "E-commerce Solutions", description: "Robust online storefronts built to scale your business and simplify your customers' journey." },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, i) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: "easeOut" }}
          className="group rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
        >
          <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-xl bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <service.icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
