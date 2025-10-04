<template><div><h1 id="合成表配置" tabindex="-1"><a class="header-anchor" href="#合成表配置"><span>合成表配置</span></a></h1>
<p>Avaritia 插件拥有多种不同的合成方式，包括原版工作台合成、终极工作台合成、中子态素收集和中子态素压缩。本页将详细解释这些配置文件。</p>
<h2 id="_1-原版工作台合成-recipe-yml" tabindex="-1"><a class="header-anchor" href="#_1-原版工作台合成-recipe-yml"><span>1. 原版工作台合成 (<code v-pre>recipe.yml</code>)</span></a></h2>
<p>此文件定义了可以在原版工作台或玩家物品栏中进行的合成。</p>
<h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3>
<ul>
<li><strong><code v-pre>recipes</code></strong>: 包含所有合成配方的列表。
<ul>
<li><strong><code v-pre>&lt;recipe_id&gt;</code></strong>: 每个合成表的唯一ID。
<ul>
<li><strong><code v-pre>type</code></strong> (可选): 合成类型。
<ul>
<li><code v-pre>shaped</code>: 有序合成 (默认)。</li>
<li><code v-pre>shapeless</code>: 无序合成。</li>
</ul>
</li>
<li><strong><code v-pre>result</code></strong>: 合成产物。
<ul>
<li><code v-pre>material</code>: 物品的 Minecraft 材质。</li>
<li><code v-pre>custom_model_data</code> (可选): 物品的 CMD 值。</li>
<li><code v-pre>display_name</code> (可选): 物品的显示名称 (使用语言文件中的键)。</li>
<li><code v-pre>lore</code> (可选): 物品的 Lore (使用语言文件中的键)。</li>
<li><code v-pre>amount</code> (可选): 产物数量，默认为 1。</li>
</ul>
</li>
<li><strong><code v-pre>shape</code></strong> (仅限 <code v-pre>shaped</code>): 定义合成形状的字符串数组。</li>
<li><strong><code v-pre>ingredients</code></strong>: 定义合成材料。
<ul>
<li><code v-pre>char</code>: <code v-pre>shape</code> 中使用的字符。</li>
<li><code v-pre>material</code> 或 <code v-pre>avaritia:&lt;item_id&gt;</code>: 材料的类型。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<p><strong>钻石晶格 (有序合成)</strong></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>水晶矩阵锭 -&gt; 水晶矩阵 (无序合成)</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">crystal_matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">shapeless</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND_BLOCK</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.crystal_matrix.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  ingredients</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    avaritia:crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-终极工作台合成-extreme-crafting-table-yml" tabindex="-1"><a class="header-anchor" href="#_2-终极工作台合成-extreme-crafting-table-yml"><span>2. 终极工作台合成 (<code v-pre>extreme_crafting_table.yml</code>)</span></a></h2>
<p>此文件定义了只能在 <strong>终极工作台</strong> 中进行的 9x9 合成。</p>
<h3 id="结构-1" tabindex="-1"><a class="header-anchor" href="#结构-1"><span>结构</span></a></h3>
<ul>
<li><strong><code v-pre>&lt;result_item_id&gt;</code></strong>: 合成产物的唯一 ID。
<ul>
<li><strong><code v-pre>&lt;ingredient_id&gt;</code></strong>: 材料的物品 ID (可以是原版物品 ID 或 <code v-pre>avaritia:&lt;item_id&gt;</code>)。</li>
<li><strong><code v-pre>quantity</code></strong>: 所需该材料的总数量。</li>
</ul>
</li>
</ul>
<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3>
<p><strong>中子态素收集器</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">neutron_collector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  REDSTONE_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  QUARTZ_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示合成一个中子态素收集器需要 21 个铁块、10 个红石块、10 个石英块和 7 个水晶矩阵锭，具体摆放位置不限。</p>
<hr>
<h2 id="_3-中子态素收集器-neutron-collector-yml" tabindex="-1"><a class="header-anchor" href="#_3-中子态素收集器-neutron-collector-yml"><span>3. 中子态素收集器 (<code v-pre>neutron_collector.yml</code>)</span></a></h2>
<p>此文件配置中子态素收集器的生产行为。</p>
<h3 id="结构-2" tabindex="-1"><a class="header-anchor" href="#结构-2"><span>结构</span></a></h3>
<ul>
<li><strong><code v-pre>production</code></strong>: 生产设置。
<ul>
<li><code v-pre>ticks_per_item</code>: 生产一个产物所需的 tick 数 (20 ticks = 1 秒)。</li>
<li><code v-pre>output_item</code>: 产物的物品 ID。</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 界面设置。
<ul>
<li><code v-pre>title</code>: GUI 的标题 (使用语言键)。</li>
<li><code v-pre>progress_item</code>: 用于显示进度的物品材质。</li>
<li><code v-pre>update_interval</code>: GUI 的刷新间隔 (tick)。</li>
</ul>
</li>
</ul>
<h3 id="默认配置" tabindex="-1"><a class="header-anchor" href="#默认配置"><span>默认配置</span></a></h3>
<p>默认情况下，生产一个 <code v-pre>neutron_dust</code> (中子素尘埃) 需要 <code v-pre>7111</code> ticks (约 6 分钟)。</p>
<hr>
<h2 id="_4-中子态素压缩机-neutronium-compressor-yml" tabindex="-1"><a class="header-anchor" href="#_4-中子态素压缩机-neutronium-compressor-yml"><span>4. 中子态素压缩机 (<code v-pre>neutronium_compressor.yml</code>)</span></a></h2>
<p>此文件配置中子态素压缩机用于生产 <strong>奇点</strong> 的行为。</p>
<h3 id="结构-3" tabindex="-1"><a class="header-anchor" href="#结构-3"><span>结构</span></a></h3>
<ul>
<li><strong><code v-pre>singularities</code></strong>: 包含所有奇点配方的列表。
<ul>
<li><strong><code v-pre>&lt;singularity_id&gt;</code></strong>: 奇点的唯一 ID (例如 <code v-pre>iron</code>, <code v-pre>gold</code>)。
<ul>
<li><code v-pre>materials</code>: 定义可以用于压缩的材料和它们的&quot;点数&quot;。
<ul>
<li><code v-pre>&lt;material_id&gt;</code>: 物品材质。</li>
<li><code v-pre>points</code>: 该物品代表的点数 (例如，铁锭=1点，铁块=9点)。</li>
</ul>
</li>
<li><code v-pre>required_points</code>: 合成一个奇点所需的总点数。</li>
<li><code v-pre>output_cmd</code>: 输出的奇点物品的 CustomModelData 值。</li>
</ul>
</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI 界面设置。</li>
</ul>
<h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例</span></a></h3>
<p><strong>铁奇点</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">singularities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  iron</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    materials</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_INGOT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    required_points</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    output_cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"101"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这表示你可以投入铁锭 (1点) 或铁块 (9点)，当总点数达到 400 时，就会产出一个铁奇点。</p>
</div></template>


