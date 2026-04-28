import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Grid Studio" },
      { name: "description", content: "Start a project with Grid Studio. Tell us about your goals and we'll respond within one business day." },
      { property: "og:title", content: "Contact Grid Studio" },
      { property: "og:description", content: "Tell us about your project — we'll respond within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-gradient-to-b from-primary-light to-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Let's Talk"
          title="Start your next project."
          description="Tell us about your goals — we'll get back within one business day with next steps."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-card)]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" placeholder="Jane Cooper" />
              <Field label="Email Address" type="email" placeholder="jane@company.com" />
              <Field label="Company" placeholder="Acme Inc." />
              <Field label="Budget" placeholder="$10k – $25k" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-widest text-text-primary">Project Details</label>
              <textarea
                rows={5}
                placeholder="Tell us a little about what you're building..."
                className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark"
            >
              Send Inquiry
            </button>
          </form>

          <div className="lg:col-span-2 space-y-6">
            <ContactCard icon={Mail} title="Email" value="agnitramandal@gmail.com" />
            <ContactCard icon={Phone} title="Phone" value="9330069381" />
            <ContactCard icon={MapPin} title="Office" value="Brooklyn, NY · Remote-first" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-widest text-text-primary">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 h-11 w-full rounded-lg border border-border bg-background px-4 text-sm text-text-primary placeholder:text-text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, title, value }: { icon: typeof Mail; title: string; value: string }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-light text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-text-secondary">{title}</p>
        <p className="mt-1 text-sm font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );
}
