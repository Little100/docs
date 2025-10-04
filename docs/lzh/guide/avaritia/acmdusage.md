---
title: 號令之用
description: Avaritia 插件號令之詳解
---

# 號令之用

此章詳述 Avaritia 插件所有號令之用法與範例。

## `/avaritia reload`

- **權限**: `avaritia.admin.reload`
- **功用**: 重載插件所有之策，如 `config.yml`, `recipe.yml` 等。手改策後，用此令可立使其效，無需重啟。
- **用法**:
  ```
  /avaritia reload
  ```

## `/avaritia give <玩家> <物品ID> [數量]`

- **權限**: `avaritia.give`
- **功用**: 予指定之玩家一或數個 Avaritia 插件之物。
- **參數**:
  - `<玩家>`: 目標玩家之名。
  - `<物品ID>`: 所予之物之唯一ID（定於物品策中）。
  - `[數量]` (可選): 所予之物之數，常為一。
- **範例**:
  ```
  # 予玩家 Little_100 一柄 Infinity_Sword
  /avaritia give Little_100 Infinity_Sword

  # 予玩家 Steve 六十四個 Neutron_Nugget
  /avaritia give Steve Neutron_Nugget 64
  ```

## `/avaritia language <語言>`

- **權限**: `avaritia.command.language`
- **功用**: 易汝於戲中所見之插件文字語言。
- **參數**:
  - `<語言>`: 語言檔案之名（如 `zh_cn`, `en_us`）。
- **範例**:
  ```
  /avaritia language en_us
  ```

## `/avaritia version`

- **權限**: `avaritia.command.version`
- **功用**: 察當前所置 Avaritia 插件之版本資訊。
- **用法**:
  ```
  /avaritia version
  ```

## `/avaritia nbtdebug`

- **權限**: `avaritia.command.nbtdebug`
- **功用**: 察汝手中所持之物之 NBT (Named Binary Tag) 資料。此令主為開發者與服主偵錯所用。
- **用法**:
  ```
  /avaritia nbtdebug
  ```

## `/avaritia gui`

- **權限**: `avaritia.gui.use`, `avaritia.gui.edit`, `avaritia.gui.create`
- **功用**: 與插件之 GUI 系統互動。
- **子令**:
  - `/avaritia gui open <GUI名>`: 啟指定之 GUI。 (需 `avaritia.gui.use`)
  - `/avaritia gui edit <GUI名>`: 於戲中編已存之 GUI。 (需 `avaritia.gui.edit`)
  - `/avaritia gui create <GUI名>`: 創新 GUI。 (需 `avaritia.gui.create`)
- **範例**:
  ```
  # 啟名為 "main_menu" 之 GUI
  /avaritia gui open main_menu