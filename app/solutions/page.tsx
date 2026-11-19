import type { Metadata } from "next";
import { Footer, Navigation } from "../components/Navigation";

export const metadata: Metadata = { title: "Solutions — Nexa", description: "Flexible solutions for every ambitious team." };

export default function SolutionsPage() {
  return (
    <main>
      <Navigation />
      <div className="inner-page">
        <section className="page-hero">
          <span className="page-kicker">Solutions</span>
          <h1>Built for the way<br /><em>teams create.</em></h1>
          <p>From focused startups to global organizations, Nexa adapts to your team and grows with every ambition.</p>
        </section>
        <section className="solution-grid">
          <article className="solution-card"><span className="feature-icon">P</span><h2>For product teams</h2><p>Connect customer insights to the roadmap and keep every launch moving in the right direction.</p><div className="solution-list"><span>Roadmaps</span><span>Sprints</span><span>Research</span><span>Launch plans</span></div></article>
          <article className="solution-card"><span className="feature-icon">M</span><h2>For marketing teams</h2><p>Plan campaigns, coordinate content, and measure every initiative from one creative home.</p><div className="solution-list"><span>Campaigns</span><span>Content calendar</span><span>Creative briefs</span><span>Analytics</span></div></article>
        </section>
      </div>
      <Footer />
    </main>
  );
}
