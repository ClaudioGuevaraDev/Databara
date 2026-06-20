import { FEATURES } from "@/app/data";
import { FeatureIcon } from "./icons";

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-border/40 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to explore your data
          </h2>
          <p className="mt-4 text-lg text-muted">
            A focused feature set, with no clutter — just a fast, native client
            that gets out of your way.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-border bg-surface/50 p-6 transition-colors hover:border-accent/40 hover:bg-surface"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-colors group-hover:bg-accent/15">
                <FeatureIcon name={feature.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
