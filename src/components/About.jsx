import { about } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section border-t border-line">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">About</p>
            <h2 className="h-section mt-4">Design and code, in one hand.</h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <div className="max-w-2xl space-y-6 text-body text-muted">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {about.skills.map((g) => (
                <div key={g.group}>
                  <h3 className="text-small font-semibold text-ink">{g.group}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((i) => (
                      <li key={i} className="text-small text-muted">
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
