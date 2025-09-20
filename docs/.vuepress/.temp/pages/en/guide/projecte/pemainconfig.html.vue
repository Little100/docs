<template><div><h1 id="about-the-main-configuration-file" tabindex="-1"><a class="header-anchor" href="#about-the-main-configuration-file"><span>About the Main Configuration File</span></a></h1>
<h1 id="config-yml" tabindex="-1"><a class="header-anchor" href="#config-yml"><span>config.yml</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>Unless otherwise specified, you can only use <code v-pre>true</code> or <code v-pre>false</code>.
The content of the file is based on the default settings.</p>
</div>
<h2 id="language" tabindex="-1"><a class="header-anchor" href="#language"><span>Language</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">language</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"en_us"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>The main language. Default is English.</p>
</blockquote>
<h2 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>Debug</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">debug</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>The default is <code v-pre>false</code>. Enabling this will output a large amount of information, so it is recommended to keep it disabled unless you encounter issues.</p>
</blockquote>
<h2 id="achievements" tabindex="-1"><a class="header-anchor" href="#achievements"><span>Achievements</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Advancement_Datapack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>The default is <code v-pre>true</code>. This enables custom advancements to guide players.</p>
</blockquote>
<h2 id="blocks" tabindex="-1"><a class="header-anchor" href="#blocks"><span>Blocks</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">CustomBlockPack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>The default is <code v-pre>true</code>. This enables custom display blocks, but be aware that it may impact performance.</p>
</blockquote>
<h2 id="alchemical-bag" tabindex="-1"><a class="header-anchor" href="#alchemical-bag"><span>Alchemical Bag</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">AlchemicalBag</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>The default is <code v-pre>true</code>. If enabled, players can use this item.</p>
</blockquote>
<h2 id="tools" tabindex="-1"><a class="header-anchor" href="#tools"><span>Tools</span></a></h2>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">Tools</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  dark_matter_tools_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  red_matter_tools_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  area_of_effect_mining_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  katar_attack_all_mode_enabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>The default is <code v-pre>true</code>. You can find explanations for their settings in the comments within the <code v-pre>config.yml</code> file.</p>
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
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>The Transmutation Table is enabled by default. The <strong>transfer-fee-percentage</strong> is the fee for transferring EMC between players, which is 0 by default (no fee).
<code v-pre>recipeConflictStrategy</code> determines which EMC value to use when multiple recipes exist. Options are <code v-pre>lowest</code> and <code v-pre>highest</code>.
<code v-pre>divisionStrategy</code> determines how to handle non-integer results from division. <code v-pre>floor</code>/<code v-pre>ceil</code> correspond to rounding down/up.
<code v-pre>Exclude_PDC</code> determines whether to exclude PDC items. The default is <code v-pre>true</code>, which means PDC items are excluded from EMC calculations.
<code v-pre>only_mc_items</code> calculates EMC only for vanilla Minecraft items.
<code v-pre>ImportantItems</code> is for setting important items. It is highly recommended not to change this.</p>
</blockquote>
<QuestionBlock title="None of your business! I want to configure it anyway!">
<p>Alright then. Inside, you will see settings similar to the following:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">item</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">number</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>This means setting the EMC of &quot;item&quot; to <code v-pre>number</code>.
For example, if I want to change the EMC of a diamond to 114514, I would find the line for diamond and change it as follows:</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">- </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">diamond</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">114514</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></QuestionBlock>
<QuestionBlock title="Why didn't you mention ConfrimDatapack?!!!">
<p>It will automatically be set to <code v-pre>true</code> after the plugin is enabled.</p>
</QuestionBlock>
<QuestionBlock title="What about philosopher_stone?">
<p>Incomplete ╥﹏╥...</p>
</QuestionBlock></div></template>


