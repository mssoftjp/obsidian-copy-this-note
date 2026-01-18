import type { CopyThisNotePayloadOptions } from "./copyThisNote";
import type { CommandI18nKey, MenuI18nKey } from "./i18n";

export type CopyThisNotePresetId =
  | "filename-frontmatter"
  | "filename-only"
  | "frontmatter-only"
  | "body-only";

export interface CopyThisNotePreset {
  id: CopyThisNotePresetId;
  commandId: string;
  commandNameKey: CommandI18nKey;
  menuTitleKey: MenuI18nKey;
  options: CopyThisNotePayloadOptions;
}

export const COPY_PRESETS: readonly CopyThisNotePreset[] = [
  {
    id: "filename-frontmatter",
    commandId: "copy-note-filename-frontmatter",
    commandNameKey: "command.includeFilenameAndMetadata",
    menuTitleKey: "menu.includeFilenameAndMetadata",
    options: {
      includeFilename: true,
      includeFrontmatter: true,
    },
  },
  {
    id: "filename-only",
    commandId: "copy-note-filename-only",
    commandNameKey: "command.includeFilename",
    menuTitleKey: "menu.includeFilename",
    options: {
      includeFilename: true,
      includeFrontmatter: false,
    },
  },
  {
    id: "frontmatter-only",
    commandId: "copy-note-frontmatter-only",
    commandNameKey: "command.includeMetadata",
    menuTitleKey: "menu.includeMetadata",
    options: {
      includeFilename: false,
      includeFrontmatter: true,
    },
  },
  {
    id: "body-only",
    commandId: "copy-note-body-only",
    commandNameKey: "command.bodyOnly",
    menuTitleKey: "menu.bodyOnly",
    options: {
      includeFilename: false,
      includeFrontmatter: false,
    },
  },
];
