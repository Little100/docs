---
title: 命令使用说明
description: Avaritia 插件详细的命令用法
---

# 命令使用说明

本文档提供了 Avaritia 插件所有命令的详细使用方法和示例。

## `/avaritia reload`

- **权限**: `avaritia.admin.reload`
- **功能**: 重新加载插件的所有配置文件，包括 `config.yml`, `recipe.yml` 等。当你手动修改了配置文件后，使用此命令可以立即应用更改，无需重启服务器。
- **用法**:
  ```
  /avaritia reload
  ```

## `/avaritia give <玩家> <物品ID> [数量]`

- **权限**: `avaritia.give`
- **功能**: 给予指定玩家一个或多个 Avaritia 插件中的物品。
- **参数**:
  - `<玩家>`: 目标玩家的名称。
  - `<物品ID>`: 要给予的物品的唯一 ID（在物品配置文件中定义）。
  - `[数量]` (可选): 给予的物品数量，默认为 1。
- **示例**:
  ```
  # 给予玩家 Little_100 一个 Infinity_Sword
  /avaritia give Little_100 Infinity_Sword

  # 给予玩家 Steve 64 个 Neutron_Nugget
  /avaritia give Steve Neutron_Nugget 64
  ```

## `/avaritia language <语言>`

- **权限**: `avaritia.command.language`
- **功能**: 切换你在游戏内看到的插件文本语言。
- **参数**:
  - `<语言>`: 语言文件的名称（例如 `zh_cn`, `en_us`）。
- **示例**:
  ```
  /avaritia language en_us
  ```

## `/avaritia version`

- **权限**: `avaritia.command.version`
- **功能**: 查看当前安装的 Avaritia 插件的版本信息。
- **用法**:
  ```
  /avaritia version
  ```

## `/avaritia nbtdebug`

- **权限**: `avaritia.command.nbtdebug`
- **功能**: 查看你手中持有的物品的 NBT (Named Binary Tag) 数据。这是一个主要用于开发者和服主调试的命令。
- **用法**:
  ```
  /avaritia nbtdebug
  ```

## `/avaritia gui`

- **权限**: `avaritia.gui.use`, `avaritia.gui.edit`, `avaritia.gui.create`
- **功能**: 与插件的 GUI 系统进行交互。
- **子命令**:
  - `/avaritia gui open <GUI名称>`: 打开一个指定的 GUI 界面。 (需要 `avaritia.gui.use`)
  - `/avaritia gui edit <GUI名称>`: 在游戏内编辑一个已存在的 GUI 界面。 (需要 `avaritia.gui.edit`)
  - `/avaritia gui create <GUI名称>`: 创建一个新的 GUI 界面。 (需要 `avaritia.gui.create`)
- **示例**:
  ```
  # 打开名为 "main_menu" 的 GUI
  /avaritia gui open main_menu