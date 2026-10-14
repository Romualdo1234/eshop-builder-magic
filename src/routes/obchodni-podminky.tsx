import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SELLER, VOP, VOP_INTRO } from "@/lib/vop";

export const Route = createFileRoute("/obchodni-podminky")({
  head: () => ({
    meta: [
      { title: "Obchodní podmínky – AS-FISH" },
      { name: "description", content: "Obchodní podmínky internetového obchodu AS-FISH.CZ: objednávka, platba, doprava, odstoupení od smlouvy, reklamace, osobní údaje." },
      { property: "og:title", content: "Obchodní podmínky – AS-FISH" },
      { property: "og:description", content: "Pravidla nákupu v internetovém obchodě AS-FISH.CZ." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Terms,
});

const slug = (i: number) => `clanek-${i + 1}`;

function Terms() {
  return (
    <Layout>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="font-display text-5xl">Obchodní podmínky</h1>
        <p className="mt-4 text-muted-foreground">{VOP_INTRO}</p>

        <div className="mt-6 rounded-lg border bg-card p-5 text-sm grid sm:grid-cols-2 gap-x-6 gap-y-1">
          <div><b>Prodávající:</b> {SELLER.name}</div>
          <div><b>IČO:</b> {SELLER.ico}</div>
          <div><b>Sídlo:</b> {SELLER.address}</div>
          <div><b>E-mail:</b> <a className="text-accent" href={`mailto:${SELLER.email}`}>{SELLER.email}</a></div>
          <div><b>Telefon:</b> <a className="text-accent" href={`tel:${SELLER.phone.replace(/\s/g, "")}`}>{SELLER.phone}</a></div>
          <div><b>Účet:</b> {SELLER.account}</div>
        </div>

        <nav aria-label="Obsah obchodních podmínek" className="mt-8 rounded-lg border p-5">
          <div className="font-display text-xl mb-2">Obsah</div>
          <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm list-none">
            {VOP.map((s, i) => (
              <li key={s.title}><a href={`#${slug(i)}`} className="hover:text-accent transition-colors">{i + 1}. {s.title}</a></li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 space-y-10">
          {VOP.map((s, i) => (
            <section key={s.title} id={slug(i)} aria-labelledby={`${slug(i)}-h`} className="scroll-mt-28">
              <h2 id={`${slug(i)}-h`} className="font-display text-2xl mb-4">{i + 1}. {s.title}</h2>
              <ol className="space-y-3 list-none">
                {s.items.map((it) => (
                  <li key={it.n} className="grid grid-cols-[3rem_1fr] gap-2 text-sm leading-relaxed">
                    <span className="text-muted-foreground tabular-nums">{it.n}</span>
                    <div>
                      <p>{it.text}</p>
                      {it.list && <ul className="mt-2 list-disc pl-5 space-y-1">{it.list.map((l) => <li key={l}>{l}</li>)}</ul>}
                      {it.sub && (
                        <ol className="mt-2 space-y-1.5 list-none">
                          {it.sub.map((x) => (
                            <li key={x.n} className="grid grid-cols-[3.5rem_1fr] gap-2"><span className="text-muted-foreground tabular-nums">{x.n}</span><span>{x.text}</span></li>
                          ))}
                        </ol>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  );
}
