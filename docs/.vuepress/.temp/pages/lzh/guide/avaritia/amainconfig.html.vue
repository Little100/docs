<template><div><h1 id="要策-config-yml" tabindex="-1"><a class="header-anchor" href="#要策-config-yml"><span>要策 (<code v-pre>config.yml</code>)</span></a></h1>
<p>此乃 Avaritia 插件之要策，可于此调其百用。</p>
<h2 id="天下之策" tabindex="-1"><a class="header-anchor" href="#天下之策"><span>天下之策</span></a></h2>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>false</code></li>
<li><strong>解</strong>: 啟偵錯之模式與否。啟則，臺上將現詳盡之偵錯之言，以解惑。</li>
</ul>
<h3 id="default-language" tabindex="-1"><a class="header-anchor" href="#default-language"><span><code v-pre>default_language</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>言</code></li>
<li><strong>常</strong>: <code v-pre>&quot;zh_cn&quot;</code></li>
<li><strong>解</strong>: 定插件所用之常言。</li>
</ul>
<h2 id="方塊之策" tabindex="-1"><a class="header-anchor" href="#方塊之策"><span>方塊之策</span></a></h2>
<h3 id="allow-place-block" tabindex="-1"><a class="header-anchor" href="#allow-place-block"><span><code v-pre>allow_place_block</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>false</code></li>
<li><strong>解</strong>: 允玩家置壓縮臺、二重壓縮臺與水晶陣與否。
<ul>
<li><code v-pre>false</code>: 禁置此等方塊。</li>
<li><code v-pre>true</code>: 允置，且以甲架示之，如終極臺然。</li>
</ul>
</li>
</ul>
<h3 id="compressor-protect" tabindex="-1"><a class="header-anchor" href="#compressor-protect"><span><code v-pre>compressor_protect</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>false</code></li>
<li><strong>解</strong>: 定毀中子壓縮機時之所落。
<ul>
<li><code v-pre>false</code>: 僅落壓縮機，內物與進程皆失（同乎原模組）。</li>
<li><code v-pre>true</code>: 毀時，內物將按進程化為賤材而落（如鑽石塊化為鑽石）。</li>
</ul>
</li>
</ul>
<h2 id="終極臺-extreme-crafting-table" tabindex="-1"><a class="header-anchor" href="#終極臺-extreme-crafting-table"><span>終極臺 (<code v-pre>extreme_crafting_table</code>)</span></a></h2>
<h3 id="debug-1" tabindex="-1"><a class="header-anchor" href="#debug-1"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>false</code></li>
<li><strong>解</strong>: 終極臺之合成偵錯模式。
<ul>
<li><code v-pre>true</code>: 啟則，無視合成之法，任意投材皆可成物，以速試。</li>
<li><code v-pre>false</code>: 常法查驗合成。</li>
</ul>
</li>
</ul>
<h2 id="無盡器-infinity-tools" tabindex="-1"><a class="header-anchor" href="#無盡器-infinity-tools"><span>無盡器 (<code v-pre>infinity_tools</code>)</span></a></h2>
<h3 id="hammer-break-bedrock" tabindex="-1"><a class="header-anchor" href="#hammer-break-bedrock"><span><code v-pre>hammer_break_bedrock</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>false</code></li>
<li><strong>解</strong>: 定世界崩解之鎬之錘模式可毀基岩與否。為護服，常閉。</li>
</ul>
<h3 id="hammer-cmd" tabindex="-1"><a class="header-anchor" href="#hammer-cmd"><span><code v-pre>hammer_cmd</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>數</code></li>
<li><strong>常</strong>: <code v-pre>101</code></li>
<li><strong>解</strong>: 定錘模式之物之 CustomModelData (CMD) 值，以資包易其質。</li>
</ul>
<h3 id="skullfire-offhand-transfer" tabindex="-1"><a class="header-anchor" href="#skullfire-offhand-transfer"><span><code v-pre>skullfire_offhand_transfer</code></span></a></h3>
<ul>
<li><strong>類</strong>: <code v-pre>是非 (true/false)</code></li>
<li><strong>常</strong>: <code v-pre>true</code></li>
<li><strong>解</strong>: 定副手持骷髏劍之效。
<ul>
<li><code v-pre>true</code>: 副手持骷髏劍時，主手以任意兵刃擊凋零骷髏，皆百分百落其首。</li>
<li><code v-pre>false</code>: 唯以骷髏劍直擊方落首。</li>
</ul>
</li>
</ul>
</div></template>


