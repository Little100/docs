---
title: Language Files
description: Customize the display text of the Avaritia plugin
---

# Language File Configuration

The Avaritia plugin supports multiple languages. You can fully customize any text displayed by the plugin in-game by modifying the language files, including item names, lore, GUI titles, and command messages.

## File Location

Language files are located in the `/plugins/Avaritia_Plugin/language/` directory. Each `.yml` file represents a language, for example, `zh_cn.yml` is for Simplified Chinese, and `en_us.yml` is for American English.

## How to Switch Languages

- **Global Default Language**: In the `config.yml` file, set the server's default language using the `default_language` option.
- **Player's Personal Language**: Players can use the `/avaritia language <language_file_name>` command to switch the language they see without affecting other players.

## File Format

Language files use the standard YAML format, consisting of a series of **keys** and **values**.

```yaml
# Example: en_us.yml
items:
  infinity_sword:
    name: "&c&lInfinity Sword"
    lore:
      - "&7Damage +∞"
      - "&7A legendary weapon"

command:
  reload: "&aAvaritia plugin configuration reloaded!"
```

- **Key**: A unique identifier, such as `items.infinity_sword.name`. The plugin code uses these keys to retrieve the corresponding text.
- **Value**: The actual text you want to be displayed in the game. You can use Minecraft color codes (e.g., `&c`, `&l`) to style the text.

## Creating a New Language File

1.  In the `language` folder, make a copy of an existing language file (e.g., `en_us.yml`).
2.  Rename the file to your desired name, for example, `my_lang.yml`.
3.  Open the new file and translate or modify the values to your desired text.
4.  Set `default_language` to `my_lang` in `config.yml`, or have players use `/avaritia language my_lang` to switch.