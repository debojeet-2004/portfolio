# SEO & Backlinking Playbook: debojeet.in 🔗 devbuilds.in

This playbook outlines the strategic rules, cross-linking configurations, and SEO best practices to help rank both **debojeet.in** (your personal developer portfolio) and **devbuilds.in** (your developer tools & templates platform) in search engines like Google.

---

## 1. The Core Strategy: Collaborative Backlinking
Backlinks (links from other sites to yours) are one of Google’s most powerful ranking factors. By strategically interlinking your two domains, you share **"link authority"** (PageRank) between them.

```
       [ debojeet.in ]  ------------( Contextual Links )----------->  [ devbuilds.in ]
     (Personal Portfolio)                                           (UI & Dev Tools Platform)
              ^                                                                 |
              |                                                                 |
              +--------------( Creator Credits & Authorship )-------------------+
```

### Strategic Backlinking Rules:
1. **Use Contextual Anchors**: Avoid generic link text like "click here" or "my site". Instead, use descriptive anchor text:
   - **Good**: *"I design modern UI tools at **[Devbuilds](https://devbuilds.in)**..."*
   - **Bad**: *"Check out my other website **[here](https://devbuilds.in)**."*
2. **Vary Your Landing Pages**: Don't link only to homepages. Link to deep inner pages:
   - Link from `debojeet.in` blogs directly to particular component pages or packages on `devbuilds.in`.
   - Link from `devbuilds.in` docs to specific project case-studies on `debojeet.in`.
3. **Natural Integration**: Search engines penalize artificial link lists. Backlinks must flow naturally within highly engaging paragraphs (like your career transition post or your project summaries).

---

## 2. On-Page SEO Best Practices

Every page or blog post you publish on both sites should follow this standard structural checklist to ensure indexing spiders crawl and understand them instantly.

### HTML Structure Hierarchy
* **Single `<h1>` Tag**: Ensure each page has exactly *one* `<h1>` tag at the top representing the primary keyword.
* **Heading Hierarchy**: Nest sub-headings logically:
  - `<h1>` Title of the Post
    - `<h2>` Core Subheading
      - `<h3>` Minor Point or Checklist
* **Semantic Elements**: Use HTML5 semantic layouts (`<main>`, `<article>`, `<nav>`, `<footer>`) instead of generic nested `<div>` blocks.

### Core Meta Tags
Each page template must inject these dynamic tags:
```tsx
export const metadata = {
  title: "A Unique Title | Debojeet Karmakar",
  description: "A compelling summary under 160 characters designed to drive organic click-throughs.",
  openGraph: {
    type: "website",
    url: "https://debojeet.in",
    title: "...",
    description: "...",
    images: [{ url: "/og-image.jpg" }],
  }
};
```

---

## 3. Advanced Technical SEO & Schema Markup

Search engines read structural metadata to show rich snippets (star ratings, reading times, author profiles) in searches.

### JSON-LD Structured Data
Always inject a structural schema block at the bottom of your blog post or profile page to verify authorship:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why I’m Transitioning from Full-Stack Development to Data Analytics",
  "datePublished": "2026-05-29",
  "url": "https://debojeet.in/blog/from-full-stack-to-data-analytics",
  "author": {
    "@type": "Person",
    "name": "Debojeet Karmakar",
    "url": "https://debojeet.in"
  }
}
</script>
```

### Sitemaps & Crawler Guidance
Ensure both directories contain:
1. **`sitemap.xml`**: A listing of every valid, renderable URL.
2. **`robots.txt`**: Guidelines directing search indexers where they are permitted to go:
   ```text
   User-agent: *
   Allow: /
   Sitemap: https://debojeet.in/sitemap.xml
   ```

---

## 4. Playbook Execution Checklist for Debojeet

When you build a new feature or publish an article, run this quick check:

- [ ] Does my frontmatter contain a high-quality `summary`? (For meta-descriptions).
- [ ] Is there at least one highly relevant backlink pointing to `devbuilds.in` using high-value anchor text like "animated components" or "development tools"?
- [ ] Have I updated the creator/credits footer on `devbuilds.in` to point to `https://debojeet.in` to pass link authority back?
- [ ] Are all images configured with standard markdown `alt` tags describing the image?
