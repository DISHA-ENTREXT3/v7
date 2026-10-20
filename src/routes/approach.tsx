import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "Our approach — Reframe Studios" },
      {
        name: "description",
        content: "How Reframe Studios turns partner conversations, portfolio stories, and market insight into premium content systems.",
      },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  const steps = [
    {
      title: "Listen for the signal",
      copy:
        "We start with the thinking already inside the firm: market views, partner conversations, founder relationships and portfolio milestones.",
    },
    {
      title: "Turn insight into narrative",
      copy:
        "We shape raw material into a clear point of view, story arc and editorial rhythm that feels precise instead of generic.",
    },
    {
      title: "Build a durable content system",
      copy:
        "The best idea should not live in a single deck or single clip. We translate it across formats so it compounds over time.",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="container section">
        <div className="section-top reveal-init">
          <span className="eyebrow">Approach</span>
          <span className="section-note">Same source. A stronger story.</span>
        </div>

        <div className="section-heading-row reveal-init">
          <h2>
            We start with the thinking that already matters.
            <br />
            <em>Then we make it travel.</em>
          </h2>
          <p>
            Reframe works at the intersection of strategy, editorial craft and multi-format distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {steps.map((step, index) => (
            <div key={step.title} className="border border-border bg-card p-6 reveal-init">
              <span className="eyebrow">0{index + 1}</span>
              <h3 className="mt-4 text-2xl font-editorial">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{step.copy}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 reveal-init">
          <div className="two-column">
            <div>
              <span className="eyebrow">What this creates</span>
              <h3 className="mt-4 text-4xl font-editorial">Content that feels deliberate, premium and memorable.</h3>
            </div>
            <div className="section-copy">
              <p>
                We are not interested in publications without purpose. The work is designed to increase visibility,
                strengthen founder trust and sharpen how a firm is remembered in the market.
              </p>
              <p className="muted">
                Our system is built around the people and decisions already shaping the business, not generic social output.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center reveal-init">
          <Button asChild className="final-cta-btn">
            <Link to="/contact">
              Start a conversation <ArrowUpRight className="ml-1" size={17} />
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
