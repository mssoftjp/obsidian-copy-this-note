import { MarkdownView, Notice, Plugin, TFile } from "obsidian";

import type { CopyThisNotePayloadOptions } from "./copyThisNote";
import { buildCopyThisNotePayload, writeToClipboard } from "./copyThisNote";
import { COPY_PRESETS } from "./presets";
import {
  CopyThisNoteSettingTab,
  DEFAULT_SETTINGS,
  type CopyThisNoteSettings,
} from "./settings";

export default class CopyThisNotePlugin extends Plugin {
  settings: CopyThisNoteSettings = { ...DEFAULT_SETTINGS };

  async onload(): Promise<void> {
    await this.loadSettings();

    this.addSettingTab(new CopyThisNoteSettingTab(this.app, this));

    for (const preset of COPY_PRESETS) {
      this.addCommand({
        id: preset.commandId,
        name: preset.commandName,
        checkCallback: (checking: boolean) => {
          if (!this.settings.enabledPresets[preset.id]) return false;

          const view = this.app.workspace.getActiveViewOfType(MarkdownView);
          const file = view?.file;
          if (!file) return false;

          if (!checking) {
            void this.copyFileToClipboard(file, preset.options);
          }

          return true;
        },
      });
    }

    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof TFile)) return;
        if (file.extension !== "md") return;

        for (const preset of COPY_PRESETS) {
          if (!this.settings.enabledPresets[preset.id]) continue;

          menu.addItem((item) => {
            item
              .setTitle(preset.menuTitle)
              .setIcon("copy")
              .onClick(() => {
                void this.copyFileToClipboard(file, preset.options);
              });
          });
        }
      })
    );

    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, info) => {
        const file = info.file;
        if (!file) return;
        if (file.extension !== "md") return;

        for (const preset of COPY_PRESETS) {
          if (!this.settings.enabledPresets[preset.id]) continue;

          menu.addItem((item) => {
            item
              .setTitle(preset.menuTitle)
              .setIcon("copy")
              .onClick(() => {
                void this.copyFileToClipboard(file, preset.options);
              });
          });
        }
      })
    );
  }

  async loadSettings(): Promise<void> {
    const loadedData = ((await this.loadData()) ?? {}) as unknown;
    const loadedSettings = this.parseSettings(loadedData);
    this.settings = { ...DEFAULT_SETTINGS, ...loadedSettings };
  }

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  private async copyFileToClipboard(
    file: TFile,
    options: CopyThisNotePayloadOptions
  ): Promise<void> {
    try {
      const fileContent = await this.app.vault.cachedRead(file);
      const payload = buildCopyThisNotePayload({
        fileName: this.getFilenameHeader(file),
        fileContent,
        options,
      });

      await writeToClipboard(payload);
      new Notice("Copied");
    } catch (error) {
      console.error(error);
      new Notice("Failed to copy to clipboard.");
    }
  }

  private parseSettings(data: unknown): Partial<CopyThisNoteSettings> {
    if (!data || typeof data !== "object") return {};

    const record = data as Record<string, unknown>;
    const parsed: Partial<CopyThisNoteSettings> = {};

    const enabledPresets: Partial<CopyThisNoteSettings["enabledPresets"]> = {};

    if (record.enabledPresets && typeof record.enabledPresets === "object") {
      const presetsRecord = record.enabledPresets as Record<string, unknown>;
      for (const preset of COPY_PRESETS) {
        const value = presetsRecord[preset.id];
        if (typeof value === "boolean") {
          enabledPresets[preset.id] = value;
        }
      }
    } else {
      const includeFilename = record.includeFilename;
      const includeFrontmatter = record.includeFrontmatter;
      if (
        typeof includeFilename === "boolean" &&
        typeof includeFrontmatter === "boolean"
      ) {
        enabledPresets["filename-frontmatter"] =
          includeFilename && includeFrontmatter;
        enabledPresets["filename-only"] = includeFilename && !includeFrontmatter;
        enabledPresets["frontmatter-only"] =
          !includeFilename && includeFrontmatter;
        enabledPresets["body-only"] = !includeFilename && !includeFrontmatter;
      }
    }

    if (Object.keys(enabledPresets).length > 0) {
      parsed.enabledPresets = {
        ...DEFAULT_SETTINGS.enabledPresets,
        ...enabledPresets,
      };
    }

    if (typeof record.filenameHeaderIncludeExtension === "boolean") {
      parsed.filenameHeaderIncludeExtension = record.filenameHeaderIncludeExtension;
    }

    return parsed;
  }

  private getFilenameHeader(file: TFile): string {
    if (this.settings.filenameHeaderIncludeExtension) return file.name;
    return file.basename;
  }
}
