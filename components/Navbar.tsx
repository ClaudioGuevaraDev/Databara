import Image from "next/image";
import Link from "next/link";
import { GITHUB_REPO } from "@/app/data";
import { GitHubIcon, StarIcon } from "./icons";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/databara-logo.png"
            alt="Databara logo"
            width={32}
            height={32}
            className="rounded-lg"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Databara</span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-3">
          <a
            href="#features"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Features
          </a>
          <a
            href="#download"
            className="hidden rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:text-foreground sm:block"
          >
            Download
          </a>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:bg-surface"
          >
            <StarIcon className="h-4 w-4 text-accent" />
            <span className="hidden sm:inline">Star on GitHub</span>
            <GitHubIcon className="h-4 w-4 sm:hidden" />
          </a>
        </div>
      </nav>
    </header>
  );
}
