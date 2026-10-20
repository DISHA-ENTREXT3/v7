import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Reframe Studios" },
      {
        name: "description",
        content: "Reframe Studios is a content and storytelling studio built around private markets and premium narrative clarity.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="container section">
        <div className="section-top reveal-init">
          <span className="eyebrow">About</span>
          <span className="section-note">A studio built for private markets.</span>
        </div>

        <div className="two-column reveal-init">
          <div>
            <h2>
              A content studio.
              <br />
              <em>An investor’s lens.</em>
            </h2>
          </div>
          <div className="section-copy">
            <p>
              Reframe Studios exists to help private-market firms communicate with greater clarity, consistency and commercial intention.
            </p>
            <p className="muted">
              We work with investment teams to uncover the thinking, stories and conversations already inside the business, then turn them into premium content that people want to engage with.
            </p>
            <p className="font-medium text-foreground">
              Our focus is simple: make strong thinking easier to see, understand and remember.
            </p>
          </div>
        </div>

        <div className="mt-14 flex justify-center reveal-init">
          <Button asChild className="final-cta-btn">
            <Link to="/contact">
              Get to know Reframe <ArrowUpRight className="ml-1" size={17} />
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
