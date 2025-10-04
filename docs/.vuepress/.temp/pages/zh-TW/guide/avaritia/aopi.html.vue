<template><div><h1 id="op-物品設定" tabindex="-1"><a class="header-anchor" href="#op-物品設定"><span>OP 物品設定</span></a></h1>
<p>Avaritia 插件包含一些特殊的、僅供管理員 (OP) 使用的物品。這些物品通常用於伺服器管理、活動或測試，不應透過正常遊戲途徑獲得。</p>
<h2 id="獲取方式" tabindex="-1"><a class="header-anchor" href="#獲取方式"><span>獲取方式</span></a></h2>
<p>所有 OP 物品都只能透過 <code v-pre>/avaritia give</code> 指令獲取，並且需要 <code v-pre>avaritia.give</code> 權限（預設僅 OP 擁有）。</p>
<h2 id="物品列表" tabindex="-1"><a class="header-anchor" href="#物品列表"><span>物品列表</span></a></h2>
<p>這裡可以列出你的 OP 物品。由於我沒有 <code v-pre>op_items.yml</code> 的內容，這裡暫時留空。</p>
<p><em>（請在此處新增您的 OP 物品資訊）</em></p>
<h3 id="範例" tabindex="-1"><a class="header-anchor" href="#範例"><span>範例</span></a></h3>
<h4 id="管理員之劍-admin-sword" tabindex="-1"><a class="header-anchor" href="#管理員之劍-admin-sword"><span>管理員之劍 (Admin_Sword)</span></a></h4>
<ul>
<li><strong>ID</strong>: <code v-pre>admin_sword</code></li>
<li><strong>描述</strong>: 一把可以秒殺任何生物的劍，用於快速清理實體。</li>
<li><strong>獲取指令</strong>: <code v-pre>/avaritia give &lt;玩家&gt; admin_sword</code></li>
</ul>
<h4 id="創造者之星-creator-star" tabindex="-1"><a class="header-anchor" href="#創造者之星-creator-star"><span>創造者之星 (Creator_Star)</span></a></h4>
<ul>
<li><strong>ID</strong>: <code v-pre>creator_star</code></li>
<li><strong>描述</strong>: 一個用於觸發特殊伺服器事件的物品。</li>
<li><strong>獲取指令</strong>: <code v-pre>/avaritia give &lt;玩家&gt; creator_star</code></li>
</ul>
</div></template>


