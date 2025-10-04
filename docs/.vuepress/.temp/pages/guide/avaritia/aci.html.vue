<template><div><h1 id="物品配置" tabindex="-1"><a class="header-anchor" href="#物品配置"><span>物品配置</span></a></h1>
<p>Avaritia 插件允许你通过配置文件高度自定义每一个物品的属性。</p>
<h2 id="文件位置" tabindex="-1"><a class="header-anchor" href="#文件位置"><span>文件位置</span></a></h2>
<p>物品配置文件位于 <code v-pre>/plugins/Avaritia_Plugin/items/</code> 目录下。每个 <code v-pre>.yml</code> 文件通常代表一类物品。</p>
<h2 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h2>
<p>每个物品都由其唯一的 <strong>物品ID</strong> 标识。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 示例: infinity_sword.yml</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="属性详解" tabindex="-1"><a class="header-anchor" href="#属性详解"><span>属性详解</span></a></h3>
<ul>
<li><strong><code v-pre>material</code></strong>: 物品的基础 Minecraft 材质。</li>
<li><strong><code v-pre>custom_model_data</code></strong>: 物品的 CustomModelData (CMD) 值，用于资源包更换材质。</li>
<li><strong><code v-pre>display_name</code></strong>: 物品的显示名称。通常是一个指向<RouteLink to="/guide/avaritia/alang.html">语言文件</RouteLink>的键。</li>
<li><strong><code v-pre>lore</code></strong>: 物品的描述文本（Lore）。通常是一个包含多个语言文件键的列表。</li>
<li><strong><code v-pre>enchantments</code></strong> (可选): 为物品添加的附魔。
<ul>
<li>格式: <code v-pre>&quot;附魔名称:等级&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>attributes</code></strong> (可选): 为物品添加的属性修饰符。
<ul>
<li>格式: <code v-pre>&quot;属性名称:数值&quot;</code>。</li>
</ul>
</li>
<li><strong><code v-pre>unbreakable</code></strong> (可选): 设置物品是否无法破坏。
<ul>
<li><code v-pre>true</code>: 无法破坏。</li>
<li><code v-pre>false</code>: 可以被破坏。</li>
</ul>
</li>
</ul>
<h2 id="如何创建新物品" tabindex="-1"><a class="header-anchor" href="#如何创建新物品"><span>如何创建新物品</span></a></h2>
<ol>
<li>在 <code v-pre>items</code> 文件夹中创建一个新的 <code v-pre>.yml</code> 文件，例如 <code v-pre>my_item.yml</code>。</li>
<li>在文件中定义你的物品，确保有一个唯一的顶层 ID (例如 <code v-pre>my_custom_sword</code>)。</li>
<li>配置其 <code v-pre>material</code>, <code v-pre>display_name</code> 等属性。</li>
<li>在<RouteLink to="/guide/avaritia/arecipe.html">合成表文件</RouteLink>中，使用 <code v-pre>avaritia:my_custom_sword</code> 作为产物或原料来引用它。</li>
<li>使用 <code v-pre>/avaritia reload</code> 重载插件，然后用 <code v-pre>/avaritia give &lt;玩家&gt; my_custom_sword</code> 来获取它。</li>
</ol>
</div></template>


