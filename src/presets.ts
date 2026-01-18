import type { CopyThisNotePayloadOptions } from "./copyThisNote";

export type CopyThisNotePresetId =
  | "filename-frontmatter"
  | "filename-only"
  | "frontmatter-only"
  | "body-only";

export interface CopyThisNotePreset {
  id: CopyThisNotePresetId;
  commandId: string;
  commandName: string;
  menuTitle: string;
  options: CopyThisNotePayloadOptions;
}

export const COPY_THIS_NOTE_MENU_PREFIX = "Copy This Note";

export const COPY_PRESETS: readonly CopyThisNotePreset[] = [
  {
    id: "filename-frontmatter",
    commandId: "copy-note-filename-frontmatter",
    commandName: "Include filename and frontmatter",
    menuTitle: `${COPY_THIS_NOTE_MENU_PREFIX}: include filename, frontmatter`,
    options: {
      includeFilename: true,
      includeFrontmatter: true,
    },
  },
  {
    id: "filename-only",
    commandId: "copy-note-filename-only",
    commandName: "Include filename",
    menuTitle: `${COPY_THIS_NOTE_MENU_PREFIX}: include filename`,
    options: {
      includeFilename: true,
      includeFrontmatter: false,
    },
  },
  {
    id: "frontmatter-only",
    commandId: "copy-note-frontmatter-only",
    commandName: "Include frontmatter",
    menuTitle: `${COPY_THIS_NOTE_MENU_PREFIX}: include frontmatter`,
    options: {
      includeFilename: false,
      includeFrontmatter: true,
    },
  },
  {
    id: "body-only",
    commandId: "copy-note-body-only",
    commandName: "Body only",
    menuTitle: `${COPY_THIS_NOTE_MENU_PREFIX}: body only`,
    options: {
      includeFilename: false,
      includeFrontmatter: false,
    },
  },
];

