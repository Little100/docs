<template><div><h1 id="language-file-configuration" tabindex="-1"><a class="header-anchor" href="#language-file-configuration"><span>Language File Configuration</span></a></h1>
<p>The Avaritia plugin supports multiple languages. You can fully customize any text displayed by the plugin in-game by modifying the language files, including item names, lore, GUI titles, and command messages.</p>
<h2 id="file-location" tabindex="-1"><a class="header-anchor" href="#file-location"><span>File Location</span></a></h2>
<p>Language files are located in the <code v-pre>/plugins/Avaritia_Plugin/language/</code> directory. Each <code v-pre>.yml</code> file represents a language, for example, <code v-pre>zh_cn.yml</code> is for Simplified Chinese, and <code v-pre>en_us.yml</code> is for American English.</p>
<h2 id="how-to-switch-languages" tabindex="-1"><a class="header-anchor" href="#how-to-switch-languages"><span>How to Switch Languages</span></a></h2>
<ul>
<li><strong>Global Default Language</strong>: In the <code v-pre>config.yml</code> file, set the server's default language using the <code v-pre>default_language</code> option.</li>
<li><strong>Player's Personal Language</strong>: Players can use the <code v-pre>/avaritia language &lt;language_file_name&gt;</code> command to switch the language they see without affecting other players.</li>
</ul>
<h2 id="file-format" tabindex="-1"><a class="header-anchor" href="#file-format"><span>File Format</span></a></h2>
<p>Language files use the standard YAML format, consisting of a series of <strong>keys</strong> and <strong>values</strong>.</p>
<div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-yaml"><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># Example: en_us.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  infinity_sword</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;c&#x26;lInfinity Sword"</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">    lore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7Damage +∞"</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;7A legendary weapon"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">command</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">  reload</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"&#x26;aAvaritia plugin configuration reloaded!"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>Key</strong>: A unique identifier, such as <code v-pre>items.infinity_sword.name</code>. The plugin code uses these keys to retrieve the corresponding text.</li>
<li><strong>Value</strong>: The actual text you want to be displayed in the game. You can use Minecraft color codes (e.g., <code v-pre>&amp;c</code>, <code v-pre>&amp;l</code>) to style the text.</li>
</ul>
<h2 id="creating-a-new-language-file" tabindex="-1"><a class="header-anchor" href="#creating-a-new-language-file"><span>Creating a New Language File</span></a></h2>
<ol>
<li>In the <code v-pre>language</code> folder, make a copy of an existing language file (e.g., <code v-pre>en_us.yml</code>).</li>
<li>Rename the file to your desired name, for example, <code v-pre>my_lang.yml</code>.</li>
<li>Open the new file and translate or modify the values to your desired text.</li>
<li>Set <code v-pre>default_language</code> to <code v-pre>my_lang</code> in <code v-pre>config.yml</code>, or have players use <code v-pre>/avaritia language my_lang</code> to switch.</li>
</ol>
</div></template>


