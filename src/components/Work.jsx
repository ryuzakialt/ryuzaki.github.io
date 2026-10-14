import { useEffect, useRef, useState } from "react";
import { categories, projects } from "../data/site.js";
import Reveal from "./Reveal.jsx";

function ProjectCard({ p }) {
  const body = (
    <>
      <div className="flex items-center justify-between">
        <span className="eyebrow">{p.category}</span>
        <span className="text-caption text-muted">{p.year}</span>
      </div>
      <h3 className="mt-4 font-heading text-h3 text-ink">{p.title}</h3>
      <p className="mt-2 text-small text-muted">{p.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <li key={t} className="tag">
            {t}
          </li>
        ))}
      </ul>
    </>
  );
  return p.href ? (
    <a href={p.href} className="card block h-full p-6" target="_blank" rel="noreferrer">
      {body}
    </a>
  ) : (
    <article className="card h-full p-6">{body}</article>
  );
}

function SkeletonCard() {
  return (
    <div className="card h-full p-6" aria-hidden="true">
      <div className="skeleton h-4 w-24" />
      <div className="skeleton mt-4 h-8 w-3/4" />
      <div className="skeleton mt-4 h-4 w-full" />
      <div className="skeleton mt-2 h-4 w-5/6" />
      <div className="mt-6 flex gap-2">
        <div className="skeleton h-6 w-16" />
        <div className="skeleton h-6 w-20" />
      </div>
    </div>
  );
}

export default function Work() {
  const [active, setActive] = useState("All");
  const [loading, setLoading] = useState(true);
  const timer = useRef(0);

  // Short, intentional loading state so the grid never swaps content abruptly.
  const select = (cat) => {
    if (cat === active) return;
    setActive(cat);
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setLoading(false), 450);
  };

  useEffect(() => {
    timer.current = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer.current);
  }, []);

  const visible = projects.filter((p) => active === "All" || p.category === active);

  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (i + (e.key === "ArrowRight" ? 1 : -1) + categories.length) % categories.length;
    select(categories[next]);
    document.getElementById(`tab-${next}`)?.focus();
  };

  return (
    <section id="work" className="section border-t border-line">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="h-section mt-4 max-w-md">Systems and products I've shaped.</h2>
            </div>

            <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
              {categories.map((c, i) => {
                const on = c === active;
                return (
                  <button
                    key={c}
                    id={`tab-${i}`}
                    role="tab"
                    type="button"
                    aria-selected={on}
                    aria-controls="work-panel"
                    tabIndex={on ? 0 : -1}
                    onClick={() => select(c)}
                    onKeyDown={(e) => onKey(e, i)}
                    className={`h-10 rounded-ui border px-4 text-small font-medium transition-colors duration-150 ${
                      on
                        ? "border-ink bg-ink text-white"
                        : "border-line bg-surface text-muted hover:border-ink hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div
          id="work-panel"
          role="tabpanel"
          aria-live="polite"
          aria-busy={loading}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {loading
            ? Array.from({ length: Math.min(visible.length || 3, 3) }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : visible.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  );
}
