<template><div><h1 id="main-config-file-config-yml" tabindex="-1"><a class="header-anchor" href="#main-config-file-config-yml"><span>Main Config File (<code v-pre>config.yml</code>)</span></a></h1>
<p>This is the core configuration file for the Avaritia plugin. You can adjust the basic functions of the plugin here.</p>
<h2 id="global-settings" tabindex="-1"><a class="header-anchor" href="#global-settings"><span>Global Settings</span></a></h2>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
<li><strong>Description</strong>: Toggles the plugin's Debug mode. When enabled, detailed debug information will be output to the console, which is useful for troubleshooting.</li>
</ul>
<h3 id="default-language" tabindex="-1"><a class="header-anchor" href="#default-language"><span><code v-pre>default_language</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>String</code></li>
<li><strong>Default</strong>: <code v-pre>&quot;zh_cn&quot;</code></li>
<li><strong>Description</strong>: Sets the default language file used by the plugin.</li>
</ul>
<h2 id="block-settings" tabindex="-1"><a class="header-anchor" href="#block-settings"><span>Block Settings</span></a></h2>
<h3 id="allow-place-block" tabindex="-1"><a class="header-anchor" href="#allow-place-block"><span><code v-pre>allow_place_block</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
<li><strong>Description</strong>: Determines whether players are allowed to place the Compressed Crafting Table, Double Compressed Crafting Table, and Crystal Matrix.
<ul>
<li><code v-pre>false</code>: Placing these blocks is forbidden.</li>
<li><code v-pre>true</code>: Placing is allowed, and they will be displayed using an armor stand, similar to the Extreme Crafting Table.</li>
</ul>
</li>
</ul>
<h3 id="compressor-protect" tabindex="-1"><a class="header-anchor" href="#compressor-protect"><span><code v-pre>compressor_protect</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
<li><strong>Description</strong>: Configures the drop behavior when a Neutronium Compressor is broken.
<ul>
<li><code v-pre>false</code>: Only the compressor itself drops, and any items and progress inside are lost (matches the behavior of the original mod).</li>
<li><code v-pre>true</code>: When broken, items being processed inside will be dropped as lower-tier materials based on progress (e.g., a diamond block becomes diamonds).</li>
</ul>
</li>
</ul>
<h2 id="extreme-crafting-table-extreme-crafting-table" tabindex="-1"><a class="header-anchor" href="#extreme-crafting-table-extreme-crafting-table"><span>Extreme Crafting Table (<code v-pre>extreme_crafting_table</code>)</span></a></h2>
<h3 id="debug-1" tabindex="-1"><a class="header-anchor" href="#debug-1"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
<li><strong>Description</strong>: The crafting Debug mode for the Extreme Crafting Table.
<ul>
<li><code v-pre>true</code>: When enabled, it ignores crafting recipes, allowing any materials to be used for crafting. This is mainly for quick testing.</li>
<li><code v-pre>false</code>: Crafting recipes are checked normally.</li>
</ul>
</li>
</ul>
<h2 id="infinity-tools-infinity-tools" tabindex="-1"><a class="header-anchor" href="#infinity-tools-infinity-tools"><span>Infinity Tools (<code v-pre>infinity_tools</code>)</span></a></h2>
<h3 id="hammer-break-bedrock" tabindex="-1"><a class="header-anchor" href="#hammer-break-bedrock"><span><code v-pre>hammer_break_bedrock</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>false</code></li>
<li><strong>Description</strong>: Determines if the World Breaker's hammer mode can break bedrock. It is disabled by default to protect the server.</li>
</ul>
<h3 id="hammer-cmd" tabindex="-1"><a class="header-anchor" href="#hammer-cmd"><span><code v-pre>hammer_cmd</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Integer</code></li>
<li><strong>Default</strong>: <code v-pre>101</code></li>
<li><strong>Description</strong>: Sets the CustomModelData (CMD) value for the hammer mode item, used by resource packs to change its texture.</li>
</ul>
<h3 id="skullfire-offhand-transfer" tabindex="-1"><a class="header-anchor" href="#skullfire-offhand-transfer"><span><code v-pre>skullfire_offhand_transfer</code></span></a></h3>
<ul>
<li><strong>Type</strong>: <code v-pre>Boolean (true/false)</code></li>
<li><strong>Default</strong>: <code v-pre>true</code></li>
<li><strong>Description</strong>: Configures the effect of holding the Skullfire Sword in the off-hand.
<ul>
<li><code v-pre>true</code>: When the Skullfire Sword is in the off-hand, any weapon used in the main hand to kill a Wither Skeleton will have a 100% chance to drop a skull.</li>
<li><code v-pre>false</code>: Only direct kills with the Skullfire Sword will trigger the skull drop.</li>
</ul>
</li>
</ul>
</div></template>


