# Developer Blog Writing & SEO Playbook ✍️🚀

This guide defines the ultimate rules, formatting standards, and SEO guidelines for writing highly engaging, discoverable, and search-optimized articles on **debojeet.in** and **devbuilds.in**.

---

## 1. Frontmatter Validation Rules (Schema)

Every blog post must begin with a metadata block (frontmatter) enclosed in triple dashes (`---`). The compiler parses this to build meta tags, sitemaps, and search snippets.

```yaml
---
title: "A Catchy, Action-Oriented Title (50-60 characters)"
publishedAt: "YYYY-MM-DD"
updatedAt: "YYYY-MM-DD"
author: "Debojeet Karmakar"
summary: "A compelling hook under 160 characters describing what the reader will learn."
image: "https://images.unsplash.com/... or /blog/cover.png"
---
```

### Validation Constraints:
* **`title`**: Must be a string. Avoid simple titles; use numbers, hooks, or action-verbs (e.g. *"7 Modern SQL Techniques..."* or *"Why I'm Pivoting to..."*).
* **`publishedAt`**: Must be in standard `YYYY-MM-DD` format (e.g., `2026-05-15`).
* **`summary`**: **CRITICAL FOR SEO.** This value is injected directly into Google's search result snippet and meta description. Keep it between 120 and 150 characters.

---

## 2. Structural Blueprint of a Great Post

To maximize reader engagement and keep "bounce rates" low, structure your blog posts according to this modular blueprint:

```
┌────────────────────────────────────────────────────────┐
│ 1. THE HOOK (Intro)                                   │
│    - Relatable problem, personal angle, direct value   │
├────────────────────────────────────────────────────────┤
│ 2. TABLE OF CONTENTS / KEY TAKEAWAYS                   │
│    - What this post covers (use H2 tags)               │
├────────────────────────────────────────────────────────┤
│ 3. THE BODY (H2, H3, H4)                               │
│    - Code blocks, real examples, data points           │
├────────────────────────────────────────────────────────┤
│ 4. INTEGRATED BACKLINK SECTION                         │
│    - Natural links to debojeet.in & devbuilds.in       │
├────────────────────────────────────────────────────────┤
│ 5. CALL TO ACTION (Outro)                              │
│    - Newsletter signup, LinkedIn, or Email contact     │
└────────────────────────────────────────────────────────┘
```

---

## 3. SEO-Friendly Content Rules

To make sure your articles rank on Google and drive traffic to both of your platforms, follow these writing guidelines:

### A. Keyword Optimization
* **Primary Keyword**: Choose a primary term (e.g., *Data Analyst transition*, *Power BI dashboards*, *Animated React components*).
* **Placement**: Use your primary keyword in:
  1. The **Title** of the post.
  2. The **First paragraph** (first 100 words).
  3. At least one **`H2` Subheading**.
* **Synonyms**: Use related technical terms naturally to avoid "keyword stuffing".

### B. Image Alt Tags & Captions
Images make your blogs visually elite, but search engines can't "see" them. Always describe them:
* **Bad**: `![image](/blog/cover.jpg)`
* **Good**: `![Azure Cloud Analytics Architecture Schema](/blog/cover.jpg)`
* **Caption**: Always place a caption on the line below the image: `*Figure 1: Setting up relational schemas in PostgreSQL.*`

---

## 4. Backlinking Protocol: Debojeet ⇆ Devbuilds

Every single blog post must act as a bridge of authority between your personal site and your dev tools site. 

### From debojeet.in ➔ devbuilds.in
* **Contextual Anchor Links**: Weave links directly into the text naturally.
* **Anchor Text Rules**: Use keyword-rich text instead of raw URLs or lazy words.
  * **Incorrect**: *"I made a new CLI tool, check it out here: https://devbuilds.in."*
  * **Correct**: *"For developers looking to integrate modular interface structures, I created high-converting front-end libraries on **[Devbuilds](https://devbuilds.in)**."*
* **Link Target**: Link to dynamic pages (e.g., to a specific UI kit, CLI package, or templates section).

### From devbuilds.in ➔ debojeet.in
* When publishing tutorials or release updates on your dev platform, link back to your personal portfolio as the developer.
  * **Example**: *"This CLI tool registry is developed and maintained by **[Debojeet Karmakar](https://debojeet.in)**."*

---

## 5. Rich MDX & Markdown Layout Features

Use the following markup snippets to write visually stunning articles:

### Visual Divider
Create stylish separator rules to break sections:
```markdown
---
```

### Beautiful Code Blocks
Always specify the language syntax to activate Shiki/Rehype highlighting:
```markdown
```sql
SELECT user_id, COUNT(order_id) AS total_orders
FROM sales_data
GROUP BY user_id
HAVING total_orders > 5;
```
```

### Key Takeaways / Warning Blocks
To emphasize a key rule, use clean blockquotes:
```markdown
> [!IMPORTANT]
> Always verify that your database queries are indexed when working with large-scale datasets.
```

---

## 6. Ready-to-Use Boilerplate Template

When drafting your next post, copy this clean template:

```markdown
---
title: "How to Build a Modern Data Pipeline with SQL and Power BI"
publishedAt: "2026-05-29"
updatedAt: "2026-05-29"
author: "Debojeet Karmakar"
summary: "A step-by-step developer's guide to building, structuring, and visualizing database reports using robust SQL schemas and dashboards."
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop"
---

Data-driven business engineering requires robust pipelines. In this article, I will share the exact steps to clean up transactional databases and load them into modern dashboard software.

---

## The Relational Database Setup

To query data effectively, we need robust structures. Here is a simple transactional schema:

```sql
-- Query sales aggregates
SELECT product_name, SUM(price) as total_revenue
FROM orders
GROUP BY product_name;
```

---

## Power BI Integration

Once your database queries are ready, we feed them into BI tools to create intuitive dashboards.

![SQL Database and Dashboard Integration](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop)
*Designing a high-fidelity analytics dashboard with Power BI and clean database views.*

During my work on complex layout builders for **[Devbuilds](https://devbuilds.in)**, I realized how powerful custom reporting structures are for monitoring real-time metrics.

---

## Conclusion & What's Next

Creating these schemas helps businesses scale safely and make optimal decisions. 

*If you are looking for custom data integration services or SaaS dashboard development, check out my **[Portfolio Projects](https://debojeet.in/projects)** or send me an **[Email](mailto:debojeetkarmakar2004@outlook.com)** to collaborate!*
```
