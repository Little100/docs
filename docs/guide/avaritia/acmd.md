---
title: 命令配置
description: Avaritia 插件的命令和权限说明
---

# 命令与权限

本文档详细说明了 Avaritia 插件的所有命令和相关权限节点。

## 主命令

插件的主命令是 `/avaritia`，它有以下别名：

- `/av`
- `/avar`

所有子命令都必须在主命令后输入，例如：`/avaritia reload`。

## 子命令概览

| 子命令 | 描述 | 对应权限 |
| :--- | :--- | :--- |
| `reload` | 重新加载插件的全部配置文件。 | `avaritia.admin.reload` |
| `give` | 给予玩家一个无尽贪婪插件的物品。 | `avaritia.give` |
| `language` | 切换你的插件语言。 | `avaritia.command.language` |
| `version` | 查看当前插件的版本信息。 | `avaritia.command.version` |
| `nbtdebug` | 查看手持物品的 NBT 数据（用于调试）。 | `avaritia.command.nbtdebug` |
| `gui` | 打开、编辑或创建插件的 GUI 界面。 | `avaritia.gui.*` |

## 权限节点

以下是所有可用的权限节点及其描述：

| 权限节点 | 描述 | 默认值 |
| :--- | :--- | :--- |
| `avaritia.command` | 允许使用基础的 `/avaritia` 命令。 | `true` (所有玩家) |
| `avaritia.command.nbtdebug` | 允许使用 `nbtdebug` 子命令。 | `op` (管理员) |
| `avaritia.command.language` | 允许使用 `language` 子命令切换语言。 | `true` (所有玩家) |
| `avaritia.command.version` | 允许使用 `version` 子命令查看版本。 | `true` (所有玩家) |
| `avaritia.give` | 允许使用 `give` 子命令获取物品。 | `op` (管理员) |
| `avaritia.gui.use` | 允许使用 `gui` 子命令打开 GUI。 | `true` (所有玩家) |
| `avaritia.gui.edit` | 允许编辑 GUI 界面。 | `op` (管理员) |
| `avaritia.gui.create` | 允许创建新的 GUI 界面。 | `op` (管理员) |
| `avaritia.admin.reload` | 允许使用 `reload` 子命令重载配置。 | `op` (管理员) |
| `avaritia.admin.*` | 给予所有 Avaritia 插件的管理员权限。 | `op` (管理员) |