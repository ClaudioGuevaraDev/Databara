// A stylized mock of the Databara window — placeholder visual until a real
// screenshot is dropped in. Pure CSS/markup, no images.
export default function AppMock() {
  const rows = [
    ["1", "ada@databara.dev", "active", "2026-01-12"],
    ["2", "linus@databara.dev", "active", "2026-02-03"],
    ["3", "grace@databara.dev", "invited", "2026-03-21"],
    ["4", "alan@databara.dev", "active", "2026-04-08"],
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-xs text-muted">Databara — production · public</span>
        </div>

        <div className="grid grid-cols-[120px_1fr] text-sm">
          {/* Schema sidebar */}
          <aside className="border-r border-border bg-surface-2/50 p-3 font-mono text-[11px] text-muted">
            <p className="mb-2 text-accent">public</p>
            <ul className="space-y-1.5">
              <li className="text-foreground">▸ users</li>
              <li>▸ orders</li>
              <li>▸ products</li>
              <li>▸ sessions</li>
            </ul>
          </aside>

          {/* Editor + results */}
          <div className="min-w-0 overflow-x-auto">
            <div className="border-b border-border p-4 font-mono text-[12px] leading-relaxed">
              <span className="text-accent">select</span>{" "}
              <span className="text-foreground">id, email, status, created_at</span>
              <br />
              <span className="text-accent">from</span>{" "}
              <span className="text-foreground">users</span>
              <br />
              <span className="text-accent">where</span>{" "}
              <span className="text-foreground">status = </span>
              <span className="text-[#7ee787]">&apos;active&apos;</span>
              <span className="text-foreground">;</span>
            </div>

            <table className="w-full font-mono text-[11px]">
              <thead>
                <tr className="text-left text-muted">
                  <th className="px-3 py-2 font-medium">id</th>
                  <th className="px-3 py-2 font-medium">email</th>
                  <th className="px-3 py-2 font-medium">status</th>
                  <th className="px-3 py-2 font-medium">created_at</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-t border-border/60">
                    <td className="px-3 py-1.5 text-muted">{r[0]}</td>
                    <td className="px-3 py-1.5 text-foreground">{r[1]}</td>
                    <td className="px-3 py-1.5 text-accent">{r[2]}</td>
                    <td className="px-3 py-1.5 text-muted">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="border-t border-border px-3 py-2 text-[10px] text-muted">
              4 rows · 12 ms
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
