# Copy This Note

Copy the current note to the clipboard as Markdown, optionally including the filename and YAML frontmatter.

## What it does

- Copies the note content from the vault (saved content).
- Provides presets you can enable/disable:
  - include filename and metadata (YAML frontmatter)
  - include filename
  - include metadata (YAML frontmatter)
  - body only
- Optional: include or omit the `.md` extension when adding the filename header.

## What "metadata" means in this plugin

In this plugin, **metadata** means the note's **YAML frontmatter**, i.e. the block at the very top of the note wrapped by `---` lines:

```md
---
tags: [project-x, meeting]
created: 2026-01-18
---

This is the body.
```

- If you choose a preset that includes metadata, the YAML block is copied **as-is**.
- If you store tags in frontmatter (`tags:`), those tags are included when metadata is included.
- Inline tags like `#tag` are part of the **body**, so they are copied in all presets that include the body (including `body only`).
- The plugin does not generate additional metadata from Obsidian (for example, backlinks, file stats, or cached tag lists).

## Privacy and security

- No network access
- No telemetry
- No external file system access (reads only from the current vault via the Obsidian API)

## License

MIT. See `LICENSE`.
