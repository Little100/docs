<template><div><h1 id="command-usage" tabindex="-1"><a class="header-anchor" href="#command-usage"><span>Command Usage</span></a></h1>
<p>This document provides detailed usage instructions and examples for all commands in the Avaritia plugin.</p>
<h2 id="avaritia-reload" tabindex="-1"><a class="header-anchor" href="#avaritia-reload"><span><code v-pre>/avaritia reload</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.admin.reload</code></li>
<li><strong>Function</strong>: Reloads all of the plugin's configuration files, including <code v-pre>config.yml</code>, <code v-pre>recipe.yml</code>, etc. Use this command after manually editing config files to apply changes immediately without restarting the server.</li>
<li><strong>Usage</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia reload</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-give-player-item-id-amount" tabindex="-1"><a class="header-anchor" href="#avaritia-give-player-item-id-amount"><span><code v-pre>/avaritia give &lt;player&gt; &lt;item_id&gt; [amount]</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.give</code></li>
<li><strong>Function</strong>: Gives a specified player one or more items from the Avaritia plugin.</li>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>&lt;player&gt;</code>: The name of the target player.</li>
<li><code v-pre>&lt;item_id&gt;</code>: The unique ID of the item to be given (defined in the item configuration files).</li>
<li><code v-pre>[amount]</code> (Optional): The number of items to give, defaults to 1.</li>
</ul>
</li>
<li><strong>Examples</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># Give player Little_100 one Infinity_Sword</span></span>
<span class="line"><span>/avaritia give Little_100 Infinity_Sword</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Give player Steve 64 Neutron_Nuggets</span></span>
<span class="line"><span>/avaritia give Steve Neutron_Nugget 64</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-language-language" tabindex="-1"><a class="header-anchor" href="#avaritia-language-language"><span><code v-pre>/avaritia language &lt;language&gt;</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.command.language</code></li>
<li><strong>Function</strong>: Switches the language of the plugin text you see in-game.</li>
<li><strong>Parameters</strong>:
<ul>
<li><code v-pre>&lt;language&gt;</code>: The name of the language file (e.g., <code v-pre>zh_cn</code>, <code v-pre>en_us</code>).</li>
</ul>
</li>
<li><strong>Example</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia language en_us</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-version" tabindex="-1"><a class="header-anchor" href="#avaritia-version"><span><code v-pre>/avaritia version</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.command.version</code></li>
<li><strong>Function</strong>: Checks the version information of the currently installed Avaritia plugin.</li>
<li><strong>Usage</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia version</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-nbtdebug" tabindex="-1"><a class="header-anchor" href="#avaritia-nbtdebug"><span><code v-pre>/avaritia nbtdebug</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.command.nbtdebug</code></li>
<li><strong>Function</strong>: Displays the NBT (Named Binary Tag) data of the item you are holding. This is a command primarily for debugging by developers and server owners.</li>
<li><strong>Usage</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span>/avaritia nbtdebug</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h2 id="avaritia-gui" tabindex="-1"><a class="header-anchor" href="#avaritia-gui"><span><code v-pre>/avaritia gui</code></span></a></h2>
<ul>
<li><strong>Permission</strong>: <code v-pre>avaritia.gui.use</code>, <code v-pre>avaritia.gui.edit</code>, <code v-pre>avaritia.gui.create</code></li>
<li><strong>Function</strong>: Interacts with the plugin's GUI system.</li>
<li><strong>Sub-commands</strong>:
<ul>
<li><code v-pre>/avaritia gui open &lt;gui_name&gt;</code>: Opens a specified GUI. (Requires <code v-pre>avaritia.gui.use</code>)</li>
<li><code v-pre>/avaritia gui edit &lt;gui_name&gt;</code>: Edits an existing GUI in-game. (Requires <code v-pre>avaritia.gui.edit</code>)</li>
<li><code v-pre>/avaritia gui create &lt;gui_name&gt;</code>: Creates a new GUI. (Requires <code v-pre>avaritia.gui.create</code>)</li>
</ul>
</li>
<li><strong>Example</strong>:<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code" v-pre=""><code class="language-"><span class="line"><span># Open a GUI named "main_menu"</span></span>
<span class="line"><span>/avaritia gui open main_menu</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</div></template>


