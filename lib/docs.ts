import fs from "node:fs";
import path from "node:path";

/**
 * Docs registry — reads every markdown file in /docs at build time,
 * derives a one-line summary, and exposes a structured list so the
 * docs page can render without an extra dependency (the prototype
 * keeps dependencies lean).
 *
 * The full markdown body is rendered by `renderMarkdown` below using
 * a tiny hand-rolled parser. The corpus is small (~3,200 lines across
 * 16 files) and the markup is conventional — headings, lists, tables,
 * blockquotes, code, emphasis, links — so a 200-line parser beats
 * pulling in remark + unified for this prototype.
 */

const DOCS_DIR = path.join(process.cwd(), "docs");

export type DocAudience =
  | "Strategy"
  | "Engineering"
  | "Design"
  | "Operations"
  | "Reference";

export type DocMeta = {
  /** URL slug derived from the H1, e.g. "01-vision" */
  slug: string;
  /** Display title from the first H1 */
  title: string;
  /** Two-line summary for the index card */
  summary: string;
  /** Audience tag */
  audience: DocAudience;
  /** Reading time estimate (minutes) */
  readingMinutes: number;
  /** File name on disk */
  filename: string;
};

/**
 * Hand-curated one-line summaries + audience tags for each doc.
 * Kept in code so the index page reads like a printed colophon —
 * not auto-generated tag soup. Update as docs evolve.
 */
const summaries: Record<string, { summary: string; audience: DocAudience }> = {
  "00_INDEX.md": {
    summary:
      "The starting point. A reading order for founders, investors, designers, engineers, agronomists, and anyone confused by a term.",
    audience: "Reference",
  },
  "01_VISION.md": {
    summary:
      "The north star and the three pillars — Subscription, Experience, and Sustenance — that every feature must defend.",
    audience: "Strategy",
  },
  "02_CONCEPT_BRIEF.md": {
    summary:
      "The one-page pitch. Hand this to a stranger: the problem, the idea, the lighthouse, the ask.",
    audience: "Strategy",
  },
  "03_SEED_FARM.md": {
    summary:
      "Why Lokkanahalli / BRT is the seed farm, what already exists there, and how the site evolves phase by phase.",
    audience: "Strategy",
  },
  "04_BUSINESS_MODEL.md": {
    summary:
      "Four revenue lines, tier shapes, unit-economics straw-man, and pricing guardrails for Phase 1.",
    audience: "Strategy",
  },
  "05_PRODUCT_REQUIREMENTS.md": {
    summary:
      "The PRD. Functional requirements per pillar, acceptance criteria, and the global non-functional rules.",
    audience: "Engineering",
  },
  "06_INFORMATION_ARCHITECTURE.md": {
    summary:
      "The sitemap, navigation model, and the user journeys (J-1 … J-5) that drive the IA decisions.",
    audience: "Engineering",
  },
  "07_DATA_MODEL.md": {
    summary:
      "Domain entities and relationships — zones, plots, baskets, photo updates, cattle, Homa records.",
    audience: "Engineering",
  },
  "08_CONTENT_STRATEGY.md": {
    summary:
      "Voice, tone, narrative arc, and editorial cadence. The rulebook that keeps the field-journal voice intact.",
    audience: "Design",
  },
  "09_DESIGN_SYSTEM_NOTES.md": {
    summary:
      "How the existing tokens extend to the product surface: cards, status pills, photo-update components.",
    audience: "Design",
  },
  "10_FARM_OPERATIONS.md": {
    summary:
      "How the Sustenance pillar is run on the ground — Gau Shala, Agnihotra, composting, seed-saving.",
    audience: "Operations",
  },
  "11_FARM_ZONING.md": {
    summary:
      "The 1-acre divided into ten zones, with area, function, and the worked example that anchors the model.",
    audience: "Operations",
  },
  "12_ROADMAP.md": {
    summary:
      "Phased plan from workshop site to platform: brand refresh → subscription MVP → experience → sustenance → replication.",
    audience: "Strategy",
  },
  "13_GLOSSARY.md": {
    summary:
      "Terms and place names — Soliga, Jenumutti, Agnihotra, BRT, kharif, rabi — defined in the AgriShala voice.",
    audience: "Reference",
  },
  "14_OPEN_QUESTIONS.md": {
    summary:
      "The questions the founder still needs to answer — pricing tiers, payment provider, multi-language, etc.",
    audience: "Strategy",
  },
  "CHANGELOG_DRAFT.md": {
    summary:
      "A diff between the current workshop site and the platform it is being steered towards. What changes; what stays.",
    audience: "Strategy",
  },
};

/** Parse the first H1 ("# Title") from a markdown string. */
function parseTitle(md: string): string {
  const lines = md.split(/\r?\n/);
  for (const line of lines) {
    const m = line.match(/^#\s+(.+?)\s*$/);
    if (m) return m[1];
  }
  for (const line of lines) {
    const t = line.trim();
    if (t) return t;
  }
  return "Untitled";
}

/** Slugify a title for URL use. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Read every doc file and return metadata for the index page. */
export function listDocs(): DocMeta[] {
  if (!fs.existsSync(DOCS_DIR)) return [];
  const files = fs
    .readdirSync(DOCS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => {
      const order = (f: string) => {
        if (f === "00_INDEX.md") return -2;
        if (f === "CHANGELOG_DRAFT.md") return 99;
        const m = f.match(/^(\d+)/);
        return m ? Number(m[1]) : 50;
      };
      return order(a) - order(b);
    });

  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(DOCS_DIR, filename), "utf8");
    const title = parseTitle(raw);
    const meta = summaries[filename];
    return {
      slug: slugify(title),
      title,
      summary: meta?.summary ?? "",
      audience: meta?.audience ?? "Reference",
      readingMinutes: Math.max(1, Math.round(raw.split(/\s+/).length / 220)),
      filename,
    };
  });
}

