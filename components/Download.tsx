import { DOWNLOADS } from "@/app/data";
import { AppleIcon, LinuxIcon, WindowsIcon } from "./icons";
import type { ComponentType, SVGProps } from "react";

type Platform = {
  name: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  formats: ReadonlyArray<{ label: string; url: string }>;
};

const PLATFORMS: Platform[] = [
  { name: "Windows", Icon: WindowsIcon, formats: DOWNLOADS.windows },
  { name: "macOS", Icon: AppleIcon, formats: DOWNLOADS.macos },
  { name: "Linux", Icon: LinuxIcon, formats: DOWNLOADS.linux },
];

export default function Download() {
  return (
    <section
      id="download"
      className="scroll-mt-20 border-t border-border/40 py-20"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Download Databara
          </h2>
          <p className="mt-4 text-lg text-muted">
            Free and open source. Pick the installer for your platform.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLATFORMS.map(({ name, Icon, formats }) => (
            <div
              key={name}
              className="group flex flex-col items-center rounded-2xl border border-border bg-gradient-to-b from-surface/70 to-surface/30 p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_14px_44px_-18px_rgba(34,211,238,0.5)]"
            >
              <span className="inline-flex rounded-xl bg-surface-2 p-2.5 ring-1 ring-border transition-colors group-hover:ring-accent/40">
                <Icon className="h-8 w-8 text-foreground" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{name}</h3>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
                {formats.map((format) => (
                  <a
                    key={format.url}
                    href={format.url}
                    className="inline-flex items-center rounded-lg border border-accent/30 bg-accent/10 px-3.5 py-2 text-sm font-semibold text-accent transition-colors hover:border-accent/50 hover:bg-accent/20"
                  >
                    {format.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
