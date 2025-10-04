---
title: Command Usage
description: Detailed command usage for the Avaritia plugin
---

# Command Usage

This document provides detailed usage instructions and examples for all commands in the Avaritia plugin.

## `/avaritia reload`

- **Permission**: `avaritia.admin.reload`
- **Function**: Reloads all of the plugin's configuration files, including `config.yml`, `recipe.yml`, etc. Use this command after manually editing config files to apply changes immediately without restarting the server.
- **Usage**:
  ```
  /avaritia reload
  ```

## `/avaritia give <player> <item_id> [amount]`

- **Permission**: `avaritia.give`
- **Function**: Gives a specified player one or more items from the Avaritia plugin.
- **Parameters**:
  - `<player>`: The name of the target player.
  - `<item_id>`: The unique ID of the item to be given (defined in the item configuration files).
  - `[amount]` (Optional): The number of items to give, defaults to 1.
- **Examples**:
  ```
  # Give player Little_100 one Infinity_Sword
  /avaritia give Little_100 Infinity_Sword

  # Give player Steve 64 Neutron_Nuggets
  /avaritia give Steve Neutron_Nugget 64
  ```

## `/avaritia language <language>`

- **Permission**: `avaritia.command.language`
- **Function**: Switches the language of the plugin text you see in-game.
- **Parameters**:
  - `<language>`: The name of the language file (e.g., `zh_cn`, `en_us`).
- **Example**:
  ```
  /avaritia language en_us
  ```

## `/avaritia version`

- **Permission**: `avaritia.command.version`
- **Function**: Checks the version information of the currently installed Avaritia plugin.
- **Usage**:
  ```
  /avaritia version
  ```

## `/avaritia nbtdebug`

- **Permission**: `avaritia.command.nbtdebug`
- **Function**: Displays the NBT (Named Binary Tag) data of the item you are holding. This is a command primarily for debugging by developers and server owners.
- **Usage**:
  ```
  /avaritia nbtdebug
  ```

## `/avaritia gui`

- **Permission**: `avaritia.gui.use`, `avaritia.gui.edit`, `avaritia.gui.create`
- **Function**: Interacts with the plugin's GUI system.
- **Sub-commands**:
  - `/avaritia gui open <gui_name>`: Opens a specified GUI. (Requires `avaritia.gui.use`)
  - `/avaritia gui edit <gui_name>`: Edits an existing GUI in-game. (Requires `avaritia.gui.edit`)
  - `/avaritia gui create <gui_name>`: Creates a new GUI. (Requires `avaritia.gui.create`)
- **Example**:
  ```
  # Open a GUI named "main_menu"
  /avaritia gui open main_menu