---
title: 合成表設定
description: 等價交換外掛的插件文件
---

# 關於合成表
## accessories.yml,devices.yml,op_item.yml,recipe.yml
 - 檔案內容可能類似於如下
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
### 在這上面中
 - enabled: 是否啟用該合成表,預設true 如果是false那麼將移除這個合成表
 - type: 合成表類型,"shaped"和"shapeless"分別代表著有序合成和無序合成
 - XXX YYY ZZZ代表需要合成的物品
 - ingredients: 合成表的物品列表,X Y Z分別代表著合成表的物品的簡稱
 - result: 合成表的結果,material代表著物品的底座物品

<QuestionBlock title="shaped和shapeless的區別是什麼？">

舉個例子 **鑽石劍**他的排列方式必須是**精準的**
```
工作台佈局：
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]

D = 鑽石 (DIAMOND)
S = 木棍 (STICK)
```
這就是**有序合成**
而類似於骨粉這種放到**任意格子內就能合成的物品就屬於無序合成**

</QuestionBlock>

<QuestionBlock title="我還是沒搞懂對應需要合成的物品">

同樣舉個例子 **鑽石劍**的製作佈局：
```
[ ] [D] [ ]
[ ] [D] [ ]
[ ] [S] [ ]
```

在配置檔案中應該這樣寫：
```yaml
TheItem:
  enabled: true
  type: "shaped" # 有序合成
  shape:
    - " D "  # 第一行：空-鑽石-空
    - " D "  # 第二行：空-鑽石-空
    - " S "  # 第三行：空-木棍-空
  ingredients:
    - "D": "DIAMOND" # 物品全稱
    - "S": "STICK"
  result:
    material: "DIAMOND_SWORD"  # 合成物品
```

</QuestionBlock>