import { App, PluginSettingTab, Setting } from "obsidian";

import { COPY_PRESETS, type CopyThisNotePresetId } from "./presets";
import type CopyThisNotePlugin from "./main";

export interface CopyThisNoteSettings {
  enabledPresets: Record<CopyThisNotePresetId, boolean>;
  filenameHeaderIncludeExtension: boolean;
}

export const DEFAULT_SETTINGS: CopyThisNoteSettings = {
  enabledPresets: {
    "filename-frontmatter": true,
    "filename-only": false,
    "frontmatter-only": false,
    "body-only": false,
  },
  filenameHeaderIncludeExtension: true,
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

    new Setting(containerEl).setName("Presets").setHeading();

    for (const preset of COPY_PRESETS) {
      new Setting(containerEl)
        .setName(preset.commandName)
        .setDesc("Show this preset in the command palette and context menus.")
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.enabledPresets[preset.id])
            .onChange(async (value) => {
              this.plugin.settings.enabledPresets[preset.id] = value;
              await this.plugin.saveSettings();
            })
        );
    }

    new Setting(containerEl).setName("Filename header").setHeading();

    new Setting(containerEl)
      .setName("Include file extension")
      .setDesc("When including the filename, keep the file extension (for example, .md).")
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.filenameHeaderIncludeExtension)
          .onChange(async (value) => {
            this.plugin.settings.filenameHeaderIncludeExtension = value;
            await this.plugin.saveSettings();
          })
      );
  }
}
