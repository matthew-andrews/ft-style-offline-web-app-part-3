<?php
header("Content-Type: text/cache-manifest");

// Detect the app root (taken from api/resources/index.php)
$appRoot = trim(dirname($_SERVER['SCRIPT_NAME']), '/');
$appRoot = trim(preg_replace('/api\/resources$/i', '', $appRoot), '/');
$appRoot = '/' . ltrim($appRoot . '/', '/');
?>
CACHE MANIFEST
# 2012-10-29 v1
jquery.min.js

FALLBACK:
/api <?php echo $appRoot; ?>api/offline/
/ <?php echo $appRoot; ?>


NETWORK:
*