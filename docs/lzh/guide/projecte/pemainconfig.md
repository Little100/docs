---
title: 主配置文件
description: 等价交换插件之文章
---

# 关于主文件
# config.yml

::: tip
非有提示，唯用`true`与`false`。
文件内容皆为默认。
:::

## 语言
```yaml
language: "lzh"
```
> 主要语言，默认为文言。

## Debug
```yaml
debug: false
```
> 默认为`false`。开启将输出甚多信息，故建议关闭，除非遇有疑难。

## 成就
```yaml
Advancement_Datapack: true
```
> 默认为`true`。此乃自定义成就，用以引导玩家。

## 方块
```yaml
CustomBlockPack:
  enabled: true
```
> 默认为`true`。此乃自定义显示方块，然需留意，其或耗性能。

## 炼金术士袋
```yaml
AlchemicalBag:
  enabled: true
```
> 默认为`true`。若开启，玩家可用此物。

## 工具
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> 默认为`true`。其相关设置，可于`config.yml`注释中得解。

## 转换桌
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
> 转换桌默认为开启。**transfer-fee-percentage**乃玩家间转账所需手续费，默认为0，即免手续费。
> `recipeConflictStrategy`指多合成表时，当用何EMC值，可选`lowest`、`highest`。
> `divisionStrategy`指物品无法整除时，当如何处理，`floor`/`ceil`分别对应向下、向上取整。
> `Exclude_PDC`指是否排除PDC物品，默认为`true`，即排除PDC物品，不计其EMC值。
> `only_mc_items`仅计算原版Minecraft物品之EMC。
> `ImportantItems`乃重要物品之设置，甚不建议更改。

<QuestionBlock title="与汝何干？吾必欲置之！">

既如此。内有设置，类如下方：
```yaml
- item: number
```
此意为置“item”之EMC为`number`。
譬如，吾欲改钻石之EMC为114514，则寻钻石一行，改为如下：

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="ConfrimDatapack何不言？">

插件启用后，其将自变为`true`。

</QuestionBlock>

<QuestionBlock title="贤者之石何如？">

未竟也 ╥﹏╥...

</QuestionBlock>