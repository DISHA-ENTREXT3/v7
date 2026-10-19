import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Brand } from "./site-header";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <span className="eyebrow">LET’S START A CONVERSATION</span>
            <h2>
              Your thinking deserves
              <br />a wider audience.
            </h2>
          </div>
          <Button asChild variant="editorialOutline" className="footer-cta">
            <Link to="/contact">
              Let’s talk <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="footer-bottom">
          <Brand />
          <div>
            <span>Private Markets. Strategy. Storytelling. Distribution.</span>
            <small className="block mt-1 text-[9px] text-soft-beige/80">
              Built for firms that want to be known for more than the size of their fund.
            </small>
          </div>
          <div>
            <Link to="/" hash="approach">
              Approach
            </Link>
            <Link to="/" hash="services">
              Services
            </Link>
            <Link to="/" hash="work">
              Work
            </Link>
            <Link to="/" hash="team">
              Team
            </Link>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reframe Studios on LinkedIn"
            >
              LinkedIn
            </a>
            <a href="mailto:hello@reframestudios.com" aria-label="Email Reframe Studios">
              Email
            </a>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
          <small>© {new Date().getFullYear()} Reframe Studios</small>
        </div>
      </div>
    </footer>
  );
}
