import { MarkdownView, Notice, Plugin, TFile } from "obsidian";

import { buildCopyThisNotePayload, writeToClipboard } from "./copyThisNote";
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

    this.addCommand({
      id: "copy-note-to-clipboard",
      name: "Copy note to clipboard",
      checkCallback: (checking: boolean) => {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        const file = view?.file;
        if (!file) return false;

        if (!checking) {
          void this.copyFileToClipboard(file);
        }

        return true;
      },
    });

    this.registerEvent(
      this.app.workspace.on("file-menu", (menu, file) => {
        if (!(file instanceof TFile)) return;
        if (file.extension !== "md") return;

        menu.addItem((item) => {
          item
            .setTitle("Copy note to clipboard")
            .setIcon("copy")
            .onClick(() => {
              void this.copyFileToClipboard(file);
            });
        });
      })
    );

    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu, _editor, info) => {
        const file = info.file;
        if (!file) return;
        if (file.extension !== "md") return;

        menu.addItem((item) => {
          item
            .setTitle("Copy note to clipboard")
            .setIcon("copy")
            .onClick(() => {
              void this.copyFileToClipboard(file);
            });
        });
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

  private async copyFileToClipboard(file: TFile): Promise<void> {
    try {
      const fileContent = await this.app.vault.cachedRead(file);
      const payload = buildCopyThisNotePayload({
        fileName: file.name,
        fileContent,
        options: this.settings,
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

    if (typeof record.includeFilename === "boolean") {
      parsed.includeFilename = record.includeFilename;
    }

    if (typeof record.includeFrontmatter === "boolean") {
      parsed.includeFrontmatter = record.includeFrontmatter;
    }

    return parsed;
  }
}
