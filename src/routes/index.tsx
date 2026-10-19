import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Mic,
  FileText,
  MessageSquare,
  Video,
  Quote,
  Layers,
  Play,
  Plus,
  Minus,
  Check,
  TrendingUp,
  Sparkles,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import conversation from "@/assets/studio-conversation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reframe Studios — Content & storytelling for private markets" },
      {
        name: "description",
        content:
          "Turn your investment thinking, partner expertise and portfolio stories into content that builds visibility, credibility and stronger founder relationships.",
      },
      {
        property: "og:title",
        content: "Reframe Studios — Be the investor founders already know",
      },
      {
        property: "og:description",
        content:
          "Strategic content and storytelling for private-market investors, private equity and venture capital.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* 3 Core Packages */
const packages = [
  {
    badge: "Package 01",
    title: "YouTube Content IP",
    tagline: "Turn partner thinking into signature digital intellectual property.",
    description:
      "Long-form conversations, episodic video formats, and short-form cuts designed around how founders and investors actually consume content. We turn proprietary theses into search-indexed, high-recall video IP.",
    differentiator:
      "Investment thinking & partner expertise: structured interview frameworks that extract authentic conviction without demanding full-time creator hours.",
    formats: ["Signature Series", "Partner Interviews", "Shorts & Reels", "YouTube Optimization"],
  },
  {
    badge: "Package 02",
    title: "Event Content Engine",
    tagline: "Turn 1 stage appearance into 90 days of sustained authority.",
    description:
      "Don’t let your annual LP meeting, conference keynote, or portfolio summit vanish when the lights go down. We capture live presence, isolate the defining moments, and rebuild them for multi-platform distribution.",
    differentiator:
      "Rapid editorial distillation: extracting the non-obvious soundbites, executive quotes, and thematic memos that resonate long after the event ends.",
    formats: ["Keynote Breakdowns", "Stage Soundbites", "Thematic Reels", "Post-Summit Memos"],
  },
  {
    badge: "Package 03",
    title: "Omnichannel Brand Presence",
    tagline: "Substantive market presence across every critical touchpoint.",
    description:
      "A synchronized narrative engine across LinkedIn, video, visual carousels, newsletters, and executive communications. We ensure your partners and portfolio are visible, credible, and top-of-mind between deal cycles.",
    differentiator:
      "Commercial context & portfolio storytelling: content built to strengthen deal flow, LP confidence, and founder relationships, not social vanity metrics.",
    formats: ["LinkedIn Viewpoints", "Data Carousels", "Conviction Memos", "Portfolio Spotlights"],
  },
];

/* Foundational Services */
const services = [
  {
    title: "Partner-led content",
    description:
      "Partner thinking, market views and investment experience into clear points of view.",
    detail:
      "Partner interviews, LinkedIn viewpoints, thought-leadership articles and opinion pieces — shaped around the expertise already inside your firm.",
    icon: MessageSquare,
  },
  {
    title: "Portfolio storytelling",
    description: "People, decisions and operating stories behind portfolio growth.",
    detail:
      "Investment narratives, founder interviews and portfolio stories that explain your conviction, contribution and the people behind the business.",
    icon: FileText,
  },
  {
    title: "Content repurposing",
    description:
      "Finding the strongest ideas inside interviews, podcasts, panels and existing footage and rebuilding them for the right platform.",
    detail:
      "Transform podcasts, panels and partner conversations into short-form video clips, carousels, quote visuals and long-form insights.",
    icon: Layers,
  },
  {
    title: "Video & YouTube",
    description:
      "Long-form conversations, short-form edits and distribution around how people actually consume content.",
    detail:
      "Editorial planning, interview-led films, short-form video and YouTube assets, from the first question to the final edit.",
    icon: Video,
  },
  {
    title: "Executive positioning",
    description:
      "Helping investment professionals build a recognisable voice without turning them into full-time creators.",
    detail:
      "Narrative development, executive viewpoints and an editorial direction that connects your experience with the conversations that matter.",
    icon: Quote,
  },
];

/* The Reframe Way Transformations */
const examples = [
  {
    source: "Portfolio announcement",
    output: "Why we invested",
    beforeDesc: "A standard press release with funding size and participation list.",
    copy: "The market opportunity. The founder’s ambition. The deep conviction behind the decision.",
    tags: ["Deal Thesis", "Founder Story", "Partner Memo"],
  },
  {
    source: "60-minute podcast",
    output: "The 30 seconds worth hearing",
    beforeDesc: "A long, unindexed recording buried inside audio feeds.",
    copy: "The single defining insight, edited into high-impact video and visual quote with instant recall.",
    tags: ["Short-form Video", "LinkedIn Insight", "Executive Clip"],
  },
  {
    source: "Investment thesis",
    output: "A point of view founders remember",
    beforeDesc: "An internal 40-page deck and market overview notes.",
    copy: "A distinctive market perspective that gives founders clarity before the first pitch.",
    tags: ["Executive Viewpoint", "Thematic Analysis", "Founder Reach"],
  },
  {
    source: "Portfolio growth",
    output: "The story behind the numbers",
    beforeDesc: "A quarterly revenue update and percentage slide.",
    copy: "What changed, what the team learned, and what the next chapter makes possible.",
    tags: ["Case Study", "Operating Narrative", "Talent Magnet"],
  },
  {
    source: "Partner interview",
    output: "A repeatable content property",
    beforeDesc: "A one-off casual fireside chat or panel appearance.",
    copy: "A signature episodic format creating sustained market recognition and inbound deal flow.",
    tags: ["YouTube IP", "Multi-clip Engine", "Signature Format"],
  },
];

/* Who We Work With */
const whoWeWorkWith = [
  {
    category: "Private Equity",
    desc: "Long-term value creation stories, operating partner viewpoints, and thesis-driven firm reputation.",
  },
  {
    category: "Growth Equity",
    desc: "Scale-stage founder narratives, category expansion insights, and commercial milestones.",
  },
  {
    category: "Venture Capital",
    desc: "High-conviction early theses, founder magnetism, and distinctive market perspective.",
  },
  {
    category: "Family Offices",
    desc: "Legacy-aligned investment philosophies, generational stewardship, and co-investment visibility.",
  },
  {
    category: "Private-Market Investors",
    desc: "Specialized credit, real assets, and secondary market leaders commanding peer authority.",
  },
];

/* Why Reframe Outcomes */
const outcomes = [
  {
    title: "Authority",
    copy: "Turn proprietary insights, pattern recognition and partner experience into market-shaping influence.",
  },
  {
    title: "Visibility",
    copy: "Stay front of mind across LP and founder networks consistently between transaction cycles.",
  },
  {
    title: "Founder Relationships",
    copy: "Give prospective entrepreneurs clarity on who you are and how you back companies before the first call.",
  },
  {
    title: "Market Recall",
    copy: "Be remembered for distinctive thinking and operating value rather than fund size alone.",
  },
  {
    title: "Inbound Conversations",
    copy: "Generate organic deal inquiries and co-investment dialogue driven by published conviction.",
  },
];

/* Proof / Selected Work from Team */
const teamProof = [
  {
    brand: "Tata Motors",
    tag: "Founder & Business Storytelling",
    desc: "Strategic narrative exploring industrial scale, engineering heritage, and visionary commercial leadership.",
  },
  {
    brand: "MakeMyTrip Foundation",
    tag: "Impact & Transformation Storytelling",
    desc: "Human-centered social impact storytelling capturing grassroots community empowerment and sustainable progress.",
  },
  {
    brand: "BMW",
    tag: "Premium Long-Form Storytelling",
    desc: "Cinematic, craft-led narrative films exploring luxury design philosophy, performance, and electric mobility.",
  },
  {
    brand: "Ford",
    tag: "Brand-Led Film & Narrative",
    desc: "Compelling documentary-style brand narratives connecting automotive innovation, endurance, and customer stories.",
  },
];

/* How We Think Pillars */
const howWeThink = [
  {
    num: "01",
    title: "The 30 seconds worth hearing",
    desc: "Finding the strongest, highest-signal idea inside long-form investor content and elevating it for immediate recall.",
  },
  {
    num: "02",
    title: "Why we invested",
    desc: "Turning a standard portfolio announcement into clear investment reasoning, conviction, and mutual ambition that founders respect.",
  },
  {
    num: "03",
    title: "The story behind the growth",
    desc: "Turning portfolio numbers and financial metrics into compelling human, operating, and decision-making stories.",
  },
  {
    num: "04",
    title: "One thesis. Multiple conversations.",
    desc: "Building repeatable content systems around a firm’s strongest investment thinking to drive sustained market presence.",
  },
];

/* Team Profiles */
const teamMembers = [
  {
    name: "Vrushali Hirpara",
    role: "Secondary Partner | Growth & Partnerships, Reframe Studios",
    bio: [
      "Vrushali works across growth strategy, marketing, sales and client relationships, combining market understanding, digital marketing and commercial thinking to identify opportunities and build stronger business relationships.",
      "Her experience spans marketing strategy, business development, client acquisition, partnerships and market development, giving her a practical understanding of how businesses position themselves, reach the right audience and turn interest into long-term relationships.",
      "At Reframe Studios, she focuses on growth and partnerships within private markets, working across market development, client acquisition, relationship building and content-led growth.",
    ],
  },
  {
    name: "Derrick",
    role: "Content Direction & Editorial Strategy, Reframe Studios",
    bio: [
      "Derrick leads narrative architecture, editorial direction and executive interview strategy across Reframe’s fund mandates. With a background in commercial storytelling, documentary film and executive communications, he specializes in translating complex market hypotheses into compelling editorial properties that resonate with founders and LPs alike.",
      "His focus is identifying the non-obvious human angle within investment theses and ensuring every piece of content reflects the authentic conviction and tone of the firm’s partners.",
      "At Reframe, he works directly with senior investment professionals to design repeatable interview formats and high-retention video content that founders remember.",
    ],
  },
  {
    name: "Manthan",
    role: "Creative Systems & Distribution Architecture, Reframe Studios",
    bio: [
      "Manthan directs creative systems, video production workflows and omnichannel distribution for private-market clients. Combining modern visual aesthetics with platform-native distribution engineering, he oversees the multi-format pipeline that transforms partner conversations into high-recall video IPs, visual carousels, and YouTube engines.",
      "At Reframe, he ensures every piece of thinking is formatted to maximize engagement, retention, and sustained organic discovery across key channels.",
      "His work bridges brand design and technical video execution, guaranteeing that private-market storytelling looks as polished as top-tier editorial media.",
    ],
  },
];

function Index() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const [example, setExample] = useState(0);
  const current = examples[example] ?? examples[0];

  // Initialize subtle editorial scroll reveal animations
  useScrollReveal();

  return (
    <>
      <SiteHeader />
      <main>
        {/* 1. HERO */}
        <section className="hero container">
          <div className="hero-copy reveal-init">
            <div className="eyebrow">
              <span className="status-dot" /> CONTENT & STORYTELLING FOR PRIVATE MARKETS
            </div>
            <h1>
              Be the investor
              <br />
              founders already
              <br />
              <em>know.</em>
              <span className="hero-last">Before the first meeting.</span>
            </h1>
            <p>
              Reframe Studios helps private-market firms turn investment thinking, partner expertise
              and portfolio stories into content that builds visibility, credibility and stronger
              relationships.
            </p>
            <div className="hero-actions">
              <Button variant="editorial" asChild>
                <a href="#approach">
                  See how we Reframe content <ArrowUpRight />
                </a>
              </Button>
              <Link to="/contact" className="text-link">
                Talk to us <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hero-note">
              <span className="mini-line" /> YOUR EXPERTISE. A CLEARER STORY. A WIDER REACH.
            </div>
          </div>
          <div className="hero-visual reveal-init stagger-2">
            <img
              src={conversation}
              width={1536}
              height={1152}
              alt="An editorial scene of a thoughtful investment conversation"
              fetchPriority="high"
            />
            <span className="image-frame top-frame" />
            <span className="image-frame bottom-frame" />
            <div className="photo-caption">
              <span>GOOD STORIES START WITH BETTER CONVERSATIONS.</span>
              <ArrowUpRight size={18} />
            </div>
            <div className="image-tag">
              <span className="status-dot" /> A DIFFERENT PERSPECTIVE.
            </div>
          </div>
        </section>

        {/* AUDIENCE STRIP */}
        <div className="audience-strip container reveal-init">
          <span>BUILT AROUND YOUR WORLD</span>
          <div>
            Private equity
            <i />
            Growth equity
            <i />
            Venture capital
            <i />
            Family offices
            <i />
            Private-market investors
          </div>
        </div>

        {/* 2. THE PROBLEM */}
        <section id="problem" className="problem section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">01 / THE PROBLEM</span>
            <span className="section-note">There’s more to your story.</span>
          </div>
          <div className="two-column reveal-init">
            <h2>
              You probably don’t have
              <br />a <em>content shortage.</em>
            </h2>
            <div className="section-copy">
              <p>
                You already have partner conversations, investment theses, portfolio stories,
                conference appearances, podcasts, market observations and years of pattern
                recognition.
              </p>
              <p className="muted">
                The problem: most of the strongest thinking gets used once, buried inside long-form
                content or never distributed properly.
              </p>
              <p className="font-medium text-foreground">
                We find what is worth saying. Then make it travel.
              </p>
            </div>
          </div>
          <div className="source-grid">
            {[
              { icon: Mic, title: "Partner conversations" },
              { icon: FileText, title: "Investment theses" },
              { icon: Layers, title: "Portfolio stories" },
              { icon: Calendar, title: "Conference appearances" },
              { icon: Play, title: "Podcasts & panels" },
              { icon: MessageSquare, title: "Market observations" },
              { icon: TrendingUp, title: "Pattern recognition" },
              { icon: Sparkles, title: "Operating insights" },
            ].map(({ icon: Icon, title }, i) => (
              <div className={`source-item reveal-init stagger-${(i % 4) + 1}`} key={title}>
                <Icon size={21} strokeWidth={1.3} />
                <span>{title}</span>
                <small>0{i + 1}</small>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT REFRAME DOES / PACKAGES & SERVICES */}
        <section id="services" className="services-section section">
          <div className="container">
            <div className="section-top reveal-init">
              <span className="eyebrow">02 / WHAT REFRAME DOES</span>
              <span className="section-note">Built for private markets.</span>
            </div>
            <div className="section-heading-row reveal-init">
              <div>
                <h2>
                  Content systems for
                  <br />
                  <em>private-market leaders.</em>
                </h2>
                <p className="intro-copy max-w-2xl">
                  Investment thinking, partner expertise and portfolio storytelling are our
                  differentiators. We package them into three focused engines built around how
                  people actually consume content.
                </p>
              </div>
              <Link to="/contact" className="text-link">
                Discuss the packages <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* 3 Core Packages */}
            <div className="packages-grid">
              {packages.map((pkg, i) => (
                <div className={`package-card reveal-init stagger-${i + 1}`} key={pkg.title}>
                  <span className="package-badge">{pkg.badge}</span>
                  <h3>{pkg.title}</h3>
                  <p className="package-desc">{pkg.description}</p>
                  <div className="package-differentiator">
                    <strong>Our Differentiator</strong>
                    <p className="text-muted-foreground">{pkg.differentiator}</p>
                    <div className="package-formats">
                      {pkg.formats.map((format) => (
                        <span key={format} className="package-format-tag">
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Foundational Capabilities Accordion */}
            <div className="capabilities-heading reveal-init">
              <div className="two-column services-layout">
                <div>
                  <span className="eyebrow">FOUNDATIONAL CAPABILITIES</span>
                  <h2 className="text-4xl mt-3">
                    Every format,
                    <br />
                    <em>one standard of craft.</em>
                  </h2>
                  <p className="intro-copy">
                    From interview direction to visual editing and executive voice development, our
                    capabilities ensure your partners look and sound distinctive.
                  </p>
                </div>
                <div className="service-list">
                  {services.map(({ title, description, detail, icon: Icon }, i) => (
                    <div className={`service-row reveal-init stagger-${(i % 5) + 1}`} key={title}>
                      <Button
                        variant="ghost"
                        className="service-toggle"
                        aria-expanded={expanded === i}
                        aria-controls={`service-${i}`}
                        onClick={() => setExpanded(expanded === i ? null : i)}
                      >
                        <span className="service-number">0{i + 1}</span>
                        <span>{title}</span>
                        {expanded === i ? <Minus /> : <Plus />}
                      </Button>
                      {expanded === i && (
                        <div id={`service-${i}`} className="service-detail">
                          <Icon size={24} strokeWidth={1.25} />
                          <div>
                            <p className="font-medium text-foreground">{description}</p>
                            <p className="muted mt-2">{detail}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE REFRAME WAY */}
        <section id="approach" className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">03 / THE REFRAME WAY</span>
            <span className="section-note">Same source. A different story.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <h2>
              A fund announcement tells people what happened.
              <br />
              <em>Good content tells them why it mattered.</em>
            </h2>
            <p>
              We look beyond what happened — turning announcements and conversations into ideas
              founders remember.
            </p>
          </div>
          <div
            className="example-tabs reveal-init"
            role="tablist"
            aria-label="Story transformation examples"
          >
            {examples.map((item, i) => (
              <Button
                key={item.source}
                variant="ghost"
                role="tab"
                aria-selected={i === example}
                onClick={() => setExample(i)}
                className={i === example ? "example-tab selected" : "example-tab"}
              >
                {item.source}
              </Button>
            ))}
          </div>
          {current && (
            <div className="transformation reveal-init">
              <div className="before-panel">
                <span className="eyebrow">THE STARTING POINT</span>
                <FileText size={30} strokeWidth={1} />
                <h3>{current.source}</h3>
                <p>{current.beforeDesc}</p>
                <span className="example-label">RAW SOURCE MATERIAL</span>
              </div>
              <div className="transform-arrow">
                <ArrowRight strokeWidth={1} />
              </div>
              <div className="after-panel">
                <span className="eyebrow">THE REFRAMED STORY</span>
                <h3>
                  {current.output}
                  <ArrowUpRight strokeWidth={1} />
                </h3>
                <p>{current.copy}</p>
                <div className="format-tags">
                  {current.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 5. POSITIONING SECTION */}
        <section className="positioning">
          <div className="container reveal-init">
            <span className="eyebrow">04 / STRATEGY BEFORE THE SCHEDULE</span>
            <h2>
              Not another
              <br />
              <em>social-media calendar.</em>
            </h2>
            <div className="positioning-bottom">
              <div>
                <p className="text-base text-soft-beige">
                  No posting because the calendar says Tuesday.
                  <br />
                  No generic thought leadership.
                  <br />
                  No turning every partner into a creator.
                </p>
                <p className="mt-4 text-sm text-soft-beige/90">We start with better questions:</p>
              </div>
              <div>
                <span>
                  <Check size={16} /> What does your firm actually believe?
                </span>
                <span>
                  <Check size={16} /> What should founders understand about how you think?
                </span>
                <span>
                  <Check size={16} /> What stories are already sitting inside the business?
                </span>
                <span>
                  <Check size={16} /> What deserves to travel further?
                </span>
              </div>
            </div>
            <p className="mt-8 text-xs tracking-wider text-soft-beige/70 uppercase">
              Then we build from there.
            </p>
            <span className="large-frame" aria-hidden="true" />
          </div>
        </section>

        {/* 6. ONE IDEA, MORE VALUE */}
        <section className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">05 / ONE IDEA, MORE VALUE</span>
            <span className="section-note">Make your thinking work harder.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <h2>
              One strong idea can travel
              <br />
              <em>further than you think.</em>
            </h2>
            <p>
              Your best ideas shouldn’t end
              <br />
              when the conversation does.
            </p>
          </div>
          <div className="repurpose-layout reveal-init">
            <div className="conversation-source">
              <Mic size={32} strokeWidth={1.2} />
              <h3>
                One partner
                <br />
                conversation
              </h3>
              <span>THE ORIGINAL IDEA</span>
            </div>
            <ArrowRight className="repurpose-arrow" />
            <div className="output-grid">
              {[
                { icon: Play, label: "Short-form video" },
                { icon: MessageSquare, label: "LinkedIn point of view" },
                { icon: Layers, label: "Founder-focused carousel" },
                { icon: Quote, label: "Quote-led visual" },
                { icon: FileText, label: "Long-form insight" },
                { icon: Video, label: "YouTube distribution" },
              ].map(({ icon: Icon, label }, i) => (
                <div key={label} className={`reveal-init stagger-${(i % 3) + 1}`}>
                  <Icon size={20} strokeWidth={1.2} />
                  <span>{label}</span>
                  <ArrowUpRight size={14} />
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-12 text-sm text-muted-foreground font-medium reveal-init">
            But the goal is not more content.{" "}
            <strong className="text-foreground">The goal is stronger recall.</strong>
          </p>
        </section>

        {/* 7. WHO WE WORK WITH */}
        <section className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">06 / WHO WE WORK WITH</span>
            <span className="section-note">Aligned with private capital.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <h2>
              For firms building relationships
              <br />
              <em>before they need them.</em>
            </h2>
            <p>
              From partner visibility to portfolio storytelling, the work is designed around the
              people and relationships that move private markets.
            </p>
          </div>
          <div className="who-grid">
            {whoWeWorkWith.map((item, i) => (
              <div className={`who-card reveal-init stagger-${i + 1}`} key={item.category}>
                <span className="eyebrow">0{i + 1} / SECTOR</span>
                <h3>{item.category}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. WHY REFRAME */}
        <section className="outcomes section">
          <div className="container">
            <span className="eyebrow reveal-init">07 / WHY REFRAME</span>
            <div className="section-heading-row reveal-init">
              <div>
                <h2>Content with commercial context.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  We are not interested in producing more noise. Reframe sits between strategy,
                  storytelling and distribution, helping private-market firms communicate what they
                  know, how they think and why it matters.
                </p>
              </div>
              <Link to="/contact" className="text-link">
                Explore an engagement <ArrowUpRight size={17} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">
              {outcomes.map((item, i) => (
                <div
                  key={item.title}
                  className={`border-t border-primary pt-5 reveal-init stagger-${i + 1}`}
                >
                  <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    0{i + 1} / IMPACT
                  </span>
                  <h3 className="font-editorial text-2xl mt-3">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-2">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. WORK / PROOF */}
        <section id="work" className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">08 / WORK & PROOF</span>
            <span className="section-note">Different sectors. Same principle.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <div>
              <h2>
                Selected stories and work
                <br />
                <em>from our team.</em>
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Find the strongest story. Tell it well. Make it travel.
              </p>
            </div>
            <Link to="/contact" className="text-link">
              Discuss private-market examples <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Team Background Proof Grid */}
          <div className="proof-grid">
            {teamProof.map((item, i) => (
              <div className={`proof-card reveal-init stagger-${i + 1}`} key={item.brand}>
                <span className="proof-brand">{item.brand}</span>
                <span className="proof-tag">{item.tag}</span>
                <p className="proof-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Illustrative Work Concept Cards */}
          <div className="work-grid mt-10">
            <a href="#approach" className="work-item reveal-init stagger-1">
              <div className="work-art investment-art">
                <span>THE INVESTMENT PERSPECTIVE</span>
                <h3>
                  Behind every
                  <br />
                  investment,
                  <br />
                  <em>a conviction.</em>
                </h3>
                <span className="art-wordmark">reframe / perspectives</span>
              </div>
              <div className="work-description">
                <div>
                  <span className="eyebrow">ILLUSTRATIVE CONCEPT / PARTNER-LED CONTENT</span>
                  <h3>From investment thesis to point of view</h3>
                </div>
                <ArrowUpRight />
              </div>
            </a>
            <a href="#approach" className="work-item reveal-init stagger-2">
              <div className="work-art story-art">
                <div className="story-document">
                  <span>THE PORTFOLIO STORY</span>
                  <h3>
                    Beyond
                    <br />
                    <em>the numbers.</em>
                  </h3>
                  <div className="document-lines" />
                  <span>THE PEOPLE. THE PROGRESS. THE NEXT CHAPTER.</span>
                </div>
              </div>
              <div className="work-description">
                <div>
                  <span className="eyebrow">ILLUSTRATIVE CONCEPT / PORTFOLIO STORYTELLING</span>
                  <h3>Turning a milestone into a meaningful story</h3>
                </div>
                <ArrowUpRight />
              </div>
            </a>
          </div>

          <p className="work-disclaimer reveal-init">
            Note: Client confidentiality comes first. Brand storytelling examples reflect verified
            project leadership from our creative and production leads. Ask us about relevant
            private-market fund case studies we can share privately under NDA.
          </p>
        </section>

        {/* 10. ABOUT REFRAME */}
        <section id="about" className="about-section section">
          <div className="container two-column reveal-init">
            <div>
              <span className="eyebrow">09 / ABOUT REFRAME</span>
              <h2>
                A content studio.
                <br />
                <em>An investor’s lens.</em>
              </h2>
            </div>
            <div className="section-copy">
              <p>
                Reframe Studios is a content and storytelling studio built around private markets.
              </p>
              <p className="muted">
                We work with investment firms and their leadership teams to uncover the thinking,
                stories and conversations already inside the business, then shape them into content
                people actually want to engage with.
              </p>
              <p className="muted">
                Our work sits across strategy, partner-led content, video, portfolio storytelling
                and distribution, with one focus:
              </p>
              <p className="font-medium text-foreground">
                Make strong thinking easier to see, understand and remember.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="text-link">
                  Get to know Reframe <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 11. TEAM SECTION */}
        <section id="team" className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">10 / THE TEAM</span>
            <span className="section-note">The people behind Reframe.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <h2>
              The people behind
              <br />
              <em>Reframe.</em>
            </h2>
            <p>
              Combining commercial strategy, digital marketing, and high-fidelity video production.
            </p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, i) => (
              <div className={`team-card reveal-init stagger-${i + 1}`} key={member.name}>
                <div className="team-card-header">
                  <h3>{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                </div>
                {member.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* 12. HOW WE THINK */}
        <section id="insights" className="section container">
          <div className="section-top reveal-init">
            <span className="eyebrow">11 / HOW WE THINK</span>
            <span className="section-note">Editorial principles.</span>
          </div>
          <div className="section-heading-row reveal-init">
            <h2>
              The strongest story isn’t always
              <br />
              <em>the loudest one.</em>
            </h2>
            <p>
              It’s the one that helps someone understand how you think.
              <br />
              That’s where we start.
            </p>
          </div>
          <div className="how-grid">
            {howWeThink.map((item, i) => (
              <div className={`how-card reveal-init stagger-${i + 1}`} key={item.num}>
                <span className="how-num">{item.num} / PRINCIPLE</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="final-cta-section">
          <div className="container max-w-3xl reveal-init">
            <span className="eyebrow">12 / LET’S START A CONVERSATION</span>
            <h2>
              There is probably a better story
              <br />
              <em>already sitting inside your firm.</em>
            </h2>
            <p>Let’s find it.</p>
            <Button asChild className="final-cta-btn">
              <Link to="/contact">
                Talk to Reframe <ArrowUpRight className="ml-1" size={17} />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
