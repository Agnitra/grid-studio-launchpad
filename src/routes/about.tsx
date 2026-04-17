import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Grid Studio" },
      { name: "description", content: "Grid Studio is a digital agency engineering clarity, speed, and growth for ambitious teams." },
      { property: "og:title", content: "About Grid Studio" },
      { property: "og:description", content: "Engineering clarity, speed, and growth for ambitious teams." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "200+", label: "Companies scaled" },
  { value: "12", label: "Industry awards" },
  { value: "98%", label: "Client retention" },
  { value: "24/7", label: "Engineering support" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="About Grid Studio"
            title="Engineers, designers, and strategists building what's next."
            description="We are a focused team obsessed with the intersection of craft and outcomes. Every line of code, every pixel, and every decision is made with one goal: compounding growth for the brands we partner with."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)]">
              <p className="text-4xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
