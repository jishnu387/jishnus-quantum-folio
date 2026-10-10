import { createFileRoute } from "@tanstack/react-router";
import { CodingProfilesPage } from "@/components/portfolio/Pages";
export const Route = createFileRoute("/coding-profiles")({
  head: () => ({ meta: [
    { title: "Coding Profiles — Jishnu R." },
    { name: "description", content: "Problem solving and open-source learning through LeetCode and GitHub." },
    { property: "og:title", content: "Coding Profiles — Jishnu R." },
    { property: "og:description", content: "Problem solving and open-source learning through LeetCode and GitHub." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CodingProfilesPage,
});
