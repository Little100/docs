<template><div><h1 id="物品設定" tabindex="-1"><a class="header-anchor" href="#物品設定"><span>物品設定</span></a></h1>
<p>Avaritia 插件允許你透過設定檔高度自訂每一個物品的屬性。</p>
<h2 id="檔案位置" tabindex="-1"><a class="header-anchor" href="#檔案位置"><span>檔案位置</span></a></h2>
<p>物品設定檔位於 <code v-pre>/plugins/Avaritia_Plugin/items/</code> 目錄下。每個 <code v-pre>.yml</code> 檔案通常代表一類物品。</p>
<h2 id="結構" tabindex="-1"><a class="header-anchor" href="#結構"><span>結構</span></a></h2>
<p>每個物品都由其唯一的 <strong>物品ID</strong> 標識。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 範例: infinity_sword.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">infinity_sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND_SWORD</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1000</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.infinity_sword.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  lore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.infinity_sword.lore.0"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.infinity_sword.lore.1"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enchantments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"sharpness:10"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"unbreaking:3"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  attributes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    generic.attack_damage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9999</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  unbreakable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="屬性詳解" tabindex="-1"><a class="header-anchor" href="#屬性詳解"><span>屬性詳解</span></a></h3>
<ul>
<li><strong><code v-pre>material</code></strong>: 物品的基礎 Minecraft 材質。</li>
<li><strong><code v-pre>custom_model_data</code></strong>: 物品的 CustomModelData (CMD) 值，用於資源包更換材質。</li>
<li><strong><code v-pre>display_name</code></strong>: 物品的顯示名稱。通常是一個指向<RouteLink to="/zh-TW/guide/avaritia/alang.html">語言檔案</RouteLink>的鍵。</li>
<li><strong><code v-pre>lore</code></strong>: 物品的描述文本（Lore）。通常是一個包含多個語言檔案鍵的列表。</li>
<li><strong><code v-pre>enchantments</code></strong> (可選): 為物品添加的附魔。
<ul>
<li>格式: <code v-pre>&quot;附魔名稱:等級&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>attributes</code></strong> (可選): 為物品添加的屬性修飾符。
<ul>
<li>格式: <code v-pre>&quot;屬性名稱:數值&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>unbreakable</code></strong> (可選): 設定物品是否無法破壞。
<ul>
<li><code v-pre>true</code>: 無法破壞。</li>
<li><code v-pre>false</code>: 可以被破壞。</li>
</ul>
</li>
</ul>
<h2 id="如何建立新物品" tabindex="-1"><a class="header-anchor" href="#如何建立新物品"><span>如何建立新物品</span></a></h2>
<ol>
<li>在 <code v-pre>items</code> 資料夾中建立一個新的 <code v-pre>.yml</code> 檔案，例如 <code v-pre>my_item.yml</code>。</li>
<li>在檔案中定義你的物品，確保有一個唯一的頂層 ID (例如 <code v-pre>my_custom_sword</code>)。</li>
<li>設定其 <code v-pre>material</code>, <code v-pre>display_name</code> 等屬性。</li>
<li>在<RouteLink to="/zh-TW/guide/avaritia/arecipe.html">合成表檔案</RouteLink>中，使用 <code v-pre>avaritia:my_custom_sword</code> 作為產物或原料來引用它。</li>
<li>使用 <code v-pre>/avaritia reload</code> 重載插件，然後用 <code v-pre>/avaritia give &lt;玩家&gt; my_custom_sword</code> 來獲取它。</li>
</ol>
</div></template>


