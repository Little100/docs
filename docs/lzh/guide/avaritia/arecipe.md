---
title: 合成之法
description: Avaritia 插件各類合成之法之解
---

# 合成之法

Avaritia 插件有多種合成之法，含常臺之合、終極臺之合、中子之集與中子之壓。此頁詳解其策。

## 一、常臺之合 (`recipe.yml`)

此檔定義可於常臺或玩家物品欄中行之合成。

### 格式

- **`recipes`**: 含所有合成之法之列表。
  - **`<recipe_id>`**: 各法之唯一ID。
    - **`type`** (可選): 合成之類。
      - `shaped`: 有序之合 (常)。
      - `shapeless`: 無序之合。
    - **`result`**: 所成之物。
      - `material`: 物之 Minecraft 材質。
      - `custom_model_data` (可選): 物之 CMD 值。
      - `display_name` (可選): 物之名 (用言辭檔中之鍵)。
      - `lore` (可選): 物之述 (用言辭檔中之鍵)。
      - `amount` (可選): 物之數，常為一。
    - **`shape`** (僅 `shaped`): 定合成之形之字串。
    - **`ingredients`**: 定合成之材。
      - `char`: `shape` 中所用之符。
      - `material` 或 `avaritia:<item_id>`: 材之類。

### 範例

**鑽石晶格 (有序之合)**
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

**水晶矩陣錠 -> 水晶矩陣 (無序之合)**
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

## 二、終極臺之合 (`extreme_crafting_table.yml`)

此檔定義僅能於 **終極臺** 中行之九乘九之合。

### 格式

- **`<result_item_id>`**: 所成之物之唯一 ID。
  - **`<ingredient_id>`**: 材之物 ID (可為常物 ID 或 `avaritia:<item_id>`)。
  - **`quantity`**: 所需此材之總數。

### 範例

**中子態素收集器**
```yaml
neutron_collector:
  IRON_BLOCK: 21
  REDSTONE_BLOCK: 10
  QUARTZ_BLOCK: 10
  crystal_matrix_ingot: 7
```
此示合一中子態素收集器需鐵塊二十一、紅石塊十、石英塊十、水晶矩陣錠七，置之無序。

---

## 三、中子態素收集器 (`neutron_collector.yml`)

此檔策中子態素收集器之生產。

### 格式

- **`production`**: 生產之策。
  - `ticks_per_item`: 生一物所需之 tick (二十 tick 為一秒)。
  - `output_item`: 所出之物之 ID。
- **`gui`**: GUI 之策。
  - `title`: GUI 之題 (用言辭鍵)。
  - `progress_item`: 示進程之物之材質。
  - `update_interval`: GUI 刷新之隔 (tick)。

### 常策

常況下，生一 `neutron_dust` (中子素塵埃) 需 `7111` ticks (約六分鐘)。

---

## 四、中子態素壓縮機 (`neutronium_compressor.yml`)

此檔策中子態素壓縮機用以生 **奇點**。

### 格式

- **`singularities`**: 含所有奇點之法之列表。
  - **`<singularity_id>`**: 奇點之唯一 ID (如 `iron`, `gold`)。
    - `materials`: 定可用以壓之材及其“點”。
      - `<material_id>`: 物之材質。
      - `points`: 此物所代之點 (如鐵錠為一點，鐵塊為九點)。
    - `required_points`: 合一奇點所需之總點。
    - `output_cmd`: 所出奇點之物之 CustomModelData 值。
- **`gui`**: GUI 之策。

### 範例

**鐵奇點**
```yaml
singularities:
  iron:
    materials:
      IRON_INGOT: 1
      IRON_BLOCK: 9
    required_points: 400
    output_cmd: "101"
```
此示可投鐵錠 (一點) 或鐵塊 (九點)，待總點至四百，則出一鐵奇點。