import { useState } from "react";
import { experience } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="experience" className="section border-t border-line">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">Experience</p>
            <h2 className="h-section mt-4">Where the work happened.</h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <ul className="border-t border-line">
              {experience.map((e, i) => {
                const open = openIndex === i;
                return (
                  <li key={e.role} className="border-b border-line">
                    <h3>
                      <button
                        type="button"
                        id={`exp-btn-${i}`}
                        aria-expanded={open}
                        aria-controls={`exp-panel-${i}`}
                        onClick={() => setOpenIndex(open ? -1 : i)}
                        className="flex w-full items-start justify-between gap-6 py-6 text-left"
                      >
                        <span>
                          <span className="block text-body font-medium text-ink">{e.role}</span>
                          <span className="mt-1 block text-small text-muted">
                            {e.org} · {e.period}
                          </span>
                        </span>
                        <span
                          aria-hidden="true"
                          className={`mt-1 inline-block h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                            open ? "rotate-45" : ""
                          }`}
                        >
                          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M8 2v12M2 8h12" />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`exp-panel-${i}`}
                      role="region"
                      aria-labelledby={`exp-btn-${i}`}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-2 pb-6 text-small text-muted">
                          {e.points.map((p) => (
                            <li key={p} className="flex gap-4">
                              <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