/** Read a single doc by filename. Throws if it does not exist. */
export function readDoc(filename: string): string {
  const safe = path.basename(filename);
  const full = path.join(DOCS_DIR, safe);
  if (!full.startsWith(DOCS_DIR)) {
    throw new Error("Invalid doc path");
  }
  return fs.readFileSync(full, "utf8");
}

/** Look up a doc by its slugified title. */
export function findDocBySlug(slug: string): DocMeta | null {
  return listDocs().find((d) => d.slug === slug) ?? null;
}

/* ---------------------------------------------------------------- */
/* Tiny markdown renderer (no external deps)                          */
/* ---------------------------------------------------------------- */

export type Block =
  | { kind: "h1" | "h2" | "h3" | "h4"; text: string; level: 1 | 2 | 3 | 4 }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "blockquote"; text: string }
  | { kind: "code"; lang: string; body: string }
  | { kind: "hr" }
  | { kind: "table"; head: string[]; rows: string[][] };

/**
 * Render inline markdown (`**bold**`, `*italic*`, `` `code` ``,
 * `[text](url)`) to an HTML-safe string with emphasis converted to
 * `<strong>`, `<em>`, `<code>`, and `<a>` tags. Angle brackets and
 * ampersands are escaped first so the result is safe to drop into
 * `dangerouslySetInnerHTML`. The corpus uses no HTML, no images,
 * no footnotes, no reference-style links — we don't implement them.
 */
export function renderInline(input: string): string {
  let s = input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Inline code first so its contents aren't re-parsed.
  const codeTokens: string[] = [];
  s = s.replace(/`([^`]+)`/g, (_m, code: string) => {
    codeTokens.push(code);
    return `\u0000${codeTokens.length - 1}\u0000`;
  });

  // Links: [text](url)
  s = s.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_m, text: string, url: string) =>
      `<a href="${url}" class="text-forest-700 underline decoration-forest-300 underline-offset-4 hover:text-earth-700">${text}</a>`
  );

  // Bold, then italic.
  s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, "$1<em>$2</em>");

  // Restore code tokens, escaping once more inside the <code>.
  s = s.replace(/\u0000(\d+)\u0000/g, (_m, i: string) => {
    const code = codeTokens[Number(i)] ?? "";
    return `<code class="rounded bg-earth-100/70 px-1.5 py-0.5 font-mono text-[0.92em] text-forest-900">${code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</code>`;
  });

  return s;
}

/**
 * Split a markdown string into a flat list of typed blocks.
 * Sufficient for the steering docs — does not handle nested lists,
 * inline HTML, or footnotes (none are used in the corpus).
 */
export function parseMarkdown(md: string): Block[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out: Block[] = [];

  let i = 0;
  while (i < lines.length) {
    const raw = lines[i];
    const line = raw.replace(/\s+$/, "");

    if (!line.trim()) {
      i++;
      continue;
    }

    // Horizontal rule.
    if (/^-{3,}\s*$/.test(line) || /^\*{3,}\s*$/.test(line)) {
      out.push({ kind: "hr" });
      i++;
      continue;
    }

    // Headings.
    const h = line.match(/^(#{1,4})\s+(.+)$/);
    if (h) {
      const level = h[1].length as 1 | 2 | 3 | 4;
      const kind = `h${level}` as "h1" | "h2" | "h3" | "h4";
      out.push({ kind, text: h[2], level });
      i++;
      continue;
    }

    // Fenced code block.
    if (/^```/.test(line)) {
      const lang = line.slice(3).trim();
      const body: string[] = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) {
        body.push(lines[i]);
        i++;
      }
      i++;
      out.push({ kind: "code", lang, body: body.join("\n") });
      continue;
    }

    // Blockquote.
    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        buf.push(lines[i].replace(/^>\s?/, ""));
        i++;
      }
      out.push({ kind: "blockquote", text: buf.join(" ") });
      continue;
    }

    // Table: header row + separator.
    if (
      /\|/.test(line) &&
      i + 1 < lines.length &&
      /^\s*\|?\s*:?-{3,}/.test(lines[i + 1])
    ) {
      const head = splitRow(line);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && /\|/.test(lines[i]) && lines[i].trim()) {
        rows.push(splitRow(lines[i]));
        i++;
      }
      out.push({ kind: "table", head, rows });
      continue;
    }

    // Unordered list.
    if (/^[-*+]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*+]\s+/, ""));
        i++;
      }
      out.push({ kind: "ul", items });
      continue;
    }

    // Ordered list.
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      out.push({ kind: "ol", items });
      continue;
    }

    // Paragraph.
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4}\s|>|\||```|[-*+]\s|\d+\.\s|-{3,}|\*{3,})/.test(lines[i])
    ) {
      buf.push(lines[i]);
      i++;
    }
    out.push({ kind: "p", text: buf.join(" ") });
  }

  return out;
}

function splitRow(line: string): string[] {
  const trimmed = line.replace(/^\s*\|/, "").replace(/\|\s*$/, "");
  return trimmed.split("|").map((c) => c.trim());
}



