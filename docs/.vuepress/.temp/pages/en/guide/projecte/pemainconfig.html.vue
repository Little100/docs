<template><div><h1 id="about-the-main-configuration-file" tabindex="-1"><a class="header-anchor" href="#about-the-main-configuration-file"><span>About the Main Configuration File</span></a></h1>
<h1 id="config-yml" tabindex="-1"><a class="header-anchor" href="#config-yml"><span>config.yml</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Unless otherwise specified, you can only use <code v-pre>true</code> and <code v-pre>false</code>.
The content shown is based on the default configuration file.</p>
</div>
<h2 id="language" tabindex="-1"><a class="header-anchor" href="#language"><span>Language</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">language</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"zh_cn"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Main language. Default is Simplified Chinese.</p>
</blockquote>
<h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">debug</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Defaults to <code v-pre>false</code>. Enabling it will output a lot of information, so it's recommended to keep it off unless there's an issue.</p>
</blockquote>
<h2 id="advancements" tabindex="-1"><a class="header-anchor" href="#advancements"><span>Advancements</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Advancement_Datapack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>Defaults to <code v-pre>true</code>. These are custom advancements to guide the player.</p>
</blockquote>
<h2 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks"><span>Blocks</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">CustomBlockPack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Defaults to <code v-pre>true</code>. Enables custom display blocks, but be aware that it consumes performance.</p>
</blockquote>
<h2 id="alchemical-bag" tabindex="-1"><a class="header-anchor" href="#alchemical-bag"><span>Alchemical Bag</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">AlchemicalBag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Defaults to <code v-pre>true</code>. If enabled, players can use this item.</p>
</blockquote>
<h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools"><span>Tools</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Tools</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  dark_matter_tools_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  red_matter_tools_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  area_of_effect_mining_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  katar_attack_all_mode_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Defaults to <code v-pre>true</code>. You can find explanations for their settings in the comments within the config file.</p>
</blockquote>
<h2 id="transmutation-table" tabindex="-1"><a class="header-anchor" href="#transmutation-table"><span>Transmutation Table</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">TransmutationTable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  transfer-fee-percentage</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  EMC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    recipeConflictStrategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"lowest"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    divisionStrategy</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"floor"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    Exclude_PDC</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      only_mc_items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    ImportantItems</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">      default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">...</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>The Transmutation Table is enabled by default. The <strong>transfer-fee-percentage</strong> here refers to the fee for player-to-player transfers, which is 0 by default (no fee).</p>
</li>
<li>
<p><code v-pre>recipeConflictStrategy</code> determines which EMC value to use when there are multiple recipes. Options are <code v-pre>lowest</code> and <code v-pre>highest</code>.</p>
</li>
<li>
<p><code v-pre>divisionStrategy</code> determines how to handle non-integer results from division. <code v-pre>floor</code>/<code v-pre>ceil</code> correspond to rounding down/up respectively.</p>
</li>
<li>
<p><s><code v-pre>Exclude_PDC</code> determines whether to exclude PDC items. Default is <code v-pre>true</code>, meaning PDC items are excluded from EMC calculation.</s></p>
</li>
</ul>
<blockquote>
<p>Removed in version 1.1.0.</p>
</blockquote>
<ul>
<li>
<p><code v-pre>only_mc_items</code> calculates EMC only for vanilla Minecraft items.</p>
</li>
<li>
<p><code v-pre>ImportantItems</code> is for setting important items. It is highly recommended not to change this.</p>
</li>
</ul>
<QuestionBlock title="None of your business?! I want to set it!">
<p>Alright then. Inside, you will see settings like the one below:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">number</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This means setting the EMC of &quot;item&quot; to &quot;number&quot;.
Let's say I want to change the EMC of a diamond to 114514. I would find the diamond line and change it as follows:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">diamond</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">114514</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></QuestionBlock>
<QuestionBlock title="Why didn't you mention ConfrimDatapack?!!!">
<p>It will automatically become <code v-pre>true</code> after the plugin is enabled.</p>
</QuestionBlock>
<QuestionBlock title="What about the philosopher_stone?">
<p><s>Unfinished ╥﹏╥...</s>
Should be fixed now.</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>philosopher_stone:</span></span>
<span class="line"><span>  enabled: true # Enable the block transmutation feature</span></span>
<span class="line"><span>  particle:</span></span>
<span class="line"><span>    enabled: true # Enable particle effects</span></span>
<span class="line"><span>    particle-name: "end_rod" # Name of the particle effect</span></span>
<span class="line"><span>    # Options include flame, soul_fire_flame, dust, enchant, crit, snowflake. end_rod is recommended.</span></span>
<span class="line"><span>    keep-alive: 3 # Duration in seconds. After testing, 3s is suitable for end_rod.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></QuestionBlock></div></template>


