---
title: 丹方之设
description: 等价交换之章
---

# 论丹方
## accessories.yml,devices.yml,op_item.yml,recipe.yml
 - 其文或如下所示：
```yaml
TheItem:
  enabled: true
  type: "shaped"
  shape:
    - "XXX"
    - "YYY"
    - "ZZZ"
  ingredients:
    - "X": "a item"
    - "Y": "b item"
    - "Z": "c item"
  result:
    material: "TheResult"
```
### 释义于上：
 - enabled: 此方启用与否，默认为`true`。若为`false`，则此方废。
 - type: 丹方之类，"shaped"为有序，"shapeless"为无序。
 - XXX YYY ZZZ乃合成所需之物也。
 - ingredients: 丹方之材列。`X`、`Y`、`Z`乃材料之简称。
 - result: 成品。`material`为成品之基材。

<QuestionBlock title="有序与无序，其别安在？">

以**金刚之剑**为例，其排列须**精确**。
```
工作台布局：
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]

D = 钻石
S = 木棍
```
此即**有序之合**。
而若骨粉之属，**随处置格皆可成者，则为无序之合**。

</QuestionBlock>

<QuestionBlock title="于合成之物，吾犹未晓。">

复以**金刚之剑**为例：
```
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]
```

于配置文档中，当如是写：
```yaml
TheItem:
  enabled: true
  type: "shaped" # 有序之合
  shape:
    - " D "  # 第一行：空-钻石-空
    - " D "  # 第二行：空-钻石-空
    - " S "  # 第三行：空-木棍-空
  ingredients:
    - "D": "DIAMOND" # 材料全名
    - "S": "STICK"
  result:
    material: "DIAMOND_SWORD"  # 成品
```

</QuestionBlock>