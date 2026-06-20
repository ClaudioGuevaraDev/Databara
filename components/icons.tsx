import type { ReactElement, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.05.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.1-6.46-4.69-4.58 6.49-.94L12 2.5z" />
    </svg>
  );
}

export function WindowsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M3 5.6l7.2-1v7.1H3V5.6zm0 12.8l7.2 1v-7H3v6zm8.2 1.2L21 21V12.6h-9.8v7zm0-15.6v7.1H21V3l-9.8 1z" />
    </svg>
  );
}

export function AppleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M16.36 12.57c-.02-2.18 1.78-3.23 1.86-3.28-1.01-1.48-2.59-1.68-3.15-1.7-1.34-.13-2.62.79-3.3.79-.68 0-1.73-.77-2.85-.75-1.47.02-2.82.85-3.58 2.17-1.53 2.65-.39 6.57 1.1 8.72.73 1.05 1.6 2.23 2.74 2.19 1.1-.04 1.52-.71 2.85-.71 1.33 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.83-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.33-3.49zM14.2 6.1c.6-.73 1-1.74.89-2.75-.86.03-1.91.57-2.53 1.3-.56.64-1.05 1.67-.92 2.65.96.07 1.95-.49 2.56-1.2z" />
    </svg>
  );
}

export function LinuxIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={24} height={24} {...props}>
      <path d="M12 2c-1.9 0-3.2 1.6-3.2 3.7 0 1 .1 1.9.1 2.7 0 .8-.7 1.6-1.4 2.6C6.6 12.3 5.7 13.7 5.7 15c0 .6-.4 1-.9 1.5-.5.5-1 1.1-1 1.9 0 .4.2.7.6.8.6.2 1.5.2 2.2.6.6.3 1 .8 1.8.9.2 0 .4 0 .6-.1.5-.2.8-.7 1.3-1 .4-.2.9-.2 1.4-.2s1 0 1.4.2c.5.3.8.8 1.3 1 .2.1.4.1.6.1.8-.1 1.2-.6 1.8-.9.7-.4 1.6-.4 2.2-.6.4-.1.6-.4.6-.8 0-.8-.5-1.4-1-1.9-.5-.5-.9-.9-.9-1.5 0-1.3-.9-2.7-1.8-4-.7-1-1.4-1.8-1.4-2.6 0-.8.1-1.7.1-2.7C15.2 3.6 13.9 2 12 2zm-1.4 4c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm2.8 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
    </svg>
  );
}

const featureIcons: Record<string, ReactElement> = {
  plug: <path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8zm5 8v5" />,
  tree: <path d="M5 4h6v4H5V4zm8 6h6v4h-6v-4zm0 6h6v4h-6v-4zM8 8v10m0-5h5" />,
  code: <path d="M9 8l-4 4 4 4m6-8l4 4-4 4" />,
  rows: <path d="M3 5h18M3 12h18M3 19h18" />,
  tabs: <path d="M4 7h6v13H4V7zm10-3h6v16h-6V4z" />,
  shield: <path d="M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6l8-3zm-2.5 9l2 2 3.5-4" />,
  moon: <path d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8z" />,
  devices: <path d="M3 5h13v8H3V5zm0 12h13M18 9h3v8h-3V9z" />,
};

export function FeatureIcon({ name, ...props }: { name: string } & IconProps) {
  return (
    <svg {...base} {...props}>
      {featureIcons[name] ?? featureIcons.code}
    </svg>
  );
}
