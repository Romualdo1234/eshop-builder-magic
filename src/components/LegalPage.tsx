import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";

export type LegalBlock = { h?: string; p?: string[]; ul?: string[] };

export function LegalPage({ title, lead, blocks, children }: { title: string; lead?: string; blocks: LegalBlock[]; children?: ReactNode }) {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="font-display text-5xl">{title}</h1>
        {lead && <p className="mt-4 text-muted-foreground">{lead}</p>}
        <div className="mt-8 space-y-8 text-sm leading-relaxed">
          {blocks.map((b, i) => (
            <section key={b.h ?? i}>
              {b.h && <h2 className="font-display text-2xl mb-3">{b.h}</h2>}
              {b.p?.map((t) => <p key={t} className="mb-2">{t}</p>)}
              {b.ul && <ul className="list-disc pl-5 space-y-1">{b.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
            </section>
          ))}
          {children}
        </div>
      </div>
    </Layout>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} – AS-FISH` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} – AS-FISH` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary" },
  ],
});
