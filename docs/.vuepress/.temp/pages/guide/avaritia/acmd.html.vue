<template><div><h1 id="命令与权限" tabindex="-1"><a class="header-anchor" href="#命令与权限"><span>命令与权限</span></a></h1>
<p>本文档详细说明了 Avaritia 插件的所有命令和相关权限节点。</p>
<h2 id="主命令" tabindex="-1"><a class="header-anchor" href="#主命令"><span>主命令</span></a></h2>
<p>插件的主命令是 <code v-pre>/avaritia</code>，它有以下别名：</p>
<ul>
<li><code v-pre>/av</code></li>
<li><code v-pre>/avar</code></li>
</ul>
<p>所有子命令都必须在主命令后输入，例如：<code v-pre>/avaritia reload</code>。</p>
<h2 id="子命令概览" tabindex="-1"><a class="header-anchor" href="#子命令概览"><span>子命令概览</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">子命令</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">对应权限</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>reload</code></td>
<td style="text-align:left">重新加载插件的全部配置文件。</td>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>give</code></td>
<td style="text-align:left">给予玩家一个无尽贪婪插件的物品。</td>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>language</code></td>
<td style="text-align:left">切换你的插件语言。</td>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>version</code></td>
<td style="text-align:left">查看当前插件的版本信息。</td>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>nbtdebug</code></td>
<td style="text-align:left">查看手持物品的 NBT 数据（用于调试）。</td>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>gui</code></td>
<td style="text-align:left">打开、编辑或创建插件的 GUI 界面。</td>
<td style="text-align:left"><code v-pre>avaritia.gui.*</code></td>
</tr>
</tbody>
</table>
<h2 id="权限节点" tabindex="-1"><a class="header-anchor" href="#权限节点"><span>权限节点</span></a></h2>
<p>以下是所有可用的权限节点及其描述：</p>
<table>
<thead>
<tr>
<th style="text-align:left">权限节点</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command</code></td>
<td style="text-align:left">允许使用基础的 <code v-pre>/avaritia</code> 命令。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
<td style="text-align:left">允许使用 <code v-pre>nbtdebug</code> 子命令。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
<td style="text-align:left">允许使用 <code v-pre>language</code> 子命令切换语言。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
<td style="text-align:left">允许使用 <code v-pre>version</code> 子命令查看版本。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
<td style="text-align:left">允许使用 <code v-pre>give</code> 子命令获取物品。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.use</code></td>
<td style="text-align:left">允许使用 <code v-pre>gui</code> 子命令打开 GUI。</td>
<td style="text-align:left"><code v-pre>true</code> (所有玩家)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.edit</code></td>
<td style="text-align:left">允许编辑 GUI 界面。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.create</code></td>
<td style="text-align:left">允许创建新的 GUI 界面。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
<td style="text-align:left">允许使用 <code v-pre>reload</code> 子命令重载配置。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.*</code></td>
<td style="text-align:left">给予所有 Avaritia 插件的管理员权限。</td>
<td style="text-align:left"><code v-pre>op</code> (管理员)</td>
</tr>
</tbody>
</table>
</div></template>


