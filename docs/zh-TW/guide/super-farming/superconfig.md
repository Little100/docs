---
title: 設定檔案
description: 超級農事外掛的插件文檔
---

# config.yml
```yaml
farm:
  # 自動耕地功能
  tilling:
    # Y軸搜尋範圍設定
    y-axis:
      # 向上搜尋的最大距離，-1表示無限
      upper-limit: -1
      # 向下搜尋的最大距離，-1表示無限
      lower-limit: -1
    
  # 任務調度設定
  scheduler:
    # 任務執行間隔（單位：刻，20刻=1秒）
    interval: 200
    
  # 施肥設定
  fertilizing:
    # 一次使用的最大骨粉數量
    max-bone-meal: 10
```
::: warning
設定檔案足夠精細了但是請注意
如果把數值調的非常極端將非常佔用資源消耗
:::