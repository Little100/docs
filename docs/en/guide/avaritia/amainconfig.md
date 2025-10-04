---
title: Main Config File
description: Core configuration for the Avaritia plugin (config.yml)
---

# Main Config File (`config.yml`)

This is the core configuration file for the Avaritia plugin. You can adjust the basic functions of the plugin here.

## Global Settings

### `debug`

- **Type**: `Boolean (true/false)`
- **Default**: `false`
- **Description**: Toggles the plugin's Debug mode. When enabled, detailed debug information will be output to the console, which is useful for troubleshooting.

### `default_language`

- **Type**: `String`
- **Default**: `"zh_cn"`
- **Description**: Sets the default language file used by the plugin.

## Block Settings

### `allow_place_block`

- **Type**: `Boolean (true/false)`
- **Default**: `false`
- **Description**: Determines whether players are allowed to place the Compressed Crafting Table, Double Compressed Crafting Table, and Crystal Matrix.
  - `false`: Placing these blocks is forbidden.
  - `true`: Placing is allowed, and they will be displayed using an armor stand, similar to the Extreme Crafting Table.

### `compressor_protect`

- **Type**: `Boolean (true/false)`
- **Default**: `false`
- **Description**: Configures the drop behavior when a Neutronium Compressor is broken.
  - `false`: Only the compressor itself drops, and any items and progress inside are lost (matches the behavior of the original mod).
  - `true`: When broken, items being processed inside will be dropped as lower-tier materials based on progress (e.g., a diamond block becomes diamonds).

## Extreme Crafting Table (`extreme_crafting_table`)

### `debug`

- **Type**: `Boolean (true/false)`
- **Default**: `false`
- **Description**: The crafting Debug mode for the Extreme Crafting Table.
  - `true`: When enabled, it ignores crafting recipes, allowing any materials to be used for crafting. This is mainly for quick testing.
  - `false`: Crafting recipes are checked normally.

## Infinity Tools (`infinity_tools`)

### `hammer_break_bedrock`

- **Type**: `Boolean (true/false)`
- **Default**: `false`
- **Description**: Determines if the World Breaker's hammer mode can break bedrock. It is disabled by default to protect the server.

### `hammer_cmd`

- **Type**: `Integer`
- **Default**: `101`
- **Description**: Sets the CustomModelData (CMD) value for the hammer mode item, used by resource packs to change its texture.

### `skullfire_offhand_transfer`

- **Type**: `Boolean (true/false)`
- **Default**: `true`
- **Description**: Configures the effect of holding the Skullfire Sword in the off-hand.
  - `true`: When the Skullfire Sword is in the off-hand, any weapon used in the main hand to kill a Wither Skeleton will have a 100% chance to drop a skull.
  - `false`: Only direct kills with the Skullfire Sword will trigger the skull drop.