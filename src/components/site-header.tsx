import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Brand() {
  return (
    <Link to="/" className="brand" aria-label="Reframe Studios home">
      <span className="brand-symbol" aria-hidden="true">
        <i />
        <i />
      </span>
      <span>
        reframe<span className="brand-small">STUDIOS</span>
      </span>
    </Link>
  );
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Approach", to: "/approach" },
    { label: "Services", to: "/services" },
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Team", to: "/team" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Button asChild variant="editorial" className="header-contact">
            <Link to="/contact">
              Talk to us <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.label} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={18} />
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
