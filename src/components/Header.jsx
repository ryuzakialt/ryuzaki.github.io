import { useEffect, useRef, useState } from "react";
import { nav, site } from "../data/site.js";

function useActiveSection(ids) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function useScrollProgress() {
  const barRef = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return barRef;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const ids = nav.map((n) => n.id);
  const active = useActiveSection(ids);
  const barRef = useScrollProgress();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const linkClass = (id) =>
    `text-small font-medium transition-colors duration-150 ${
      active === id ? "text-ink" : "text-muted hover:text-ink"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-bg/90 backdrop-blur transition-colors duration-200 ${
        scrolled || open ? "border-line" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-heading text-h3" aria-label={`${site.name}, back to top`}>
          {site.name}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={linkClass(n.id)}
              aria-current={active === n.id ? "true" : undefined}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn-secondary !h-10 !px-4 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-line bg-bg md:hidden">
          <ul className="container-page flex flex-col py-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="flex h-12 items-center text-body font-medium text-ink"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div
        ref={barRef}
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
        style={{ transform: "scaleX(0)" }}
      />
    </header>
  );
}
