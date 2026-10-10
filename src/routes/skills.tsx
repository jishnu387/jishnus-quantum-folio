import { createFileRoute } from "@tanstack/react-router";
import { SkillsPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/skills")({
  head: () => ({ meta: [
    { title: "Technical Skills — Jishnu R." },
    { name: "description", content: "Programming, web development, AI, cloud tools, and IoT technologies in my evolving toolkit." },
    { property: "og:title", content: "Technical Skills — Jishnu R." },
    { property: "og:description", content: "Programming, web development, AI, cloud tools, and IoT technologies in my evolving toolkit." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: SkillsPage,
});
