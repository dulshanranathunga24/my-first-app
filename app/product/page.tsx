import type { Metadata } from "next";
import { Footer, Navigation } from "../components/Navigation";

export const metadata: Metadata = { title: "Product — Nexa", description: "Everything your team needs to turn ideas into impact." };

export default function ProductPage() {
  return (
    <main>
      <Navigation />
      <div className="inner-page">
        <section className="page-hero">
          <span className="page-kicker">Product</span>
          <h1>One workspace.<br /><em>Every possibility.</em></h1>
          <p>Bring planning, collaboration, and intelligent workflows together in a single, beautifully focused workspace.</p>
        </section>
        <section className="feature-grid">
          <article className="feature-card"><span className="feature-icon">⌂</span><h2>Project planning</h2><p>Shape every initiative with flexible views, clear milestones, and effortless team alignment.</p><a href="/solutions">Explore planning →</a></article>
          <article className="feature-card"><span className="feature-icon">✦</span><h2>Nexa AI</h2><p>Summarize work, draft documents, and find answers instantly with AI that understands your team.</p><a href="/resources">Discover Nexa AI →</a></article>
          <article className="feature-card"><span className="feature-icon">◎</span><h2>Real-time insights</h2><p>Turn live project data into clear decisions with dashboards that update as work happens.</p><a href="/pricing">See insights →</a></article>
        </section>
      </div>
      <Footer />
    </main>
  );
}
