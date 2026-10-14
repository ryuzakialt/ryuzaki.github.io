import { facts, site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  return (
    <section id="top" className="pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container-page">
        <Reveal>
          <p className="eyebrow">{site.role}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="h-display mt-6 max-w-3xl">
            Interfaces that stay clear as products grow.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-body text-muted">
            I'm {site.name}. I design and build interfaces and design systems for software teams,
            with a focus on consistent spacing, honest loading states and components that engineers
            can trust.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#work" className="btn btn-primary">
              View selected work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 md:mt-24">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="eyebrow">{f.label}</dt>
                <dd className="mt-2 text-body text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
