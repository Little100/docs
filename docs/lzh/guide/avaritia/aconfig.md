---
title: 策之總覽
description: Avaritia 插件所有策之功用之解
---

# 策之總覽

Avaritia 插件含多策，以自定插件之各方。所有策皆位於 `/plugins/Avaritia_Plugin/` 目錄下。

## 要策

- **`config.yml`**: [要策](./amainconfig.md)
  - 此乃插件之核心策，含天下之策、方塊之行、無盡器之性等關鍵選項。

## 合成相關之檔

- **`recipe.yml`**: [常臺之合](./arecipe.md#一-常臺之合-recipe-yml)
  - 定義所有經由常臺二乘二或三乘三行之合成之法。

- **`extreme_crafting_table.yml`**: [終極臺之合](./arecipe.md#二-終極臺之合-extreme_crafting_table-yml)
  - 定義所有於九乘九終極臺中行之無序之合。

- **`neutron_collector.yml`**: [中子態素收集器](./arecipe.md#三-中子態素收集器-neutron_collector-yml)
  - 策中子態素收集器之生產之速與所出。

- **`neutronium_compressor.yml`**: [中子態素壓縮機](./arecipe.md#四-中子態素壓縮機-neutronium_compressor-yml)
  - 策用以生奇點之材、所需之量等。

## 其餘之策

- **`language/` 資料夾**: [言辭之檔](./alang.md)
  - 存插件之言辭檔，可藉修改或增添 .yml 檔以自定插件內所示之文。

- **`items/` 資料夾**: [器物之策](./aci.md)
  - 用以定義插件中所有自定之物之屬性，如名、述、質等。

- **`gui/` 資料夾**: (尚無章疏)
  - 用以策插件之 GUI。