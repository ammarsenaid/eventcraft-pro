import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "css-cookie-consent-v1";

type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const save = (consent: Consent) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    setOpen(false);
  };

  const acceptAll = () =>
    save({ necessary: true, analytics: true, marketing: true, timestamp: new Date().toISOString() });
  const rejectAll = () =>
    save({ necessary: true, analytics: false, marketing: false, timestamp: new Date().toISOString() });
  const saveSelection = () =>
    save({ necessary: true, analytics, marketing, timestamp: new Date().toISOString() });

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#c89b4a]/30 bg-[#07192b] text-[#f5efe4] shadow-2xl">
        <div className="p-5 sm:p-7">
          <h2 id="cookie-title" className="font-serif text-xl sm:text-2xl text-[#c89b4a]">
            Wir respektieren Ihre Privatsphäre
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#f5efe4]/85">
            Wir verwenden Cookies, um unsere Website für Sie optimal zu gestalten und fortlaufend
            verbessern zu können. Technisch notwendige Cookies sind für den Betrieb der Seite
            erforderlich. Andere Cookies (z. B. zur Analyse oder für Marketing) setzen wir nur mit
            Ihrer Einwilligung gemäß DSGVO und TDDDG ein. Sie können Ihre Auswahl jederzeit
            anpassen. Weitere Informationen finden Sie in unserer{" "}
            <Link to="/datenschutz" className="underline underline-offset-2 hover:text-[#c89b4a]">
              Datenschutzerklärung
            </Link>
            .
          </p>

          {showSettings && (
            <div className="mt-5 space-y-3 rounded-lg border border-white/10 bg-white/5 p-4 text-sm">
              <label className="flex items-start gap-3 opacity-80">
                <input type="checkbox" checked disabled className="mt-1 h-4 w-4 accent-[#c89b4a]" />
                <span>
                  <span className="block font-medium">Notwendig</span>
                  <span className="block text-[#f5efe4]/70">
                    Für den Betrieb der Website erforderlich. Immer aktiv.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#c89b4a]"
                />
                <span>
                  <span className="block font-medium">Statistik / Analyse</span>
                  <span className="block text-[#f5efe4]/70">
                    Hilft uns zu verstehen, wie Besucher die Website nutzen.
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#c89b4a]"
                />
                <span>
                  <span className="block font-medium">Marketing</span>
                  <span className="block text-[#f5efe4]/70">
                    Wird verwendet, um Werbung relevanter zu gestalten.
                  </span>
                </span>
              </label>
            </div>
          )}

          <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
            <button
              type="button"
              onClick={() => setShowSettings((s) => !s)}
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/5"
            >
              {showSettings ? "Einstellungen ausblenden" : "Einstellungen"}
            </button>
            <button
              type="button"
              onClick={rejectAll}
              className="rounded-md border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/5"
            >
              Nur notwendige
            </button>
            {showSettings && (
              <button
                type="button"
                onClick={saveSelection}
                className="rounded-md border border-[#c89b4a] px-4 py-2 text-sm font-medium text-[#c89b4a] hover:bg-[#c89b4a]/10"
              >
                Auswahl speichern
              </button>
            )}
            <button
              type="button"
              onClick={acceptAll}
              className="rounded-md bg-[#c89b4a] px-4 py-2 text-sm font-semibold text-[#07192b] hover:bg-[#d4a85a]"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;