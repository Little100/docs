---
title: Main Configuration File
description: Plugin documentation for ProjectE
---

# About the Main Configuration File
# config.yml

::: tip
Unless otherwise specified, you can only use `true` and `false`.
The content shown is based on the default configuration file.
:::

## Language
```yaml
language: "zh_cn"
```
> Main language. Default is Simplified Chinese.

## Debug
```yaml
debug: false
```
> Defaults to `false`. Enabling it will output a lot of information, so it's recommended to keep it off unless there's an issue.

## Advancements
```yaml
Advancement_Datapack: true
```
> Defaults to `true`. These are custom advancements to guide the player.

## Blocks
```yaml
CustomBlockPack:
  enabled: true
```
> Defaults to `true`. Enables custom display blocks, but be aware that it consumes performance.

## Alchemical Bag
```yaml
AlchemicalBag:
  enabled: true
```
> Defaults to `true`. If enabled, players can use this item.

## Tools
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> Defaults to `true`. You can find explanations for their settings in the comments within the config file.

## Transmutation Table
```yaml
TransmutationTable:
  enabled: true
  transfer-fee-percentage: 0
  EMC:
    recipeConflictStrategy: "lowest"
    divisionStrategy: "floor"
    Exclude_PDC:
      enabled: true
      only_mc_items: true
    ImportantItems:
      default: ...
```
- The Transmutation Table is enabled by default. The **transfer-fee-percentage** here refers to the fee for player-to-player transfers, which is 0 by default (no fee).

- `recipeConflictStrategy` determines which EMC value to use when there are multiple recipes. Options are `lowest` and `highest`.

- `divisionStrategy` determines how to handle non-integer results from division. `floor`/`ceil` correspond to rounding down/up respectively.

- ~~`Exclude_PDC` determines whether to exclude PDC items. Default is `true`, meaning PDC items are excluded from EMC calculation.~~
> Removed in version 1.1.0.

- `only_mc_items` calculates EMC only for vanilla Minecraft items.

- `ImportantItems` is for setting important items. It is highly recommended not to change this.


<QuestionBlock title="None of your business?! I want to set it!">

Alright then. Inside, you will see settings like the one below:
```yaml
- item: number
```
This means setting the EMC of "item" to "number".
Let's say I want to change the EMC of a diamond to 114514. I would find the diamond line and change it as follows:

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="Why didn't you mention ConfrimDatapack?!!!">

It will automatically become `true` after the plugin is enabled.

</QuestionBlock>

<QuestionBlock title="What about the philosopher_stone?">

~~Unfinished ╥﹏╥...~~
Should be fixed now.
```
philosopher_stone:
  enabled: true # Enable the block transmutation feature
  particle:
    enabled: true # Enable particle effects
    particle-name: "end_rod" # Name of the particle effect
    # Options include flame, soul_fire_flame, dust, enchant, crit, snowflake. end_rod is recommended.
    keep-alive: 3 # Duration in seconds. After testing, 3s is suitable for end_rod.
```
</QuestionBlock>