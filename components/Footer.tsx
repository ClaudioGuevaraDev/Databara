import Image from "next/image";
import { GITHUB_REPO } from "@/app/data";
import { GitHubIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Image
            src="/databara-logo.png"
            alt="Databara logo"
            width={26}
            height={26}
            className="rounded-md"
          />
          <span className="font-semibold">Databara</span>
        </div>

        <p className="text-sm text-muted">© 2026 Claudio Guevara</p>

        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
}
