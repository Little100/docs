---
title: 配置文件
description: 超级农事插件的插件文档
---

# config.yml
```yaml
farm:
  # 自动耕地功能
  tilling:
    # Y轴搜索范围设置
    y-axis:
      # 向上搜索的最大距离，-1表示无限
      upper-limit: -1
      # 向下搜索的最大距离，-1表示无限
      lower-limit: -1
    
  # 任务调度设置
  scheduler:
    # 任务执行间隔（单位：刻，20刻=1秒）
    interval: 200
    
  # 施肥设置
  fertilizing:
    # 一次使用的最大骨粉数量
    max-bone-meal: 10
```
::: warning
配置文件足够精细了但是请注意
如果把数值调的非常极端将非常占用资源消耗
:::