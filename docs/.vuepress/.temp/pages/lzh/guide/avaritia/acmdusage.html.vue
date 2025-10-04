<template><div><h1 id="號令之用" tabindex="-1"><a class="header-anchor" href="#號令之用"><span>號令之用</span></a></h1>
<p>此章詳述 Avaritia 插件所有號令之用法與範例。</p>
<h2 id="avaritia-reload" tabindex="-1"><a class="header-anchor" href="#avaritia-reload"><span><code v-pre>/avaritia reload</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.admin.reload</code></li>
<li><strong>功用</strong>: 重載插件所有之策，如 <code v-pre>config.yml</code>, <code v-pre>recipe.yml</code> 等。手改策後，用此令可立使其效，無需重啟。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-give-玩家-物品id-數量" tabindex="-1"><a class="header-anchor" href="#avaritia-give-玩家-物品id-數量"><span><code v-pre>/avaritia give &lt;玩家&gt; &lt;物品ID&gt; [數量]</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.give</code></li>
<li><strong>功用</strong>: 予指定之玩家一或數個 Avaritia 插件之物。</li>
<li><strong>參數</strong>:
<ul>
<li><code v-pre>&lt;玩家&gt;</code>: 目標玩家之名。</li>
<li><code v-pre>&lt;物品ID&gt;</code>: 所予之物之唯一ID（定於物品策中）。</li>
<li><code v-pre>[數量]</code> (可選): 所予之物之數，常為一。</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 予玩家 Little_100 一柄 Infinity_Sword</span></span>
<span class="line"><span>/avaritia give Little_100 Infinity_Sword</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 予玩家 Steve 六十四個 Neutron_Nugget</span></span>
<span class="line"><span>/avaritia give Steve Neutron_Nugget 64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-language-語言" tabindex="-1"><a class="header-anchor" href="#avaritia-language-語言"><span><code v-pre>/avaritia language &lt;語言&gt;</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.language</code></li>
<li><strong>功用</strong>: 易汝於戲中所見之插件文字語言。</li>
<li><strong>參數</strong>:
<ul>
<li><code v-pre>&lt;語言&gt;</code>: 語言檔案之名（如 <code v-pre>zh_cn</code>, <code v-pre>en_us</code>）。</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia language en_us</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-version" tabindex="-1"><a class="header-anchor" href="#avaritia-version"><span><code v-pre>/avaritia version</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.version</code></li>
<li><strong>功用</strong>: 察當前所置 Avaritia 插件之版本資訊。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-nbtdebug" tabindex="-1"><a class="header-anchor" href="#avaritia-nbtdebug"><span><code v-pre>/avaritia nbtdebug</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.nbtdebug</code></li>
<li><strong>功用</strong>: 察汝手中所持之物之 NBT (Named Binary Tag) 資料。此令主為開發者與服主偵錯所用。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia nbtdebug</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-gui" tabindex="-1"><a class="header-anchor" href="#avaritia-gui"><span><code v-pre>/avaritia gui</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.gui.use</code>, <code v-pre>avaritia.gui.edit</code>, <code v-pre>avaritia.gui.create</code></li>
<li><strong>功用</strong>: 與插件之 GUI 系統互動。</li>
<li><strong>子令</strong>:
<ul>
<li><code v-pre>/avaritia gui open &lt;GUI名&gt;</code>: 啟指定之 GUI。 (需 <code v-pre>avaritia.gui.use</code>)</li>
<li><code v-pre>/avaritia gui edit &lt;GUI名&gt;</code>: 於戲中編已存之 GUI。 (需 <code v-pre>avaritia.gui.edit</code>)</li>
<li><code v-pre>/avaritia gui create &lt;GUI名&gt;</code>: 創新 GUI。 (需 <code v-pre>avaritia.gui.create</code>)</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 啟名為 "main_menu" 之 GUI</span></span>
<span class="line"><span>/avaritia gui open main_menu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


