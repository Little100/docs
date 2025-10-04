<template><div><h1 id="指令與權限" tabindex="-1"><a class="header-anchor" href="#指令與權限"><span>指令與權限</span></a></h1>
<p>本文件詳細說明了 Avaritia 插件的所有指令和相關權限節點。</p>
<h2 id="主指令" tabindex="-1"><a class="header-anchor" href="#主指令"><span>主指令</span></a></h2>
<p>插件的主指令是 <code v-pre>/avaritia</code>，它有以下別名：</p>
<ul>
<li><code v-pre>/av</code></li>
<li><code v-pre>/avar</code></li>
</ul>
<p>所有子指令都必須在主指令後輸入，例如：<code v-pre>/avaritia reload</code>。</p>
<h2 id="子指令總覽" tabindex="-1"><a class="header-anchor" href="#子指令總覽"><span>子指令總覽</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">子指令</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">對應權限</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>reload</code></td>
<td style="text-align:left">重新載入插件的全部設定檔。</td>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>give</code></td>
<td style="text-align:left">給予玩家一個無盡貪婪插件的物品。</td>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>language</code></td>
<td style="text-align:left">切換你的插件語言。</td>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>version</code></td>
<td style="text-align:left">查看目前插件的版本資訊。</td>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>nbtdebug</code></td>
<td style="text-align:left">查看手持物品的 NBT 資料（用於偵錯）。</td>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>gui</code></td>
<td style="text-align:left">開啟、編輯或建立插件的 GUI 介面。</td>
<td style="text-align:left"><code v-pre>avaritia.gui.*</code></td>
</tr>
</tbody>
</table>
<h2 id="權限節點" tabindex="-1"><a class="header-anchor" href="#權限節點"><span>權限節點</span></a></h2>
<p>以下是所有可用的權限節點及其描述：</p>
<table>
<thead>
<tr>
<th style="text-align:left">權限節點</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">預設值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command</code></td>
<td style="text-align:left">允許使用基礎的 <code v-pre>/avaritia</code> 指令。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
<td style="text-align:left">允許使用 <code v-pre>nbtdebug</code> 子指令。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
<td style="text-align:left">允許使用 <code v-pre>language</code> 子指令切換語言。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
<td style="text-align:left">允許使用 <code v-pre>version</code> 子指令查看版本。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
<td style="text-align:left">允許使用 <code v-pre>give</code> 子指令獲取物品。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.use</code></td>
<td style="text-align:left">允許使用 <code v-pre>gui</code> 子指令開啟 GUI。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.edit</code></td>
<td style="text-align:left">允許編輯 GUI 介面。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.create</code></td>
<td style="text-align:left">允許建立新的 GUI 介面。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
<td style="text-align:left">允許使用 <code v-pre>reload</code> 子指令重載設定。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.*</code></td>
<td style="text-align:left">給予所有 Avaritia 插件的管理員權限。</td>
<td style="text-align:left"><code v-pre>op</code> (管理員)</td>
</tr>
</tbody>
</table>
</div></template>


