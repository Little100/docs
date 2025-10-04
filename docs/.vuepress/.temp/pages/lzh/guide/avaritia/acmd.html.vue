<template><div><h1 id="號令與權限" tabindex="-1"><a class="header-anchor" href="#號令與權限"><span>號令與權限</span></a></h1>
<p>此章詳解 Avaritia 插件之所有號令及相關權限。</p>
<h2 id="主令" tabindex="-1"><a class="header-anchor" href="#主令"><span>主令</span></a></h2>
<p>插件之主令為 <code v-pre>/avaritia</code>，亦有別名：</p>
<ul>
<li><code v-pre>/av</code></li>
<li><code v-pre>/avar</code></li>
</ul>
<p>凡子令，皆需附於主令之後，如：<code v-pre>/avaritia reload</code>。</p>
<h2 id="子令一覽" tabindex="-1"><a class="header-anchor" href="#子令一覽"><span>子令一覽</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">子令</th>
<th style="text-align:left">述</th>
<th style="text-align:left">所需權限</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>reload</code></td>
<td style="text-align:left">重載插件之所有策。</td>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>give</code></td>
<td style="text-align:left">予玩家無盡貪婪之物。</td>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>language</code></td>
<td style="text-align:left">易汝之插件語言。</td>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>version</code></td>
<td style="text-align:left">察插件之版本。</td>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>nbtdebug</code></td>
<td style="text-align:left">察手持之物之 NBT（以偵錯）。</td>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>gui</code></td>
<td style="text-align:left">啟、編或創新之 GUI。</td>
<td style="text-align:left"><code v-pre>avaritia.gui.*</code></td>
</tr>
</tbody>
</table>
<h2 id="權限" tabindex="-1"><a class="header-anchor" href="#權限"><span>權限</span></a></h2>
<p>此為所有可用之權限及其述：</p>
<table>
<thead>
<tr>
<th style="text-align:left">權限</th>
<th style="text-align:left">述</th>
<th style="text-align:left">常值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command</code></td>
<td style="text-align:left">允用基礎之 <code v-pre>/avaritia</code> 號令。</td>
<td style="text-align:left"><code v-pre>true</code> (眾玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
<td style="text-align:left">允用 <code v-pre>nbtdebug</code> 子令。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
<td style="text-align:left">允用 <code v-pre>language</code> 子令以易言。</td>
<td style="text-align:left"><code v-pre>true</code> (眾玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
<td style="text-align:left">允用 <code v-pre>version</code> 子令以察版本。</td>
<td style="text-align:left"><code v-pre>true</code> (眾玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
<td style="text-align:left">允用 <code v-pre>give</code> 子令以取物。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.use</code></td>
<td style="text-align:left">允用 <code v-pre>gui</code> 子令以啟 GUI。</td>
<td style="text-align:left"><code v-pre>true</code> (眾玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.edit</code></td>
<td style="text-align:left">允編 GUI。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.create</code></td>
<td style="text-align:left">允創新 GUI。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
<td style="text-align:left">允用 <code v-pre>reload</code> 子令以重載。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.*</code></td>
<td style="text-align:left">予所有 Avaritia 插件之權者權限。</td>
<td style="text-align:left"><code v-pre>op</code> (權者)</td>
</tr>
</tbody>
</table>
</div></template>


