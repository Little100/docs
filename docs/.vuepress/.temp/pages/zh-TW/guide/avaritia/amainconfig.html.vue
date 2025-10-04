<template><div><h1 id="主設定檔-config-yml" tabindex="-1"><a class="header-anchor" href="#主設定檔-config-yml"><span>主設定檔 (<code v-pre>config.yml</code>)</span></a></h1>
<p>這是 Avaritia 插件的核心設定檔，你可以在這裡調整插件的各項基本功能。</p>
<h2 id="全域設定" tabindex="-1"><a class="header-anchor" href="#全域設定"><span>全域設定</span></a></h2>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>false</code></li>
<li><strong>說明</strong>: 是否開啟插件的 Debug 模式。開啟後，主控台會輸出詳細的偵錯資訊，用於排查問題。</li>
</ul>
<h3 id="default-language" tabindex="-1"><a class="header-anchor" href="#default-language"><span><code v-pre>default_language</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>字串</code></li>
<li><strong>預設值</strong>: <code v-pre>&quot;zh_cn&quot;</code></li>
<li><strong>說明</strong>: 設定插件預設使用的語言檔案。</li>
</ul>
<h2 id="方塊設定" tabindex="-1"><a class="header-anchor" href="#方塊設定"><span>方塊設定</span></a></h2>
<h3 id="allow-place-block" tabindex="-1"><a class="header-anchor" href="#allow-place-block"><span><code v-pre>allow_place_block</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>false</code></li>
<li><strong>說明</strong>: 是否允許玩家放置壓縮工作台、二重壓縮工作台和水晶矩陣。
<ul>
<li><code v-pre>false</code>: 禁止放置這些方塊。</li>
<li><code v-pre>true</code>: 允許放置，並會像終極工作台一樣使用盔甲架來顯示模型。</li>
</ul>
</li>
</ul>
<h3 id="compressor-protect" tabindex="-1"><a class="header-anchor" href="#compressor-protect"><span><code v-pre>compressor_protect</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>false</code></li>
<li><strong>說明</strong>: 設定破壞中子態素壓縮機時的掉落行為。
<ul>
<li><code v-pre>false</code>: 僅掉落壓縮機本身，內部物品和進度會遺失（與原版模組行為一致）。</li>
<li><code v-pre>true</code>: 破壞時，會將內部正在處理的物品按進度轉換為低階材料掉落（例如，正在壓縮的鑽石塊會掉落為鑽石）。</li>
</ul>
</li>
</ul>
<h2 id="終極工作台-extreme-crafting-table" tabindex="-1"><a class="header-anchor" href="#終極工作台-extreme-crafting-table"><span>終極工作台 (<code v-pre>extreme_crafting_table</code>)</span></a></h2>
<h3 id="debug-1" tabindex="-1"><a class="header-anchor" href="#debug-1"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>false</code></li>
<li><strong>說明</strong>: 終極工作台的合成 Debug 模式。
<ul>
<li><code v-pre>true</code>: 開啟後，將無視合成配方，放入任意材料都能合成物品，主要用於快速測試。</li>
<li><code v-pre>false</code>: 正常檢查合成配方。</li>
</ul>
</li>
</ul>
<h2 id="無盡工具-infinity-tools" tabindex="-1"><a class="header-anchor" href="#無盡工具-infinity-tools"><span>無盡工具 (<code v-pre>infinity_tools</code>)</span></a></h2>
<h3 id="hammer-break-bedrock" tabindex="-1"><a class="header-anchor" href="#hammer-break-bedrock"><span><code v-pre>hammer_break_bedrock</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>false</code></li>
<li><strong>說明</strong>: 設定世界崩解之鎬的錘子模式是否能夠破壞基岩。為了保護伺服器，預設為關閉。</li>
</ul>
<h3 id="hammer-cmd" tabindex="-1"><a class="header-anchor" href="#hammer-cmd"><span><code v-pre>hammer_cmd</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>整數</code></li>
<li><strong>預設值</strong>: <code v-pre>101</code></li>
<li><strong>說明</strong>: 設定錘子模式物品的 CustomModelData (CMD) 值，用於資源包更換其材質。</li>
</ul>
<h3 id="skullfire-offhand-transfer" tabindex="-1"><a class="header-anchor" href="#skullfire-offhand-transfer"><span><code v-pre>skullfire_offhand_transfer</code></span></a></h3>
<ul>
<li><strong>類型</strong>: <code v-pre>布林值 (true/false)</code></li>
<li><strong>預設值</strong>: <code v-pre>true</code></li>
<li><strong>說明</strong>: 設定副手持有骷髏劍時的效果。
<ul>
<li><code v-pre>true</code>: 當副手持有骷髏劍時，主手使用任何武器擊殺凋零骷髏都有 100% 的機率掉落頭顱。</li>
<li><code v-pre>false</code>: 只有直接使用骷髏劍擊殺時才會觸發頭顱掉落。</li>
</ul>
</li>
</ul>
</div></template>


