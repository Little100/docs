---
title: 物品配置
description: 自定义 Avaritia 插件的物品
---

# 物品配置

Avaritia 插件允许你通过配置文件高度自定义每一个物品的属性。

## 文件位置

物品配置文件位于 `/plugins/Avaritia_Plugin/items/` 目录下。每个 `.yml` 文件通常代表一类物品。

## 结构

每个物品都由其唯一的 **物品ID** 标识。

```yaml
# 示例: infinity_sword.yml
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

### 属性详解

- **`material`**: 物品的基础 Minecraft 材质。
- **`custom_model_data`**: 物品的 CustomModelData (CMD) 值，用于资源包更换材质。
- **`display_name`**: 物品的显示名称。通常是一个指向[语言文件](./alang.md)的键。
- **`lore`**: 物品的描述文本（Lore）。通常是一个包含多个语言文件键的列表。
- **`enchantments`** (可选): 为物品添加的附魔。
  - 格式: `"附魔名称:等级"`。
- **`attributes`** (可选): 为物品添加的属性修饰符。
  - 格式: `"属性名称:数值"`。
- **`unbreakable`** (可选): 设置物品是否无法破坏。
  - `true`: 无法破坏。
  - `false`: 可以被破坏。

## 如何创建新物品

1.  在 `items` 文件夹中创建一个新的 `.yml` 文件，例如 `my_item.yml`。
2.  在文件中定义你的物品，确保有一个唯一的顶层 ID (例如 `my_custom_sword`)。
3.  配置其 `material`, `display_name` 等属性。
4.  在[合成表文件](./arecipe.md)中，使用 `avaritia:my_custom_sword` 作为产物或原料来引用它。
5.  使用 `/avaritia reload` 重载插件，然后用 `/avaritia give <玩家> my_custom_sword` 来获取它。