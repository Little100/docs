<template><div><h1 id="指令使用說明" tabindex="-1"><a class="header-anchor" href="#指令使用說明"><span>指令使用說明</span></a></h1>
<p>本文件提供了 Avaritia 插件所有指令的詳細使用方法和範例。</p>
<h2 id="avaritia-reload" tabindex="-1"><a class="header-anchor" href="#avaritia-reload"><span><code v-pre>/avaritia reload</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.admin.reload</code></li>
<li><strong>功能</strong>: 重新載入插件的所有設定檔，包括 <code v-pre>config.yml</code>, <code v-pre>recipe.yml</code> 等。當你手動修改了設定檔後，使用此指令可以立即套用變更，無需重啟伺服器。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-give-玩家-物品id-數量" tabindex="-1"><a class="header-anchor" href="#avaritia-give-玩家-物品id-數量"><span><code v-pre>/avaritia give &lt;玩家&gt; &lt;物品ID&gt; [數量]</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.give</code></li>
<li><strong>功能</strong>: 給予指定玩家一個或多個 Avaritia 插件中的物品。</li>
<li><strong>參數</strong>:
<ul>
<li><code v-pre>&lt;玩家&gt;</code>: 目標玩家的名稱。</li>
<li><code v-pre>&lt;物品ID&gt;</code>: 要給予的物品的唯一 ID（在物品設定檔中定義）。</li>
<li><code v-pre>[數量]</code> (可選): 給予的物品數量，預設為 1。</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 給予玩家 Little_100 一個 Infinity_Sword</span></span>
<span class="line"><span>/avaritia give Little_100 Infinity_Sword</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 給予玩家 Steve 64 個 Neutron_Nugget</span></span>
<span class="line"><span>/avaritia give Steve Neutron_Nugget 64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-language-語言" tabindex="-1"><a class="header-anchor" href="#avaritia-language-語言"><span><code v-pre>/avaritia language &lt;語言&gt;</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.language</code></li>
<li><strong>功能</strong>: 切換你在遊戲內看到的插件文本語言。</li>
<li><strong>參數</strong>:
<ul>
<li><code v-pre>&lt;語言&gt;</code>: 語言檔案的名稱（例如 <code v-pre>zh_cn</code>, <code v-pre>en_us</code>）。</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia language en_us</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-version" tabindex="-1"><a class="header-anchor" href="#avaritia-version"><span><code v-pre>/avaritia version</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.version</code></li>
<li><strong>功能</strong>: 查看當前安裝的 Avaritia 插件的版本資訊。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-nbtdebug" tabindex="-1"><a class="header-anchor" href="#avaritia-nbtdebug"><span><code v-pre>/avaritia nbtdebug</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.command.nbtdebug</code></li>
<li><strong>功能</strong>: 查看你手中持有的物品的 NBT (Named Binary Tag) 資料。這是一個主要用於開發者和服主偵錯的指令。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia nbtdebug</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-gui" tabindex="-1"><a class="header-anchor" href="#avaritia-gui"><span><code v-pre>/avaritia gui</code></span></a></h2>
<ul>
<li><strong>權限</strong>: <code v-pre>avaritia.gui.use</code>, <code v-pre>avaritia.gui.edit</code>, <code v-pre>avaritia.gui.create</code></li>
<li><strong>功能</strong>: 與插件的 GUI 系統進行互動。</li>
<li><strong>子指令</strong>:
<ul>
<li><code v-pre>/avaritia gui open &lt;GUI名稱&gt;</code>: 開啟一個指定的 GUI 介面。 (需要 <code v-pre>avaritia.gui.use</code>)</li>
<li><code v-pre>/avaritia gui edit &lt;GUI名稱&gt;</code>: 在遊戲內編輯一個已存在的 GUI 介面。 (需要 <code v-pre>avaritia.gui.edit</code>)</li>
<li><code v-pre>/avaritia gui create &lt;GUI名稱&gt;</code>: 建立一個新的 GUI 介面。 (需要 <code v-pre>avaritia.gui.create</code>)</li>
</ul>
</li>
<li><strong>範例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 開啟名為 "main_menu" 的 GUI</span></span>
<span class="line"><span>/avaritia gui open main_menu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


