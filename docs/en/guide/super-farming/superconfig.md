---
title: Configuration File
description: Plugin documentation for Super Farming
---

# config.yml
```yaml
farm:
  # Auto-tilling function
  tilling:
    # Y-axis search range settings
    y-axis:
      # Maximum upward search distance, -1 for unlimited
      upper-limit: -1
      # Maximum downward search distance, -1 for unlimited
      lower-limit: -1
    
  # Task scheduler settings
  scheduler:
    # Task execution interval (unit: ticks, 20 ticks = 1 second)
    interval: 200
    
  # Fertilizing settings
  fertilizing:
    # Maximum bone meal to use at once
    max-bone-meal: 10
```
::: warning
The configuration file is detailed enough, but please note
Setting the values to extremes will be very resource-intensive.
:::