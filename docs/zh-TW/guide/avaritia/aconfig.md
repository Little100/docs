---
title: 設定檔總覽
description: Avaritia 插件所有設定檔的功能說明
---

# 設定檔總覽

Avaritia 插件包含了多個設定檔，用於自訂插件的各個方面。所有設定檔都位於 `/plugins/Avaritia_Plugin/` 目錄下。

## 主要設定檔

- **`config.yml`**: [主設定檔](./amainconfig.md)
  - 這是插件的核心設定檔，包含了全域設定、方塊行為、無盡工具特性等關鍵選項。

## 合成相關檔案

- **`recipe.yml`**: [原版工作台合成](./arecipe.md#1-原版工作台合成-recipe-yml)
  - 定義了所有透過原版 2x2 或 3x3 工作台進行的合成配方。

- **`extreme_crafting_table.yml`**: [終極工作台合成](./arecipe.md#2-終極工作台合成-extreme_crafting_table-yml)
  - 定義了所有在 9x9 終極工作台中進行的無序合成。

- **`neutron_collector.yml`**: [中子態素收集器](./arecipe.md#3-中子態素收集器-neutron_collector-yml)
  - 設定中子態素收集器的生產速度和產物。

- **`neutronium_compressor.yml`**: [中子態素壓縮機](./arecipe.md#4-中子態素壓縮機-neutronium_compressor-yml)
  - 設定用於生產奇點的材料、需求量等。

## 其他設定檔

- **`language/` 資料夾**: [語言檔案](./alang.md)
  - 存放插件的語言檔案，你可以透過修改或新增 .yml 檔案來自訂插件內顯示的文本。

- **`items/` 資料夾**: [物品設定](./aci.md)
  - 用於定義插件中所有自訂物品的屬性，例如名稱、Lore、材質等。

- **`gui/` 資料夾**: (暫未建立文檔)
  - 用於設定插件的 GUI 介面。