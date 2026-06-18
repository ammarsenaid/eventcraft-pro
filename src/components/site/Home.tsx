import { useEffect, useState, type FormEvent } from "react";
import {
  Menu, X, Calendar, Users, MonitorPlay, Euro, MapPin, Gem,
  Phone, Mail, ArrowRight, Check, ChevronLeft, ChevronRight,
  Linkedin, Twitter, Instagram, Quote, ClipboardList, Headphones,
  Mic2, Hotel, Cog, Wallet, Crown, BarChart3, MapPinned, Sparkles,
} from "lucide-react";
import michaelAsset from "@/assets/michael.jpg.asset.json";
import martinaAsset from "@/assets/martina.jpg.asset.json";
import michelleAsset from "@/assets/michelle.jpg.asset.json";
import event1Asset from "@/assets/event1.jpg.asset.json";
import event2Asset from "@/assets/event2.jpg.asset.json";

const NAVY = "#07192b";

const NAV = [
  { href: "#start", label: "Start" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#team", label: "Team" },
  { href: "#kontakt", label: "Kontakt" },
];

function Logo() {
  return (
    <a href="#start" className="flex items-center gap-4 group">
      <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c89b4a]">
        <span className="font-serif italic text-[#c89b4a] text-2xl leading-none">S</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-white text-[15px] tracking-[0.25em]">CONVENTION-SERVICE</span>
        <span className="mt-1.5 text-[11px] tracking-[0.5em] text-[#c89b4a]">SPANGENBERG</span>
      </span>
    </a>
  );
}

function Header() {
  const [active, setActive] = useState("#start");
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-8 py-7">
        <Logo />
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setActive(n.href)}
              className={`relative text-[15px] tracking-wide transition-colors ${
                active === n.href ? "text-[#c89b4a]" : "text-white/85 hover:text-white"
              }`}
            >
              {n.label}
              {active === n.href && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-6 bg-[#c89b4a]" />
              )}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <CtaButton href="#kontakt">Beratung anfragen</CtaButton>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#07192b] px-8 py-6 space-y-4">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-base text-white/85"
            >
              {n.label}
            </a>
          ))}
          <CtaButton href="#kontakt" full>Beratung anfragen</CtaButton>
        </div>
      )}
    </header>
  );
}

