---
title: Command Config
description: Commands and permissions for the Avaritia plugin
---

# Commands and Permissions

This document details all commands and related permission nodes for the Avaritia plugin.

## Main Command

The main command for the plugin is `/avaritia`, which has the following aliases:

- `/av`
- `/avar`

All sub-commands must be entered after the main command, for example: `/avaritia reload`.

## Sub-command Overview

| Sub-command | Description | Permission |
| :--- | :--- | :--- |
| `reload` | Reloads all plugin configuration files. | `avaritia.admin.reload` |
| `give` | Gives a player an item from the Avaritia plugin. | `avaritia.give` |
| `language` | Switches your plugin language. | `avaritia.command.language` |
| `version` | Checks the current version of the plugin. | `avaritia.command.version` |
| `nbtdebug` | Views the NBT data of the item in hand (for debugging). | `avaritia.command.nbtdebug` |
| `gui` | Opens, edits, or creates a plugin GUI. | `avaritia.gui.*` |

## Permission Nodes

Below are all available permission nodes and their descriptions:

| Permission Node | Description | Default |
| :--- | :--- | :--- |
| `avaritia.command` | Allows use of the base `/avaritia` command. | `true` (all players) |
| `avaritia.command.nbtdebug` | Allows use of the `nbtdebug` sub-command. | `op` (operators) |
| `avaritia.command.language` | Allows use of the `language` sub-command to switch languages. | `true` (all players) |
| `avaritia.command.version` | Allows use of the `version` sub-command to check the version. | `true` (all players) |
| `avaritia.give` | Allows use of the `give` sub-command to get items. | `op` (operators) |
| `avaritia.gui.use` | Allows use of the `gui` sub-command to open GUIs. | `true` (all players) |
| `avaritia.gui.edit` | Allows editing of GUI interfaces. | `op` (operators) |
| `avaritia.gui.create` | Allows creation of new GUI interfaces. | `op` (operators) |
| `avaritia.admin.reload` | Allows use of the `reload` sub-command to reload configs. | `op` (operators) |
| `avaritia.admin.*` | Grants all administrative permissions for the Avaritia plugin. | `op` (operators) |