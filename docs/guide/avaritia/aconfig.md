---
title: 配置文件总览
description: Avaritia 插件所有配置文件的功能说明
---

# 配置文件总览

Avaritia 插件包含了多个配置文件，用于自定义插件的各个方面。所有配置文件都位于 `/plugins/Avaritia_Plugin/` 目录下。

## 主要配置文件

- **`config.yml`**: [主配置文件](./amainconfig.md)
  - 这是插件的核心配置文件，包含了全局设置、方块行为、无尽工具特性等关键选项。

## 合成相关文件

- **`recipe.yml`**: [原版工作台合成](./arecipe.md#1-原版工作台合成-recipe-yml)
  - 定义了所有通过原版 2x2 或 3x3 工作台进行的合成配方。

- **`extreme_crafting_table.yml`**: [终极工作台合成](./arecipe.md#2-终极工作台合成-extreme_crafting_table-yml)
  - 定义了所有在 9x9 终极工作台中进行的无序合成。

- **`neutron_collector.yml`**: [中子态素收集器](./arecipe.md#3-中子态素收集器-neutron_collector-yml)
  - 配置中子态素收集器的生产速度和产物。

- **`neutronium_compressor.yml`**: [中子态素压缩机](./arecipe.md#4-中子态素压缩机-neutronium_compressor-yml)
  - 配置用于生产奇点的材料、需求量等。

## 其他配置文件

- **`language/` 文件夹**: [语言文件](./alang.md)
  - 存放插件的语言文件，你可以通过修改或添加 .yml 文件来自定义插件内显示的文本。

- **`items/` 文件夹**: [物品配置](./aci.md)
  - 用于定义插件中所有自定义物品的属性，例如名称、Lore、材质等。

- **`gui/` 文件夹**: (暂未创建文档)
  - 用于配置插件的 GUI 界面。