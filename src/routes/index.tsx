import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/site/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convention-Service Spangenberg | Kongresse, Tagungen & Events professionell organisiert" },
      { name: "description", content: "Convention-Service Spangenberg organisiert Kongresse, Tagungen und Events mit Erfahrung, persönlicher Betreuung und zuverlässiger Umsetzung in Bad Wildungen und darüber hinaus." },
      { property: "og:title", content: "Convention-Service Spangenberg | Kongresse, Tagungen & Events" },
      { property: "og:description", content: "Veranstaltungsagentur aus Bad Wildungen für Kongresse, Tagungen und Firmenevents." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
