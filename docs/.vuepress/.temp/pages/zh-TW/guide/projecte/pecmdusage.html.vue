<template><div><h1 id="這裡是外掛的指令-這裡只介紹幾個有用的指令" tabindex="-1"><a class="header-anchor" href="#這裡是外掛的指令-這裡只介紹幾個有用的指令"><span>這裡是外掛的指令 這裡只介紹幾個有用的指令</span></a></h1>
<blockquote>
<p>我會分為op和非op兩種權限講解</p>
</blockquote>
<h2 id="首先是指令主體" tabindex="-1"><a class="header-anchor" href="#首先是指令主體"><span>首先是指令主體</span></a></h2>
<ul>
<li>有兩個指令可以供你使用</li>
<li>這兩個指令:
<ul>
<li><code v-pre>/pe</code></li>
<li><code v-pre>/projecte</code></li>
</ul>
</li>
</ul>
<h1 id="op指令" tabindex="-1"><a class="header-anchor" href="#op指令"><span>OP指令</span></a></h1>
<h2 id="reload" tabindex="-1"><a class="header-anchor" href="#reload"><span>reload</span></a></h2>
<ul>
<li>用於重啟外掛(會重新計算EMC值)</li>
</ul>
<h2 id="setemc" tabindex="-1"><a class="header-anchor" href="#setemc"><span>setemc</span></a></h2>
<ul>
<li>用於設定物品的EMC值(你手上的物品)</li>
<li>用法: <code v-pre>前指令 + setemc &lt;EMC值&gt;</code></li>
</ul>
<h2 id="noemcitem" tabindex="-1"><a class="header-anchor" href="#noemcitem"><span>noemcitem</span></a></h2>
<ul>
<li>用於檢視EMC為0的物品(即沒有EMC的物品)</li>
</ul>
<h2 id="pdcitem" tabindex="-1"><a class="header-anchor" href="#pdcitem"><span>pdcitem</span></a></h2>
<ul>
<li>用於檢視所有PDC物品的EMC</li>
</ul>
<h2 id="table" tabindex="-1"><a class="header-anchor" href="#table"><span>table</span></a></h2>
<ul>
<li>讓你轉換桌直接學會所有物品</li>
<li>用法: <code v-pre>前指令 + table learn</code></li>
</ul>
<h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang"><span>lang</span></a></h2>
<ul>
<li>用於切換語言</li>
<li>用法: <code v-pre>前指令 + lang &lt;語言檔案&gt;</code></li>
</ul>
<h1 id="非op指令" tabindex="-1"><a class="header-anchor" href="#非op指令"><span>非OP指令</span></a></h1>
<h2 id="pay" tabindex="-1"><a class="header-anchor" href="#pay"><span>pay</span></a></h2>
<ul>
<li>用於給玩家支付EMC</li>
<li>用法: <code v-pre>前指令 + pay &lt;玩家名&gt; &lt;EMC值&gt;</code></li>
</ul>
<h2 id="bag" tabindex="-1"><a class="header-anchor" href="#bag"><span>bag</span></a></h2>
<ul>
<li>用於檢視鍊金術袋子的列表</li>
<li>用法: <code v-pre>前指令 + bag + list</code></li>
</ul>
</div></template>


