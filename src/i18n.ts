const EN_LOCALE = "en" as const;

export type SupportedLocale =
  | "en"
  | "ja"
  | "es"
  | "de"
  | "fr"
  | "pt"
  | "ru"
  | "it"
  | "pl"
  | "tr"
  | "zh-CN"
  | "zh-TW"
  | "vi"
  | "id"
  | "ko"
  | "th";

const en = {
  "command.includeFilenameAndMetadata": "Include filename and metadata",
  "command.includeFilename": "Include filename",
  "command.includeMetadata": "Include metadata",
  "command.bodyOnly": "Body only",

  "menu.includeFilenameAndMetadata": "Copy This Note: include filename, metadata",
  "menu.includeFilename": "Copy This Note: include filename",
  "menu.includeMetadata": "Copy This Note: include metadata",
  "menu.bodyOnly": "Copy This Note: body only",

  "settings.enableCopyCommands": "Enable copy commands",
  "settings.presetDescription":
    "Enabled commands appear in the command palette and context menus.",
  "settings.filenameHeader": "Filename header",
  "settings.includeFileExtension": "Include file extension",
  "settings.includeFileExtensionDescription":
    "When including the filename, keep the file extension (for example, .md).",
  "settings.supportMessage":
    "If this plugin is helpful, please support development:",
  "settings.supportImageAlt": "Support Copy This Note on Buy Me a Coffee",

  "notice.copied": "Copied",
  "notice.copyFailed": "Failed to copy to clipboard.",
} as const;

export type I18nKey = keyof typeof en;
export type CommandI18nKey = Extract<I18nKey, `command.${string}`>;
export type MenuI18nKey = Extract<I18nKey, `menu.${string}`>;

type I18nDictionary = Record<I18nKey, string>;

