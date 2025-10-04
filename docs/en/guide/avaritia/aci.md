---
title: Item Configuration
description: Customize items in the Avaritia plugin
---

# Item Configuration

The Avaritia plugin allows you to highly customize the properties of each item through configuration files.

## File Location

Item configuration files are located in the `/plugins/Avaritia_Plugin/items/` directory. Each `.yml` file typically represents a category of items.

## Structure

Each item is identified by its unique **item ID**.

```yaml
# Example: infinity_sword.yml
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

### Property Details

- **`material`**: The base Minecraft material of the item.
- **`custom_model_data`**: The CustomModelData (CMD) value of the item, used by resource packs to change its texture.
- **`display_name`**: The display name of the item. This is usually a key pointing to the [language file](./alang.md).
- **`lore`**: The description text (Lore) of the item. This is usually a list of keys pointing to the language file.
- **`enchantments`** (Optional): Enchantments to be added to the item.
  - Format: `"enchantment_name:level"`.
- **`attributes`** (Optional): Attribute modifiers to be added to the item.
  - Format: `"attribute_name:value"`.
- **`unbreakable`** (Optional): Sets whether the item is unbreakable.
  - `true`: Unbreakable.
  - `false`: Breakable.

## How to Create a New Item

1.  Create a new `.yml` file in the `items` folder, for example, `my_item.yml`.
2.  Define your item in the file, ensuring it has a unique top-level ID (e.g., `my_custom_sword`).
3.  Configure its `material`, `display_name`, and other properties.
4.  In the [recipe files](./arecipe.md), reference it using `avaritia:my_custom_sword` as a result or ingredient.
5.  Reload the plugin with `/avaritia reload`, then get the item with `/avaritia give <player> my_custom_sword`.