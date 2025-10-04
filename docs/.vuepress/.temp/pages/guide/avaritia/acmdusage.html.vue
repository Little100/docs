<template><div><h1 id="命令使用说明" tabindex="-1"><a class="header-anchor" href="#命令使用说明"><span>命令使用说明</span></a></h1>
<p>本文档提供了 Avaritia 插件所有命令的详细使用方法和示例。</p>
<h2 id="avaritia-reload" tabindex="-1"><a class="header-anchor" href="#avaritia-reload"><span><code v-pre>/avaritia reload</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.admin.reload</code></li>
<li><strong>功能</strong>: 重新加载插件的所有配置文件，包括 <code v-pre>config.yml</code>, <code v-pre>recipe.yml</code> 等。当你手动修改了配置文件后，使用此命令可以立即应用更改，无需重启服务器。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-give-玩家-物品id-数量" tabindex="-1"><a class="header-anchor" href="#avaritia-give-玩家-物品id-数量"><span><code v-pre>/avaritia give &lt;玩家&gt; &lt;物品ID&gt; [数量]</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.give</code></li>
<li><strong>功能</strong>: 给予指定玩家一个或多个 Avaritia 插件中的物品。</li>
<li><strong>参数</strong>:
<ul>
<li><code v-pre>&lt;玩家&gt;</code>: 目标玩家的名称。</li>
<li><code v-pre>&lt;物品ID&gt;</code>: 要给予的物品的唯一 ID（在物品配置文件中定义）。</li>
<li><code v-pre>[数量]</code> (可选): 给予的物品数量，默认为 1。</li>
</ul>
</li>
<li><strong>示例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 给予玩家 Little_100 一个 Infinity_Sword</span></span>
<span class="line"><span>/avaritia give Little_100 Infinity_Sword</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 给予玩家 Steve 64 个 Neutron_Nugget</span></span>
<span class="line"><span>/avaritia give Steve Neutron_Nugget 64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-language-语言" tabindex="-1"><a class="header-anchor" href="#avaritia-language-语言"><span><code v-pre>/avaritia language &lt;语言&gt;</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.command.language</code></li>
<li><strong>功能</strong>: 切换你在游戏内看到的插件文本语言。</li>
<li><strong>参数</strong>:
<ul>
<li><code v-pre>&lt;语言&gt;</code>: 语言文件的名称（例如 <code v-pre>zh_cn</code>, <code v-pre>en_us</code>）。</li>
</ul>
</li>
<li><strong>示例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia language en_us</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-version" tabindex="-1"><a class="header-anchor" href="#avaritia-version"><span><code v-pre>/avaritia version</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.command.version</code></li>
<li><strong>功能</strong>: 查看当前安装的 Avaritia 插件的版本信息。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-nbtdebug" tabindex="-1"><a class="header-anchor" href="#avaritia-nbtdebug"><span><code v-pre>/avaritia nbtdebug</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.command.nbtdebug</code></li>
<li><strong>功能</strong>: 查看你手中持有的物品的 NBT (Named Binary Tag) 数据。这是一个主要用于开发者和服主调试的命令。</li>
<li><strong>用法</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia nbtdebug</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-gui" tabindex="-1"><a class="header-anchor" href="#avaritia-gui"><span><code v-pre>/avaritia gui</code></span></a></h2>
<ul>
<li><strong>权限</strong>: <code v-pre>avaritia.gui.use</code>, <code v-pre>avaritia.gui.edit</code>, <code v-pre>avaritia.gui.create</code></li>
<li><strong>功能</strong>: 与插件的 GUI 系统进行交互。</li>
<li><strong>子命令</strong>:
<ul>
<li><code v-pre>/avaritia gui open &lt;GUI名称&gt;</code>: 打开一个指定的 GUI 界面。 (需要 <code v-pre>avaritia.gui.use</code>)</li>
<li><code v-pre>/avaritia gui edit &lt;GUI名称&gt;</code>: 在游戏内编辑一个已存在的 GUI 界面。 (需要 <code v-pre>avaritia.gui.edit</code>)</li>
<li><code v-pre>/avaritia gui create &lt;GUI名称&gt;</code>: 创建一个新的 GUI 界面。 (需要 <code v-pre>avaritia.gui.create</code>)</li>
</ul>
</li>
<li><strong>示例</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># 打开名为 "main_menu" 的 GUI</span></span>
<span class="line"><span>/avaritia gui open main_menu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


