import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | Convention-Service Spangenberg" },
      { name: "description", content: "Impressum der Convention-Service Spangenberg." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#faf7f1] text-[#07192b]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="text-sm text-[#c89b4a] hover:underline">← Zurück zur Startseite</Link>
        <h1 className="mt-6 font-serif text-5xl">Impressum</h1>
        <p className="mt-4 text-sm text-[#07192b]/60 italic">Bitte rechtlich prüfen.</p>

        <div className="prose mt-10 space-y-6 text-[#07192b]/80">
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Angaben gemäß § 5 TMG</h2>
            <p>
              Convention-Service Spangenberg<br />
              Am Gericht 2<br />
              34537 Bad Wildungen<br />
              Deutschland
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Kontakt</h2>
            <p>
              Telefon: +49 5621 2865<br />
              Mobil: +49 172 6058811<br />
              E-Mail: info@convention-service.de
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Vertretungsberechtigt</h2>
            <p>Michael Spangenberg, Martina Spangenberg</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Haftungsausschluss</h2>
            <p>Bitte rechtlich prüfen und durch vollständige rechtliche Texte ersetzen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}