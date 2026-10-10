import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Jishnu R. — AI & Data Science Engineer" },
    { name: "description", content: "Explore Jishnu R.’s work in AI, Machine Learning, software development, AWS Cloud, and IoT." },
    { property: "og:title", content: "Jishnu R. — AI & Data Science Engineer" },
    { property: "og:description", content: "Curiosity meets intelligent solutions. Discover my projects, skills, and learning journey." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});
