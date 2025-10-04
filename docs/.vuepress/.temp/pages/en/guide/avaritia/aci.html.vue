<template><div><h1 id="item-configuration" tabindex="-1"><a class="header-anchor" href="#item-configuration"><span>Item Configuration</span></a></h1>
<p>The Avaritia plugin allows you to highly customize the properties of each item through configuration files.</p>
<h2 id="file-location" tabindex="-1"><a class="header-anchor" href="#file-location"><span>File Location</span></a></h2>
<p>Item configuration files are located in the <code v-pre>/plugins/Avaritia_Plugin/items/</code> directory. Each <code v-pre>.yml</code> file typically represents a category of items.</p>
<h2 id="structure" tabindex="-1"><a class="header-anchor" href="#structure"><span>Structure</span></a></h2>
<p>Each item is identified by its unique <strong>item ID</strong>.</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Example: infinity_sword.yml</span></span>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="property-details" tabindex="-1"><a class="header-anchor" href="#property-details"><span>Property Details</span></a></h3>
<ul>
<li><strong><code v-pre>material</code></strong>: The base Minecraft material of the item.</li>
<li><strong><code v-pre>custom_model_data</code></strong>: The CustomModelData (CMD) value of the item, used by resource packs to change its texture.</li>
<li><strong><code v-pre>display_name</code></strong>: The display name of the item. This is usually a key pointing to the <RouteLink to="/en/guide/avaritia/alang.html">language file</RouteLink>.</li>
<li><strong><code v-pre>lore</code></strong>: The description text (Lore) of the item. This is usually a list of keys pointing to the language file.</li>
<li><strong><code v-pre>enchantments</code></strong> (Optional): Enchantments to be added to the item.
<ul>
<li>Format: <code v-pre>&quot;enchantment_name:level&quot;</code>.</li>
</ul>
</li>
<li><strong><code v-pre>attributes</code></strong> (Optional): Attribute modifiers to be added to the item.
<ul>
<li>Format: <code v-pre>&quot;attribute_name:value&quot;</code>.</li>
</ul>
</li>
<li><strong><code v-pre>unbreakable</code></strong> (Optional): Sets whether the item is unbreakable.
<ul>
<li><code v-pre>true</code>: Unbreakable.</li>
<li><code v-pre>false</code>: Breakable.</li>
</ul>
</li>
</ul>
<h2 id="how-to-create-a-new-item" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-new-item"><span>How to Create a New Item</span></a></h2>
<ol>
<li>Create a new <code v-pre>.yml</code> file in the <code v-pre>items</code> folder, for example, <code v-pre>my_item.yml</code>.</li>
<li>Define your item in the file, ensuring it has a unique top-level ID (e.g., <code v-pre>my_custom_sword</code>).</li>
<li>Configure its <code v-pre>material</code>, <code v-pre>display_name</code>, and other properties.</li>
<li>In the <RouteLink to="/en/guide/avaritia/arecipe.html">recipe files</RouteLink>, reference it using <code v-pre>avaritia:my_custom_sword</code> as a result or ingredient.</li>
<li>Reload the plugin with <code v-pre>/avaritia reload</code>, then get the item with <code v-pre>/avaritia give &lt;player&gt; my_custom_sword</code>.</li>
</ol>
</div></template>


