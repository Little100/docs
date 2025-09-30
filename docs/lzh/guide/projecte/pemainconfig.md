---
title: 主簿錄
description: 等價交換之術，其文策也
---

# 關於主簿
# config.yml

::: tip
非有示下，唯得以「true」與「false」應之。
且所示者，皆為初設之容。
:::

## 語言
```yaml
language: "zh_cn"
```
> 主言也，默為簡體中文。

## Debug
```yaml
debug: false
```
> 默為「false」。啟之則言多，故非有故，勿啟也。

## 成就
```yaml
Advancement_Datapack: true
```
> 默為「true」。此乃自訂之成就，以引玩家。

## 方塊
```yaml
CustomBlockPack:
  enabled: true
```
> 默為「true」。自訂方塊之示，然耗性能，慎之。

## 鍊金術士之袋
```yaml
AlchemicalBag:
  enabled: true
```
> 默為「true」。若啟之，玩家可用此物。

## 工具
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> 默為「true」。其詳可覽config中之註解。

## 轉換桌
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
- 轉換桌默啟。**transfer-fee-percentage**者，玩家互易之稅也，默為零，即無稅。

- recipeConflictStrategy者，多方並存，取何EMC值也。有「lowest」、「highest」可擇。

- divisionStrategy者，物不可整除，如之何也。「floor」/「ceil」者，向下、向上取整也。

- ~~Exclude_PDC者，是否排PDC之物也。默為「true」，即不計其EMC值。~~
> 新版1.1.0已廢之。

- only_mc_items者，僅計原版Minecraft之物。

- ImportantItems者，要物之設也，甚不建議更之。


<QuestionBlock title="豈容爾管？吾意已決！">

既如此。內有如下之設：
```yaml
- item: number
```
此意為設「item」之EMC為「number」。
譬如，吾欲改鑽石之EMC為一一四五一四，則尋鑽石之行，改之如下：

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="ConfrimDatapack何不言？">

插件既啟，其自為「true」矣。

</QuestionBlock>

<QuestionBlock title="賢者之石何如？">

未竟也╥﹏╥...

</QuestionBlock>