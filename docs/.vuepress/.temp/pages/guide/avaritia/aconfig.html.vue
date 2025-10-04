<template><div><h1 id="配置文件总览" tabindex="-1"><a class="header-anchor" href="#配置文件总览"><span>配置文件总览</span></a></h1>
<p>Avaritia 插件包含了多个配置文件，用于自定义插件的各个方面。所有配置文件都位于 <code v-pre>/plugins/Avaritia_Plugin/</code> 目录下。</p>
<h2 id="主要配置文件" tabindex="-1"><a class="header-anchor" href="#主要配置文件"><span>主要配置文件</span></a></h2>
<ul>
<li><strong><code v-pre>config.yml</code></strong>: <RouteLink to="/guide/avaritia/amainconfig.html">主配置文件</RouteLink>
<ul>
<li>这是插件的核心配置文件，包含了全局设置、方块行为、无尽工具特性等关键选项。</li>
</ul>
</li>
</ul>
<h2 id="合成相关文件" tabindex="-1"><a class="header-anchor" href="#合成相关文件"><span>合成相关文件</span></a></h2>
<ul>
<li>
<p><strong><code v-pre>recipe.yml</code></strong>: <RouteLink to="/guide/avaritia/arecipe.html#_1-%E5%8E%9F%E7%89%88%E5%B7%A5%E4%BD%9C%E5%8F%B0%E5%90%88%E6%88%90-recipe-yml">原版工作台合成</RouteLink></p>
<ul>
<li>定义了所有通过原版 2x2 或 3x3 工作台进行的合成配方。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>extreme_crafting_table.yml</code></strong>: <RouteLink to="/guide/avaritia/arecipe.html#_2-%E7%BB%88%E6%9E%81%E5%B7%A5%E4%BD%9C%E5%8F%B0%E5%90%88%E6%88%90-extreme_crafting_table-yml">终极工作台合成</RouteLink></p>
<ul>
<li>定义了所有在 9x9 终极工作台中进行的无序合成。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>neutron_collector.yml</code></strong>: <RouteLink to="/guide/avaritia/arecipe.html#_3-%E4%B8%AD%E5%AD%90%E6%80%81%E7%B4%A0%E6%94%B6%E9%9B%86%E5%99%A8-neutron_collector-yml">中子态素收集器</RouteLink></p>
<ul>
<li>配置中子态素收集器的生产速度和产物。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>neutronium_compressor.yml</code></strong>: <RouteLink to="/guide/avaritia/arecipe.html#_4-%E4%B8%AD%E5%AD%90%E6%80%81%E7%B4%A0%E5%8E%8B%E7%BC%A9%E6%9C%BA-neutronium_compressor-yml">中子态素压缩机</RouteLink></p>
<ul>
<li>配置用于生产奇点的材料、需求量等。</li>
</ul>
</li>
</ul>
<h2 id="其他配置文件" tabindex="-1"><a class="header-anchor" href="#其他配置文件"><span>其他配置文件</span></a></h2>
<ul>
<li>
<p><strong><code v-pre>language/</code> 文件夹</strong>: <RouteLink to="/guide/avaritia/alang.html">语言文件</RouteLink></p>
<ul>
<li>存放插件的语言文件，你可以通过修改或添加 .yml 文件来自定义插件内显示的文本。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>items/</code> 文件夹</strong>: <RouteLink to="/guide/avaritia/aci.html">物品配置</RouteLink></p>
<ul>
<li>用于定义插件中所有自定义物品的属性，例如名称、Lore、材质等。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>gui/</code> 文件夹</strong>: (暂未创建文档)</p>
<ul>
<li>用于配置插件的 GUI 界面。</li>
</ul>
</li>
</ul>
</div></template>


