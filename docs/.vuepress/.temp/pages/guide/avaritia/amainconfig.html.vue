<template><div><h1 id="主配置文件-config-yml" tabindex="-1"><a class="header-anchor" href="#主配置文件-config-yml"><span>主配置文件 (<code v-pre>config.yml</code>)</span></a></h1>
<p>这是 Avaritia 插件的核心配置文件，你可以在这里调整插件的各项基本功能。</p>
<h2 id="全局设置" tabindex="-1"><a class="header-anchor" href="#全局设置"><span>全局设置</span></a></h2>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>说明</strong>: 是否开启插件的 Debug 模式。开启后，控制台会输出详细的调试信息，用于排查问题。</li>
</ul>
<h3 id="default-language" tabindex="-1"><a class="header-anchor" href="#default-language"><span><code v-pre>default_language</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>字符串</code></li>
<li><strong>默认值</strong>: <code v-pre>&quot;zh_cn&quot;</code></li>
<li><strong>说明</strong>: 设置插件默认使用的语言文件。</li>
</ul>
<h2 id="方块设置" tabindex="-1"><a class="header-anchor" href="#方块设置"><span>方块设置</span></a></h2>
<h3 id="allow-place-block" tabindex="-1"><a class="header-anchor" href="#allow-place-block"><span><code v-pre>allow_place_block</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>说明</strong>: 是否允许玩家放置压缩工作台、二重压缩工作台和水晶矩阵。
<ul>
<li><code v-pre>false</code>: 禁止放置这些方块。</li>
<li><code v-pre>true</code>: 允许放置，并会像终极工作台一样使用盔甲架来显示模型。</li>
</ul>
</li>
</ul>
<h3 id="compressor-protect" tabindex="-1"><a class="header-anchor" href="#compressor-protect"><span><code v-pre>compressor_protect</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>说明</strong>: 设置破坏中子态素压缩机时的掉落行为。
<ul>
<li><code v-pre>false</code>: 仅掉落压缩机本身，内部物品和进度会丢失（与原版模组行为一致）。</li>
<li><code v-pre>true</code>: 破坏时，会将内部正在处理的物品按进度转换为低阶材料掉落（例如，正在压缩的钻石块会掉落为钻石）。</li>
</ul>
</li>
</ul>
<h2 id="终极工作台-extreme-crafting-table" tabindex="-1"><a class="header-anchor" href="#终极工作台-extreme-crafting-table"><span>终极工作台 (<code v-pre>extreme_crafting_table</code>)</span></a></h2>
<h3 id="debug-1" tabindex="-1"><a class="header-anchor" href="#debug-1"><span><code v-pre>debug</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>说明</strong>: 终极工作台的合成 Debug 模式。
<ul>
<li><code v-pre>true</code>: 开启后，将无视合成配方，放入任意材料都能合成物品，主要用于快速测试。</li>
<li><code v-pre>false</code>: 正常检查合成配方。</li>
</ul>
</li>
</ul>
<h2 id="无尽工具-infinity-tools" tabindex="-1"><a class="header-anchor" href="#无尽工具-infinity-tools"><span>无尽工具 (<code v-pre>infinity_tools</code>)</span></a></h2>
<h3 id="hammer-break-bedrock" tabindex="-1"><a class="header-anchor" href="#hammer-break-bedrock"><span><code v-pre>hammer_break_bedrock</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>false</code></li>
<li><strong>说明</strong>: 设置世界崩解之镐的锤子模式是否能够破坏基岩。为了保护服务器，默认为关闭。</li>
</ul>
<h3 id="hammer-cmd" tabindex="-1"><a class="header-anchor" href="#hammer-cmd"><span><code v-pre>hammer_cmd</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>整数</code></li>
<li><strong>默认值</strong>: <code v-pre>101</code></li>
<li><strong>说明</strong>: 设置锤子模式物品的 CustomModelData (CMD) 值，用于资源包更换其材质。</li>
</ul>
<h3 id="skullfire-offhand-transfer" tabindex="-1"><a class="header-anchor" href="#skullfire-offhand-transfer"><span><code v-pre>skullfire_offhand_transfer</code></span></a></h3>
<ul>
<li><strong>类型</strong>: <code v-pre>布尔值 (true/false)</code></li>
<li><strong>默认值</strong>: <code v-pre>true</code></li>
<li><strong>说明</strong>: 设置副手持有骷髅剑时的效果。
<ul>
<li><code v-pre>true</code>: 当副手持有骷らなかった剑时，主手使用任何武器击杀凋灵骷髅都有 100% 的几率掉落头颅。</li>
<li><code v-pre>false</code>: 只有直接使用骷髅剑击杀时才会触发头颅掉落。</li>
</ul>
</li>
</ul>
</div></template>


