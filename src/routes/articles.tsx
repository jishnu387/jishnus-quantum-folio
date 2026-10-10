import { createFileRoute } from "@tanstack/react-router";
import { ArticlesPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/articles")({
  head: () => ({ meta: [
    { title: "Learning Journal — Jishnu R." },
    { name: "description", content: "Upcoming writing on AI, Machine Learning, AWS, development, IoT, and algorithms." },
    { property: "og:title", content: "Learning Journal — Jishnu R." },
    { property: "og:description", content: "Upcoming writing on AI, Machine Learning, AWS, development, IoT, and algorithms." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ArticlesPage,
});
