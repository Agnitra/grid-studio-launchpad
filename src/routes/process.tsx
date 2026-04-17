import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Grid Studio" },
      { name: "description", content: "A five-stage engineering process: Discover, Define, Design, Develop, Launch." },
      { property: "og:title", content: "Our Engineering Process — Grid Studio" },
      { property: "og:description", content: "Discover, Define, Design, Develop, Launch." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="How We Work"
            title="A process built on precision."
            description="Our five-stage system removes ambiguity from every engagement — so your project stays predictable, transparent, and on schedule."
            align="center"
          />
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <ProcessTimeline />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
