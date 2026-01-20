import { App, PluginSettingTab, Setting } from "obsidian";

import { COPY_PRESETS, type CopyThisNotePresetId } from "./presets";
import { BUY_ME_A_COFFEE_DEFAULT_BUTTON } from "./assets/supportImages";
import { t } from "./i18n";
import type CopyThisNotePlugin from "./main";

const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/mssoft";
const BUY_ME_A_COFFEE_IMAGE_WIDTH = "217";
const BUY_ME_A_COFFEE_IMAGE_HEIGHT = "60";

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
    containerEl.addClass("copy-this-note-settings");

    new Setting(containerEl).setName(t("settings.enableCopyCommands")).setHeading();
    containerEl.createEl("p", {
      text: t("settings.presetDescription"),
      cls: "setting-item-description ctn-settings-preset-description",
    });
    const presetsGroup = containerEl.createDiv("ctn-settings-group");
    for (const preset of COPY_PRESETS) {
      new Setting(presetsGroup)
        .setClass("ctn-settings-group-item")
        .setName(t(preset.commandNameKey))
        .addToggle((toggle) =>
          toggle
            .setValue(this.plugin.settings.enabledPresets[preset.id])
            .onChange(async (value) => {
              this.plugin.settings.enabledPresets[preset.id] = value;
              await this.plugin.saveSettings();
            })
        );
    }

    new Setting(containerEl).setName(t("settings.filenameHeader")).setHeading();

    new Setting(containerEl)
      .setName(t("settings.includeFileExtension"))
      .setDesc(t("settings.includeFileExtensionDescription"))
      .addToggle((toggle) =>
        toggle
          .setValue(this.plugin.settings.filenameHeaderIncludeExtension)
          .onChange(async (value) => {
            this.plugin.settings.filenameHeaderIncludeExtension = value;
            await this.plugin.saveSettings();
          })
      );
    this.displaySupportBanner(containerEl);
  }

  private displaySupportBanner(containerEl: HTMLElement): void {
    try {
      containerEl.createEl("div", { cls: "bmc-spacer" });

      const supportSection = containerEl.createDiv("bmc-support-section");

      supportSection.createEl("p", {
        text: t("settings.supportMessage"),
        cls: "bmc-support-message",
      });

      const banner = supportSection.createEl("a", {
        href: BUY_ME_A_COFFEE_URL,
        attr: { target: "_blank", rel: "noopener" },
        cls: "bmc-banner",
      });

      banner.createEl("img", {
        attr: {
          src: BUY_ME_A_COFFEE_DEFAULT_BUTTON,
          alt: t("settings.supportImageAlt"),
          width: BUY_ME_A_COFFEE_IMAGE_WIDTH,
          height: BUY_ME_A_COFFEE_IMAGE_HEIGHT,
        },
      });
    } catch (error) {
      console.warn("Failed to display support banner:", error);
    }
  }
}
