<template><div><h1 id="合成之法" tabindex="-1"><a class="header-anchor" href="#合成之法"><span>合成之法</span></a></h1>
<p>Avaritia 插件有多種合成之法，含常臺之合、終極臺之合、中子之集與中子之壓。此頁詳解其策。</p>
<h2 id="一、常臺之合-recipe-yml" tabindex="-1"><a class="header-anchor" href="#一、常臺之合-recipe-yml"><span>一、常臺之合 (<code v-pre>recipe.yml</code>)</span></a></h2>
<p>此檔定義可於常臺或玩家物品欄中行之合成。</p>
<h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h3>
<ul>
<li><strong><code v-pre>recipes</code></strong>: 含所有合成之法之列表。
<ul>
<li><strong><code v-pre>&lt;recipe_id&gt;</code></strong>: 各法之唯一ID。
<ul>
<li><strong><code v-pre>type</code></strong> (可選): 合成之類。
<ul>
<li><code v-pre>shaped</code>: 有序之合 (常)。</li>
<li><code v-pre>shapeless</code>: 無序之合。</li>
</ul>
</li>
<li><strong><code v-pre>result</code></strong>: 所成之物。
<ul>
<li><code v-pre>material</code>: 物之 Minecraft 材質。</li>
<li><code v-pre>custom_model_data</code> (可選): 物之 CMD 值。</li>
<li><code v-pre>display_name</code> (可選): 物之名 (用言辭檔中之鍵)。</li>
<li><code v-pre>lore</code> (可選): 物之述 (用言辭檔中之鍵)。</li>
<li><code v-pre>amount</code> (可選): 物之數，常為一。</li>
</ul>
</li>
<li><strong><code v-pre>shape</code></strong> (僅 <code v-pre>shaped</code>): 定合成之形之字串。</li>
<li><strong><code v-pre>ingredients</code></strong>: 定合成之材。
<ul>
<li><code v-pre>char</code>: <code v-pre>shape</code> 中所用之符。</li>
<li><code v-pre>material</code> 或 <code v-pre>avaritia:&lt;item_id&gt;</code>: 材之類。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="範例" tabindex="-1"><a class="header-anchor" href="#範例"><span>範例</span></a></h3>
<p><strong>鑽石晶格 (有序之合)</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">diamond_lattice</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.diamond_lattice.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  shape</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"D D"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">" D "</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"D D"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  ingredients</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    D</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>水晶矩陣錠 -&gt; 水晶矩陣 (無序之合)</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">crystal_matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">shapeless</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND_BLOCK</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.crystal_matrix.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  ingredients</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    avaritia:crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="二、終極臺之合-extreme-crafting-table-yml" tabindex="-1"><a class="header-anchor" href="#二、終極臺之合-extreme-crafting-table-yml"><span>二、終極臺之合 (<code v-pre>extreme_crafting_table.yml</code>)</span></a></h2>
<p>此檔定義僅能於 <strong>終極臺</strong> 中行之九乘九之合。</p>
<h3 id="格式-1" tabindex="-1"><a class="header-anchor" href="#格式-1"><span>格式</span></a></h3>
<ul>
<li><strong><code v-pre>&lt;result_item_id&gt;</code></strong>: 所成之物之唯一 ID。
<ul>
<li><strong><code v-pre>&lt;ingredient_id&gt;</code></strong>: 材之物 ID (可為常物 ID 或 <code v-pre>avaritia:&lt;item_id&gt;</code>)。</li>
<li><strong><code v-pre>quantity</code></strong>: 所需此材之總數。</li>
</ul>
</li>
</ul>
<h3 id="範例-1" tabindex="-1"><a class="header-anchor" href="#範例-1"><span>範例</span></a></h3>
<p><strong>中子態素收集器</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">neutron_collector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  REDSTONE_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  QUARTZ_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此示合一中子態素收集器需鐵塊二十一、紅石塊十、石英塊十、水晶矩陣錠七，置之無序。</p>
<hr>
<h2 id="三、中子態素收集器-neutron-collector-yml" tabindex="-1"><a class="header-anchor" href="#三、中子態素收集器-neutron-collector-yml"><span>三、中子態素收集器 (<code v-pre>neutron_collector.yml</code>)</span></a></h2>
<p>此檔策中子態素收集器之生產。</p>
<h3 id="格式-2" tabindex="-1"><a class="header-anchor" href="#格式-2"><span>格式</span></a></h3>
<ul>
<li><strong><code v-pre>production</code></strong>: 生產之策。
<ul>
<li><code v-pre>ticks_per_item</code>: 生一物所需之 tick (二十 tick 為一秒)。</li>
<li><code v-pre>output_item</code>: 所出之物之 ID。</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 之策。
<ul>
<li><code v-pre>title</code>: GUI 之題 (用言辭鍵)。</li>
<li><code v-pre>progress_item</code>: 示進程之物之材質。</li>
<li><code v-pre>update_interval</code>: GUI 刷新之隔 (tick)。</li>
</ul>
</li>
</ul>
<h3 id="常策" tabindex="-1"><a class="header-anchor" href="#常策"><span>常策</span></a></h3>
<p>常況下，生一 <code v-pre>neutron_dust</code> (中子素塵埃) 需 <code v-pre>7111</code> ticks (約六分鐘)。</p>
<hr>
<h2 id="四、中子態素壓縮機-neutronium-compressor-yml" tabindex="-1"><a class="header-anchor" href="#四、中子態素壓縮機-neutronium-compressor-yml"><span>四、中子態素壓縮機 (<code v-pre>neutronium_compressor.yml</code>)</span></a></h2>
<p>此檔策中子態素壓縮機用以生 <strong>奇點</strong>。</p>
<h3 id="格式-3" tabindex="-1"><a class="header-anchor" href="#格式-3"><span>格式</span></a></h3>
<ul>
<li><strong><code v-pre>singularities</code></strong>: 含所有奇點之法之列表。
<ul>
<li><strong><code v-pre>&lt;singularity_id&gt;</code></strong>: 奇點之唯一 ID (如 <code v-pre>iron</code>, <code v-pre>gold</code>)。
<ul>
<li><code v-pre>materials</code>: 定可用以壓之材及其“點”。
<ul>
<li><code v-pre>&lt;material_id&gt;</code>: 物之材質。</li>
<li><code v-pre>points</code>: 此物所代之點 (如鐵錠為一點，鐵塊為九點)。</li>
</ul>
</li>
<li><code v-pre>required_points</code>: 合一奇點所需之總點。</li>
<li><code v-pre>output_cmd</code>: 所出奇點之物之 CustomModelData 值。</li>
</ul>
</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 之策。</li>
</ul>
<h3 id="範例-2" tabindex="-1"><a class="header-anchor" href="#範例-2"><span>範例</span></a></h3>
<p><strong>鐵奇點</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">singularities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  iron</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    materials</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_INGOT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    required_points</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    output_cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"101"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此示可投鐵錠 (一點) 或鐵塊 (九點)，待總點至四百，則出一鐵奇點。</p>
</div></template>


