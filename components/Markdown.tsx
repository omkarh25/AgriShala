import React from "react";
import { Block, renderInline } from "@/lib/docs";

/**
 * Render parsed markdown blocks using the existing typography system.
 * Pure server component — no GSAP, no ScrollTrigger.
 *
 * The renderer favours readability and restraint: no syntax highlighting,
 * no embedded HTML, no footnotes. The corpus never uses them.
 */
export default function Markdown({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 font-serif text-lg leading-relaxed text-forest-800/90">
      {blocks.map((b, i) => (
        <BlockView key={i} block={b} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "h1":
      return (
        <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.05] text-forest-900">
          {block.text}
        </h1>
      );
    case "h2":
      return (
        <h2 className="font-display text-3xl md:text-4xl font-light leading-tight text-forest-900 mt-16 mb-2">
          <span dangerouslySetInnerHTML={{ __html: renderInline(block.text) }} />
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-display text-2xl md:text-3xl font-light leading-tight text-forest-900 mt-12">
          <span dangerouslySetInnerHTML={{ __html: renderInline(block.text) }} />
        </h3>
      );
    case "h4":
      return (
        <h4 className="font-display text-xl text-forest-900 mt-10">
          <span dangerouslySetInnerHTML={{ __html: renderInline(block.text) }} />
        </h4>
      );
    case "p":
      return (
        <p
          className="text-lg leading-relaxed text-forest-800/90"
          dangerouslySetInnerHTML={{ __html: renderInline(block.text) }}
        />
      );
    case "blockquote":
      return (
        <blockquote className="my-8 pl-6 border-l-2 border-earth-300/80">
          <p
            className="font-display italic text-2xl md:text-3xl text-forest-900 leading-snug"
            dangerouslySetInnerHTML={{ __html: renderInline(block.text) }}
          />
        </blockquote>
      );
    case "ul":
      return (
        <ul className="space-y-2 pl-6 list-disc marker:text-earth-400/70">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="text-lg leading-relaxed text-forest-800/90"
              dangerouslySetInnerHTML={{ __html: renderInline(it) }}
            />
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="space-y-2 pl-6 list-decimal marker:text-earth-400/70 marker:font-display">
          {block.items.map((it, i) => (
            <li
              key={i}
              className="text-lg leading-relaxed text-forest-800/90"
              dangerouslySetInnerHTML={{ __html: renderInline(it) }}
            />
          ))}
        </ol>
      );
    case "hr":
      return <hr className="my-12 border-t border-earth-200/70" />;
    case "code":
      return (
        <pre className="my-8 overflow-x-auto rounded-sm bg-earth-100/70 border border-earth-200 p-5 text-sm leading-relaxed">
          <code className="font-mono text-forest-900">{block.body}</code>
        </pre>
      );
    case "table":
      return (
        <div className="my-8 overflow-x-auto rounded-sm border border-earth-200/70">
          <table className="w-full text-base">
            <thead className="bg-earth-50/80">
              <tr>
                {block.head.map((c, i) => (
                  <th
                    key={i}
                    className="text-left font-display text-forest-900 px-4 py-3 border-b border-earth-200/70"
                  >
                    <span dangerouslySetInnerHTML={{ __html: renderInline(c) }} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className="odd:bg-cream even:bg-earth-50/40 align-top"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="px-4 py-3 border-b border-earth-200/40 text-forest-800/90"
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: renderInline(cell) }}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}
