<template><div><h1 id="言辭之檔策" tabindex="-1"><a class="header-anchor" href="#言辭之檔策"><span>言辭之檔策</span></a></h1>
<p>Avaritia 插件容多語，可藉易言辭檔以全自定插件於戲中所示之文，含物名、述、GUI題及號令之息。</p>
<h2 id="檔之所在" tabindex="-1"><a class="header-anchor" href="#檔之所在"><span>檔之所在</span></a></h2>
<p>言辭檔位於 <code v-pre>/plugins/Avaritia_Plugin/language/</code> 目錄下。各 <code v-pre>.yml</code> 檔代一語，如 <code v-pre>zh_cn.yml</code> 為簡體中文，<code v-pre>en_us.yml</code> 為美式英語。</p>
<h2 id="如何易言" tabindex="-1"><a class="header-anchor" href="#如何易言"><span>如何易言</span></a></h2>
<ul>
<li><strong>天下常言</strong>: 於 <code v-pre>config.yml</code> 檔中，以 <code v-pre>default_language</code> 選項定服之常言。</li>
<li><strong>玩家私言</strong>: 玩家可用 <code v-pre>/avaritia language &lt;言辭檔名&gt;</code> 號令以易己所見之言，而不擾他人。</li>
</ul>
<h2 id="檔之格式" tabindex="-1"><a class="header-anchor" href="#檔之格式"><span>檔之格式</span></a></h2>
<p>言辭檔用標準之 YAML 格式，由一系列之 <strong>鍵</strong> 與 <strong>值</strong> 組成。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 範例：lzh.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  infinity_sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;c&#x26;l無盡之劍"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7傷 +∞"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7傳說之兵刃"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;aAvaritia 插件之策已重載！"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>鍵</strong>: 唯一之識別符，如 <code v-pre>items.infinity_sword.name</code>。插件之碼藉此鍵以取相應之文。</li>
<li><strong>值</strong>: 汝欲於戲中實示之文。可用 Minecraft 之色碼（如 <code v-pre>&amp;c</code>, <code v-pre>&amp;l</code>）以飾文樣。</li>
</ul>
<h2 id="創新言辭檔" tabindex="-1"><a class="header-anchor" href="#創新言辭檔"><span>創新言辭檔</span></a></h2>
<p>一、 於 <code v-pre>language</code> 資料夾中，複製一份已有之言辭檔（如 <code v-pre>lzh.yml</code>）。
二、 重命名其檔為汝所欲之名，如 <code v-pre>my_lang.yml</code>。
三、 啟新檔，譯或改其內之值為汝所欲之文。
四、 於 <code v-pre>config.yml</code> 中將 <code v-pre>default_language</code> 定為 <code v-pre>my_lang</code>，或令玩家用 <code v-pre>/avaritia language my_lang</code> 以易之。</p>
</div></template>