const translations = {
  en,
  ja: {
    "command.includeFilenameAndMetadata": "ファイル名とメタデータを含める",
    "command.includeFilename": "ファイル名を含める",
    "command.includeMetadata": "メタデータを含める",
    "command.bodyOnly": "本文のみ",

    "menu.includeFilenameAndMetadata": "Copy This Note: ファイル名とメタデータを含める",
    "menu.includeFilename": "Copy This Note: ファイル名を含める",
    "menu.includeMetadata": "Copy This Note: メタデータを含める",
    "menu.bodyOnly": "Copy This Note: 本文のみ",

    "settings.enableCopyCommands": "コピーコマンドを有効にする",
    "settings.presetDescription":
      "有効にしたコマンドは、コマンドパレットとコンテキストメニューに表示されます。",
    "settings.filenameHeader": "ファイル名ヘッダー",
    "settings.includeFileExtension": "拡張子を含める",
    "settings.includeFileExtensionDescription":
      "ファイル名を含める場合、拡張子（例: .md）も含めます。",
    "settings.supportMessage":
      "このプラグインが役に立ちましたら、開発継続のためにご支援をお願いいたします：",
    "settings.supportImageAlt": "Buy Me a Coffee で Copy This Note を支援",

    "notice.copied": "コピーしました",
    "notice.copyFailed": "クリップボードへのコピーに失敗しました。",
  },
  es: {
    "command.includeFilenameAndMetadata": "Incluir nombre de archivo y metadatos",
    "command.includeFilename": "Incluir nombre de archivo",
    "command.includeMetadata": "Incluir metadatos",
    "command.bodyOnly": "Solo cuerpo",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: incluir nombre de archivo y metadatos",
    "menu.includeFilename": "Copy This Note: incluir nombre de archivo",
    "menu.includeMetadata": "Copy This Note: incluir metadatos",
    "menu.bodyOnly": "Copy This Note: solo cuerpo",

    "settings.enableCopyCommands": "Habilitar comandos de copia",
    "settings.presetDescription":
      "Los comandos habilitados aparecen en la paleta de comandos y en los menús contextuales.",
    "settings.filenameHeader": "Encabezado del nombre de archivo",
    "settings.includeFileExtension": "Incluir extensión de archivo",
    "settings.includeFileExtensionDescription":
      "Al incluir el nombre de archivo, conservar la extensión (por ejemplo, .md).",
    "settings.supportMessage":
      "Si este plugin te resulta útil, considera apoyar su desarrollo:",
    "settings.supportImageAlt": "Apoyar Copy This Note en Buy Me a Coffee",

    "notice.copied": "Copiado",
    "notice.copyFailed": "No se pudo copiar al portapapeles.",
  },
  de: {
    "command.includeFilenameAndMetadata": "Dateiname und Metadaten einschließen",
    "command.includeFilename": "Dateiname einschließen",
    "command.includeMetadata": "Metadaten einschließen",
    "command.bodyOnly": "Nur Inhalt",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: Dateiname und Metadaten einschließen",
    "menu.includeFilename": "Copy This Note: Dateiname einschließen",
    "menu.includeMetadata": "Copy This Note: Metadaten einschließen",
    "menu.bodyOnly": "Copy This Note: nur Inhalt",

    "settings.enableCopyCommands": "Kopierbefehle aktivieren",
    "settings.presetDescription":
      "Aktivierte Befehle werden in der Befehlspalette und in Kontextmenüs angezeigt.",
    "settings.filenameHeader": "Dateiname-Header",
    "settings.includeFileExtension": "Dateiendung einschließen",
    "settings.includeFileExtensionDescription":
      "Beim Einfügen des Dateinamens die Dateiendung beibehalten (z. B. .md).",
    "settings.supportMessage":
      "Wenn dieses Plugin hilfreich ist, unterstützen Sie bitte die Entwicklung:",
    "settings.supportImageAlt": "Copy This Note auf Buy Me a Coffee unterstützen",

    "notice.copied": "Kopiert",
    "notice.copyFailed": "Kopieren in die Zwischenablage fehlgeschlagen.",
  },
  fr: {
    "command.includeFilenameAndMetadata":
      "Inclure le nom de fichier et les métadonnées",
    "command.includeFilename": "Inclure le nom de fichier",
    "command.includeMetadata": "Inclure les métadonnées",
    "command.bodyOnly": "Corps uniquement",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: inclure le nom de fichier et les métadonnées",
    "menu.includeFilename": "Copy This Note: inclure le nom de fichier",
    "menu.includeMetadata": "Copy This Note: inclure les métadonnées",
    "menu.bodyOnly": "Copy This Note: corps uniquement",

    "settings.enableCopyCommands": "Activer les commandes de copie",
    "settings.presetDescription":
      "Les commandes activées apparaissent dans la palette de commandes et les menus contextuels.",
    "settings.filenameHeader": "En-tête du nom de fichier",
    "settings.includeFileExtension": "Inclure l’extension du fichier",
    "settings.includeFileExtensionDescription":
      "Lors de l’inclusion du nom de fichier, conserver l’extension (par exemple, .md).",
    "settings.supportMessage":
      "Si ce plugin vous est utile, merci de soutenir son développement :",
    "settings.supportImageAlt": "Soutenir Copy This Note sur Buy Me a Coffee",

    "notice.copied": "Copié",
    "notice.copyFailed": "Échec de la copie dans le presse-papiers.",
  },
  pt: {
    "command.includeFilenameAndMetadata": "Incluir nome do arquivo e metadados",
    "command.includeFilename": "Incluir nome do arquivo",
    "command.includeMetadata": "Incluir metadados",
    "command.bodyOnly": "Apenas corpo",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: incluir nome do arquivo e metadados",
    "menu.includeFilename": "Copy This Note: incluir nome do arquivo",
    "menu.includeMetadata": "Copy This Note: incluir metadados",
    "menu.bodyOnly": "Copy This Note: apenas corpo",

    "settings.enableCopyCommands": "Ativar comandos de cópia",
    "settings.presetDescription":
      "Os comandos ativados aparecem na paleta de comandos e nos menus de contexto.",
    "settings.filenameHeader": "Cabeçalho do nome do arquivo",
    "settings.includeFileExtension": "Incluir extensão do arquivo",
    "settings.includeFileExtensionDescription":
      "Ao incluir o nome do arquivo, manter a extensão (por exemplo, .md).",
    "settings.supportMessage":
      "Se este plugin for útil, considere apoiar o desenvolvimento:",
    "settings.supportImageAlt": "Apoiar Copy This Note no Buy Me a Coffee",

    "notice.copied": "Copiado",
    "notice.copyFailed": "Falha ao copiar para a área de transferência.",
  },
  ru: {
    "command.includeFilenameAndMetadata": "Включить имя файла и метаданные",
    "command.includeFilename": "Включить имя файла",
    "command.includeMetadata": "Включить метаданные",
    "command.bodyOnly": "Только содержимое",

    "menu.includeFilenameAndMetadata": "Copy This Note: включить имя файла и метаданные",
    "menu.includeFilename": "Copy This Note: включить имя файла",
    "menu.includeMetadata": "Copy This Note: включить метаданные",
    "menu.bodyOnly": "Copy This Note: только содержимое",

    "settings.enableCopyCommands": "Включить команды копирования",
    "settings.presetDescription":
      "Включенные команды отображаются в палитре команд и в контекстных меню.",
    "settings.filenameHeader": "Заголовок имени файла",
    "settings.includeFileExtension": "Включать расширение файла",
    "settings.includeFileExtensionDescription":
      "При добавлении имени файла сохранять расширение (например, .md).",
    "settings.supportMessage":
      "Если этот плагин полезен, поддержите его разработку:",
    "settings.supportImageAlt": "Поддержать Copy This Note на Buy Me a Coffee",

    "notice.copied": "Скопировано",
    "notice.copyFailed": "Не удалось скопировать в буфер обмена.",
  },
  it: {
    "command.includeFilenameAndMetadata": "Includi nome file e metadati",
    "command.includeFilename": "Includi nome file",
    "command.includeMetadata": "Includi metadati",
    "command.bodyOnly": "Solo contenuto",

    "menu.includeFilenameAndMetadata": "Copy This Note: includi nome file e metadati",
    "menu.includeFilename": "Copy This Note: includi nome file",
    "menu.includeMetadata": "Copy This Note: includi metadati",
    "menu.bodyOnly": "Copy This Note: solo contenuto",

    "settings.enableCopyCommands": "Abilita comandi di copia",
    "settings.presetDescription":
      "I comandi abilitati compaiono nella palette comandi e nei menu contestuali.",
    "settings.filenameHeader": "Intestazione del nome file",
    "settings.includeFileExtension": "Includi estensione del file",
    "settings.includeFileExtensionDescription":
      "Quando includi il nome file, mantieni l’estensione (ad esempio, .md).",
    "settings.supportMessage":
      "Se questo plugin ti è utile, valuta di supportare lo sviluppo:",
    "settings.supportImageAlt": "Supporta Copy This Note su Buy Me a Coffee",

    "notice.copied": "Copiato",
    "notice.copyFailed": "Impossibile copiare negli appunti.",
  },
  pl: {
    "command.includeFilenameAndMetadata": "Uwzględnij nazwę pliku i metadane",
    "command.includeFilename": "Uwzględnij nazwę pliku",
    "command.includeMetadata": "Uwzględnij metadane",
    "command.bodyOnly": "Tylko treść",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: uwzględnij nazwę pliku i metadane",
    "menu.includeFilename": "Copy This Note: uwzględnij nazwę pliku",
    "menu.includeMetadata": "Copy This Note: uwzględnij metadane",
    "menu.bodyOnly": "Copy This Note: tylko treść",

    "settings.enableCopyCommands": "Włącz polecenia kopiowania",
    "settings.presetDescription":
      "Włączone polecenia pojawią się w palecie poleceń i menu kontekstowych.",
    "settings.filenameHeader": "Nagłówek nazwy pliku",
    "settings.includeFileExtension": "Uwzględnij rozszerzenie pliku",
    "settings.includeFileExtensionDescription":
      "Podczas uwzględniania nazwy pliku zachowaj rozszerzenie (np. .md).",
    "settings.supportMessage":
      "Jeśli ten plugin jest pomocny, rozważ wsparcie rozwoju:",
    "settings.supportImageAlt": "Wesprzyj Copy This Note w Buy Me a Coffee",

    "notice.copied": "Skopiowano",
    "notice.copyFailed": "Nie udało się skopiować do schowka.",
  },
  tr: {
    "command.includeFilenameAndMetadata": "Dosya adı ve meta verileri dahil et",
    "command.includeFilename": "Dosya adını dahil et",
    "command.includeMetadata": "Meta verileri dahil et",
    "command.bodyOnly": "Yalnızca içerik",

    "menu.includeFilenameAndMetadata":
      "Copy This Note: dosya adı ve meta verileri dahil et",
    "menu.includeFilename": "Copy This Note: dosya adını dahil et",
    "menu.includeMetadata": "Copy This Note: meta verileri dahil et",
    "menu.bodyOnly": "Copy This Note: yalnızca içerik",

    "settings.enableCopyCommands": "Kopyalama komutlarını etkinleştir",
    "settings.presetDescription":
      "Etkinleştirilen komutlar komut paletinde ve bağlam menülerinde görünür.",
    "settings.filenameHeader": "Dosya adı başlığı",
    "settings.includeFileExtension": "Dosya uzantısını dahil et",
    "settings.includeFileExtensionDescription":
      "Dosya adını eklerken uzantıyı koru (örneğin, .md).",
    "settings.supportMessage":
      "Bu eklenti işe yaradıysa geliştirmeyi desteklemeyi düşünün:",
    "settings.supportImageAlt": "Buy Me a Coffee üzerinden Copy This Note için destek ol",

    "notice.copied": "Kopyalandı",
    "notice.copyFailed": "Panoya kopyalanamadı.",
  },
  "zh-CN": {
    "command.includeFilenameAndMetadata": "包含文件名和元数据",
    "command.includeFilename": "包含文件名",
    "command.includeMetadata": "包含元数据",
    "command.bodyOnly": "仅正文",

    "menu.includeFilenameAndMetadata": "Copy This Note: 包含文件名和元数据",
    "menu.includeFilename": "Copy This Note: 包含文件名",
    "menu.includeMetadata": "Copy This Note: 包含元数据",
    "menu.bodyOnly": "Copy This Note: 仅正文",

    "settings.enableCopyCommands": "启用复制命令",
    "settings.presetDescription": "启用的命令会显示在命令面板和上下文菜单中。",
    "settings.filenameHeader": "文件名标题",
    "settings.includeFileExtension": "包含文件扩展名",
    "settings.includeFileExtensionDescription":
      "包含文件名时，保留扩展名（例如 .md）。",
    "settings.supportMessage": "如果这个插件对你有帮助，欢迎支持开发：",
    "settings.supportImageAlt": "在 Buy Me a Coffee 上支持 Copy This Note",

    "notice.copied": "已复制",
    "notice.copyFailed": "复制到剪贴板失败。",
  },
  "zh-TW": {
    "command.includeFilenameAndMetadata": "包含檔名與中繼資料",
    "command.includeFilename": "包含檔名",
    "command.includeMetadata": "包含中繼資料",
    "command.bodyOnly": "僅內文",

    "menu.includeFilenameAndMetadata": "Copy This Note: 包含檔名與中繼資料",
    "menu.includeFilename": "Copy This Note: 包含檔名",
    "menu.includeMetadata": "Copy This Note: 包含中繼資料",
    "menu.bodyOnly": "Copy This Note: 僅內文",

    "settings.enableCopyCommands": "啟用複製命令",
    "settings.presetDescription": "啟用的命令會顯示在命令面板與右鍵選單中。",
    "settings.filenameHeader": "檔名標題",
    "settings.includeFileExtension": "包含檔案副檔名",
    "settings.includeFileExtensionDescription":
      "包含檔名時，保留副檔名（例如 .md）。",
    "settings.supportMessage": "如果這個外掛對你有幫助，歡迎支持開發：",
    "settings.supportImageAlt": "在 Buy Me a Coffee 上支持 Copy This Note",

    "notice.copied": "已複製",
    "notice.copyFailed": "複製到剪貼簿失敗。",
  },
  vi: {
    "command.includeFilenameAndMetadata": "Bao gồm tên tệp và siêu dữ liệu",
    "command.includeFilename": "Bao gồm tên tệp",
    "command.includeMetadata": "Bao gồm siêu dữ liệu",
    "command.bodyOnly": "Chỉ nội dung",

    "menu.includeFilenameAndMetadata": "Copy This Note: bao gồm tên tệp và siêu dữ liệu",
    "menu.includeFilename": "Copy This Note: bao gồm tên tệp",
    "menu.includeMetadata": "Copy This Note: bao gồm siêu dữ liệu",
    "menu.bodyOnly": "Copy This Note: chỉ nội dung",

    "settings.enableCopyCommands": "Bật lệnh sao chép",
    "settings.presetDescription":
      "Các lệnh đã bật sẽ xuất hiện trong bảng lệnh và menu ngữ cảnh.",
    "settings.filenameHeader": "Tiêu đề tên tệp",
    "settings.includeFileExtension": "Bao gồm phần mở rộng tệp",
    "settings.includeFileExtensionDescription":
      "Khi bao gồm tên tệp, giữ phần mở rộng (ví dụ: .md).",
    "settings.supportMessage":
      "Nếu plugin này hữu ích, hãy cân nhắc ủng hộ việc phát triển:",
    "settings.supportImageAlt": "Ủng hộ Copy This Note trên Buy Me a Coffee",

    "notice.copied": "Đã sao chép",
    "notice.copyFailed": "Không thể sao chép vào khay nhớ tạm.",
  },
  id: {
    "command.includeFilenameAndMetadata": "Sertakan nama file dan metadata",
    "command.includeFilename": "Sertakan nama file",
    "command.includeMetadata": "Sertakan metadata",
    "command.bodyOnly": "Hanya isi",

    "menu.includeFilenameAndMetadata": "Copy This Note: sertakan nama file dan metadata",
    "menu.includeFilename": "Copy This Note: sertakan nama file",
    "menu.includeMetadata": "Copy This Note: sertakan metadata",
    "menu.bodyOnly": "Copy This Note: hanya isi",

    "settings.enableCopyCommands": "Aktifkan perintah salin",
    "settings.presetDescription":
      "Perintah yang diaktifkan akan muncul di palet perintah dan menu konteks.",
    "settings.filenameHeader": "Header nama file",
    "settings.includeFileExtension": "Sertakan ekstensi file",
    "settings.includeFileExtensionDescription":
      "Saat menyertakan nama file, pertahankan ekstensi file (misalnya, .md).",
    "settings.supportMessage":
      "Jika plugin ini bermanfaat, pertimbangkan untuk mendukung pengembangan:",
    "settings.supportImageAlt": "Dukung Copy This Note di Buy Me a Coffee",

    "notice.copied": "Disalin",
    "notice.copyFailed": "Gagal menyalin ke papan klip.",
  },
  ko: {
    "command.includeFilenameAndMetadata": "파일 이름 및 메타데이터 포함",
    "command.includeFilename": "파일 이름 포함",
    "command.includeMetadata": "메타데이터 포함",
    "command.bodyOnly": "본문만",

    "menu.includeFilenameAndMetadata": "Copy This Note: 파일 이름 및 메타데이터 포함",
    "menu.includeFilename": "Copy This Note: 파일 이름 포함",
    "menu.includeMetadata": "Copy This Note: 메타데이터 포함",
    "menu.bodyOnly": "Copy This Note: 본문만",

    "settings.enableCopyCommands": "복사 명령 사용",
    "settings.presetDescription":
      "활성화한 명령은 명령 팔레트와 컨텍스트 메뉴에 표시됩니다.",
    "settings.filenameHeader": "파일 이름 헤더",
    "settings.includeFileExtension": "파일 확장자 포함",
    "settings.includeFileExtensionDescription":
      "파일 이름을 포함할 때 확장자(예: .md)를 유지합니다.",
    "settings.supportMessage":
      "이 플러그인이 도움이 되었다면 개발을 지원해 주세요:",
    "settings.supportImageAlt": "Buy Me a Coffee에서 Copy This Note 지원",

    "notice.copied": "복사됨",
    "notice.copyFailed": "클립보드로 복사하지 못했습니다.",
  },
  th: {
    "command.includeFilenameAndMetadata": "รวมชื่อไฟล์และเมตาดาตา",
    "command.includeFilename": "รวมชื่อไฟล์",
    "command.includeMetadata": "รวมเมตาดาตา",
    "command.bodyOnly": "เฉพาะเนื้อหา",

    "menu.includeFilenameAndMetadata": "Copy This Note: รวมชื่อไฟล์และเมตาดาตา",
    "menu.includeFilename": "Copy This Note: รวมชื่อไฟล์",
    "menu.includeMetadata": "Copy This Note: รวมเมตาดาตา",
    "menu.bodyOnly": "Copy This Note: เฉพาะเนื้อหา",

    "settings.enableCopyCommands": "เปิดใช้คำสั่งคัดลอก",
    "settings.presetDescription":
      "คำสั่งที่เปิดใช้งานจะปรากฏในพาเล็ตคำสั่งและเมนูบริบท",
    "settings.filenameHeader": "ส่วนหัวชื่อไฟล์",
    "settings.includeFileExtension": "รวมส่วนขยายไฟล์",
    "settings.includeFileExtensionDescription":
      "เมื่อรวมชื่อไฟล์ ให้คงส่วนขยายไว้ (เช่น .md)",
    "settings.supportMessage":
      "หากปลั๊กอินนี้มีประโยชน์ โปรดพิจารณาสนับสนุนการพัฒนา:",
    "settings.supportImageAlt": "สนับสนุน Copy This Note บน Buy Me a Coffee",

    "notice.copied": "คัดลอกแล้ว",
    "notice.copyFailed": "ไม่สามารถคัดลอกไปยังคลิปบอร์ดได้",
  },
} satisfies Record<SupportedLocale, I18nDictionary>;

