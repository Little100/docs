---
title: 物品設定
description: 自訂 Avaritia 插件的物品
---

# 物品設定

Avaritia 插件允許你透過設定檔高度自訂每一個物品的屬性。

## 檔案位置

物品設定檔位於 `/plugins/Avaritia_Plugin/items/` 目錄下。每個 `.yml` 檔案通常代表一類物品。

## 結構

每個物品都由其唯一的 **物品ID** 標識。

```yaml
# 範例: infinity_sword.yml
infinity_sword:
  material: DIAMOND_SWORD
  custom_model_data: 1000
  display_name: "items.infinity_sword.name"
  lore:
    - "items.infinity_sword.lore.0"
    - "items.infinity_sword.lore.1"
  enchantments:
    - "sharpness:10"
    - "unbreaking:3"
  attributes:
    generic.attack_damage: 9999
  unbreakable: true
```

### 屬性詳解

- **`material`**: 物品的基礎 Minecraft 材質。
- **`custom_model_data`**: 物品的 CustomModelData (CMD) 值，用於資源包更換材質。
- **`display_name`**: 物品的顯示名稱。通常是一個指向[語言檔案](./alang.md)的鍵。
- **`lore`**: 物品的描述文本（Lore）。通常是一個包含多個語言檔案鍵的列表。
- **`enchantments`** (可選): 為物品添加的附魔。
  - 格式: `"附魔名稱:等級"`。
- **`attributes`** (可選): 為物品添加的屬性修飾符。
  - 格式: `"屬性名稱:數值"`。
- **`unbreakable`** (可選): 設定物品是否無法破壞。
  - `true`: 無法破壞。
  - `false`: 可以被破壞。

## 如何建立新物品

1.  在 `items` 資料夾中建立一個新的 `.yml` 檔案，例如 `my_item.yml`。
2.  在檔案中定義你的物品，確保有一個唯一的頂層 ID (例如 `my_custom_sword`)。
3.  設定其 `material`, `display_name` 等屬性。
4.  在[合成表檔案](./arecipe.md)中，使用 `avaritia:my_custom_sword` 作為產物或原料來引用它。
5.  使用 `/avaritia reload` 重載插件，然後用 `/avaritia give <玩家> my_custom_sword` 來獲取它。