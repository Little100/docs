---
title: 合成表设置
description: 等价交换插件的插件文档
---

# 关于合成表
## accessories.yml,devices.yml,op_item.yml,recipe.yml
 - 文件内容可能类似于如下
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
### 在这上面中
 - enabled: 是否启用该合成表,默认true 如果是false那么将移除这个合成表
 - type: 合成表类型,"shaped"和"shapeless"分别代表着有序合成和无序合成
 - XXX YYY ZZZ代表需要合成的物品
 - ingredients: 合成表的物品列表,X Y Z分别代表着合成表的物品的简称
 - result: 合成表的结果,material代表着物品的底座物品

<QuestionBlock title="shaped和shapeless的区别是什么？">

举个例子 **钻石剑**他的排列方式必须是**精准的**
```
工作台布局：
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]

D = 钻石 (DIAMOND)
S = 木棍 (STICK)
```
这就是**有序合成**
而类似于骨粉这种放到**任意格子内就能合成的物品就属于无序合成**

</QuestionBlock>

<QuestionBlock title="我还是没搞懂对应需要合成的物品">

同样举个例子 **钻石剑**的制作布局：
```
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]
```

在配置文件中应该这样写：
```yaml
TheItem:
  enabled: true
  type: "shaped" # 有序合成
  shape:
    - " D "  # 第一行：空-钻石-空
    - " D "  # 第二行：空-钻石-空
    - " S "  # 第三行：空-木棍-空
  ingredients:
    - "D": "DIAMOND" # 物品全称
    - "S": "STICK"
  result:
    material: "DIAMOND_SWORD"  # 合成物品
```

</QuestionBlock>