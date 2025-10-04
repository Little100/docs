---
title: 语言文件
description: 自定义 Avaritia 插件的显示文本
---

# 语言文件配置

Avaritia 插件支持多语言，你可以通过修改语言文件来完全自定义插件在游戏中显示的任何文本，包括物品名称、Lore、GUI 标题和命令消息。

## 文件位置

语言文件位于 `/plugins/Avaritia_Plugin/language/` 目录下。每个 `.yml` 文件代表一种语言，例如 `zh_cn.yml` 是简体中文，`en_us.yml` 是美式英语。

## 如何切换语言

- **全局默认语言**: 在 `config.yml` 文件中，通过 `default_language` 选项设置服务器的默认语言。
- **玩家个人语言**: 玩家可以使用 `/avaritia language <语言文件名>` 命令来切换自己看到的语言，而不会影响其他玩家。

## 文件格式

语言文件使用标准的 YAML 格式，由一系列的 **键 (key)** 和 **值 (value)** 组成。

```yaml
# 示例：zh_cn.yml
items:
  infinity_sword:
    name: "&c&l无尽之剑"
    lore:
      - "&7伤害 +∞"
      - "&7一把传说中的武器"

command:
  reload: "&aAvaritia 插件配置已重载！"
```

- **键**: 是一个唯一的标识符，例如 `items.infinity_sword.name`。插件代码通过这些键来获取对应的文本。
- **值**: 是你希望在游戏中实际显示的文本。你可以使用 Minecraft 的颜色代码（例如 `&c`, `&l`）来设置文本样式。

## 创建新的语言文件

1.  在 `language` 文件夹中，复制一份现有的语言文件（例如 `zh_cn.yml`）。
2.  将文件重命名为你想要的名称，例如 `my_lang.yml`。
3.  打开新文件，将里面的值翻译或修改成你想要的文本。
4.  在 `config.yml` 中将 `default_language` 设置为 `my_lang`，或者让玩家使用 `/avaritia language my_lang` 来切换。