function CtaButton({
  href,
  children,
  full,
  variant = "gold",
}: {
  href: string;
  children: React.ReactNode;
  full?: boolean;
  variant?: "gold" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-[15px] font-medium transition-all duration-300 group";
  const styles =
    variant === "gold"
      ? "bg-[#c89b4a] text-white hover:bg-[#b8893a] shadow-[0_8px_30px_-10px_rgba(200,155,74,0.6)]"
      : "border border-white/30 text-white hover:bg-white/10";
  return (
    <a href={href} className={`${base} ${styles} ${full ? "w-full" : ""}`}>
      <span>{children}</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </a>
  );
}

function Hero() {
  return (
    <section id="start" className="relative" style={{ backgroundColor: NAVY }}>
      <Header />
      <div className="mx-auto max-w-[1400px] px-8 pt-40 pb-12 grid lg:grid-cols-[1fr_1.15fr] gap-10 items-center">
        <div className="text-white">
          <div className="text-[11px] tracking-[0.4em] text-[#c89b4a] uppercase">
            Ihr Partner für besondere Veranstaltungen
          </div>
          <h1 className="mt-7 font-serif text-[44px] md:text-[56px] lg:text-[64px] leading-[1.05] text-white">
            Kongresse, Tagungen & Events professionell organisiert
          </h1>
          <p className="mt-7 text-white/70 text-lg max-w-xl leading-relaxed">
            Wir planen, organisieren und realisieren professionelle Veranstaltungen – persönlich,
            zuverlässig und mit Liebe zum Detail.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="#kontakt">Beratung anfragen</CtaButton>
            <CtaButton href="#leistungen" variant="outline">Leistungen entdecken</CtaButton>
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden aspect-[16/11] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <img
              src={event1Asset.url}
              alt="Großer Kongresssaal mit Teilnehmern"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#07192b]/30" />
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES_PREVIEW = [
  { icon: Users, title: "Eventplanung", text: "Konzeption, Ablaufplanung und Full-Service-Organisation." },
  { icon: ClipboardList, title: "Teilnehmermanagement", text: "Einladungen, Registrierung und persönlicher Service." },
  { icon: MonitorPlay, title: "Technik & Durchführung", text: "Moderne Technik für einen reibungslosen Ablauf." },
  { icon: Euro, title: "Budgetmanagement", text: "Transparente Kostenkontrolle und effiziente Abläufe." },
  { icon: MapPin, title: "Standortsuche", text: "Die passende Location für Ihr Event." },
  { icon: Gem, title: "VIP-Management", text: "Exklusiver Service und diskrete Betreuung." },
];

function ServicesBar() {
  return (
    <section className="relative -mt-10 z-20" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="rounded-2xl bg-[#f5efe4] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.4)] px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 divide-x divide-[#07192b]/10">
            {SERVICES_PREVIEW.map(({ icon: Icon, title, text }) => (
              <div key={title} className="px-4 text-center first:pl-4">
                <div className="flex justify-center">
                  <Icon className="h-9 w-9 text-[#c89b4a]" strokeWidth={1.3} />
                </div>
                <h3 className="mt-4 font-serif text-[17px] text-[#07192b]">{title}</h3>
                <p className="mt-2 text-[12px] text-[#07192b]/65 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { icon: Sparkles, value: "30+", label: "Jahre Erfahrung" },
  { icon: Calendar, value: "1.200+", label: "erfolgreiche Events" },
  { icon: Users, value: "25.000+", label: "Teilnehmer begeistert" },
  { icon: Crown, value: "500+", label: "zufriedene Kunden" },
];

const TEAM = [
  { name: "Michael Spangenberg", role: "Geschäftsführer", img: michaelAsset.url },
  { name: "Martina Spangenberg", role: "Geschäftsführerin", img: martinaAsset.url },
  { name: "Michelle Spangenberg", role: "Projektleitung", img: michelleAsset.url },
];

function StatsTeam() {
  return (
    <section id="team" className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8 grid lg:grid-cols-2 gap-14 items-center">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 divide-x divide-white/10">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 ${i % 2 === 0 ? "border-l-0" : ""}`}
            >
              <s.icon className="h-5 w-5 text-[#c89b4a]" strokeWidth={1.5} />
              <div className="mt-3 font-serif text-5xl text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/65">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-3 gap-4">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="rounded-2xl bg-[#0d2238] border border-white/5 overflow-hidden hover:border-[#c89b4a]/30 transition"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#07192b]">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover object-top" />
              </div>
              <div className="px-4 py-5 text-center">
                <div className="font-serif text-white text-[15px] leading-tight">{m.name}</div>
                <div className="mt-1 text-[12px] italic text-[#c89b4a]">{m.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpressionsAndTestimonials() {
  const [idx, setIdx] = useState(0);
  const testimonials = [
    {
      text: "Convention-Service Spangenberg hat unseren Kongress mit über 600 Teilnehmern perfekt organisiert. Von der Planung bis zur Durchführung lief alles reibungslos. Ein erfahrenes Team, auf das man sich zu 100 % verlassen kann.",
      name: "Referenzkunde",
      role: "Geschäftsführung",
    },
    {
      text: "Besonders überzeugt hat uns die ruhige, strukturierte und lösungsorientierte Arbeitsweise. Auch in stressigen Momenten behält das Team den Überblick.",
      name: "Referenzkunde",
      role: "Veranstaltungsleitung",
    },
    {
      text: "Ein erfahrenes Team, auf das man sich bei wichtigen Veranstaltungen verlassen kann. Klare Kommunikation und höchste Zuverlässigkeit.",
      name: "Referenzkunde",
      role: "Organisation",
    },
  ];
  const t = testimonials[idx];

  return (
    <section id="referenzen" className="pb-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8 grid lg:grid-cols-2 gap-6">
        {/* Event Impressionen */}
        <div className="rounded-2xl bg-[#f5efe4] p-7">
          <div className="text-[11px] tracking-[0.35em] text-[#07192b] uppercase font-medium">
            Event-Impressionen
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[event1Asset.url, event2Asset.url, event1Asset.url].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src={img} alt={`Event ${i + 1}`} className="h-full w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
          <a href="#kontakt" className="mt-6 inline-flex items-center gap-2 text-[#c89b4a] text-sm font-medium hover:gap-3 transition-all">
            Weitere Referenzen ansehen <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Testimonial */}
        <div className="rounded-2xl bg-[#f5efe4] p-8 relative">
          <div className="text-[11px] tracking-[0.35em] text-[#07192b] uppercase font-medium">
            Das sagen unsere Kunden
          </div>
          <div className="mt-6 flex gap-5">
            <Quote className="h-9 w-9 shrink-0 text-[#c89b4a]" strokeWidth={1.2} />
            <div>
              <p className="text-[#07192b] text-[15px] leading-relaxed">{t.text}</p>
              <div className="mt-5">
                <div className="font-medium text-[#c89b4a]">{t.name}</div>
                <div className="text-sm text-[#07192b]/65">{t.role}</div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-[#07192b]/10 pt-5">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c89b4a]/40 text-[#c89b4a] hover:bg-[#c89b4a] hover:text-white transition"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-[#c89b4a]" : "w-2 bg-[#07192b]/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c89b4a]/40 text-[#c89b4a] hover:bg-[#c89b4a] hover:text-white transition"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="ueber-uns" className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img src={event2Asset.url} alt="Tagungssaal" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col items-center justify-center h-36 w-36 rounded-2xl bg-[#c89b4a] text-white shadow-2xl">
            <span className="font-serif text-5xl">30+</span>
            <span className="text-[10px] uppercase tracking-widest mt-1">Jahre</span>
          </div>
        </div>
        <div className="text-white">
          <div className="text-[11px] tracking-[0.4em] text-[#c89b4a] uppercase">Über uns</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-tight">
            Erfahrung, die Veranstaltungen sicher macht
          </h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            Convention-Service Spangenberg steht für persönliche Betreuung, strukturierte Planung
            und zuverlässige Umsetzung. Als erfahrene Veranstaltungsagentur begleiten wir
            Unternehmen, Verbände und Organisationen von der ersten Idee bis zur erfolgreichen
            Durchführung.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { icon: Headphones, title: "Persönlich" },
              { icon: ClipboardList, title: "Strukturiert" },
              { icon: Check, title: "Zuverlässig" },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 px-4 py-5">
                <Icon className="h-5 w-5 text-[#c89b4a]" strokeWidth={1.5} />
                <div className="mt-3 font-serif text-lg text-white">{title}</div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <CtaButton href="#leistungen">Mehr über uns erfahren</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}

const ALL_SERVICES = [
  { icon: Mic2, title: "Kongressorganisation", text: "Komplexe Kongresse strukturiert geplant und sicher umgesetzt." },
  { icon: Calendar, title: "Tagungsmanagement", text: "Tagungen mit klarer Dramaturgie und reibungslosem Ablauf." },
  { icon: Sparkles, title: "Eventplanung", text: "Firmenevents mit individueller Konzeption und Wirkung." },
  { icon: Users, title: "Teilnehmermanagement", text: "Registrierung, Kommunikation, Vor-Ort-Service." },
  { icon: Hotel, title: "Hotel- & Standortsuche", text: "Die passende Location und Übernachtung – verhandelt und gebucht." },
  { icon: Cog, title: "Technik & Ablaufregie", text: "Audio, Video, Licht und Regie aus einer Hand." },
  { icon: Wallet, title: "Budget & Kosten", text: "Transparente Kalkulation und laufende Abstimmung." },
  { icon: Crown, title: "VIP & Referenten", text: "Diskreter Service für Gäste mit besonderem Anspruch." },
  { icon: MapPinned, title: "Vor-Ort-Koordination", text: "Persönliche Präsenz und souveräne Steuerung am Eventtag." },
  { icon: BarChart3, title: "Nachbereitung & Reporting", text: "Auswertung, Dokumentation und Empfehlungen." },
];

function Services() {
  return (
    <section id="leistungen" className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] tracking-[0.4em] text-[#c89b4a] uppercase">Unsere Leistungen</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
            Full-Service für anspruchsvolle Veranstaltungen
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {ALL_SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-[#f5efe4] hover:border-[#c89b4a] group transition-all duration-300"
            >
              <Icon className="h-6 w-6 text-[#c89b4a] group-hover:text-[#07192b]" strokeWidth={1.3} />
              <h3 className="mt-5 font-serif text-lg text-white group-hover:text-[#07192b]">{title}</h3>
              <p className="mt-2 text-sm text-white/60 group-hover:text-[#07192b]/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { n: "01", title: "Erstgespräch", text: "Wir klären Ziele, Rahmenbedingungen und Anforderungen." },
  { n: "02", title: "Planung", text: "Wir entwickeln Ablauf, Budget, Location und Organisation." },
  { n: "03", title: "Umsetzung", text: "Wir koordinieren Dienstleister, Technik, Gäste und Ablauf." },
  { n: "04", title: "Nachbereitung", text: "Wir werten Ergebnisse aus und dokumentieren die Veranstaltung." },
];

function Process() {
  return (
    <section className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8">
        <div className="max-w-2xl">
          <div className="text-[11px] tracking-[0.4em] text-[#c89b4a] uppercase">Ablauf</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white">
            In vier Schritten zum Erfolg
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s) => (
            <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <div className="font-serif text-5xl text-[#c89b4a]/60">{s.n}</div>
              <h3 className="mt-3 font-serif text-2xl text-white">{s.title}</h3>
              <p className="mt-3 text-white/65 leading-relaxed text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontakt" className="py-24" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-[1400px] px-8 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 text-white">
          <div className="text-[11px] tracking-[0.4em] text-[#c89b4a] uppercase">Kontakt</div>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl text-white leading-tight">
            Sprechen wir über Ihr Event
          </h2>
          <p className="mt-5 text-white/70">
            Wir melden uns persönlich und besprechen Ihre Anforderungen in Ruhe.
          </p>
          <div className="mt-10 space-y-5">
            <Info icon={MapPinned} title="Adresse" lines={["Am Gericht 2", "34537 Bad Wildungen"]} />
            <Info icon={Phone} title="Telefon" lines={["+49 5621 2865", "Mobil: +49 172 6058811"]} />
            <Info icon={Mail} title="E-Mail" lines={["info@convention-service.de"]} />
          </div>
        </div>
        <div className="lg:col-span-3">
          <form onSubmit={onSubmit} className="rounded-2xl bg-[#f5efe4] p-8 md:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#c89b4a] text-white">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-2xl text-[#07192b]">Vielen Dank.</h3>
                <p className="mt-3 text-[#07192b]/70 max-w-md mx-auto">
                  Ihre Anfrage wurde vorbereitet. Wir melden uns zeitnah bei Ihnen.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" name="name" required />
                  <Field label="Unternehmen" name="company" />
                  <Field label="E-Mail" name="email" type="email" required />
                  <Field label="Telefonnummer" name="phone" type="tel" />
                  <Field label="Art der Veranstaltung" name="type" />
                  <Field label="Teilnehmerzahl" name="size" type="number" />
                  <Field label="Wunschdatum" name="date" type="date" />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-[#07192b] mb-2">Nachricht</label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full rounded-lg border border-[#07192b]/15 bg-white px-4 py-3 text-[#07192b] focus:border-[#c89b4a] focus:ring-2 focus:ring-[#c89b4a]/20 outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-full bg-[#c89b4a] px-7 py-3.5 text-[15px] font-medium text-white hover:bg-[#b8893a] transition-colors shadow-[0_8px_30px_-10px_rgba(200,155,74,0.6)]"
                >
                  Anfrage senden <ArrowRight className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon: Icon, title, lines }: { icon: typeof Phone; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#c89b4a]/30 bg-white/5 text-[#c89b4a]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-white/60">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-white">{l}</div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#07192b] mb-2">
        {label}{required && <span className="text-[#c89b4a]"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-[#07192b]/15 bg-white px-4 py-3 text-[#07192b] focus:border-[#c89b4a] focus:ring-2 focus:ring-[#c89b4a]/20 outline-none transition"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="text-white/80 border-t border-white/10">
      <div className="mx-auto max-w-[1400px] px-8 py-16 grid lg:grid-cols-[1.2fr_1fr_1fr_1fr_auto] gap-10 items-start">
        <div>
          <Logo />
          <p className="mt-6 text-sm text-white/55 leading-relaxed max-w-xs">
            <span className="font-serif text-[#c89b4a] block">Professionelle Organisation.</span>
            Persönliche Betreuung. Perfekte Ergebnisse.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/50 mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#c89b4a]" /> +49 5621 2865</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#c89b4a]" /> info@convention-service.de</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/50 mb-4">Adresse</h4>
          <p className="text-sm text-white/75 leading-relaxed">
            Convention-Service Spangenberg<br />
            Am Gericht 2<br />
            34537 Bad Wildungen<br />
            Deutschland
          </p>
        </div>
        <div>
          <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/50 mb-4">Folgen Sie uns</h4>
          <div className="flex gap-3">
            {[Linkedin, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 hover:bg-[#c89b4a] hover:text-white hover:border-[#c89b4a] transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <CtaButton href="#kontakt">Beratung anfragen</CtaButton>
          <div className="mt-5 flex gap-5 text-sm justify-end">
            <a href="/datenschutz" className="text-[#c89b4a] hover:underline">Datenschutz</a>
            <a href="/impressum" className="text-[#c89b4a] hover:underline">Impressum</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-8 py-6 text-xs text-white/40 text-center">
          © 2026 Convention-Service Spangenberg. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}

export function Home() {
  return (
    <div style={{ backgroundColor: NAVY }} className="text-white">
      <Hero />
      <ServicesBar />
      <StatsTeam />
      <ImpressionsAndTestimonials />
      <About />
      <Services />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}