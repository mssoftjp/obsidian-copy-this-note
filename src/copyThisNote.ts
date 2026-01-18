export interface CopyThisNotePayloadOptions {
  includeFilename: boolean;
  includeFrontmatter: boolean;
}

export function buildCopyThisNotePayload(params: {
  fileName: string;
  fileContent: string;
  options: CopyThisNotePayloadOptions;
}): string {
  const { fileName, fileContent, options } = params;

  const content = options.includeFrontmatter
    ? fileContent
    : stripYamlFrontmatter(fileContent);

  if (!options.includeFilename) return content;

  return `${fileName}\n\n${content}`;
}

export function stripYamlFrontmatter(markdown: string): string {
  return splitYamlFrontmatter(markdown).body;
}

export function splitYamlFrontmatter(markdown: string): {
  frontmatter: string | null;
  body: string;
} {
  const firstNewlineIndex = markdown.indexOf("\n");
  const firstLineRaw =
    firstNewlineIndex === -1 ? markdown : markdown.slice(0, firstNewlineIndex);
  const firstLine = firstLineRaw
    .replace(/^\uFEFF/, "")
    .replace(/\r$/, "")
    .trim();

  if (firstLine !== "---") return { frontmatter: null, body: markdown };
  if (firstNewlineIndex === -1) return { frontmatter: null, body: markdown };

  let lineStart = firstNewlineIndex + 1;
  while (lineStart <= markdown.length) {
    const newlineIndex = markdown.indexOf("\n", lineStart);
    const lineEnd = newlineIndex === -1 ? markdown.length : newlineIndex;
    const lineRaw = markdown.slice(lineStart, lineEnd);
    const line = lineRaw.replace(/\r$/, "").trim();

    if (line === "---" || line === "...") {
      const bodyStart = newlineIndex === -1 ? markdown.length : newlineIndex + 1;
      return {
        frontmatter: markdown.slice(0, bodyStart),
        body: markdown.slice(bodyStart),
      };
    }

    if (newlineIndex === -1) break;
    lineStart = newlineIndex + 1;
  }

  return { frontmatter: null, body: markdown };
}

export async function writeToClipboard(text: string): Promise<void> {
  if (!navigator.clipboard?.writeText) {
    throw new Error("Clipboard API is not available in this environment.");
  }

  await navigator.clipboard.writeText(text);
}
