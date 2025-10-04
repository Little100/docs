---
title: Configuration Overview
description: Functional description of all Avaritia plugin configuration files
---

# Configuration Overview

The Avaritia plugin includes multiple configuration files to customize various aspects of the plugin. All configuration files are located in the `/plugins/Avaritia_Plugin/` directory.

## Main Configuration File

- **`config.yml`**: [Main Config File](./amainconfig.md)
  - This is the core configuration file of the plugin, containing key options such as global settings, block behavior, and infinity tool features.

## Recipe-Related Files

- **`recipe.yml`**: [Vanilla Workbench Recipes](./arecipe.md#1-vanilla-workbench-recipes-recipe-yml)
  - Defines all crafting recipes for the vanilla 2x2 or 3x3 workbench.

- **`extreme_crafting_table.yml`**: [Extreme Crafting Table Recipes](./arecipe.md#2-extreme-crafting-table-recipes-extreme_crafting_table-yml)
  - Defines all shapeless recipes for the 9x9 Extreme Crafting Table.

- **`neutron_collector.yml`**: [Neutron Collector](./arecipe.md#3-neutron-collector-neutron_collector-yml)
  - Configures the production speed and output of the Neutron Collector.

- **`neutronium_compressor.yml`**: [Neutronium Compressor](./arecipe.md#4-neutronium-compressor-neutronium_compressor-yml)
  - Configures the materials, requirements, etc., for producing singularities.

## Other Configuration Files

- **`language/` folder**: [Language Files](./alang.md)
  - Contains the plugin's language files. You can customize the text displayed in the plugin by modifying or adding .yml files.

- **`items/` folder**: [Item Config](./aci.md)
  - Used to define the properties of all custom items in the plugin, such as name, lore, texture, etc.

- **`gui/` folder**: (Documentation not yet created)
  - Used to configure the plugin's GUI interfaces.