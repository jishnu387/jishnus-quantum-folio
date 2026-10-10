import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Jishnu R." },
    { name: "description", content: "A curious engineering student exploring AI, software, AWS Cloud, and IoT." },
    { property: "og:title", content: "About Jishnu R." },
    { property: "og:description", content: "A curious engineering student exploring AI, software, AWS Cloud, and IoT." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: AboutPage,
});
