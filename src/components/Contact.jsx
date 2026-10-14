import { useEffect, useRef, useState } from "react";
import { site } from "../data/site.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  const [state, setState] = useState("idle"); // idle | loading | copied | error
  const timer = useRef(0);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    setState("loading");
    try {
      await navigator.clipboard.writeText(site.email);
      timer.current = setTimeout(() => {
        setState("copied");
        timer.current = setTimeout(() => setState("idle"), 2000);
      }, 400);
    } catch {
      setState("error");
      timer.current = setTimeout(() => setState("idle"), 2400);
    }
  };

  const label = {
    idle: "Copy email",
    loading: "Copying",
    copied: "Copied",
    error: "Copy failed. Use the link instead",
  }[state];

  return (
    <section id="contact" className="section border-t border-line">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="h-section mt-4">Let's talk about your product.</h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal>
            <p className="max-w-xl text-body text-muted">
              I take on a small number of design system and front-end projects at a time. Send a short
              note about what you're building and where it feels inconsistent, and I'll reply within
              two working days.
            </p>
            <p className="mt-8 font-heading text-h3 text-ink">{site.email}</p>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                Send an email
              </a>
              <button
                type="button"
                onClick={copy}
                disabled={state === "loading"}
                aria-live="polite"
                className="btn btn-secondary"
              >
                {state === "loading" && <span className="spinner" aria-hidden="true" />}
                {label}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
