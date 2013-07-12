<img src="<?php echo erLhcoreClassDesign::design('images/general/logo.png');?>" alt="Live Helper Chat" title="Live Helper Chat" />

<h1>Installation</h1>

<form action="<?php echo erLhcoreClassDesign::baseurl('install/install')?>/1" method="POST">

<div class="panel">
  <p>Grant write permissions to red marked folders. You can do this by changing username to apache username or CHMOD 777 displayed files/folders.</p>
</div>

<h2>Checking folders permission</h2>
<table>
    <tr>
        <td>I can write to &quot;cache/cacheconfig/settings.ini.php&quot; file</td>
        <td><?php echo is_writable("cache/cacheconfig/settings.ini.php") ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'?></td>
    </tr>
    <tr>
        <td>I can write to &quot;cache/translations&quot; directory</td>
        <td><?php echo is_writable("cache/translations") ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'?></td>
    </tr>
    <tr>
        <td>I can write to &quot;cache/userinfo&quot; directory</td>
        <td><?php echo is_writable("cache/userinfo") ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'?></td>
    </tr>
    <tr>
        <td>I can write to &quot;cache/compiledtemplates&quot; directory</td>
        <td><?php echo is_writable("cache/compiledtemplates") ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'?></td>
    </tr>
    <tr>
        <td>I can write to &quot;settings/settings.ini.php&quot; directory</td>
        <td><?php echo is_writable("settings/settings.ini.php") ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'?></td>
    </tr>
    <tr>
        <td>php-pdo extension installed</td>
        <td><?php echo extension_loaded ('pdo_mysql' ) ? '<span class="ok">Yes</span>' : '<span class="error">No</span>'; ?></td>
    </tr>
</table>
<br>

<input type="submit" class="small button" value="Next" name="Install">
<br /><br />

</form>