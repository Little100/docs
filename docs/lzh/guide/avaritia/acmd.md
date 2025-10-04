---
title: 號令之策
description: Avaritia 插件之號令與權限之解
---

# 號令與權限

此章詳解 Avaritia 插件之所有號令及相關權限。

## 主令

插件之主令為 `/avaritia`，亦有別名：

- `/av`
- `/avar`

凡子令，皆需附於主令之後，如：`/avaritia reload`。

## 子令一覽

| 子令 | 述 | 所需權限 |
| :--- | :--- | :--- |
| `reload` | 重載插件之所有策。 | `avaritia.admin.reload` |
| `give` | 予玩家無盡貪婪之物。 | `avaritia.give` |
| `language` | 易汝之插件語言。 | `avaritia.command.language` |
| `version` | 察插件之版本。 | `avaritia.command.version` |
| `nbtdebug` | 察手持之物之 NBT（以偵錯）。 | `avaritia.command.nbtdebug` |
| `gui` | 啟、編或創新之 GUI。 | `avaritia.gui.*` |

## 權限

此為所有可用之權限及其述：

| 權限 | 述 | 常值 |
| :--- | :--- | :--- |
| `avaritia.command` | 允用基礎之 `/avaritia` 號令。 | `true` (眾玩家) |
| `avaritia.command.nbtdebug` | 允用 `nbtdebug` 子令。 | `op` (權者) |
| `avaritia.command.language` | 允用 `language` 子令以易言。 | `true` (眾玩家) |
| `avaritia.command.version` | 允用 `version` 子令以察版本。 | `true` (眾玩家) |
| `avaritia.give` | 允用 `give` 子令以取物。 | `op` (權者) |
| `avaritia.gui.use` | 允用 `gui` 子令以啟 GUI。 | `true` (眾玩家) |
| `avaritia.gui.edit` | 允編 GUI。 | `op` (權者) |
| `avaritia.gui.create` | 允創新 GUI。 | `op` (權者) |
| `avaritia.admin.reload` | 允用 `reload` 子令以重載。 | `op` (權者) |
| `avaritia.admin.*` | 予所有 Avaritia 插件之權者權限。 | `op` (權者) |