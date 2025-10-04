<template><div><h1 id="語言檔案設定" tabindex="-1"><a class="header-anchor" href="#語言檔案設定"><span>語言檔案設定</span></a></h1>
<p>Avaritia 插件支援多語言，你可以透過修改語言檔案來完全自訂插件在遊戲中顯示的任何文本，包括物品名稱、Lore、GUI 標題和指令訊息。</p>
<h2 id="檔案位置" tabindex="-1"><a class="header-anchor" href="#檔案位置"><span>檔案位置</span></a></h2>
<p>語言檔案位於 <code v-pre>/plugins/Avaritia_Plugin/language/</code> 目錄下。每個 <code v-pre>.yml</code> 檔案代表一種語言，例如 <code v-pre>zh_cn.yml</code> 是簡體中文，<code v-pre>en_us.yml</code> 是美式英語。</p>
<h2 id="如何切換語言" tabindex="-1"><a class="header-anchor" href="#如何切換語言"><span>如何切換語言</span></a></h2>
<ul>
<li><strong>全域預設語言</strong>: 在 <code v-pre>config.yml</code> 檔案中，透過 <code v-pre>default_language</code> 選項設定伺服器的預設語言。</li>
<li><strong>玩家個人語言</strong>: 玩家可以使用 <code v-pre>/avaritia language &lt;語言檔案名稱&gt;</code> 指令來切換自己看到的語言，而不會影響其他玩家。</li>
</ul>
<h2 id="檔案格式" tabindex="-1"><a class="header-anchor" href="#檔案格式"><span>檔案格式</span></a></h2>
<p>語言檔案使用標準的 YAML 格式，由一系列的 <strong>鍵 (key)</strong> 和 <strong>值 (value)</strong> 組成。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 範例：zh_TW.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  infinity_sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;c&#x26;l無盡之劍"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7傷害 +∞"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7一把傳說中的武器"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;aAvaritia 插件設定已重載！"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>鍵</strong>: 是一個唯一的識別碼，例如 <code v-pre>items.infinity_sword.name</code>。插件程式碼透過這些鍵來獲取對應的文本。</li>
<li><strong>值</strong>: 是你希望在遊戲中實際顯示的文本。你可以使用 Minecraft 的顏色代碼（例如 <code v-pre>&amp;c</code>, <code v-pre>&amp;l</code>）來設定文本樣式。</li>
</ul>
<h2 id="建立新的語言檔案" tabindex="-1"><a class="header-anchor" href="#建立新的語言檔案"><span>建立新的語言檔案</span></a></h2>
<ol>
<li>在 <code v-pre>language</code> 資料夾中，複製一份現有的語言檔案（例如 <code v-pre>zh_TW.yml</code>）。</li>
<li>將檔案重新命名為你想要的名稱，例如 <code v-pre>my_lang.yml</code>。</li>
<li>開啟新檔案，將裡面的值翻譯或修改成你想要的文本。</li>
<li>在 <code v-pre>config.yml</code> 中將 <code v-pre>default_language</code> 設定為 <code v-pre>my_lang</code>，或者讓玩家使用 <code v-pre>/avaritia language my_lang</code> 來切換。</li>
</ol>
</div></template>


