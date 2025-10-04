<template><div><h1 id="op-物品配置" tabindex="-1"><a class="header-anchor" href="#op-物品配置"><span>OP 物品配置</span></a></h1>
<p>Avaritia 插件包含一些特殊的、仅供管理员 (OP) 使用的物品。这些物品通常用于服务器管理、活动或测试，不应通过正常游戏途径获得。</p>
<h2 id="获取方式" tabindex="-1"><a class="header-anchor" href="#获取方式"><span>获取方式</span></a></h2>
<p>所有 OP 物品都只能通过 <code v-pre>/avaritia give</code> 命令获取，并且需要 <code v-pre>avaritia.give</code> 权限（默认仅 OP 拥有）。</p>
<h2 id="物品列表" tabindex="-1"><a class="header-anchor" href="#物品列表"><span>物品列表</span></a></h2>
<p>这里可以列出你的 OP 物品。由于我没有 <code v-pre>op_items.yml</code> 的内容，这里暂时留空。</p>
<p><em>（请在此处添加您的 OP 物品信息）</em></p>
<h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3>
<h4 id="管理员之剑-admin-sword" tabindex="-1"><a class="header-anchor" href="#管理员之剑-admin-sword"><span>管理员之剑 (Admin_Sword)</span></a></h4>
<ul>
<li><strong>ID</strong>: <code v-pre>admin_sword</code></li>
<li><strong>描述</strong>: 一把可以秒杀任何生物的剑，用于快速清理实体。</li>
<li><strong>获取命令</strong>: <code v-pre>/avaritia give &lt;玩家&gt; admin_sword</code></li>
</ul>
<h4 id="创造者之星-creator-star" tabindex="-1"><a class="header-anchor" href="#创造者之星-creator-star"><span>创造者之星 (Creator_Star)</span></a></h4>
<ul>
<li><strong>ID</strong>: <code v-pre>creator_star</code></li>
<li><strong>描述</strong>: 一个用于触发特殊服务器事件的物品。</li>
<li><strong>获取命令</strong>: <code v-pre>/avaritia give &lt;玩家&gt; creator_star</code></li>
</ul>
</div></template>


