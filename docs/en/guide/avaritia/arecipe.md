---
title: Recipe Configuration
description: Explanation of various recipe types in the Avaritia plugin
---

# Recipe Configuration

The Avaritia plugin features several different crafting methods, including vanilla workbench crafting, Extreme Crafting Table, Neutron Collector, and Neutronium Compressor. This page explains jejich configuration files in detail.

## 1. Vanilla Workbench Recipes (`recipe.yml`)

This file defines recipes that can be crafted in a vanilla workbench or the player's inventory.

### Structure

- **`recipes`**: A list containing all recipes.
  - **`<recipe_id>`**: A unique ID for each recipe.
    - **`type`** (Optional): The type of recipe.
      - `shaped`: A shaped recipe (default).
      - `shapeless`: A shapeless recipe.
    - **`result`**: The crafting output.
      - `material`: The Minecraft material of the item.
      - `custom_model_data` (Optional): The item's CMD value.
      - `display_name` (Optional): The item's display name (uses a key from the language file).
      - `lore` (Optional): The item's lore (uses keys from the language file).
      - `amount` (Optional): The amount of the output item, defaults to 1.
    - **`shape`** (`shaped` only): An array of strings defining the recipe shape.
    - **`ingredients`**: Defines the crafting materials.
      - `char`: The character used in the `shape`.
      - `material` or `avaritia:<item_id>`: The type of the material.

### Examples

**Diamond Lattice (Shaped)**
```yaml
diamond_lattice:
  result:
    material: DIAMOND
    custom_model_data: "100"
    display_name: "items.diamond_lattice.name"
  shape:
    - "D D"
    - " D "
    - "D D"
  ingredients:
    D: DIAMOND
```

**Crystal Matrix Ingot -> Crystal Matrix (Shapeless)**
```yaml
crystal_matrix:
  type: shapeless
  result:
    material: DIAMOND_BLOCK
    custom_model_data: "100"
    display_name: "items.crystal_matrix.name"
  ingredients:
    avaritia:crystal_matrix_ingot: 9
```

---

## 2. Extreme Crafting Table Recipes (`extreme_crafting_table.yml`)

This file defines the 9x9 recipes that can only be crafted in the **Extreme Crafting Table**.

### Structure

- **`<result_item_id>`**: The unique ID of the resulting item.
  - **`<ingredient_id>`**: The item ID of the material (can be a vanilla item ID or `avaritia:<item_id>`).
  - **`quantity`**: The total quantity of that material required.

### Example

**Neutron Collector**
```yaml
neutron_collector:
  IRON_BLOCK: 21
  REDSTONE_BLOCK: 10
  QUARTZ_BLOCK: 10
  crystal_matrix_ingot: 7
```
This means crafting a Neutron Collector requires 21 Iron Blocks, 10 Redstone Blocks, 10 Quartz Blocks, and 7 Crystal Matrix Ingots, with no specific arrangement.

---

## 3. Neutron Collector (`neutron_collector.yml`)

This file configures the production behavior of the Neutron Collector.

### Structure

- **`production`**: Production settings.
  - `ticks_per_item`: The number of ticks required to produce one item (20 ticks = 1 second).
  - `output_item`: The item ID of the output.
- **`gui`**: GUI interface settings.
  - `title`: The title of the GUI (uses a language key).
  - `progress_item`: The material used to display progress.
  - `update_interval`: The GUI's refresh interval in ticks.

### Default Configuration

By default, it takes `7111` ticks (about 6 minutes) to produce one `neutron_dust`.

---

## 4. Neutronium Compressor (`neutronium_compressor.yml`)

This file configures the Neutronium Compressor's behavior for producing **Singularities**.

### Structure

- **`singularities`**: A list of all singularity recipes.
  - **`<singularity_id>`**: The unique ID of the singularity (e.g., `iron`, `gold`).
    - `materials`: Defines the materials that can be compressed and their "point" values.
      - `<material_id>`: The item material.
      - `points`: The point value of the item (e.g., Iron Ingot = 1 point, Iron Block = 9 points).
    - `required_points`: The total points required to craft one singularity.
    - `output_cmd`: The CustomModelData value of the output singularity item.
- **`gui`**: GUI interface settings.

### Example

**Iron Singularity**
```yaml
singularities:
  iron:
    materials:
      IRON_INGOT: 1
      IRON_BLOCK: 9
    required_points: 400
    output_cmd: "101"
```
This means you can input Iron Ingots (1 point) or Iron Blocks (9 points), and when the total points reach 400, an Iron Singularity will be produced.