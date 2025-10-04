---
title: 器物之策
description: 自定 Avaritia 插件之物
---

# 器物之策

Avaritia 插件允汝藉策以高度自定各物之屬性。

## 檔之所在

器物策位於 `/plugins/Avaritia_Plugin/items/` 目錄下。各 `.yml` 檔常代一類之物。

## 格式

各物皆由其唯一之 **物品ID** 識之。

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

- **`material`**: 物之基礎 Minecraft 材質。
- **`custom_model_data`**: 物之 CustomModelData (CMD) 值，用以資源包易其質。
- **`display_name`**: 物之名。常為指向[言辭之檔](./alang.md)之鍵。
- **`lore`**: 物之述。常為含多言辭檔鍵之列表。
- **`enchantments`** (可選): 為物增之附魔。
  - 格式: `"附魔名:等級"`。
- **`attributes`** (可選): 為物增之屬性修飾符。
  - 格式: `"屬性名:數值"`。
- **`unbreakable`** (可選): 定物可毀與否。
  - `true`: 不可毀。
  - `false`: 可毀。

## 如何創新物

一、 於 `items` 資料夾中創新 `.yml` 檔，如 `my_item.yml`。
二、 於檔中定義汝之物，確保有唯一之頂層 ID (如 `my_custom_sword`)。
三、 策其 `material`, `display_name` 等屬性。
四、 於[合成之法檔](./arecipe.md)中，用 `avaritia:my_custom_sword` 為所成或所用以引之。
五、 用 `/avaritia reload` 重載插件，再用 `/avaritia give <玩家> my_custom_sword` 以取之。