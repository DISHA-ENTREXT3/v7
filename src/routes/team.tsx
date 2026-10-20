import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Reframe Studios" },
      {
        name: "description",
        content: "Meet the leadership behind Reframe Studios and the commercial, editorial and production expertise driving the studio.",
      },
    ],
  }),
  component: TeamPage,
});

const teamMembers = [
  {
    name: "Vrushali Hirpara",
    role: "Growth & Partnerships",
    bio: "Vrushali brings strategic growth, market development and commercial partnership thinking to the studio, helping private-market businesses identify stronger opportunities for visibility and momentum.",
  },
  {
    name: "Derrick",
    role: "Editorial Strategy",
    bio: "Derrick leads narrative architecture and executive interview strategy, translating complex investment thinking into premium editorial stories with clarity and authority.",
  },
  {
    name: "Manthan",
    role: "Creative Systems & Distribution",
    bio: "Manthan connects visual craft, production workflows and channel strategy so every strong idea can be packaged, distributed and remembered across platforms.",
  },
];

function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="container section">
        <div className="section-top reveal-init">
          <span className="eyebrow">Team</span>
          <span className="section-note">The people behind Reframe.</span>
        </div>

        <div className="section-heading-row reveal-init">
          <h2>
            Commercial thinking.
            <br />
            <em>Editorial craft.</em>
          </h2>
          <p>
            Reframe combines business understanding, premium storytelling and strategic distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-card reveal-init">
              <div className="team-card-header">
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
              </div>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center reveal-init">
          <Button asChild className="final-cta-btn">
            <Link to="/contact">
              Work with the studio <ArrowUpRight className="ml-1" size={17} />
            </Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
