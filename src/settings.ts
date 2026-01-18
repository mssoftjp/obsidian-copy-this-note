import { App, PluginSettingTab, Setting } from "obsidian";

import type CopyThisNotePlugin from "./main";

export interface CopyThisNoteSettings {
  includeFilename: boolean;
  includeFrontmatter: boolean;
}

export const DEFAULT_SETTINGS: CopyThisNoteSettings = {
  includeFilename: true,
  includeFrontmatter: true,
};

export class CopyThisNoteSettingTab extends PluginSettingTab {
  plugin: CopyThisNotePlugin;

  constructor(app: App, plugin: CopyThisNotePlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Include filename")
      .setDesc("Add the filename as the first line.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.includeFilename)
          .onChange(async (value) => {
            this.plugin.settings.includeFilename = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(containerEl)
      .setName("Include YAML frontmatter")
      .setDesc("Include YAML frontmatter when it exists at the top of the note.")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.includeFrontmatter)
          .onChange(async (value) => {
            this.plugin.settings.includeFrontmatter = value;
            await this.plugin.saveSettings();
          })
      );
  }
}

