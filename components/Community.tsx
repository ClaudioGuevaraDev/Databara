import { GITHUB_ISSUES, GITHUB_REPO } from "@/app/data";
import { ArrowRightIcon, GitHubIcon, StarIcon } from "./icons";

export default function Community() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-surface/60 p-10 text-center sm:p-16">
          <div className="absolute -top-24 left-1/2 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />

          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <StarIcon className="h-3.5 w-3.5" />
            Open source &amp; growing
          </span>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have feedback or an idea? Let&apos;s build it together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">
            Databara starts with PostgreSQL, and more database engines are on the
            way. Star the repo to follow along, open an issue, or propose a
            feature — every bit of feedback shapes what comes next. 🐻⭐
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#04121a] shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)] transition-transform hover:scale-[1.02]"
            >
              <StarIcon className="h-4 w-4" />
              Star us on GitHub
            </a>
            <a
              href={GITHUB_ISSUES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
            >
              <GitHubIcon className="h-4 w-4" />
              Open an issue
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
