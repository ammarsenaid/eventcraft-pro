import { useEffect, useState, type FormEvent } from "react";
import {
  Menu, X, Calendar, Users, Cog, Wallet, MapPin, Crown,
  Phone, Mail, MapPinned, ArrowRight, Check, Sparkles,
  ClipboardList, Mic2, BarChart3, Headphones, Hotel, Star,
} from "lucide-react";
import michaelAsset from "@/assets/michael.jpg.asset.json";
import martinaAsset from "@/assets/martina.jpg.asset.json";
import michelleAsset from "@/assets/michelle.jpg.asset.json";
import event1Asset from "@/assets/event1.jpg.asset.json";
import event2Asset from "@/assets/event2.jpg.asset.json";

const NAV = [
  { href: "#start", label: "Start" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "#team", label: "Team" },
  { href: "#kontakt", label: "Kontakt" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#start" className="flex items-center gap-3 group">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c89b4a] bg-transparent">
        <span className="font-serif text-[#c89b4a] text-lg leading-none">CS</span>
      </span>
      <span className={`font-serif text-lg leading-tight ${light ? "text-white" : "text-[#07192b]"}`}>
        Convention-Service
        <span className="block text-xs tracking-[0.3em] uppercase text-[#c89b4a] font-sans">Spangenberg</span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-[#07192b]/80 hover:text-[#c89b4a] transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[#c89b4a] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#b8893a] transition-colors"
          >
            Beratung anfragen <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-[#07192b]"
          aria-label="Menü"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-[#07192b]/10 bg-white px-6 py-4 space-y-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-[#07192b]"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="block rounded-full bg-[#c89b4a] px-5 py-3 text-center text-sm font-medium text-white"
          >
            Beratung anfragen
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="start" className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={event1Asset.url}
          alt="Großer Kongresssaal mit Teilnehmern"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07192b] via-[#07192b]/90 to-[#07192b]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192b]/80 via-transparent to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl text-white fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c89b4a]/40 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-[#c89b4a]">
            <Sparkles className="h-3.5 w-3.5" />
            Ihr Partner für besondere Veranstaltungen
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-white">
            Kongresse, Tagungen & Events <em className="not-italic text-[#c89b4a]">professionell organisiert</em>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
            Wir planen, organisieren und realisieren professionelle Veranstaltungen – persönlich,
            zuverlässig und mit Liebe zum Detail.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-[#c89b4a] px-7 py-3.5 text-base font-medium text-white shadow-lg hover:bg-[#b8893a] transition-colors"
            >
              Beratung anfragen <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
            >
              Leistungen entdecken
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60 italic">
            Von der ersten Idee bis zur erfolgreichen Durchführung.
          </p>
        </div>
      </div>
    </section>
  );
}

const SERVICES_PREVIEW = [
  { icon: Calendar, title: "Eventplanung", text: "Konzeption, Ablaufplanung und Full-Service-Organisation." },
  { icon: Users, title: "Teilnehmermanagement", text: "Einladungen, Registrierung und persönlicher Service." },
  { icon: Cog, title: "Technik & Durchführung", text: "Moderne Technik für einen reibungslosen Ablauf." },
  { icon: Wallet, title: "Budgetmanagement", text: "Transparente Kostenkontrolle und effiziente Abläufe." },
  { icon: MapPin, title: "Standortsuche", text: "Die passende Location für Ihr Event." },
  { icon: Crown, title: "VIP-Management", text: "Exklusiver Service und diskrete Betreuung." },
];

function ServicesPreview() {
  return (
    <section className="py-24 ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Leistungen im Überblick</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            Alles aus einer Hand
          </h2>
          <p className="mt-4 text-[#07192b]/70">
            Sechs Kernbereiche, die zusammen für reibungslose und erfolgreiche Veranstaltungen sorgen.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_PREVIEW.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white border border-[#07192b]/5 p-8 shadow-[0_4px_30px_-12px_rgba(7,25,43,0.1)] hover:shadow-[0_20px_50px_-20px_rgba(200,155,74,0.4)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#c89b4a]/30 bg-[#c89b4a]/5 text-[#c89b4a] group-hover:bg-[#c89b4a] group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-[#07192b]">{title}</h3>
              <p className="mt-3 text-[#07192b]/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "1.200+", label: "erfolgreiche Events" },
  { value: "25.000+", label: "begeisterte Teilnehmer" },
  { value: "500+", label: "zufriedene Kunden" },
];

function Stats() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ backgroundColor: "#07192b" }}>
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #c89b4a 0%, transparent 50%), radial-gradient(circle at 80% 70%, #c89b4a 0%, transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center lg:text-left border-l-0 lg:border-l lg:border-[#c89b4a]/30 lg:pl-8 first:border-l-0 first:pl-0">
              <div className="font-serif text-5xl md:text-6xl text-[#c89b4a]">{s.value}</div>
              <div className="mt-2 text-sm uppercase tracking-wider text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ABOUT_FEATURES = [
  { icon: Headphones, title: "Persönlich", text: "Direkter Kontakt, individuelle Betreuung – auf Augenhöhe." },
  { icon: ClipboardList, title: "Strukturiert", text: "Klare Prozesse, transparente Planung, durchdachte Abläufe." },
  { icon: Check, title: "Zuverlässig", text: "Termintreue, Budgetdisziplin und Qualität bis ins Detail." },
];

function About() {
  return (
    <section id="ueber-uns" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={event2Asset.url}
            alt="Tagungssaal mit Teilnehmern"
            className="rounded-2xl shadow-2xl object-cover w-full aspect-[4/5]"
          />
          <div className="absolute -bottom-8 -right-4 lg:-right-8 hidden md:flex flex-col items-center justify-center h-40 w-40 rounded-2xl bg-[#07192b] text-white shadow-2xl">
            <span className="font-serif text-5xl text-[#c89b4a]">30+</span>
            <span className="text-xs uppercase tracking-widest mt-1">Jahre</span>
            <span className="text-xs text-white/70">Erfahrung</span>
          </div>
        </div>
        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Über uns</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b] leading-tight">
            Erfahrung, die Veranstaltungen sicher macht
          </h2>
          <p className="mt-6 text-[#07192b]/75 text-lg leading-relaxed">
            Convention-Service Spangenberg steht für persönliche Betreuung, strukturierte Planung
            und zuverlässige Umsetzung. Als erfahrene Veranstaltungsagentur begleiten wir
            Unternehmen, Verbände und Organisationen von der ersten Idee bis zur erfolgreichen
            Durchführung.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {ABOUT_FEATURES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-[#07192b]/10 p-5 bg-[#faf7f1]">
                <Icon className="h-6 w-6 text-[#c89b4a]" strokeWidth={1.5} />
                <div className="mt-3 font-serif text-lg text-[#07192b]">{title}</div>
                <div className="mt-1 text-sm text-[#07192b]/70">{text}</div>
              </div>
            ))}
          </div>
          <a
            href="#team"
            className="mt-8 inline-flex items-center gap-2 text-[#07192b] font-medium border-b border-[#c89b4a] pb-1 hover:text-[#c89b4a] transition-colors"
          >
            Mehr über uns erfahren <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    name: "Michael Spangenberg",
    role: "Geschäftsführer",
    text: "Erfahrung, Übersicht und ein sicherer Blick für reibungslose Veranstaltungsabläufe.",
    img: michaelAsset.url,
    email: "mi.spangenberg@convention-service.de",
  },
  {
    name: "Martina Spangenberg",
    role: "Geschäftsführerin",
    text: "Persönliche Betreuung, Organisationstalent und Liebe zum Detail.",
    img: martinaAsset.url,
    email: "ma.spangenberg@convention-service.de",
  },
  {
    name: "Michelle Spangenberg",
    role: "Projektleitung",
    text: "Moderne Projektkoordination, klare Kommunikation und zuverlässige Umsetzung.",
    img: michelleAsset.url,
  },
];

function Team() {
  return (
    <section id="team" className="py-24 ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Unser Team</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            Menschen, die Ihr Event tragen
          </h2>
          <p className="mt-4 text-[#07192b]/70">
            Drei Persönlichkeiten, ein gemeinsames Versprechen: Veranstaltungen mit Substanz.
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {TEAM.map((m) => (
            <article
              key={m.name}
              className="group rounded-2xl bg-white overflow-hidden shadow-[0_4px_30px_-12px_rgba(7,25,43,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(7,25,43,0.3)] transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[#07192b]/5">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-[0.25em] text-[#c89b4a]">{m.role}</div>
                <h3 className="mt-2 font-serif text-2xl text-[#07192b]">{m.name}</h3>
                <p className="mt-3 text-[#07192b]/70 leading-relaxed">{m.text}</p>
                {m.email && (
                  <a
                    href={`mailto:${m.email}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm text-[#07192b]/80 hover:text-[#c89b4a]"
                  >
                    <Mail className="h-4 w-4" /> {m.email}
                  </a>
                )}
              </div>
            </article>
          ))}
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
  { icon: Hotel, title: "Hotel- und Standortsuche", text: "Die passende Location und Übernachtung – verhandelt und gebucht." },
  { icon: Cog, title: "Technik & Ablaufregie", text: "Audio, Video, Licht und Regie aus einer Hand." },
  { icon: Wallet, title: "Budget- und Kostenkontrolle", text: "Transparente Kalkulation und laufende Abstimmung." },
  { icon: Crown, title: "VIP- und Referentenbetreuung", text: "Diskreter Service für Gäste mit besonderem Anspruch." },
  { icon: MapPinned, title: "Vor-Ort-Koordination", text: "Persönliche Präsenz und souveräne Steuerung am Eventtag." },
  { icon: BarChart3, title: "Nachbereitung & Reporting", text: "Auswertung, Dokumentation und Empfehlungen für die Zukunft." },
];

function Services() {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Unsere Leistungen</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            Full-Service für anspruchsvolle Veranstaltungen
          </h2>
          <p className="mt-4 text-[#07192b]/70">
            Von der ersten Konzeption bis zur Auswertung – wir übernehmen alle relevanten Bereiche.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ALL_SERVICES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-xl border border-[#07192b]/10 bg-[#faf7f1]/50 p-6 hover:bg-white hover:border-[#c89b4a]/40 hover:shadow-lg transition-all"
            >
              <Icon className="h-6 w-6 text-[#c89b4a]" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-lg text-[#07192b] leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-[#07192b]/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY = [
  { img: event1Asset.url, title: "Kongressorganisation", text: "Großveranstaltungen mit mehreren hundert Teilnehmern." },
  { img: event2Asset.url, title: "Tagungsbetreuung", text: "Strukturierte Abläufe in repräsentativen Sälen." },
  { img: event1Asset.url, title: "Technik & Ablauf", text: "Bühne, Licht, Ton und Regie professionell koordiniert." },
  { img: event2Asset.url, title: "Teilnehmermanagement", text: "Empfang, Registrierung, Betreuung – persönlich vor Ort." },
];

function Gallery() {
  return (
    <section id="referenzen" className="py-24 ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Referenzen</span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
              Event-Impressionen aus der Praxis
            </h2>
            <p className="mt-4 text-[#07192b]/70">
              Einblicke in professionell organisierte Veranstaltungen, Tagungen und Kongresse.
            </p>
          </div>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[#07192b] px-6 py-3 text-sm font-medium text-white hover:bg-[#0d2a45] transition-colors"
          >
            Referenzprojekt anfragen <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {GALLERY.map((g, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl aspect-[16/10] shadow-xl"
            >
              <img
                src={g.img}
                alt={g.title}
                className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192b] via-[#07192b]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-xs uppercase tracking-[0.25em] text-[#c89b4a]">Event-Impression</div>
                <h3 className="mt-2 font-serif text-2xl">{g.title}</h3>
                <p className="mt-1 text-white/80 text-sm">{g.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    text: "Convention-Service Spangenberg hat unseren Kongress professionell begleitet. Von der Planung bis zur Durchführung lief alles reibungslos.",
    name: "Referenzkunde",
    role: "Geschäftsführung",
  },
  {
    text: "Besonders überzeugt hat uns die ruhige, strukturierte und lösungsorientierte Arbeitsweise.",
    name: "Referenzkunde",
    role: "Veranstaltungsleitung",
  },
  {
    text: "Ein erfahrenes Team, auf das man sich bei wichtigen Veranstaltungen verlassen kann.",
    name: "Referenzkunde",
    role: "Organisation",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Stimmen unserer Kunden</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            Vertrauen, das uns trägt
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-[#07192b]/10 bg-[#faf7f1] p-8 flex flex-col"
            >
              <div className="flex gap-1 text-[#c89b4a]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-xl text-[#07192b] leading-relaxed flex-1">
                „{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-[#07192b]/10">
                <div className="font-medium text-[#07192b]">{t.name}</div>
                <div className="text-sm text-[#07192b]/60">{t.role}</div>
              </figcaption>
            </figure>
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
    <section className="py-24 ivory">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Ablauf</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            In vier Schritten zur erfolgreichen Veranstaltung
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-white p-8 border border-[#07192b]/5 shadow-sm">
              <div className="font-serif text-6xl text-[#c89b4a]/30">{s.n}</div>
              <h3 className="mt-2 font-serif text-2xl text-[#07192b]">{s.title}</h3>
              <p className="mt-3 text-[#07192b]/70 leading-relaxed">{s.text}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 h-6 w-6 text-[#c89b4a]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="py-24" style={{ backgroundColor: "#07192b" }}>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Beratung</span>
        <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
          Planen Sie eine Tagung, einen Kongress<br className="hidden md:block" /> oder ein Firmenevent?
        </h2>
        <p className="mt-6 text-white/75 text-lg max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam eine Veranstaltung schaffen, die professionell organisiert ist
          und in Erinnerung bleibt.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-[#c89b4a] px-7 py-3.5 text-base font-medium text-white shadow-lg hover:bg-[#b8893a] transition-colors"
          >
            Beratung anfragen <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="tel:+4956212865"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            <Phone className="h-4 w-4" /> Direkt kontaktieren
          </a>
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
    <section id="kontakt" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12">
        <div className="lg:col-span-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#c89b4a]">Kontakt</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-[#07192b]">
            Sprechen wir über Ihr Event
          </h2>
          <p className="mt-4 text-[#07192b]/70">
            Wir melden uns persönlich und besprechen Ihre Anforderungen in Ruhe.
          </p>

          <div className="mt-10 space-y-5">
            <ContactRow
              icon={MapPinned}
              title="Adresse"
              lines={["Am Gericht 2", "34537 Bad Wildungen", "Deutschland"]}
            />
            <ContactRow
              icon={Phone}
              title="Telefon"
              lines={["+49 5621 2865", "Mobil: +49 172 6058811"]}
            />
            <ContactRow
              icon={Mail}
              title="E-Mail"
              lines={["info@convention-service.de", "mi.spangenberg@convention-service.de", "ma.spangenberg@convention-service.de"]}
            />
          </div>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-[#faf7f1] p-8 md:p-10 border border-[#07192b]/5"
          >
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
                  className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#c89b4a] px-8 py-3.5 text-white font-medium hover:bg-[#b8893a] transition-colors"
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

function ContactRow({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof Phone;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#c89b4a]/30 bg-[#c89b4a]/5 text-[#c89b4a]">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-[#07192b]/60">{title}</div>
        {lines.map((l) => (
          <div key={l} className="text-[#07192b]">{l}</div>
        ))}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
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
    <footer style={{ backgroundColor: "#07192b" }} className="text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Logo light />
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            Professionelle Organisation. Persönliche Betreuung. Perfekte Ergebnisse.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-[#c89b4a] transition-colors">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Kontakt</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Am Gericht 2</li>
            <li>34537 Bad Wildungen</li>
            <li>+49 5621 2865</li>
            <li>info@convention-service.de</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg text-white mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/impressum" className="hover:text-[#c89b4a] transition-colors">Impressum</a></li>
            <li><a href="/datenschutz" className="hover:text-[#c89b4a] transition-colors">Datenschutz</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 Convention-Service Spangenberg. Alle Rechte vorbehalten.</span>
          <span>Bad Wildungen · Deutschland</span>
        </div>
      </div>
    </footer>
  );
}

export function Home() {
  return (
    <div className="bg-white text-[#07192b]">
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <Stats />
        <About />
        <Team />
        <Services />
        <Gallery />
        <Testimonials />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}