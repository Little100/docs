---
title: 合成表配置
description: Avaritia 插件的各类合成配方说明
---

# 合成表配置

Avaritia 插件拥有多种不同的合成方式，包括原版工作台合成、终极工作台合成、中子态素收集和中子态素压缩。本页将详细解释这些配置文件。

## 1. 原版工作台合成 (`recipe.yml`)

此文件定义了可以在原版工作台或玩家物品栏中进行的合成。

### 结构

- **`recipes`**: 包含所有合成配方的列表。
  - **`<recipe_id>`**: 每个合成表的唯一ID。
    - **`type`** (可选): 合成类型。
      - `shaped`: 有序合成 (默认)。
      - `shapeless`: 无序合成。
    - **`result`**: 合成产物。
      - `material`: 物品的 Minecraft 材质。
      - `custom_model_data` (可选): 物品的 CMD 值。
      - `display_name` (可选): 物品的显示名称 (使用语言文件中的键)。
      - `lore` (可选): 物品的 Lore (使用语言文件中的键)。
      - `amount` (可选): 产物数量，默认为 1。
    - **`shape`** (仅限 `shaped`): 定义合成形状的字符串数组。
    - **`ingredients`**: 定义合成材料。
      - `char`: `shape` 中使用的字符。
      - `material` 或 `avaritia:<item_id>`: 材料的类型。

### 示例

**钻石晶格 (有序合成)**
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

**水晶矩阵锭 -> 水晶矩阵 (无序合成)**
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

## 2. 终极工作台合成 (`extreme_crafting_table.yml`)

此文件定义了只能在 **终极工作台** 中进行的 9x9 合成。

### 结构

- **`<result_item_id>`**: 合成产物的唯一 ID。
  - **`<ingredient_id>`**: 材料的物品 ID (可以是原版物品 ID 或 `avaritia:<item_id>`)。
  - **`quantity`**: 所需该材料的总数量。

### 示例

**中子态素收集器**
```yaml
neutron_collector:
  IRON_BLOCK: 21
  REDSTONE_BLOCK: 10
  QUARTZ_BLOCK: 10
  crystal_matrix_ingot: 7
```
这表示合成一个中子态素收集器需要 21 个铁块、10 个红石块、10 个石英块和 7 个水晶矩阵锭，具体摆放位置不限。

---

## 3. 中子态素收集器 (`neutron_collector.yml`)

此文件配置中子态素收集器的生产行为。

### 结构

- **`production`**: 生产设置。
  - `ticks_per_item`: 生产一个产物所需的 tick 数 (20 ticks = 1 秒)。
  - `output_item`: 产物的物品 ID。
- **`gui`**: GUI 界面设置。
  - `title`: GUI 的标题 (使用语言键)。
  - `progress_item`: 用于显示进度的物品材质。
  - `update_interval`: GUI 的刷新间隔 (tick)。

### 默认配置

默认情况下，生产一个 `neutron_dust` (中子素尘埃) 需要 `7111` ticks (约 6 分钟)。

---

## 4. 中子态素压缩机 (`neutronium_compressor.yml`)

此文件配置中子态素压缩机用于生产 **奇点** 的行为。

### 结构

- **`singularities`**: 包含所有奇点配方的列表。
  - **`<singularity_id>`**: 奇点的唯一 ID (例如 `iron`, `gold`)。
    - `materials`: 定义可以用于压缩的材料和它们的"点数"。
      - `<material_id>`: 物品材质。
      - `points`: 该物品代表的点数 (例如，铁锭=1点，铁块=9点)。
    - `required_points`: 合成一个奇点所需的总点数。
    - `output_cmd`: 输出的奇点物品的 CustomModelData 值。
- **`gui`**: GUI 界面设置。

### 示例

**铁奇点**
```yaml
singularities:
  iron:
    materials:
      IRON_INGOT: 1
      IRON_BLOCK: 9
    required_points: 400
    output_cmd: "101"
```
这表示你可以投入铁锭 (1点) 或铁块 (9点)，当总点数达到 400 时，就会产出一个铁奇点。