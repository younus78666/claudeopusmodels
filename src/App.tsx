import SiteFooter from "./components/SiteFooter";
import SectionHeading from "./components/SectionHeading";
import SiteHeader from "./components/SiteHeader";
import {
  comparisonRows,
  familyCards,
  faqItems,
  heroHighlights,
  heroInsights,
  methodologyItems,
  nextPages,
  trafficPoints,
} from "./content";

export default function App() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Updated April 16, 2026</p>
            <h1>Choose the right AI model without reading 20 different sales pages.</h1>
            <p className="hero-text">
              Claudeopusmodels.com is an independent resource for understanding Claude models and
              comparing them with GPT and Gemini. The goal is simple: help you quickly find the
              best model for coding, writing, research, and budget-conscious work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#comparison">
                Compare Models
              </a>
              <a className="button button-secondary" href="#picks">
                See Best Picks
              </a>
            </div>
            <div className="hero-note">
              {heroHighlights.map((highlight) => (
                <span key={highlight}>{highlight}</span>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="Quick insights">
            <div className="panel-card">
              <p className="panel-label">Best for deep reasoning</p>
              <h2>Claude Opus</h2>
              <p>
                Built for the users who care more about quality and complex thinking than raw
                speed.
              </p>
            </div>
            <div className="mini-grid">
              {heroInsights.map((item) => (
                <article key={item.label}>
                  <strong>{item.label}</strong>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section intro-strip">
          <div>
            <p className="section-tag">Start here</p>
            <h2>A simple site structure with room to grow.</h2>
          </div>
          <p>
            This homepage is designed as the main hub. It can work as a strong one-page launch
            now, and later split into dedicated pages for Claude vs GPT, Claude vs Gemini, pricing,
            and best-use-case articles as your traffic grows.
          </p>
        </section>

        <section className="section" id="comparison">
          <SectionHeading
            tag="Comparison snapshot"
            title="Quick view: where each major model family fits today"
            description="Use this table for orientation, then read deeper comparison pages as you expand the site. The recommendations below are practical starting points, not official rankings."
          />

          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Best for</th>
                  <th>Strength</th>
                  <th>Tradeoff</th>
                  <th>Price tier</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.model}>
                    <td>{row.model}</td>
                    <td>{row.bestFor}</td>
                    <td>{row.strength}</td>
                    <td>{row.tradeoff}</td>
                    <td>{row.priceTier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="section" id="family">
          <SectionHeading
            tag="Claude family"
            title="Start with the Claude tier that matches your real workload"
            description="Most visitors do not need a full benchmark. They need a fast answer to which Claude model should I use? These cards are built to give that answer clearly."
          />

          <div className="card-grid card-grid-three">
            {familyCards.map((card) => (
              <article className={`info-card ${card.accentClass}`} key={card.title}>
                <span className="pill">{card.tier}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="picks">
          <SectionHeading
            tag="Best picks"
            title="Four pages worth creating next if your goal is search traffic"
            description="These are the highest-leverage supporting pages for a Claude-focused site because they combine practical intent with broad search demand."
          />

          <div className="card-grid card-grid-two">
            {nextPages.map((page) => (
              <article className="feature-card" key={page.title}>
                <h3>{page.title}</h3>
                <p>{page.description}</p>
                <a href={page.href}>{page.cta}</a>
              </article>
            ))}
          </div>
        </section>

        <section className="section band">
          <div className="band-copy">
            <p className="section-tag">Traffic strategy</p>
            <h2>Can one single page rank?</h2>
            <p>
              Yes, a single page can rank for broad informational intent. But if you want more
              total traffic, the better long-term structure is one strong homepage plus dedicated
              comparison and use-case pages that go deeper on specific questions.
            </p>
          </div>
          <div className="band-points">
            {trafficPoints.map((point) => (
              <article key={point.title}>
                <strong>{point.title}</strong>
                <p>{point.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="methodology">
          <SectionHeading
            tag="Methodology"
            title="How this site should evaluate models"
            description="Real comparison content needs more than summaries. Use the same prompts, the same evaluation criteria, and clear notes about tradeoffs so visitors can trust your verdicts."
          />

          <div className="method-grid">
            {methodologyItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section faq-section" id="faq">
          <SectionHeading
            tag="FAQ"
            title="Questions your homepage should answer clearly"
            description="These are strong starter questions for search intent, featured snippets, and user trust."
          />

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
