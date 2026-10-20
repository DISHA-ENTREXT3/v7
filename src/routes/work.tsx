import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected work — Reframe Studios" },
      {
        name: "description",
        content: "Illustrative work examples for partner-led content, portfolio storytelling and premium video production.",
      },
    ],
  }),
  component: WorkPage,
});

const highlights = [
  {
    title: "Behind every investment is a conviction.",
    tag: "Partner-led content",
  },
  {
    title: "The story behind the numbers.",
    tag: "Portfolio storytelling",
  },
  {
    title: "From a panel to a repeatable content engine.",
    tag: "Video & distribution",
  },
];

function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main className="container section">
        <div className="section-top reveal-init">
          <span className="eyebrow">Work</span>
          <span className="section-note">Selected story concepts.</span>
        </div>

        <div className="section-heading-row reveal-init">
          <h2>
            The strongest stories are often already in the room.
            <br />
            <em>We just make them clearer.</em>
          </h2>
          <p>
            Reframe helps private-market firms find the story that deserves to travel publicly, repeatedly and with meaning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {highlights.map((item) => (
            <div key={item.title} className="border border-border bg-card p-6 reveal-init">
              <span className="eyebrow">{item.tag}</span>
              <h3 className="mt-4 text-2xl font-editorial">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10 reveal-init">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Confidentiality</p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            We work with confidentiality first. Client examples may be discussed privately under NDA and tailored to the relevant market context.
          </p>
        </div>

        <div className="mt-10 flex justify-center reveal-init">
          <Button asChild className="final-cta-btn">
            <Link to="/contact">
              Talk about a project <ArrowUpRight className="ml-1" size={17} />
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
