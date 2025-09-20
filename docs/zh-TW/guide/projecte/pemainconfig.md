---
title: 主配置文件
description: 等價交換插件的插件文檔
---

# 關於主文件
# config.yml

::: tip
在沒有任何提示的情況下你只能用true和false
並且使用的是默認情況的文件內容
:::

## 語言
```yaml
language: "zh_tw"
```
> 主要語言 默認繁體中文

## Debug
```yaml
debug: false
```
> 默認是false 開啟會輸出非常多內容 所以建議是關閉 除非出現問題

## 成就
```yaml
Advancement_Datapack: true
```
> 默認是true 是自定義成就 用於引導玩家

## 方塊
```yaml
CustomBlockPack:
  enabled: true
```
> 默認是true 自定義顯示方塊 但是注意會消耗性能

## 煉金術士袋子
```yaml
AlchemicalBag:
  enabled: true
```
> 默認是true 如果開啟了玩家可以用這東西

## 工具
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> 默認是true 有關於他們的設置你可以從config中的註釋中看到解釋

## 轉換桌
```yaml
TransmutationTable：
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
> 轉換桌默認是開啟的 這裡的**transfer-fee-percentage**是指玩家給玩家轉賬所需要的手續費 默認是0 也就是免手續費
> recipeConflictStrategy是指多個合成表的情況下應該用什麼EMC值 可選lowest highest
> divisionStrategy是指當一個物品沒辦法整除應該怎麼版floor/ceil分別對應向上下取整
> Exclude_PDC是指是否排除PDC物品 默認是true 也就是排除PDC物品不去計算EMC值
> only_mc_items是只計算原版我的世界的物品
> ImportantItems是指重要物品的設置 非常不建議設置

<QuestionBlock title="要你管?!我就要設置!">

那好吧 在裡面你可以看到類似於下面這樣的設置
```yaml
- item: number
```
這裡的意思是把"item"設置EMC為number
做個假設 我要更改鑽石的EMC為114514那麼就是找到鑽石那一行改為如下

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="ConfrimDatapack你怎麼沒講到?!!!">

如果插件啟用後他會自己變成true的

</QuestionBlock>

<QuestionBlock title="那關於philosopher_stone?">

未完成╥﹏╥...

</QuestionBlock>