function getObsidianLocaleTag(): string | null {
  try {
    if (typeof document !== "undefined" && document.documentElement?.lang) {
      return document.documentElement.lang;
    }
  } catch {
    // Ignore.
  }

  return null;
}

export function resolveSupportedLocale(rawLocaleTag?: string | null): SupportedLocale {
  const localeTag = (rawLocaleTag ?? "").trim();
  if (!localeTag) return EN_LOCALE;

  const lower = localeTag.toLowerCase();

  if (lower.startsWith("zh")) {
    const hasTraditionalMarker =
      lower.includes("tw") || lower.includes("hk") || lower.includes("hant");
    return hasTraditionalMarker ? "zh-TW" : "zh-CN";
  }

  const base = lower.split(/[-_]/)[0];
  switch (base) {
    case "en":
      return "en";
    case "ja":
      return "ja";
    case "es":
      return "es";
    case "de":
      return "de";
    case "fr":
      return "fr";
    case "pt":
      return "pt";
    case "ru":
      return "ru";
    case "it":
      return "it";
    case "pl":
      return "pl";
    case "tr":
      return "tr";
    case "vi":
      return "vi";
    case "id":
      return "id";
    case "ko":
      return "ko";
    case "th":
      return "th";
    default:
      return EN_LOCALE;
  }
}

export function t(key: I18nKey, locale?: SupportedLocale): string {
  const resolvedLocale = locale ?? resolveSupportedLocale(getObsidianLocaleTag());
  return translations[resolvedLocale][key] ?? translations[EN_LOCALE][key] ?? key;
}
