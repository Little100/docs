---
title: 合成表設定
description: Avaritia 插件的各類合成配方說明
---

# 合成表設定

Avaritia 插件擁有多種不同的合成方式，包括原版工作台合成、終極工作台合成、中子態素收集和中子態素壓縮。本頁將詳細解釋這些設定檔。

## 1. 原版工作台合成 (`recipe.yml`)

此檔案定義了可以在原版工作台或玩家物品欄中進行的合成。

### 結構

- **`recipes`**: 包含所有合成配方的列表。
  - **`<recipe_id>`**: 每個合成表的唯一ID。
    - **`type`** (可選): 合成類型。
      - `shaped`: 有序合成 (預設)。
      - `shapeless`: 無序合成。
    - **`result`**: 合成產物。
      - `material`: 物品的 Minecraft 材質。
      - `custom_model_data` (可選): 物品的 CMD 值。
      - `display_name` (可選): 物品的顯示名稱 (使用語言檔案中的鍵)。
      - `lore` (可選): 物品的 Lore (使用語言檔案中的鍵)。
      - `amount` (可選): 產物數量，預設為 1。
    - **`shape`** (僅限 `shaped`): 定義合成形狀的字串陣列。
    - **`ingredients`**: 定義合成材料。
      - `char`: `shape` 中使用的字元。
      - `material` 或 `avaritia:<item_id>`: 材料的類型。

### 範例

**鑽石晶格 (有序合成)**
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

**水晶矩陣錠 -> 水晶矩陣 (無序合成)**
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

## 2. 終極工作台合成 (`extreme_crafting_table.yml`)

此檔案定義了只能在 **終極工作台** 中进行的 9x9 合成。

### 結構

- **`<result_item_id>`**: 合成產物的唯一 ID。
  - **`<ingredient_id>`**: 材料的物品 ID (可以是原版物品 ID 或 `avaritia:<item_id>`)。
  - **`quantity`**: 所需該材料的總數量。

### 範例

**中子態素收集器**
```yaml
neutron_collector:
  IRON_BLOCK: 21
  REDSTONE_BLOCK: 10
  QUARTZ_BLOCK: 10
  crystal_matrix_ingot: 7
```
這表示合成一個中子態素收集器需要 21 個鐵塊、10 個紅石塊、10 個石英塊和 7 個水晶矩陣錠，具體擺放位置不限。

---

## 3. 中子態素收集器 (`neutron_collector.yml`)

此檔案配置中子態素收集器的生產行為。

### 結構

- **`production`**: 生產設定。
  - `ticks_per_item`: 生產一個產物所需的 tick 數 (20 ticks = 1 秒)。
  - `output_item`: 產物的物品 ID。
- **`gui`**: GUI 介面設定。
  - `title`: GUI 的標題 (使用語言鍵)。
  - `progress_item`: 用於顯示進度的物品材質。
  - `update_interval`: GUI 的刷新間隔 (tick)。

### 預設設定

預設情況下，生產一個 `neutron_dust` (中子素塵埃) 需要 `7111` ticks (約 6 分鐘)。

---

## 4. 中子態素壓縮機 (`neutronium_compressor.yml`)

此檔案配置中子態素壓縮機用於生產 **奇點** 的行為。

### 結構

- **`singularities`**: 包含所有奇點配方的列表。
  - **`<singularity_id>`**: 奇點的唯一 ID (例如 `iron`, `gold`)。
    - `materials`: 定義可以用於壓縮的材料和它們的"點數"。
      - `<material_id>`: 物品材質。
      - `points`: 該物品代表的點數 (例如，鐵錠=1點，鐵塊=9點)。
    - `required_points`: 合成一個奇點所需的總點數。
    - `output_cmd`: 輸出的奇點物品的 CustomModelData 值。
- **`gui`**: GUI 介面設定。

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
這表示你可以投入鐵錠 (1點) 或鐵塊 (9點)，當總點數達到 400 時，就會產出一個鐵奇點。