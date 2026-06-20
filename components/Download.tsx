import { DOWNLOADS, GITHUB_RELEASES } from "@/app/data";
import { AppleIcon, DownloadIcon, LinuxIcon, WindowsIcon } from "./icons";
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
            Free and open source. Pick the installer for your operating system.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {PLATFORMS.map(({ name, Icon, formats }) => (
            <div
              key={name}
              className="flex flex-col items-center rounded-2xl border border-border bg-surface/50 p-8 text-center transition-colors hover:border-accent/40"
            >
              <Icon className="h-10 w-10 text-foreground" />
              <h3 className="mt-4 text-lg font-semibold">{name}</h3>

              <div className="mt-5 flex w-full flex-col gap-2.5">
                {formats.map((format) => (
                  <a
                    key={format.url}
                    href={format.url}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/10 px-4 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
                  >
                    <DownloadIcon className="h-4 w-4" />
                    {format.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Looking for source code or other formats?{" "}
          <a
            href={GITHUB_RELEASES}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent hover:underline"
          >
            See all releases
          </a>
        </p>
      </div>
    </section>
  );
}
