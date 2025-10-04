<template><div><h1 id="语言文件配置" tabindex="-1"><a class="header-anchor" href="#语言文件配置"><span>语言文件配置</span></a></h1>
<p>Avaritia 插件支持多语言，你可以通过修改语言文件来完全自定义插件在游戏中显示的任何文本，包括物品名称、Lore、GUI 标题和命令消息。</p>
<h2 id="文件位置" tabindex="-1"><a class="header-anchor" href="#文件位置"><span>文件位置</span></a></h2>
<p>语言文件位于 <code v-pre>/plugins/Avaritia_Plugin/language/</code> 目录下。每个 <code v-pre>.yml</code> 文件代表一种语言，例如 <code v-pre>zh_cn.yml</code> 是简体中文，<code v-pre>en_us.yml</code> 是美式英语。</p>
<h2 id="如何切换语言" tabindex="-1"><a class="header-anchor" href="#如何切换语言"><span>如何切换语言</span></a></h2>
<ul>
<li><strong>全局默认语言</strong>: 在 <code v-pre>config.yml</code> 文件中，通过 <code v-pre>default_language</code> 选项设置服务器的默认语言。</li>
<li><strong>玩家个人语言</strong>: 玩家可以使用 <code v-pre>/avaritia language &lt;语言文件名&gt;</code> 命令来切换自己看到的语言，而不会影响其他玩家。</li>
</ul>
<h2 id="文件格式" tabindex="-1"><a class="header-anchor" href="#文件格式"><span>文件格式</span></a></h2>
<p>语言文件使用标准的 YAML 格式，由一系列的 <strong>键 (key)</strong> 和 <strong>值 (value)</strong> 组成。</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 示例：zh_cn.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  infinity_sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;c&#x26;l无尽之剑"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7伤害 +∞"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7一把传说中的武器"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;aAvaritia 插件配置已重载！"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>键</strong>: 是一个唯一的标识符，例如 <code v-pre>items.infinity_sword.name</code>。插件代码通过这些键来获取对应的文本。</li>
<li><strong>值</strong>: 是你希望在游戏中实际显示的文本。你可以使用 Minecraft 的颜色代码（例如 <code v-pre>&amp;c</code>, <code v-pre>&amp;l</code>）来设置文本样式。</li>
</ul>
<h2 id="创建新的语言文件" tabindex="-1"><a class="header-anchor" href="#创建新的语言文件"><span>创建新的语言文件</span></a></h2>
<ol>
<li>在 <code v-pre>language</code> 文件夹中，复制一份现有的语言文件（例如 <code v-pre>zh_cn.yml</code>）。</li>
<li>将文件重命名为你想要的名称，例如 <code v-pre>my_lang.yml</code>。</li>
<li>打开新文件，将里面的值翻译或修改成你想要的文本。</li>
<li>在 <code v-pre>config.yml</code> 中将 <code v-pre>default_language</code> 设置为 <code v-pre>my_lang</code>，或者让玩家使用 <code v-pre>/avaritia language my_lang</code> 来切换。</li>
</ol>
</div></template>


