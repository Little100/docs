---
title: 指令介紹
description: 等價交換外掛的外掛文件
---

# 這裡是外掛的指令 這裡只介紹幾個有用的指令
> 我會分為op和非op兩種權限講解

## 首先是指令主體
 - 有兩個指令可以供你使用 
 - 這兩個指令:
   - `/pe`
   - `/projecte`

# OP指令
## reload
 - 用於重啟外掛(會重新計算EMC值)
## setemc
 - 用於設定物品的EMC值(你手上的物品)
 - 用法: `前指令 + setemc <EMC值>`
## noemcitem
 - 用於檢視EMC為0的物品(即沒有EMC的物品)
## pdcitem
 - 用於檢視所有PDC物品的EMC
## table
 - 讓你轉換桌直接學會所有物品
 - 用法: `前指令 + table learn`
## lang
 - 用於切換語言
 - 用法: `前指令 + lang <語言檔案>`

# 非OP指令
## pay
 - 用於給玩家支付EMC
 - 用法: `前指令 + pay <玩家名> <EMC值>`
## bag
 - 用於檢視鍊金術袋子的列表
 - 用法: `前指令 + bag + list`