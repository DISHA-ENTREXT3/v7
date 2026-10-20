import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Reframe Studios" },
      {
        name: "description",
        content: "Private-market content services spanning partner-led storytelling, portfolio narratives, video, and executive positioning.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Partner-led content",
    description:
      "Thought leadership built from how your partners already think, speak and lead in the market.",
  },
  {
    title: "Portfolio storytelling",
    description:
      "Narratives that turn company milestones, operating changes and founder progress into meaningful stories.",
  },
  {
    title: "Content repurposing",
    description:
      "Long-form conversations transformed into a system of clips, insights and recurring market content.",
  },
  {
    title: "Video & YouTube",
    description:
      "Interview-led films, short-form videos and high-retention distribution designed for attention and memory.",
  },
  {
    title: "Executive positioning",
    description:
      "Clear, recognizable voice development for leaders who need stronger narrative presence without noise.",
  },
];

function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container section">
        <div className="section-top reveal-init">
          <span className="eyebrow">Services</span>
          <span className="section-note">Built for private markets.</span>
        </div>

        <div className="section-heading-row reveal-init">
          <h2>
            Content systems for
            <br />
            <em>private-market leaders.</em>
          </h2>
          <p>
            We shape existing expertise into media that feels precise, credible and commercially relevant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {services.map((service, index) => (
            <div key={service.title} className="border border-border bg-card p-6 reveal-init">
              <span className="eyebrow">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-editorial">{service.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 reveal-init">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Engagement model</p>
          <h3 className="mt-4 text-4xl font-editorial">Focused packages, designed around the clarity of your story.</h3>
        </div>

        <div className="mt-10 flex justify-center reveal-init">
          <Button asChild className="final-cta-btn">
            <Link to="/contact">
              Discuss a package <ArrowUpRight className="ml-1" size={17} />
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
