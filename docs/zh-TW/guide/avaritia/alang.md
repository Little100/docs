---
title: 語言檔案
description: 自訂 Avaritia 插件的顯示文本
---

# 語言檔案設定

Avaritia 插件支援多語言，你可以透過修改語言檔案來完全自訂插件在遊戲中顯示的任何文本，包括物品名稱、Lore、GUI 標題和指令訊息。

## 檔案位置

語言檔案位於 `/plugins/Avaritia_Plugin/language/` 目錄下。每個 `.yml` 檔案代表一種語言，例如 `zh_cn.yml` 是簡體中文，`en_us.yml` 是美式英語。

## 如何切換語言

- **全域預設語言**: 在 `config.yml` 檔案中，透過 `default_language` 選項設定伺服器的預設語言。
- **玩家個人語言**: 玩家可以使用 `/avaritia language <語言檔案名稱>` 指令來切換自己看到的語言，而不會影響其他玩家。

## 檔案格式

語言檔案使用標準的 YAML 格式，由一系列的 **鍵 (key)** 和 **值 (value)** 組成。

```yaml
# 範例：zh_TW.yml
items:
  infinity_sword:
    name: "&c&l無盡之劍"
    lore:
      - "&7傷害 +∞"
      - "&7一把傳說中的武器"

command:
  reload: "&aAvaritia 插件設定已重載！"
```

- **鍵**: 是一個唯一的識別碼，例如 `items.infinity_sword.name`。插件程式碼透過這些鍵來獲取對應的文本。
- **值**: 是你希望在遊戲中實際顯示的文本。你可以使用 Minecraft 的顏色代碼（例如 `&c`, `&l`）來設定文本樣式。

## 建立新的語言檔案

1.  在 `language` 資料夾中，複製一份現有的語言檔案（例如 `zh_TW.yml`）。
2.  將檔案重新命名為你想要的名稱，例如 `my_lang.yml`。
3.  開啟新檔案，將裡面的值翻譯或修改成你想要的文本。
4.  在 `config.yml` 中將 `default_language` 設定為 `my_lang`，或者讓玩家使用 `/avaritia language my_lang` 來切換。