import type { Metadata } from "next";
import { Footer, Navigation } from "../components/Navigation";

export const metadata: Metadata = { title: "Pricing — Nexa", description: "Simple plans for teams of every size." };

export default function PricingPage() {
  return (
    <main>
      <Navigation />
      <div className="inner-page">
        <section className="page-hero">
          <span className="page-kicker">Pricing</span>
          <h1>Simple plans,<br /><em>serious momentum.</em></h1>
          <p>Start free, upgrade when you&apos;re ready, and give every team room to do their best work.</p>
        </section>
        <section className="pricing-grid">
          <article className="price-card"><h2>Starter</h2><div className="price"><strong>$0</strong><span>/ month</span></div><p>For small teams getting organized.</p><a className="button button-secondary" href="#">Get started</a><ul className="price-list"><li>Up to 5 members</li><li>Unlimited projects</li><li>Core integrations</li></ul></article>
          <article className="price-card featured"><span className="popular">Most popular</span><h2>Pro</h2><div className="price"><strong>$12</strong><span>/ user / month</span></div><p>For growing teams shipping ambitious work.</p><a className="button button-primary" href="#">Start free trial</a><ul className="price-list"><li>Unlimited members</li><li>Nexa AI assistant</li><li>Advanced reporting</li><li>Custom workflows</li></ul></article>
          <article className="price-card"><h2>Business</h2><div className="price"><strong>$24</strong><span>/ user / month</span></div><p>For organizations needing control at scale.</p><a className="button button-secondary" href="#">Talk to sales</a><ul className="price-list"><li>Everything in Pro</li><li>Enterprise security</li><li>Priority support</li><li>Dedicated success manager</li></ul></article>
        </section>
        <section className="cta-band"><div><h2>Ready to move faster?</h2><p>Join thousands of teams turning ideas into impact.</p></div><a className="button" href="#">Start for free →</a></section>
      </div>
      <Footer />
    </main>
  );
}
