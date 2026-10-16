import { useState, type FormEvent } from "react";
import { SELLER } from "@/lib/vop";

const MAX = 1000;
const input = "w-full rounded-md border bg-input px-3 py-2 text-sm";

// Bez serveru: formulář sestaví e-mail pro prodejnu a otevře ho v poštovním programu zákazníka.
export function ContactForm() {
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const body = `${get("zprava")}\n\n— ${get("jmeno")} ${get("prijmeni")}\nTelefon: ${get("telefon")}\nE-mail: ${get("email")}`;
    const subject = `Dotaz z webu od ${get("jmeno")} ${get("prijmeni")}`;
    window.location.href = `mailto:${SELLER.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section aria-labelledby="kontakt-form-h" className="rounded-lg border bg-card p-6">
      <h2 id="kontakt-form-h" className="font-display text-2xl mb-1">Potřebuješ pomoc? Neváhej a napiš nám</h2>
      <p className="text-sm text-muted-foreground mb-5">Poradíme se sestavou, krmením i výběrem prutu. Odpovíme co nejdřív.</p>
      <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
        <label className="text-sm">Příjmení<input name="prijmeni" required autoComplete="family-name" className={`${input} mt-1`} /></label>
        <label className="text-sm">Jméno<input name="jmeno" required autoComplete="given-name" className={`${input} mt-1`} /></label>
        <label className="text-sm">Telefon<input name="telefon" type="tel" autoComplete="tel" className={`${input} mt-1`} /></label>
        <label className="text-sm">E-mail<input name="email" type="email" required autoComplete="email" className={`${input} mt-1`} /></label>
        <label className="text-sm sm:col-span-2">Zašlete nám svůj dotaz
          <textarea name="zprava" required rows={6} maxLength={MAX} value={msg} onChange={(e) => setMsg(e.target.value)} className={`${input} mt-1`} />
          <span className="block text-xs text-muted-foreground mt-1">{MAX - msg.length} znaků do konce</span>
        </label>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
          <button type="submit" className="rounded-md bg-accent text-accent-foreground px-6 py-2.5 font-bold">Odeslat</button>
          {sent && <span role="status" className="text-sm text-muted-foreground">Otevřeli jsme váš e-mailový program, zprávu stačí odeslat. Případně pište na {SELLER.email}.</span>}
        </div>
      </form>
    </section>
  );
}
