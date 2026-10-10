<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Keep the platform’s TanStack Start routing and Vite bootstrap; React Router cannot replace the managed router.
- Write portfolio UI, data, and hooks in JavaScript/JSX with typed route adapters so authoring remains readable within the platform.
- Centralize real content and optional links in src/data/portfolio.js; absent assets and links must remain unavailable, never fabricated.
- Lazy-load Three.js and particles behind browser-only capability checks to preserve SSR and reduce initial loading.
- Define visual tokens and shared styles in src/styles.css, with responsive and animation rules in separate local stylesheets.
- Contact uses a mailto handoff only when the owner supplies an email; no server integration or delivery claims without a configured provider.
