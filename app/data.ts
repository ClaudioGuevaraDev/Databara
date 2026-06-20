export const GITHUB_REPO = "https://github.com/ClaudioGuevaraDev/databara-app";
export const GITHUB_ISSUES = `${GITHUB_REPO}/issues`;
export const GITHUB_RELEASES = `${GITHUB_REPO}/releases`;

export const VERSION = process.env.NEXT_PUBLIC_VERSION;

const RELEASE_BASE = `${GITHUB_REPO}/releases/download/${VERSION}`;

export const DOWNLOADS = {
  windows: [
    { label: ".exe", url: `${RELEASE_BASE}/Databara_1.0.4_x64-setup.exe` },
    { label: ".msi", url: `${RELEASE_BASE}/Databara_1.0.4_x64_en-US.msi` },
  ],
  macos: [
    { label: ".dmg", url: `${RELEASE_BASE}/Databara_1.0.4_universal.dmg` },
  ],
  linux: [
    { label: ".AppImage", url: `${RELEASE_BASE}/Databara_1.0.4_amd64.AppImage` },
    { label: ".deb", url: `${RELEASE_BASE}/Databara_1.0.4_amd64.deb` },
    { label: ".rpm", url: `${RELEASE_BASE}/Databara-1.0.4-1.x86_64.rpm` },
  ],
} as const;

export const FEATURES = [
  {
    title: "Native PostgreSQL client",
    description:
      "Connect to your databases over plain, Prefer or Require TLS. Fast and native, with no Electron bloat.",
    icon: "plug",
  },
  {
    title: "Schema Explorer",
    description:
      "Browse schemas, tables, views, columns and indexes pulled straight from pg_catalog.",
    icon: "tree",
  },
  {
    title: "Smart SQL editor",
    description:
      "A Monaco-powered editor with schema-aware autocompletion, so you write queries faster.",
    icon: "code",
  },
  {
    title: "Paginated results",
    description:
      "Run SELECT / WITH / RETURNING queries and page through rows. Other statements report rows affected.",
    icon: "rows",
  },
  {
    title: "Multi-connection workspace",
    description:
      "Every query tab keeps its own results, across all of your connected databases at once.",
    icon: "tabs",
  },
  {
    title: "Security first",
    description:
      "Saved connection drafts live locally and passwords are never stored — you're prompted on reconnect.",
    icon: "shield",
  },
  {
    title: "Refined dark theme",
    description:
      "A polished deep-navy theme with a cyan accent, designed to be easy on the eyes.",
    icon: "moon",
  },
  {
    title: "Cross-platform",
    description:
      "Ships as native installers for Windows, macOS and Linux. One client, every machine.",
    icon: "devices",
  },
] as const;
