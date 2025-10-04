<template><div><h1 id="設定檔總覽" tabindex="-1"><a class="header-anchor" href="#設定檔總覽"><span>設定檔總覽</span></a></h1>
<p>Avaritia 插件包含了多個設定檔，用於自訂插件的各個方面。所有設定檔都位於 <code v-pre>/plugins/Avaritia_Plugin/</code> 目錄下。</p>
<h2 id="主要設定檔" tabindex="-1"><a class="header-anchor" href="#主要設定檔"><span>主要設定檔</span></a></h2>
<ul>
<li><strong><code v-pre>config.yml</code></strong>: <RouteLink to="/zh-TW/guide/avaritia/amainconfig.html">主設定檔</RouteLink>
<ul>
<li>這是插件的核心設定檔，包含了全域設定、方塊行為、無盡工具特性等關鍵選項。</li>
</ul>
</li>
</ul>
<h2 id="合成相關檔案" tabindex="-1"><a class="header-anchor" href="#合成相關檔案"><span>合成相關檔案</span></a></h2>
<ul>
<li>
<p><strong><code v-pre>recipe.yml</code></strong>: <RouteLink to="/zh-TW/guide/avaritia/arecipe.html#_1-%E5%8E%9F%E7%89%88%E5%B7%A5%E4%BD%9C%E5%8F%B0%E5%90%88%E6%88%90-recipe-yml">原版工作台合成</RouteLink></p>
<ul>
<li>定義了所有透過原版 2x2 或 3x3 工作台進行的合成配方。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>extreme_crafting_table.yml</code></strong>: <RouteLink to="/zh-TW/guide/avaritia/arecipe.html#_2-%E7%B5%82%E6%A5%B5%E5%B7%A5%E4%BD%9C%E5%8F%B0%E5%90%88%E6%88%90-extreme_crafting_table-yml">終極工作台合成</RouteLink></p>
<ul>
<li>定義了所有在 9x9 終極工作台中進行的無序合成。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>neutron_collector.yml</code></strong>: <RouteLink to="/zh-TW/guide/avaritia/arecipe.html#_3-%E4%B8%AD%E5%AD%90%E6%85%8B%E7%B4%A0%E6%94%B6%E9%9B%86%E5%99%A8-neutron_collector-yml">中子態素收集器</RouteLink></p>
<ul>
<li>設定中子態素收集器的生產速度和產物。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>neutronium_compressor.yml</code></strong>: <RouteLink to="/zh-TW/guide/avaritia/arecipe.html#_4-%E4%B8%AD%E5%AD%90%E6%85%8B%E7%B4%A0%E5%A3%93%E7%B8%AE%E6%A9%9F-neutronium_compressor-yml">中子態素壓縮機</RouteLink></p>
<ul>
<li>設定用於生產奇點的材料、需求量等。</li>
</ul>
</li>
</ul>
<h2 id="其他設定檔" tabindex="-1"><a class="header-anchor" href="#其他設定檔"><span>其他設定檔</span></a></h2>
<ul>
<li>
<p><strong><code v-pre>language/</code> 資料夾</strong>: <RouteLink to="/zh-TW/guide/avaritia/alang.html">語言檔案</RouteLink></p>
<ul>
<li>存放插件的語言檔案，你可以透過修改或新增 .yml 檔案來自訂插件內顯示的文本。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>items/</code> 資料夾</strong>: <RouteLink to="/zh-TW/guide/avaritia/aci.html">物品設定</RouteLink></p>
<ul>
<li>用於定義插件中所有自訂物品的屬性，例如名稱、Lore、材質等。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>gui/</code> 資料夾</strong>: (暫未建立文檔)</p>
<ul>
<li>用於設定插件的 GUI 介面。</li>
</ul>
</li>
</ul>
</div></template>


