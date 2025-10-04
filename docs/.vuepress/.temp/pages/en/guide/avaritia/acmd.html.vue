<template><div><h1 id="commands-and-permissions" tabindex="-1"><a class="header-anchor" href="#commands-and-permissions"><span>Commands and Permissions</span></a></h1>
<p>This document details all commands and related permission nodes for the Avaritia plugin.</p>
<h2 id="main-command" tabindex="-1"><a class="header-anchor" href="#main-command"><span>Main Command</span></a></h2>
<p>The main command for the plugin is <code v-pre>/avaritia</code>, which has the following aliases:</p>
<ul>
<li><code v-pre>/av</code></li>
<li><code v-pre>/avar</code></li>
</ul>
<p>All sub-commands must be entered after the main command, for example: <code v-pre>/avaritia reload</code>.</p>
<h2 id="sub-command-overview" tabindex="-1"><a class="header-anchor" href="#sub-command-overview"><span>Sub-command Overview</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Sub-command</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Permission</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>reload</code></td>
<td style="text-align:left">Reloads all plugin configuration files.</td>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>give</code></td>
<td style="text-align:left">Gives a player an item from the Avaritia plugin.</td>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>language</code></td>
<td style="text-align:left">Switches your plugin language.</td>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>version</code></td>
<td style="text-align:left">Checks the current version of the plugin.</td>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>nbtdebug</code></td>
<td style="text-align:left">Views the NBT data of the item in hand (for debugging).</td>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>gui</code></td>
<td style="text-align:left">Opens, edits, or creates a plugin GUI.</td>
<td style="text-align:left"><code v-pre>avaritia.gui.*</code></td>
</tr>
</tbody>
</table>
<h2 id="permission-nodes" tabindex="-1"><a class="header-anchor" href="#permission-nodes"><span>Permission Nodes</span></a></h2>
<p>Below are all available permission nodes and their descriptions:</p>
<table>
<thead>
<tr>
<th style="text-align:left">Permission Node</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Default</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command</code></td>
<td style="text-align:left">Allows use of the base <code v-pre>/avaritia</code> command.</td>
<td style="text-align:left"><code v-pre>true</code> (all players)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.nbtdebug</code></td>
<td style="text-align:left">Allows use of the <code v-pre>nbtdebug</code> sub-command.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.language</code></td>
<td style="text-align:left">Allows use of the <code v-pre>language</code> sub-command to switch languages.</td>
<td style="text-align:left"><code v-pre>true</code> (all players)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.command.version</code></td>
<td style="text-align:left">Allows use of the <code v-pre>version</code> sub-command to check the version.</td>
<td style="text-align:left"><code v-pre>true</code> (all players)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.give</code></td>
<td style="text-align:left">Allows use of the <code v-pre>give</code> sub-command to get items.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.use</code></td>
<td style="text-align:left">Allows use of the <code v-pre>gui</code> sub-command to open GUIs.</td>
<td style="text-align:left"><code v-pre>true</code> (all players)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.edit</code></td>
<td style="text-align:left">Allows editing of GUI interfaces.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.gui.create</code></td>
<td style="text-align:left">Allows creation of new GUI interfaces.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.reload</code></td>
<td style="text-align:left">Allows use of the <code v-pre>reload</code> sub-command to reload configs.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>avaritia.admin.*</code></td>
<td style="text-align:left">Grants all administrative permissions for the Avaritia plugin.</td>
<td style="text-align:left"><code v-pre>op</code> (operators)</td>
</tr>
</tbody>
</table>
</div></template>


