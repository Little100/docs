---
title: 指令使用說明
description: Avaritia 插件詳細的指令用法
---

# 指令使用說明

本文件提供了 Avaritia 插件所有指令的詳細使用方法和範例。

## `/avaritia reload`

- **權限**: `avaritia.admin.reload`
- **功能**: 重新載入插件的所有設定檔，包括 `config.yml`, `recipe.yml` 等。當你手動修改了設定檔後，使用此指令可以立即套用變更，無需重啟伺服器。
- **用法**:
  ```
  /avaritia reload
  ```

## `/avaritia give <玩家> <物品ID> [數量]`

- **權限**: `avaritia.give`
- **功能**: 給予指定玩家一個或多個 Avaritia 插件中的物品。
- **參數**:
  - `<玩家>`: 目標玩家的名稱。
  - `<物品ID>`: 要給予的物品的唯一 ID（在物品設定檔中定義）。
  - `[數量]` (可選): 給予的物品數量，預設為 1。
- **範例**:
  ```
  # 給予玩家 Little_100 一個 Infinity_Sword
  /avaritia give Little_100 Infinity_Sword

  # 給予玩家 Steve 64 個 Neutron_Nugget
  /avaritia give Steve Neutron_Nugget 64
  ```

## `/avaritia language <語言>`

- **權限**: `avaritia.command.language`
- **功能**: 切換你在遊戲內看到的插件文本語言。
- **參數**:
  - `<語言>`: 語言檔案的名稱（例如 `zh_cn`, `en_us`）。
- **範例**:
  ```
  /avaritia language en_us
  ```

## `/avaritia version`

- **權限**: `avaritia.command.version`
- **功能**: 查看當前安裝的 Avaritia 插件的版本資訊。
- **用法**:
  ```
  /avaritia version
  ```

## `/avaritia nbtdebug`

- **權限**: `avaritia.command.nbtdebug`
- **功能**: 查看你手中持有的物品的 NBT (Named Binary Tag) 資料。這是一個主要用於開發者和服主偵錯的指令。
- **用法**:
  ```
  /avaritia nbtdebug
  ```

## `/avaritia gui`

- **權限**: `avaritia.gui.use`, `avaritia.gui.edit`, `avaritia.gui.create`
- **功能**: 與插件的 GUI 系統進行互動。
- **子指令**:
  - `/avaritia gui open <GUI名稱>`: 開啟一個指定的 GUI 介面。 (需要 `avaritia.gui.use`)
  - `/avaritia gui edit <GUI名稱>`: 在遊戲內編輯一個已存在的 GUI 介面。 (需要 `avaritia.gui.edit`)
  - `/avaritia gui create <GUI名稱>`: 建立一個新的 GUI 介面。 (需要 `avaritia.gui.create`)
- **範例**:
  ```
  # 開啟名為 "main_menu" 的 GUI
  /avaritia gui open main_menu