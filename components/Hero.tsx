import Image from "next/image";
import { GITHUB_REPO } from "@/app/data";
import { ArrowRightIcon, DownloadIcon, GitHubIcon } from "./icons";
import AppMock from "./AppMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-16 pb-10 lg:grid-cols-[1.05fr_1fr] lg:pt-24 lg:pb-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            PostgreSQL today — more engines coming soon
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            A modern database client,
            <br className="hidden sm:block" />{" "}
            <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
              beautifully dark.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Databara is a fast, lightweight desktop client for PostgreSQL. Native
            performance, a schema-aware SQL editor and a multi-connection
            workspace — built with Tauri, React and Rust.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-[#04121a] shadow-[0_0_30px_-6px_rgba(34,211,238,0.6)] transition-transform hover:scale-[1.02]"
            >
              <DownloadIcon className="h-4 w-4" />
              Download for free
            </a>
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/60 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-muted">
            <Image
              src="/databara-logo.png"
              alt=""
              width={18}
              height={18}
              className="rounded"
            />
            Free &amp; open source · MIT licensed · Windows, macOS &amp; Linux
          </p>
        </div>

        <AppMock />
      </div>
    </section>
  );
}
