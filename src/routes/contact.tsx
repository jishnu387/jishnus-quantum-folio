import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Jishnu R." },
    { name: "description", content: "Start a conversation about projects, collaboration, and opportunities." },
    { property: "og:title", content: "Contact Jishnu R." },
    { property: "og:description", content: "Start a conversation about projects, collaboration, and opportunities." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ContactPage,
});
