import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Grid Studio" },
      { name: "description", content: "Web development, UI/UX, brand identity, social design, landing pages, and e-commerce solutions built to scale." },
      { property: "og:title", content: "Services — Grid Studio" },
      { property: "og:description", content: "Precision expertise across web, design, brand, and commerce." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="What We Do"
            title="Services engineered for outcomes."
            description="From the first wireframe to deployment day, every service we offer is designed to compound into measurable growth for your business."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ServicesGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
