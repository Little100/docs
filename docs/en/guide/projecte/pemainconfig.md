---
title: Main Configuration File
description: Plugin documentation for the ProjectE Plugin
---

# About the Main Configuration File
# config.yml

::: tip
Unless otherwise specified, you can only use `true` or `false`.
The content of the file is based on the default settings.
:::

## Language
```yaml
language: "en_us"
```
> The main language. Default is English.

## Debug
```yaml
debug: false
```
> The default is `false`. Enabling this will output a large amount of information, so it is recommended to keep it disabled unless you encounter issues.

## Achievements
```yaml
Advancement_Datapack: true
```
> The default is `true`. This enables custom advancements to guide players.

## Blocks
```yaml
CustomBlockPack:
  enabled: true
```
> The default is `true`. This enables custom display blocks, but be aware that it may impact performance.

## Alchemical Bag
```yaml
AlchemicalBag:
  enabled: true
```
> The default is `true`. If enabled, players can use this item.

## Tools
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> The default is `true`. You can find explanations for their settings in the comments within the `config.yml` file.

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
> The Transmutation Table is enabled by default. The **transfer-fee-percentage** is the fee for transferring EMC between players, which is 0 by default (no fee).
> `recipeConflictStrategy` determines which EMC value to use when multiple recipes exist. Options are `lowest` and `highest`.
> `divisionStrategy` determines how to handle non-integer results from division. `floor`/`ceil` correspond to rounding down/up.
> `Exclude_PDC` determines whether to exclude PDC items. The default is `true`, which means PDC items are excluded from EMC calculations.
> `only_mc_items` calculates EMC only for vanilla Minecraft items.
> `ImportantItems` is for setting important items. It is highly recommended not to change this.

<QuestionBlock title="None of your business! I want to configure it anyway!">

Alright then. Inside, you will see settings similar to the following:
```yaml
- item: number
```
This means setting the EMC of "item" to `number`.
For example, if I want to change the EMC of a diamond to 114514, I would find the line for diamond and change it as follows:

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="Why didn't you mention ConfrimDatapack?!!!">

It will automatically be set to `true` after the plugin is enabled.

</QuestionBlock>

<QuestionBlock title="What about philosopher_stone?">

Incomplete ╥﹏╥...

</QuestionBlock>