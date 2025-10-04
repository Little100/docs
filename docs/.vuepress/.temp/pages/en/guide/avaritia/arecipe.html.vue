<template><div><h1 id="recipe-configuration" tabindex="-1"><a class="header-anchor" href="#recipe-configuration"><span>Recipe Configuration</span></a></h1>
<p>The Avaritia plugin features several different crafting methods, including vanilla workbench crafting, Extreme Crafting Table, Neutron Collector, and Neutronium Compressor. This page explains jejich configuration files in detail.</p>
<h2 id="_1-vanilla-workbench-recipes-recipe-yml" tabindex="-1"><a class="header-anchor" href="#_1-vanilla-workbench-recipes-recipe-yml"><span>1. Vanilla Workbench Recipes (<code v-pre>recipe.yml</code>)</span></a></h2>
<p>This file defines recipes that can be crafted in a vanilla workbench or the player's inventory.</p>
<h3 id="structure" tabindex="-1"><a class="header-anchor" href="#structure"><span>Structure</span></a></h3>
<ul>
<li><strong><code v-pre>recipes</code></strong>: A list containing all recipes.
<ul>
<li><strong><code v-pre>&lt;recipe_id&gt;</code></strong>: A unique ID for each recipe.
<ul>
<li><strong><code v-pre>type</code></strong> (Optional): The type of recipe.
<ul>
<li><code v-pre>shaped</code>: A shaped recipe (default).</li>
<li><code v-pre>shapeless</code>: A shapeless recipe.</li>
</ul>
</li>
<li><strong><code v-pre>result</code></strong>: The crafting output.
<ul>
<li><code v-pre>material</code>: The Minecraft material of the item.</li>
<li><code v-pre>custom_model_data</code> (Optional): The item's CMD value.</li>
<li><code v-pre>display_name</code> (Optional): The item's display name (uses a key from the language file).</li>
<li><code v-pre>lore</code> (Optional): The item's lore (uses keys from the language file).</li>
<li><code v-pre>amount</code> (Optional): The amount of the output item, defaults to 1.</li>
</ul>
</li>
<li><strong><code v-pre>shape</code></strong> (<code v-pre>shaped</code> only): An array of strings defining the recipe shape.</li>
<li><strong><code v-pre>ingredients</code></strong>: Defines the crafting materials.
<ul>
<li><code v-pre>char</code>: The character used in the <code v-pre>shape</code>.</li>
<li><code v-pre>material</code> or <code v-pre>avaritia:&lt;item_id&gt;</code>: The type of the material.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3>
<p><strong>Diamond Lattice (Shaped)</strong></p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Crystal Matrix Ingot -&gt; Crystal Matrix (Shapeless)</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">crystal_matrix</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">shapeless</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  result</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    material</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">DIAMOND_BLOCK</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    custom_model_data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"100"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    display_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"items.crystal_matrix.name"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  ingredients</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    avaritia:crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="_2-extreme-crafting-table-recipes-extreme-crafting-table-yml" tabindex="-1"><a class="header-anchor" href="#_2-extreme-crafting-table-recipes-extreme-crafting-table-yml"><span>2. Extreme Crafting Table Recipes (<code v-pre>extreme_crafting_table.yml</code>)</span></a></h2>
<p>This file defines the 9x9 recipes that can only be crafted in the <strong>Extreme Crafting Table</strong>.</p>
<h3 id="structure-1" tabindex="-1"><a class="header-anchor" href="#structure-1"><span>Structure</span></a></h3>
<ul>
<li><strong><code v-pre>&lt;result_item_id&gt;</code></strong>: The unique ID of the resulting item.
<ul>
<li><strong><code v-pre>&lt;ingredient_id&gt;</code></strong>: The item ID of the material (can be a vanilla item ID or <code v-pre>avaritia:&lt;item_id&gt;</code>).</li>
<li><strong><code v-pre>quantity</code></strong>: The total quantity of that material required.</li>
</ul>
</li>
</ul>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3>
<p><strong>Neutron Collector</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">neutron_collector</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">21</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  REDSTONE_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  QUARTZ_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">10</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  crystal_matrix_ingot</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">7</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means crafting a Neutron Collector requires 21 Iron Blocks, 10 Redstone Blocks, 10 Quartz Blocks, and 7 Crystal Matrix Ingots, with no specific arrangement.</p>
<hr>
<h2 id="_3-neutron-collector-neutron-collector-yml" tabindex="-1"><a class="header-anchor" href="#_3-neutron-collector-neutron-collector-yml"><span>3. Neutron Collector (<code v-pre>neutron_collector.yml</code>)</span></a></h2>
<p>This file configures the production behavior of the Neutron Collector.</p>
<h3 id="structure-2" tabindex="-1"><a class="header-anchor" href="#structure-2"><span>Structure</span></a></h3>
<ul>
<li><strong><code v-pre>production</code></strong>: Production settings.
<ul>
<li><code v-pre>ticks_per_item</code>: The number of ticks required to produce one item (20 ticks = 1 second).</li>
<li><code v-pre>output_item</code>: The item ID of the output.</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI interface settings.
<ul>
<li><code v-pre>title</code>: The title of the GUI (uses a language key).</li>
<li><code v-pre>progress_item</code>: The material used to display progress.</li>
<li><code v-pre>update_interval</code>: The GUI's refresh interval in ticks.</li>
</ul>
</li>
</ul>
<h3 id="default-configuration" tabindex="-1"><a class="header-anchor" href="#default-configuration"><span>Default Configuration</span></a></h3>
<p>By default, it takes <code v-pre>7111</code> ticks (about 6 minutes) to produce one <code v-pre>neutron_dust</code>.</p>
<hr>
<h2 id="_4-neutronium-compressor-neutronium-compressor-yml" tabindex="-1"><a class="header-anchor" href="#_4-neutronium-compressor-neutronium-compressor-yml"><span>4. Neutronium Compressor (<code v-pre>neutronium_compressor.yml</code>)</span></a></h2>
<p>This file configures the Neutronium Compressor's behavior for producing <strong>Singularities</strong>.</p>
<h3 id="structure-3" tabindex="-1"><a class="header-anchor" href="#structure-3"><span>Structure</span></a></h3>
<ul>
<li><strong><code v-pre>singularities</code></strong>: A list of all singularity recipes.
<ul>
<li><strong><code v-pre>&lt;singularity_id&gt;</code></strong>: The unique ID of the singularity (e.g., <code v-pre>iron</code>, <code v-pre>gold</code>).
<ul>
<li><code v-pre>materials</code>: Defines the materials that can be compressed and their &quot;point&quot; values.
<ul>
<li><code v-pre>&lt;material_id&gt;</code>: The item material.</li>
<li><code v-pre>points</code>: The point value of the item (e.g., Iron Ingot = 1 point, Iron Block = 9 points).</li>
</ul>
</li>
<li><code v-pre>required_points</code>: The total points required to craft one singularity.</li>
<li><code v-pre>output_cmd</code>: The CustomModelData value of the output singularity item.</li>
</ul>
</li>
</ul>
</li>
<li><strong><code v-pre>gui</code></strong>: GUI interface settings.</li>
</ul>
<h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1"><span>Example</span></a></h3>
<p><strong>Iron Singularity</strong></p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">singularities</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  iron</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    materials</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_INGOT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      IRON_BLOCK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    required_points</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">400</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    output_cmd</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"101"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This means you can input Iron Ingots (1 point) or Iron Blocks (9 points), and when the total points reach 400, an Iron Singularity will be produced.</p>
</div></template>


