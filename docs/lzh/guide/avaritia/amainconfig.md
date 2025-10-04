---
title: 要策
description: Avaritia 插件之要策 (config.yml)
---

# 要策 (`config.yml`)

此乃 Avaritia 插件之要策，可于此调其百用。

## 天下之策

### `debug`

- **類**: `是非 (true/false)`
- **常**: `false`
- **解**: 啟偵錯之模式與否。啟則，臺上將現詳盡之偵錯之言，以解惑。

### `default_language`

- **類**: `言`
- **常**: `"zh_cn"`
- **解**: 定插件所用之常言。

## 方塊之策

### `allow_place_block`

- **類**: `是非 (true/false)`
- **常**: `false`
- **解**: 允玩家置壓縮臺、二重壓縮臺與水晶陣與否。
  - `false`: 禁置此等方塊。
  - `true`: 允置，且以甲架示之，如終極臺然。

### `compressor_protect`

- **類**: `是非 (true/false)`
- **常**: `false`
- **解**: 定毀中子壓縮機時之所落。
  - `false`: 僅落壓縮機，內物與進程皆失（同乎原模組）。
  - `true`: 毀時，內物將按進程化為賤材而落（如鑽石塊化為鑽石）。

## 終極臺 (`extreme_crafting_table`)

### `debug`

- **類**: `是非 (true/false)`
- **常**: `false`
- **解**: 終極臺之合成偵錯模式。
  - `true`: 啟則，無視合成之法，任意投材皆可成物，以速試。
  - `false`: 常法查驗合成。

## 無盡器 (`infinity_tools`)

### `hammer_break_bedrock`

- **類**: `是非 (true/false)`
- **常**: `false`
- **解**: 定世界崩解之鎬之錘模式可毀基岩與否。為護服，常閉。

### `hammer_cmd`

- **類**: `數`
- **常**: `101`
- **解**: 定錘模式之物之 CustomModelData (CMD) 值，以資包易其質。

### `skullfire_offhand_transfer`

- **類**: `是非 (true/false)`
- **常**: `true`
- **解**: 定副手持骷髏劍之效。
  - `true`: 副手持骷髏劍時，主手以任意兵刃擊凋零骷髏，皆百分百落其首。
  - `false`: 唯以骷髏劍直擊方落首。