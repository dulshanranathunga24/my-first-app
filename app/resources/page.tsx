import type { Metadata } from "next";
import { Footer, Navigation } from "../components/Navigation";

export const metadata: Metadata = { title: "Resources — Nexa", description: "Ideas, guides, and stories for modern teams." };

export default function ResourcesPage() {
  return (
    <main>
      <Navigation />
      <div className="inner-page">
        <section className="page-hero">
          <span className="page-kicker">Resources</span>
          <h1>Ideas for <em>better work.</em></h1>
          <p>Practical guides, thoughtful perspectives, and proven workflows for teams building what matters.</p>
        </section>
        <section className="resource-grid">
          <article className="resource-card"><div className="resource-art">✦</div><div className="resource-copy"><small>Guide</small><h2>The modern team&apos;s playbook</h2><p>Seven principles for creating focus, trust, and momentum across distributed teams.</p></div></article>
          <article className="resource-card"><div className="resource-art">◫</div><div className="resource-copy"><small>Template</small><h2>Plan a winning product launch</h2><p>A complete launch framework to align your team from idea to market.</p></div></article>
          <article className="resource-card"><div className="resource-art">◎</div><div className="resource-copy"><small>Customer story</small><h2>How Northstar moved faster</h2><p>See how a growing team reduced planning time by 40% with Nexa.</p></div></article>
        </section>
      </div>
      <Footer />
    </main>
  );
}
