<template><div><h1 id="合成表設定" tabindex="-1"><a class="header-anchor" href="#合成表設定"><span>合成表設定</span></a></h1>
<p>Avaritia 插件擁有多種不同的合成方式，包括原版工作台合成、終極工作台合成、中子態素收集和中子態素壓縮。本頁將詳細解釋這些設定檔。</p>
<h2 id="_1-原版工作台合成-recipe-yml" tabindex="-1"><a class="header-anchor" href="#_1-原版工作台合成-recipe-yml"><span>1. 原版工作台合成 (<code v-pre>recipe.yml</code>)</span></a></h2>
<p>此檔案定義了可以在原版工作台或玩家物品欄中進行的合成。</p>
<h3 id="結構" tabindex="-1"><a class="header-anchor" href="#結構"><span>結構</span></a></h3>
<ul>
<li><strong><code v-pre>recipes</code></strong>: 包含所有合成配方的列表。
<ul>
<li><strong><code v-pre>&lt;recipe_id&gt;</code></strong>: 每個合成表的唯一ID。
<ul>
<li><strong><code v-pre>type</code></strong> (可選): 合成類型。
<ul>
<li><code v-pre>shaped</code>: 有序合成 (預設)。</li>
<li><code v-pre>shapeless</code>: 無序合成。</li>
</ul>
</li>
<li><strong><code v-pre>result</code></strong>: 合成產物。
<ul>
<li><code v-pre>material</code>: 物品的 Minecraft 材質。</li>
<li><code v-pre>custom_model_data</code> (可選): 物品的 CMD 值。</li>
<li><code v-pre>display_name</code> (可選): 物品的顯示名稱 (使用語言檔案中的鍵)。</li>
<li><code v-pre>lore</code> (可選): 物品的 Lore (使用語言檔案中的鍵)。</li>
<li><code v-pre>amount</code> (可選): 產物數量，預設為 1。</li>
</ul>
</li>
<li><strong><code v-pre>shape</code></strong> (僅限 <code v-pre>shaped</code>): 定義合成形狀的字串陣列。</li>
<li><strong><code v-pre>ingredients</code></strong>: 定義合成材料。
<ul>
<li><code v-pre>char</code>: <code v-pre>shape</code> 中使用的字元。</li>
<li><code v-pre>material</code> 或 <code v-pre>avaritia:&lt;item_id&gt;</code>: 材料的類型。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="範例" tabindex="-1"><a class="header-anchor" href="#範例"><span>範例</span></a></h3>
<p><strong>鑽石晶格 (有序合成)</strong></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>水晶矩陣錠 -&gt; 水晶矩陣 (無序合成)</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">crystal_matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">shapeless</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND_BLOCK</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.crystal_matrix.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  ingredients</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    avaritia:crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-終極工作台合成-extreme-crafting-table-yml" tabindex="-1"><a class="header-anchor" href="#_2-終極工作台合成-extreme-crafting-table-yml"><span>2. 終極工作台合成 (<code v-pre>extreme_crafting_table.yml</code>)</span></a></h2>
<p>此檔案定義了只能在 <strong>終極工作台</strong> 中进行的 9x9 合成。</p>
<h3 id="結構-1" tabindex="-1"><a class="header-anchor" href="#結構-1"><span>結構</span></a></h3>
<ul>
<li><strong><code v-pre>&lt;result_item_id&gt;</code></strong>: 合成產物的唯一 ID。
<ul>
<li><strong><code v-pre>&lt;ingredient_id&gt;</code></strong>: 材料的物品 ID (可以是原版物品 ID 或 <code v-pre>avaritia:&lt;item_id&gt;</code>)。</li>
<li><strong><code v-pre>quantity</code></strong>: 所需該材料的總數量。</li>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這表示合成一個中子態素收集器需要 21 個鐵塊、10 個紅石塊、10 個石英塊和 7 個水晶矩陣錠，具體擺放位置不限。</p>
<hr>
<h2 id="_3-中子態素收集器-neutron-collector-yml" tabindex="-1"><a class="header-anchor" href="#_3-中子態素收集器-neutron-collector-yml"><span>3. 中子態素收集器 (<code v-pre>neutron_collector.yml</code>)</span></a></h2>
<p>此檔案配置中子態素收集器的生產行為。</p>
<h3 id="結構-2" tabindex="-1"><a class="header-anchor" href="#結構-2"><span>結構</span></a></h3>
<ul>
<li><strong><code v-pre>production</code></strong>: 生產設定。
<ul>
<li><code v-pre>ticks_per_item</code>: 生產一個產物所需的 tick 數 (20 ticks = 1 秒)。</li>
<li><code v-pre>output_item</code>: 產物的物品 ID。</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 介面設定。
<ul>
<li><code v-pre>title</code>: GUI 的標題 (使用語言鍵)。</li>
<li><code v-pre>progress_item</code>: 用於顯示進度的物品材質。</li>
<li><code v-pre>update_interval</code>: GUI 的刷新間隔 (tick)。</li>
</ul>
</li>
</ul>
<h3 id="預設設定" tabindex="-1"><a class="header-anchor" href="#預設設定"><span>預設設定</span></a></h3>
<p>預設情況下，生產一個 <code v-pre>neutron_dust</code> (中子素塵埃) 需要 <code v-pre>7111</code> ticks (約 6 分鐘)。</p>
<hr>
<h2 id="_4-中子態素壓縮機-neutronium-compressor-yml" tabindex="-1"><a class="header-anchor" href="#_4-中子態素壓縮機-neutronium-compressor-yml"><span>4. 中子態素壓縮機 (<code v-pre>neutronium_compressor.yml</code>)</span></a></h2>
<p>此檔案配置中子態素壓縮機用於生產 <strong>奇點</strong> 的行為。</p>
<h3 id="結構-3" tabindex="-1"><a class="header-anchor" href="#結構-3"><span>結構</span></a></h3>
<ul>
<li><strong><code v-pre>singularities</code></strong>: 包含所有奇點配方的列表。
<ul>
<li><strong><code v-pre>&lt;singularity_id&gt;</code></strong>: 奇點的唯一 ID (例如 <code v-pre>iron</code>, <code v-pre>gold</code>)。
<ul>
<li><code v-pre>materials</code>: 定義可以用於壓縮的材料和它們的&quot;點數&quot;。
<ul>
<li><code v-pre>&lt;material_id&gt;</code>: 物品材質。</li>
<li><code v-pre>points</code>: 該物品代表的點數 (例如，鐵錠=1點，鐵塊=9點)。</li>
</ul>
</li>
<li><code v-pre>required_points</code>: 合成一個奇點所需的總點數。</li>
<li><code v-pre>output_cmd</code>: 輸出的奇點物品的 CustomModelData 值。</li>
</ul>
</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 介面設定。</li>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>這表示你可以投入鐵錠 (1點) 或鐵塊 (9點)，當總點數達到 400 時，就會產出一個鐵奇點。</p>
</div></template>


