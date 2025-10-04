<template><div><h1 id="器物之策" tabindex="-1"><a class="header-anchor" href="#器物之策"><span>器物之策</span></a></h1>
<p>Avaritia 插件允汝藉策以高度自定各物之屬性。</p>
<h2 id="檔之所在" tabindex="-1"><a class="header-anchor" href="#檔之所在"><span>檔之所在</span></a></h2>
<p>器物策位於 <code v-pre>/plugins/Avaritia_Plugin/items/</code> 目錄下。各 <code v-pre>.yml</code> 檔常代一類之物。</p>
<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2>
<p>各物皆由其唯一之 <strong>物品ID</strong> 識之。</p>
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
<li><strong><code v-pre>material</code></strong>: 物之基礎 Minecraft 材質。</li>
<li><strong><code v-pre>custom_model_data</code></strong>: 物之 CustomModelData (CMD) 值，用以資源包易其質。</li>
<li><strong><code v-pre>display_name</code></strong>: 物之名。常為指向<RouteLink to="/lzh/guide/avaritia/alang.html">言辭之檔</RouteLink>之鍵。</li>
<li><strong><code v-pre>lore</code></strong>: 物之述。常為含多言辭檔鍵之列表。</li>
<li><strong><code v-pre>enchantments</code></strong> (可選): 為物增之附魔。
<ul>
<li>格式: <code v-pre>&quot;附魔名:等級&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>attributes</code></strong> (可選): 為物增之屬性修飾符。
<ul>
<li>格式: <code v-pre>&quot;屬性名:數值&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>unbreakable</code></strong> (可選): 定物可毀與否。
<ul>
<li><code v-pre>true</code>: 不可毀。</li>
<li><code v-pre>false</code>: 可毀。</li>
</ul>
</li>
</ul>
<h2 id="如何創新物" tabindex="-1"><a class="header-anchor" href="#如何創新物"><span>如何創新物</span></a></h2>
<p>一、 於 <code v-pre>items</code> 資料夾中創新 <code v-pre>.yml</code> 檔，如 <code v-pre>my_item.yml</code>。
二、 於檔中定義汝之物，確保有唯一之頂層 ID (如 <code v-pre>my_custom_sword</code>)。
三、 策其 <code v-pre>material</code>, <code v-pre>display_name</code> 等屬性。
四、 於<RouteLink to="/lzh/guide/avaritia/arecipe.html">合成之法檔</RouteLink>中，用 <code v-pre>avaritia:my_custom_sword</code> 為所成或所用以引之。
五、 用 <code v-pre>/avaritia reload</code> 重載插件，再用 <code v-pre>/avaritia give &lt;玩家&gt; my_custom_sword</code> 以取之。</p>
</div></template>


