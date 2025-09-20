---
title: 策之文件
description: 超級農事插件之文章
---

# config.yml
```yaml
farm:
  # 自動耕田之能
  tilling:
    # Y軸尋索之圍
    y-axis:
      # 上尋之極，-1為無垠
      upper-limit: -1
      # 下尋之極，-1為無垠
      lower-limit: -1
    
  # 任務調度之設
  scheduler:
    # 任務執行之間隔（單位：刻，二十刻為一秒）
    interval: 200
    
  # 施肥之設
  fertilizing:
    # 一次用骨粉之極
    max-bone-meal: 10
```
::: warning
策之文件已足夠精細，然請注意
若將數值調至極端，將甚耗資源
:::