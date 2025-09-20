---
title: 主配置文件
description: 等价交换插件的插件文档
---

# 关于主文件
# config.yml

::: tip
在没有任何提示的情况下你只能用true和false
并且使用的是默认情况的文件内容
:::

## 语言
```yaml
language: "zh_cn"
```
> 主要语言 默认简体中文

## Debug
```yaml
debug: false
```
> 默认是false 开启会输出非常多内容 所以建议是关闭 除非出现问题

## 成就
```yaml
Advancement_Datapack: true
```
> 默认是true 是自定义成就 用于引导玩家

## 方块
```yaml
CustomBlockPack:
  enabled: true
```
> 默认是true 自定义显示方块 但是注意会消耗性能

## 炼金术士袋子
```yaml
AlchemicalBag:
  enabled: true
```
> 默认是true 如果开启了玩家可以用这东西

## 工具
```yaml
Tools:
  dark_matter_tools_enabled: true
  red_matter_tools_enabled: true
  area_of_effect_mining_enabled: true
  katar_attack_all_mode_enabled: true
```
> 默认是true 有关于他们的设置你可以从config中的注释中看到解释

## 转换桌
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
> 转换桌默认是开启的 这里的**transfer-fee-percentage**是指玩家给玩家转账所需要的手续费 默认是0 也就是免手续费
> recipeConflictStrategy是指多个合成表的情况下应该用什么EMC值 可选lowest highest
> divisionStrategy是指当一个物品没办法整除应该怎么版floor/ceil分别对应向上下取整
> Exclude_PDC是指是否排除PDC物品 默认是true 也就是排除PDC物品不去计算EMC值
> only_mc_items是只计算原版我的世界的物品
> ImportantItems是指重要物品的设置 非常不建议设置

<QuestionBlock title="要你管?!我就要设置!">

那好吧 在里面你可以看到类似于下面这样的设置
```yaml
- item: number
```
这里的意思是把"item"设置EMC为number
做个假设 我要更改钻石的EMC为114514那么就是找到钻石那一行改为如下

```yaml
- diamond: 114514
```

</QuestionBlock>

<QuestionBlock title="ConfrimDatapack你怎么没讲到?!!!">

如果插件启用后他会自己变成true的

</QuestionBlock>

<QuestionBlock title="那关于philosopher_stone?">

未完成╥﹏╥...

</QuestionBlock>