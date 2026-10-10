import { createFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Jishnu R." },
    { name: "description", content: "Explore banking compliance AI, stock prediction, bus tracking, and career recommendation projects." },
    { property: "og:title", content: "Projects — Jishnu R." },
    { property: "og:description", content: "Explore banking compliance AI, stock prediction, bus tracking, and career recommendation projects." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ProjectsPage,
});
