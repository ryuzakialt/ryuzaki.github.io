import { site } from "../data/site.js";

export default function Footer() {
  const links = site.links.filter((l) => l.href);
  return (
    <footer className="border-t border-line py-12">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-small text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="text-small text-muted transition-colors duration-150 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#top"
            className="text-small font-medium text-ink transition-colors duration-150 hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
