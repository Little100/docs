---
title: 指令設定
description: Avaritia 插件的指令和權限說明
---

# 指令與權限

本文件詳細說明了 Avaritia 插件的所有指令和相關權限節點。

## 主指令

插件的主指令是 `/avaritia`，它有以下別名：

- `/av`
- `/avar`

所有子指令都必須在主指令後輸入，例如：`/avaritia reload`。

## 子指令總覽

| 子指令 | 描述 | 對應權限 |
| :--- | :--- | :--- |
| `reload` | 重新載入插件的全部設定檔。 | `avaritia.admin.reload` |
| `give` | 給予玩家一個無盡貪婪插件的物品。 | `avaritia.give` |
| `language` | 切換你的插件語言。 | `avaritia.command.language` |
| `version` | 查看目前插件的版本資訊。 | `avaritia.command.version` |
| `nbtdebug` | 查看手持物品的 NBT 資料（用於偵錯）。 | `avaritia.command.nbtdebug` |
| `gui` | 開啟、編輯或建立插件的 GUI 介面。 | `avaritia.gui.*` |

## 權限節點

以下是所有可用的權限節點及其描述：

| 權限節點 | 描述 | 預設值 |
| :--- | :--- | :--- |
| `avaritia.command` | 允許使用基礎的 `/avaritia` 指令。 | `true` (所有玩家) |
| `avaritia.command.nbtdebug` | 允許使用 `nbtdebug` 子指令。 | `op` (管理員) |
| `avaritia.command.language` | 允許使用 `language` 子指令切換語言。 | `true` (所有玩家) |
| `avaritia.command.version` | 允許使用 `version` 子指令查看版本。 | `true` (所有玩家) |
| `avaritia.give` | 允許使用 `give` 子指令獲取物品。 | `op` (管理員) |
| `avaritia.gui.use` | 允許使用 `gui` 子指令開啟 GUI。 | `true` (所有玩家) |
| `avaritia.gui.edit` | 允許編輯 GUI 介面。 | `op` (管理員) |
| `avaritia.gui.create` | 允許建立新的 GUI 介面。 | `op` (管理員) |
| `avaritia.admin.reload` | 允許使用 `reload` 子指令重載設定。 | `op` (管理員) |
| `avaritia.admin.*` | 給予所有 Avaritia 插件的管理員權限。 | `op` (管理員) |