---
title: 言辭之檔
description: 自定 Avaritia 插件之所示之文
---

# 言辭之檔策

Avaritia 插件容多語，可藉易言辭檔以全自定插件於戲中所示之文，含物名、述、GUI題及號令之息。

## 檔之所在

言辭檔位於 `/plugins/Avaritia_Plugin/language/` 目錄下。各 `.yml` 檔代一語，如 `zh_cn.yml` 為簡體中文，`en_us.yml` 為美式英語。

## 如何易言

- **天下常言**: 於 `config.yml` 檔中，以 `default_language` 選項定服之常言。
- **玩家私言**: 玩家可用 `/avaritia language <言辭檔名>` 號令以易己所見之言，而不擾他人。

## 檔之格式

言辭檔用標準之 YAML 格式，由一系列之 **鍵** 與 **值** 組成。

```yaml
# 範例：lzh.yml
items:
  infinity_sword:
    name: "&c&l無盡之劍"
    lore:
      - "&7傷 +∞"
      - "&7傳說之兵刃"

command:
  reload: "&aAvaritia 插件之策已重載！"
```

- **鍵**: 唯一之識別符，如 `items.infinity_sword.name`。插件之碼藉此鍵以取相應之文。
- **值**: 汝欲於戲中實示之文。可用 Minecraft 之色碼（如 `&c`, `&l`）以飾文樣。

## 創新言辭檔

一、 於 `language` 資料夾中，複製一份已有之言辭檔（如 `lzh.yml`）。
二、 重命名其檔為汝所欲之名，如 `my_lang.yml`。
三、 啟新檔，譯或改其內之值為汝所欲之文。
四、 於 `config.yml` 中將 `default_language` 定為 `my_lang`，或令玩家用 `/avaritia language my_lang` 以易之。