import Image from "next/image";
import { DownloadIcon } from "./icons";
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
              fast and native.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
            Databara is a fast, lightweight desktop client for PostgreSQL. Native
            performance, a schema-aware SQL editor and a multi-connection
            workspace.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#download"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-accent to-accent-strong px-7 py-3.5 text-base font-semibold text-[#04121a] shadow-[0_0_26px_-12px_rgba(34,211,238,0.5)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_38px_-10px_rgba(34,211,238,0.65)]"
            >
              <DownloadIcon className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
              Download for free
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
            Free &amp; open source · Windows, macOS &amp; Linux
          </p>
        </div>

        <AppMock />
      </div>
    </section>
  );
}
