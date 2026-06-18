import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | Convention-Service Spangenberg" },
      { name: "description", content: "Datenschutzerklärung der Convention-Service Spangenberg." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#faf7f1] text-[#07192b]">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Link to="/" className="text-sm text-[#c89b4a] hover:underline">← Zurück zur Startseite</Link>
        <h1 className="mt-6 font-serif text-5xl">Datenschutz</h1>
        <p className="mt-4 text-sm text-[#07192b]/60 italic">Bitte rechtlich prüfen.</p>

        <div className="mt-10 space-y-6 text-[#07192b]/80">
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Verantwortlich</h2>
            <p>Convention-Service Spangenberg, Am Gericht 2, 34537 Bad Wildungen.</p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Datenerhebung</h2>
            <p>
              Diese Website verarbeitet personenbezogene Daten ausschließlich im Rahmen der
              geltenden Datenschutzbestimmungen. Detaillierte rechtssichere Texte sollten
              durch eine fachkundige Stelle ergänzt werden.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Kontaktformular</h2>
            <p>
              Angaben aus dem Kontaktformular werden ausschließlich zur Bearbeitung Ihrer
              Anfrage genutzt und nicht an Dritte weitergegeben.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-[#07192b]">Hinweis</h2>
            <p>Bitte rechtlich prüfen und durch vollständige Datenschutzerklärung ersetzen.</p>
          </section>
        </div>
      </div>
    </div>
  );
}